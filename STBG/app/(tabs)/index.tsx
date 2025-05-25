import React, { useEffect, useState } from 'react'
import { ActivityIndicator, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import PostsList from '@/components/posts/PostsList'
import { Post } from '@/components/posts/types'
import { ThemedView } from '@/components/ThemedView'

export default function HomeScreen() {
  const [posts, setPosts] = useState<Post[]>([])  
  const [loading, setLoading] = useState(false)  
  const [error, setError] = useState('')       

  // Function to fetch posts from API
  const fetchPosts = async () => {
    setLoading(true)
    setError('')
    try {
      const API_URL = 'https://jsonplaceholder.typicode.com/posts'
      const response = await fetch(API_URL)
      if (!response.ok) {
        throw new Error(`Error! Status: ${response.status}`)
      }
      const data = await response.json()
      setPosts(data) 

    } catch {
      setError('Something went wrong')  

    } finally {
      setLoading(false) 
    }
  }

  // Fetch posts when component mounts
  useEffect(() => {
    fetchPosts()
  }, [])

  // Show loading indicator while fetching
  if (loading) {
    return (
      <View
        style={styles.centered}
        accessible={true}
        accessibilityRole='alert'
        accessibilityLabel='Loading posts. Please wait.'
      >
        <ActivityIndicator size='large' />
        <Text>Loading...</Text>
      </View>
    )
  }

  // Show error message if fetch failed
  if (error) {
    return (
      <View
        style={styles.centered}
        accessible={true}
        accessibilityRole='alert'
        accessibilityLabel='Error loading posts. Something went wrong.'
      >
        <Text style={{ color: 'red', fontSize: 16 }}>{error}</Text>
      </View>
    )
  }

  // Render the list of posts once loaded
  return (
    <SafeAreaView style={styles.container}>
      <ThemedView style={{ flex: 1 }}>
        <PostsList posts={posts} />
      </ThemedView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  centered: { 
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
