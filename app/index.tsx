import { Text, View, ScrollView, StyleSheet } from "react-native";
import { useNavigation, Redirect } from "expo-router";
import { DrawerNavigationHelpers } from "@react-navigation/drawer/lib/typescript/src/types";
import { Card, Avatar, Button } from "react-native-paper";

import CommonHeader from "@/components/CommonHeader";
import CommonContainer from "@/components/CommonContainer";
import { useAuth } from "@/components/AuthProvider";
import BusSmall from "@/components/BusSmall";
import ComMap from "@/components/ComMap";

export default function Index() {
  interface LeftContentProps {
    size?: number;
    style?: object;
}

  const navigation: DrawerNavigationHelpers = useNavigation();
  const { token } = useAuth();

  console.log('token', token);
  const LeftContent: React.FC<LeftContentProps> = (props) => <Avatar.Icon {...props} icon="bus-stop" />

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

      <Button style={{
        alignSelf: 'flex-start',
        marginBottom: 16
      }} mode='contained-tonal' icon='star-circle-outline'>Edit Favorites</Button>

      <ComMap />

      {
        (token === '') && <Redirect href="/login" />
      }
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