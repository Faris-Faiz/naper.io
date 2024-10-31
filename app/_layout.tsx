// app/_layout.js
import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider as PaperProvider, MD3LightTheme } from 'react-native-paper';
import CustomDrawer from '@/components/navigation/CustomDrawer';
import { ConvexProvider, ConvexReactClient } from "convex/react";

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
  return (
    <PaperProvider theme={theme}>
      <ConvexProvider client={convex}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <Drawer
            screenOptions={{ headerShown: false }}
            drawerContent={(props) => <CustomDrawer {...props} />}
          />
        </GestureHandlerRootView>
      </ConvexProvider>
    </PaperProvider>
  );
}
