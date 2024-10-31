// app/CustomDrawer.js
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { View, StyleSheet } from 'react-native';
import { Avatar, Text, Drawer as PaperDrawer, useTheme } from 'react-native-paper';
import { useNavigation, router } from 'expo-router';
import { DrawerContentComponentProps } from '@react-navigation/drawer';

import CustomDrawerItemList from './CustomDrawerItemList';
import { useAuth } from '@/components/AuthProvider';

export default function CustomDrawer(props: DrawerContentComponentProps) {
  const navigation = props.navigation;  // Access navigation

  const theme = useTheme();  // Use Paper theme
  const { data, logout } = useAuth();  // Use Auth context

  return (
    <DrawerContentScrollView {...props}>
      <View style={{ ...styles.drawerHeader, marginBottom: 16 }}>
        <Avatar.Icon size={64} icon="account" />
        <Text variant="titleMedium" style={{ marginTop: 8 }}>Hello, {data.username}</Text>
      </View>
 
      {/* <CustomDrawerItemList {...props} /> */}

      <PaperDrawer.Item
        label="Home"
        // icon="logout"
        onPress={() => {
          navigation.closeDrawer();
          router.push('/');          
        }} />

      <PaperDrawer.Item
        label="Chatbot"
        // icon="logout"
        onPress={() => {
          navigation.closeDrawer();
          router.push('/chat');          
        }} />
      
      <PaperDrawer.Item
        label="Map"
        // icon="logout"
        onPress={() => {
          navigation.closeDrawer();
          router.push('/peta');          
        }} />

      <PaperDrawer.Item
        label="Bus Stops"
        // icon="logout"
        onPress={() => {
          navigation.closeDrawer();
          router.push('/bus_stops');          
        }} />

      <PaperDrawer.Item
        label="Logout"
        // icon="logout"
        onPress={() => {
          navigation.closeDrawer();
          logout();
          router.replace('/(auth)/login');          
        }} />
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  drawerHeader: {
    padding: 16,
    alignItems: 'center',
  },
});
