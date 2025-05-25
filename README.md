# STBG Technical Task

## Approach
- The app is built using TypeScript with React Native (Expo), ensuring strong type safety throughout the codebase for better developer experience and fewer runtime errors.

The application consists of two primary screens:
- A Home Screen, which displays a list of post titles.
- A Post Detail Screen, which shows full details for a selected post.

Posts are fetched from the JSONPlaceholder API and strongly typed using a custom Post interface: userId: number, id: number, title: string, body: string. This ensures that all components handling post data (like PostCard and the detail screen) receive and use data in a consistent, type-safe manner.

Users can tap on a post to navigate to a dedicated screen displaying detailed information about that post. This navigation is handled using Expo Router with a dynamic route based on the post's ID.

The application includes accessibility features designed to support visually impaired users, enabling them to access content and functionality through screen readers and other assistive technologies.

### FlatList Accessibility
- The accessibility role being "list": Tells the screen readers (VoiceOver on iOS, TalkBack on Android) that this component is a list. It helps assistive technologies understand the structure of the UI and announce it appropriately, enabling users to navigate between list items more easily.

- The accessibility label being "List of posts": Provides clear description of what the list contains. When the list gains focus or is announced by a screen reader, users hear “List of posts,” which sets the context.

### PostCard Accessibility
- I set the accessible attribute to "true" because the entire TouchableOpacity is treated as one unified accessibility element.

- The accessibility role being "button" explicitly sets the role of this component as a button, so VoiceOver and TalkBack will announce it as "Button". This helps users understand this is tappable and performs navigaton.

- The accessibility label being the title of the post describes the content of the post in a meaningful way.

- The accessibility hint: 'Navigates to full post content' adds a hint, which screen readers read after the label. This helps users understand what will happen if they activate this item.

### PostDetail Accessibility
- Similar to the PostCard, I set the accessible attribute to "true" because the entire TouchableOpacity is treated as one accessibility element

- The accessibility label contains a well-structured label summarizing all post information. This ensures screen readers announce the full content clearly when the ThemedView is focused.

### State Accessibility
- I’ve also implemented accessibility features for different post states, such as when posts are loading or fail to fetch. These states use the accessibility role "alert" along with clear, descriptive labels to inform screen reader users of the current status of the app.