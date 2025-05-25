import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useLocalSearchParams } from 'expo-router';
import { StyleSheet } from 'react-native';

export default function PostDetailScreen() {
  // Extract post data from the route parameters
  const { id, title, body } = useLocalSearchParams()

  return (
    <ThemedView 
      style={styles.card} 
      accessible={true}
      // Provide descriptive label for screen readers summarizing post details
      accessibilityLabel={`Details for post number ${id}, titled ${title}. Body: ${body}`}
      accessibilityRole='summary'
    >
      <ThemedText style={styles.heading} accessibilityRole='header'>
        Post #{id}
      </ThemedText>

      <ThemedText style={styles.title}>
        {title}
      </ThemedText>

      <ThemedText style={styles.body}>
        {body}
      </ThemedText>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  card: {
    margin: 16,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.1, 
    shadowRadius: 4,
  },
  heading: {
    fontSize: 13,
    opacity: 0.6,
    marginBottom: 8,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 12,
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
  },
});
