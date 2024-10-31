import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { useState, useEffect } from "react";
import * as Location from "expo-location";
import { Text } from 'react-native-paper';
import { View } from 'react-native';


export default function ComMap({children}: {children?: any}) {
    const [location, setLocation] = useState<Location.LocationObject>({} as Location.LocationObject);
    const [errorMsg, setErrorMsg] = useState('');

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") {
                setErrorMsg("Permission to access location was denied");
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
            console.log(location);
        })();
    }, []);

    if (errorMsg) {
        return <Text>{errorMsg}</Text>
    }

    if (!location.coords) {
        return <Text>Loading...</Text>
    }

    return (
        <View style={{
            flex: 1,
            width: "100%",
            maxHeight: 300,
            borderRadius: 32,
            borderStyle: "solid",
            borderWidth: 0,
            padding: 64,
            backgroundColor: "gray",
        }}>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={{ flex: 1 }}
                initialRegion={{
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                <Marker
                    coordinate={{
                        latitude: location.coords.latitude,
                        longitude: location.coords.longitude,
                    }}
                    title="You are here"
                />
                {children}
            </MapView>
        </View>
        
    )
}