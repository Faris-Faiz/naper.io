import { View, StyleSheet } from "react-native";
import { Icon, Card, Text } from "react-native-paper";

export default function BusSmall({ plateNo, distance }: { plateNo: string, distance: string }) {
    return (
        <Card>
            <Card.Content>
                <View style={styles.container}>
                    <Icon source="bus" size={24} />
                    <View>
                        <Text>{plateNo}</Text>
                        <Text variant="labelSmall">{distance}</Text>
                    </View>
                </View>
            </Card.Content>
        </Card>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 8,
    },
});