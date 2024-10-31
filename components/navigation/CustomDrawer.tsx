// app/CustomDrawer.js
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { View, StyleSheet } from 'react-native';
import { Avatar, Text, Drawer as PaperDrawer, useTheme } from 'react-native-paper';
import { useNavigation, router } from 'expo-router';
import { DrawerContentComponentProps } from '@react-navigation/drawer';

import CustomDrawerItemList from './CustomDrawerItemList';

export default function CustomDrawer(props: DrawerContentComponentProps) {
  const navigation = props.navigation;  // Access navigation

  const theme = useTheme();  // Use Paper theme

  return (
    <DrawerContentScrollView {...props}>
      <View style={{ ...styles.drawerHeader, marginBottom: 16 }}>
        <Avatar.Icon size={64} icon="account" />
        <Text variant="titleMedium" style={{ marginTop: 8 }}>Hello, User</Text>
      </View>
 
      <CustomDrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  drawerHeader: {
    padding: 16,
    alignItems: 'center',
  },
});
