import { useLocalSearchParams } from 'expo-router';
import { View, Text, StyleSheet, useColorScheme, ScrollView } from 'react-native';

export default function PostDetailScreen() {
  const { id, title, body } = useLocalSearchParams();
  const colorScheme = useColorScheme();

  const isDark = colorScheme === 'dark';
  const backgroundColor = isDark ? '#121212' : '#f8f9fa';
  const textColor = isDark ? '#e0e0e0' : '#1a1a1a';
  const cardColor = isDark ? '#1e1e1e' : '#ffffff';

  return (
    <ScrollView style={[styles.screen, { backgroundColor }]}>
      <View style={[styles.card, { backgroundColor: cardColor }]}>
        <Text style={[styles.heading, { color: textColor }]}>Post #{id}</Text>
        <Text style={[styles.title, { color: textColor }]}>{title}</Text>
        <Text style={[styles.body, { color: textColor }]}>{body}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  card: {
    margin: 16,
    padding: 20,
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
