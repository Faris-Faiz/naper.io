// app/_layout.js
import { useState, useEffect } from 'react';
import { Drawer } from 'expo-router/drawer';
import { Stack } from 'expo-router/stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider as PaperProvider, MD3LightTheme } from 'react-native-paper';
import CustomDrawer from '@/components/navigation/CustomDrawer';
import { ConvexProvider, ConvexReactClient } from "convex/react";
import AuthProvider, { useAuth } from '@/components/AuthProvider';

const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL!, {
  unsavedChangesWarning: false,
});

// Optional: Customize the Material 3 theme
const theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    //primary: '#6200EE',  // Adjust your primary color
  },
};

export default function Layout() {
  const [authState, setAuthState] = useState({
    isLoggedIn: false,
    jwt: undefined
  });


  const { token } = useAuth();

  return (
    <PaperProvider theme={theme}>
      <ConvexProvider client={convex}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <AuthProvider>
            <Navers />
          </AuthProvider>
        </GestureHandlerRootView>
      </ConvexProvider>
    </PaperProvider>
  );
}

function Navers() {
  const { token } = useAuth();
  return token !== '' ? (
    <Drawer
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    />
  ) : (
    <Stack>
      <Stack.Screen name="(auth)/login" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)/signup" 
        options={{
          title: 'Sign Up', 
        }} 
      />
      <Stack.Screen name="(auth)/forgot-password" 
        options={{
          title: 'Forgot Password',
        }} 
      />
    </Stack>
  );
}