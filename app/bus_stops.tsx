import { Avatar, Button, Card, Text } from 'react-native-paper';
import { useRouter } from "expo-router";
import { StyleSheet, ScrollView } from "react-native";

import CommonHeader from "@/components/CommonHeader";
import CommonContainer from "@/components/CommonContainer";
import BusSmall from '@/components/BusSmall';

export default function BusStops() {
    interface LeftContentProps {
        size?: number;
        style?: object;
    }

    const LeftContent: React.FC<LeftContentProps> = (props) => <Avatar.Icon {...props} icon="bus-stop" />

    const router = useRouter()

    return (
        <CommonContainer>
            <CommonHeader />

            <Card mode="contained" style={{ marginBottom: 32 }}>
                <Card.Title title="KL913" subtitle="DIAMOND SQUARE" left={LeftContent} 
                    titleVariant='titleSmall' subtitleVariant='labelSmall' />
                <Card.Content>
                    <ScrollView horizontal={true} contentContainerStyle={styles.bussesContainer}>

                        <BusSmall plateNo="WPK 1234" distance="1.2km" />
                        <BusSmall plateNo="WPK 1234" distance="1.2km" />
                        <BusSmall plateNo="WPK 1234" distance="1.2km" />
                        <BusSmall plateNo="WPK 1234" distance="1.2km" />
                        
                    </ScrollView>
                </Card.Content>
            </Card>

            <Card mode="contained">
                <Card.Title title="KL894" subtitle="DIAMOND SQUARE (OPP)" left={LeftContent} 
                    titleVariant='titleSmall' subtitleVariant='labelSmall' />
                <Card.Content>
                    <ScrollView horizontal={true} contentContainerStyle={styles.bussesContainer}>

                        <BusSmall plateNo="WPK 1234" distance="1.2km" />
                        <BusSmall plateNo="WPK 1234" distance="1.2km" />
                        <BusSmall plateNo="WPK 1234" distance="1.2km" />
                        <BusSmall plateNo="WPK 1234" distance="1.2km" />
                        
                    </ScrollView>
                </Card.Content>
            </Card>

        </CommonContainer>
    );
}

const styles = StyleSheet.create({
    cardSource: {
        marginRight: 16, 
        marginLeft: 16, 
        marginBottom: 8
    },
    bussesContainer: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 14,
        // paddingTop: 8,
        // paddingBottom: 8
        padding: 8
    }
});