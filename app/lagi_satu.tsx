import { Text, View, Button } from "react-native";
import { Button as PaperButton } from "react-native-paper";
import { useNavigation } from "expo-router";
import { DrawerNavigationHelpers } from "@react-navigation/drawer/lib/typescript/src/types";

export default function Index() {
    const navigation: DrawerNavigationHelpers = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ marginBottom: 16 }}>Welcome to another screen</Text>
      <PaperButton 
        onPress={() => navigation.openDrawer() }
        mode="contained"
      >
        OWH YEA</PaperButton>
    </View>
  );
}
