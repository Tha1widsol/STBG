import React from 'react'
import { FlatList, View, StyleSheet } from 'react-native'
import PostCard from '@/components/posts/PostCard'
import { Post } from '@/components/posts/types'
import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'

type PostsListProps = {
  posts: Post[]
}

export default function PostsList({ posts }: PostsListProps) {
  return (
    <ThemedView style={styles.listContainer}>
      <FlatList
        data={posts}
        accessibilityRole='list'
        accessibilityLabel='List of posts'
        renderItem={({ item }) => <PostCard post={item} />}
        ListHeaderComponent={
          <ThemedView style={styles.titleContainer}>
            <ThemedText type='title'>Posts</ThemedText>
          </ThemedView>
        }
        keyExtractor={item => String(item.id)}
        contentContainerStyle={styles.flatListContent}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={styles.divider} />}
        ListFooterComponent={<View style={{ height: 16 }} />}
      />
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  listContainer: {
    paddingBottom: 16,
  },
  divider: {
    height: 1,
    backgroundColor: '#e0e0e0',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 8,
  },
  flatListContent: {
    paddingHorizontal: 12,
  },
})
