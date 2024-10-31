import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { View, StyleSheet } from 'react-native';
import { Avatar, Text, Drawer as PaperDrawer, useTheme } from 'react-native-paper';
import { useNavigation, router } from 'expo-router';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import React from 'react';

type AvatarLocation = "left" | "right";

export default function ChatBubble({ children, avatarLocation, icon }: { children: React.ReactNode, avatarLocation: AvatarLocation, icon: string }) {
    const order = [(
        <View style={styles.avatarContainer}>
            <Avatar.Icon 
                size={24}
                // source={require("../assets/avatar.webp")}
                icon={icon}
            />
        </View>
        
        ),
        (
            <View style={styles.textContainer}>
                <Text variant='titleSmall'>
                    {children}
                </Text>
            </View>
        )
    ]

    if (avatarLocation === "right") {
        order.reverse();
    }

    return (
        <View
            style={styles.bubbleContainer}
        >
            {order}
        </View>
    )
}

const styles = StyleSheet.create({
    bubbleContainer: {
        width: "100%",
        flexDirection: "row",
        gap: 6,
        alignItems: "flex-start",
        marginBottom: 14
    },
    textContainer: {
        backgroundColor: "#E4E9EB",
        borderRadius: 12,
        padding: 8,
        flex: 1
    },
    avatarContainer: {
        marginTop: 8
    }
});
