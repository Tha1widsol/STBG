import { Image } from 'expo-image';
import { FlatList, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default function HomeScreen() {
  const [posts, setPosts] = useState<Post[]>([]);

  const fetchPosts = async () => {
    const API_URL = 'https://jsonplaceholder.typicode.com/posts';
    try {
      const response = await fetch(API_URL);
      if (!response.ok) console.log('Error with response');
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.log('Error: ', error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const PostCard = ({ post }: { post: Post }) => {
    const router = useRouter()
    
    return  (
    <TouchableOpacity onPress={() => router.push({pathname: `/post/[id]`, params: {id: post.id, title: post.title, body: post.body}})} style={styles.postCard}>
      <Text style={styles.postTitle}>{post.title}</Text>
    </TouchableOpacity>
    );
  }
 

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Latest Posts</ThemedText>
      </ThemedView>
      <ThemedView style={styles.listContainer}>
        <FlatList
          data={posts}
          renderItem={({ item }) => <PostCard post={item} />}
          keyExtractor={item => String(item.id)}
          contentContainerStyle={styles.flatListContent}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
        />
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 8,
  },
  listContainer: {
    paddingBottom: 16,
  },
  flatListContent: {
    paddingHorizontal: 12,
  },
  reactLogo: {
    height: 178,
    width: 290,
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  postCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: Platform.OS === 'android' ? 4 : 0,
  },
  postId: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
  postTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 6,
  },
  postBody: {
    fontSize: 14,
    color: '#444',
    lineHeight: 20,
  },
});
