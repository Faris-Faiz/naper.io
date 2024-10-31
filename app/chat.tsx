import { View, TextInput, ScrollView } from "react-native";
import { Text, Button as PaperButton, useTheme, IconButton, Icon } from "react-native-paper";
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState, useRef, useEffect } from "react";
import ChatBubble from "@/components/ChatBubble";
import { useNavigation, useFocusEffect, router } from "expo-router";
import { NavigationProp } from '@react-navigation/native';
import { DrawerNavigationHelpers } from "@react-navigation/drawer/lib/typescript/src/types";

export default function Index() {
    const [messageCount, setMessageCount] = useState<number>(0);
    const navigation: NavigationProp<ReactNavigation.RootParamList> & DrawerNavigationHelpers = useNavigation();
    const [textInput, setTextInput] = useState<string>("");
    const [messages, setMessages] = useState<any[]>([]);
    const [isRobotTyping, setIsRobotTyping] = useState<boolean>(false);

    const scrollViewRef = useRef<ScrollView>(null);

    useEffect(() => {
        if (scrollViewRef.current) {
            scrollViewRef.current.scrollToEnd({ animated: true });
        }
    }, [messages]);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            setMessages([]); // Reset state when screen focuses
        });

        // Cleanup the listener when the component unmounts
        return unsubscribe;
    }, [navigation]);

    const onSend = () => {
        const message = {
            text: textInput.trim(),
            role: "user",
            id: messageCount
        }
    
        setMessages(prevMessages => [...prevMessages, message]);
        setMessageCount(prevCount => prevCount + 1);
    
        if (message.text === "Hello") {
            setIsRobotTyping(true);
            setTimeout(() => {
                setMessages(prevMessages => {
                    const newMessageCount = prevMessages.length;
                    return [...prevMessages, {
                        text: "Hello! How can I help you today?",
                        role: "assistant",
                        id: newMessageCount
                    }];
                });
                setMessageCount(prevCount => prevCount + 1);
                setIsRobotTyping(_ => false);
            }, 2600);
        }
        else if (message.text === "Where bus 202?") {
            setIsRobotTyping(true);
            setTimeout(() => {
                setMessages(prevMessages => {
                    const newMessageCount = prevMessages.length;
                    return [...prevMessages, {
                        text: "Bus 202 is at the bus stop near the library.",
                        role: "assistant",
                        id: newMessageCount
                    }];
                });
                setMessageCount(prevCount => prevCount + 1);
                setIsRobotTyping(_ => false);
            }, 2600);
        }
        else if (message.text === "How long until the next bus?") {
            setIsRobotTyping(true);
            setTimeout(() => {
                setMessages(prevMessages => {
                    const newMessageCount = prevMessages.length;
                    return [...prevMessages, {
                        text: "The next bus is in 5 minutes.",
                        role: "assistant",
                        id: newMessageCount
                    }];
                });
                setMessageCount(prevCount => prevCount + 1);
                setIsRobotTyping(_ => false);
            }, 2600);
        }
        else if (message.text === "Why is the bus not here yet?") {
            setIsRobotTyping(true);
            setTimeout(() => {
                setMessages(prevMessages => {
                    const newMessageCount = prevMessages.length;
                    return [...prevMessages, {
                        text: "Historically, the bus will come late around this time.",
                        role: "assistant",
                        id: newMessageCount
                    }];
                });
                setMessageCount(prevCount => prevCount + 1);
                setIsRobotTyping(_ => false);
            }, 2600);
        }
        else if (message.text === "ok tq") {
            setIsRobotTyping(true);
            setTimeout(() => {
                setMessages(prevMessages => {
                    const newMessageCount = prevMessages.length;
                    return [...prevMessages, {
                        text: "You're welcome! Have a nice day!",
                        role: "assistant",
                        id: newMessageCount
                    }];
                });
                setMessageCount(prevCount => prevCount + 1);
                setIsRobotTyping(_ => false);
            }, 2600);
        }
    
        setTextInput("");
        console.log("Send!");
    }
    
    useEffect(() => {
        console.log(messageCount);
        console.log(messages);
    }, [messageCount]);
    
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View
                style={{
                    flex: 1,
                    alignItems: "center",
                    paddingRight: 16,
                    paddingLeft: 16,
                    paddingTop: 16,
                    paddingBottom: 16
                }}
            >
                <View style={{ width: "100%" }}>
                    <IconButton
                        icon="chevron-left"
                        size={32}
                        onPress={() => {
                            router.back();
                        }}
                    />
                </View>
                <ScrollView style={{ flex: 1, marginBottom: 8, width: "100%" }} ref={scrollViewRef}>
                    {messages.length === 0 ? (
                        <View style={{ width: "100%", marginTop: 20, alignItems: "center", rowGap: 8 }}>
                            <View
                                style={{
                                    backgroundColor: "#E4E9EB",
                                    padding: 16,
                                    borderRadius: 128
                                }}
                            >
                                <Icon 
                                    source="robot"
                                    size={128}
                                />
                            </View>
                            
                            <Text variant="displaySmall">
                                Chatbot
                            </Text>
                        </View>
                    ) : (
                        messages.map((message, index) => {
                            let isRobot = message.role !== 'user';
                            return (
                                <ChatBubble
                                    key={message.id}
                                    avatarLocation={isRobot ? "left" : "right"}
                                    icon={isRobot ? "robot-excited" : "account"}
                                >
                                    {message.text}
                                </ChatBubble>
                            );
                        })
                    )}
                </ScrollView>
                <View style={{ 
                    flexDirection: "row",
                    
                    alignItems: "flex-end",
                    justifyContent: "flex-start",

                    // minHeight: 8, 
                    // backgroundColor: "red",
                    width: "100%",

                    gap: 6
                }}>
                    <View
                        style={{
                            flex: 1,
                        }}
                    >
                        <TextInput
                            multiline={true}
                            style={{
                                paddingTop: 8,
                                paddingBottom: 8,
                                paddingLeft: 16,
                                paddingRight: 16,
                                
                                borderRadius: 12,
                                backgroundColor: "#E4E9EB",    
                                maxHeight: 16*6
                            }}
                            value={textInput}

                            onChange={(event) => {
                                setTextInput(event.nativeEvent.text);
                            }}
                        />

                    </View>

                    <IconButton
                        icon="send"
                        mode="contained"

                        containerColor="#E4E9EB"
                        style={{
                            margin: 0
                        }}

                        onPress={onSend}

                        disabled={textInput.length === 0 || isRobotTyping}
                    />


                    
                </View>
                
            </View>
        </SafeAreaView>
    
    );
}
