import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Post } from './types';
import { useRouter } from 'expo-router';

const PostCard = ({ post }: { post: Post }) => {
    const router = useRouter()

    // Render a clickable card for each post
    return  (
        <TouchableOpacity
            accessible={true}
            accessibilityLabel={`Post titled ${post.title}`}
            accessibilityHint='Navigates to full post content'
            accessibilityRole='button'
            onPress={() =>
                router.push({
                pathname: `/post/[id]`,
                params: { id: post.id, title: post.title, body: post.body },
                })
            }
            style={styles.postCard}
            >
            <Text style={styles.postTitle}>{post.id}. {post.title}</Text>
        </TouchableOpacity>
    );
}

export default PostCard

const styles = StyleSheet.create({
  postCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderStyle: 'solid',
  },
  postId: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
  postTitle: {
    fontSize: 16,
    marginBottom: 6,
  },
  postBody: {
    fontSize: 14,
    color: '#444',
    lineHeight: 20,
  },
});