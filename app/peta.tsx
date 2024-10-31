import { Text, View } from "react-native";
import { Button as PaperButton } from "react-native-paper";
import { router } from "expo-router";
import { SafeAreaView } from 'react-native-safe-area-context';

import ComMap from "@/components/ComMap";

export default function Index() {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
      style={{
        flex: 1,
        alignItems: "center",
        paddingRight: 16,
        paddingLeft: 16,
        paddingTop: 16
      }}
    >
      <Text>Map</Text>
      <ComMap />
      <PaperButton
        onPress={() => {
          router.back();
        }}
      >
        Back
      </PaperButton>
    </View>
    </SafeAreaView>
    
  );
}
