import { Tabs } from 'expo-router';
import { Terminal, User } from 'lucide-react-native';
import { Platform } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#012456',
          borderTopWidth: 0,
          ...(Platform.OS === 'web' ? {
            height: 50,
            paddingBottom: 0
          } : {})
        },
        tabBarActiveTintColor: '#FFFFFF',
        tabBarInactiveTintColor: '#666666',
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Terminal',
          tabBarIcon: ({ size, color }) => (
            <Terminal size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'About',
          tabBarIcon: ({ size, color }) => (
            <User size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}