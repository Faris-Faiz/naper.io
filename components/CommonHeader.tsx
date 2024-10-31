import { View } from "react-native";
import { IconButton, Text, Divider } from "react-native-paper";
import { useRouter, useNavigation } from "expo-router";
import { useRoute } from '@react-navigation/native';
import { DrawerNavigationHelpers } from "@react-navigation/drawer/lib/typescript/src/types";

import { ViewStyle } from "react-native";

interface CommonHeaderProps {
    style?: ViewStyle;
}

export default function CommonHeader({ style }: CommonHeaderProps) {
    const router = useRouter();
    const route = useRoute();
    const navigation: DrawerNavigationHelpers = useNavigation();

    return (
        <>
            <View style={{ width: "100%", justifyContent: "space-between", flexDirection: "row", alignItems: "center" }}>
                { 
                    route.name !== 'index' ? 
                        <IconButton
                            icon="chevron-left"
                            size={32}
                            onPress={() => {
                                router.back();
                            }}
                        />
                    :
                        <IconButton
                            icon="menu"
                            size={32}
                            onPress={() => {
                                navigation.openDrawer();
                            }}
                        />
                }

                <Text variant="headlineSmall" style={{ marginRight: 64 }}>
                    naper.io
                </Text>
            </View>
            <Divider style={{ marginBottom: 16 }}/>
        </>
        
    );
}