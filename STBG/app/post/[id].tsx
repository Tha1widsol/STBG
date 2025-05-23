import { useLocalSearchParams } from 'expo-router';
import { View, Text, StyleSheet, useColorScheme } from 'react-native';

export default function PostDetailScreen() {
  const { id, title, body } = useLocalSearchParams();
  const colorScheme = useColorScheme();

  const backgroundColor = colorScheme === 'dark' ? '#121212' : '#f0f0f0';
  const textColor = colorScheme === 'dark' ? '#ddd' : '#222';

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={[styles.heading, { color: textColor }]}>Post #{id}</Text>
      <Text style={[styles.title, { color: textColor }]}>{title}</Text>
      <Text style={[styles.body, { color: textColor }]}>{body}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,       // make view fill whole screen
    padding: 24,
  },
  heading: {
    fontSize: 14,
    marginBottom: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
  },
});
