import { View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

import { ReactNode } from 'react';

export default function CommonContainer({ children }: { children: ReactNode }) {

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, padding: 16 }}>

                {children}

            </View>
        </SafeAreaView>
    );
}