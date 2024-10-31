import { Text, View, Button } from "react-native";
import { useNavigation } from "expo-router";
import { DrawerNavigationHelpers } from "@react-navigation/drawer/lib/typescript/src/types";

import CommonHeader from "@/components/CommonHeader";
import CommonContainer from "@/components/CommonContainer";

export default function Index() {
  const navigation: DrawerNavigationHelpers = useNavigation();

  return (
    <CommonContainer
      // style={{
      //   flex: 1,
      //   justifyContent: "center",
      //   alignItems: "center",
      // }}
    >
      <CommonHeader />
      <Text style={{ marginBottom: 16 }}>Edit app/index.tsx to edit this screen.</Text>
      <Button onPress={() => navigation.openDrawer() } title="Yea" />
    </CommonContainer>
  );
}
