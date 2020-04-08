import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet } from "react-native";
import MapView from "react-native-maps";

import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import userMarkerIcon from "./../../../assets/images/icon_location.png";
import UserTile from "./../../components/UserTile";

const users = [
  {
    id: 1,
    name: "Willys",
    thumbnail: "https://reactnative.dev/img/tiny_logo.png",
    role: "Contador",
    distance: 100,
    rate: 3,
    priceRate: 5,
    coords: {
      latitude: -3.08561196,
      longitude: -59.97425258,
      latitudeDelta: 0.001,
      longitudeDelta: 0.001,
    },
  },
  {
    id: 2,
    name: "Emily",
    thumbnail: "https://reactnative.dev/img/tiny_logo.png",
    role: "Contador",
    distance: 100,
    rate: 4.5,
    priceRate: 2,
    coords: {
      latitude: -3.08556911,
      longitude: -59.97483462,
      latitudeDelta: 0.001,
      longitudeDelta: 0.001,
    },
  },
  {
    id: 3,
    name: "Douglas",
    thumbnail: "https://reactnative.dev/img/tiny_logo.png",
    role: "Contador",
    distance: 100,
    rate: 4.5,
    priceRate: 2,
    coords: {
      latitude: -3.08615834,
      longitude: -59.97231066,
      latitudeDelta: 0.001,
      longitudeDelta: 0.001,
    },
  },
  {
    id: 4,
    name: "Viviane",
    thumbnail: "https://reactnative.dev/img/tiny_logo.png",
    role: "Contador",
    distance: 100,
    rate: 4.5,
    priceRate: 2,
    coords: {
      latitude: -3.08724574,
      longitude: -59.97293562,
      latitudeDelta: 0.001,
      longitudeDelta: 0.001,
    },
  },
  {
    id: 5,
    name: "Amanda",
    thumbnail: "https://reactnative.dev/img/tiny_logo.png",
    roles: ["contador", ""],
    distance: 100,
    rate: 4.5,
    priceRate: 2,
    coords: {
      latitude: -3.08787782,
      longitude: -59.97319311,
      latitudeDelta: 0.001,
      longitudeDelta: 0.001,
    },
  },
  {
    id: 6,
    name: "Abner",
    thumbnail: "https://reactnative.dev/img/tiny_logo.png",
    role: "Contador",
    distance: 100,
    rate: 4.5,
    priceRate: 2,
    coords: {
      latitude: -3.08683328,
      longitude: -59.97376174,
      latitudeDelta: 0.001,
      longitudeDelta: 0.001,
    },
  },
];

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

const MainPage = (props) => {
  const [latLng, setLatLng] = useState(null);
  const [nearUsers, setNearUsers] = useState(users);
  const [errorMessage, setErrorMessage] = useState("");

  let getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      setErrorMessage(
        "Permissão de localização é necessária para o funcionamento da aplicação"
      );
    }
    let location = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.Highest,
    });
    const coords = location.coords;
    setLatLng(coords);
  };

  useEffect(() => {
    getLocationAsync();
  }, []);

  return (
    <View style={styles.map}>
      <MapView
        showsUserLocation={true}
        showsMyLocationButton={true}
        style={{ height: "100%" }}
        initialRegion={
          latLng && {
            latitude: latLng.latitude,
            longitude: latLng.longitude,
            latitudeDelta: 0.001,
            longitudeDelta: 0.001,
          }
        }
      >
        {latLng && (
          <MapView.Marker
            image={userMarkerIcon}
            coordinate={{
              latitude: latLng.latitude,
              longitude: latLng.longitude,
            }}
          />
        )}
        {nearUsers.map((nearUser, i) => (
          <MapView.Marker
            key={nearUser.id}
            coordinate={{
              latitude: nearUser.coords.latitude,
              longitude: nearUser.coords.longitude,
            }}
          >
            <MapView.Callout tooltip>
              <UserTile colorful user={nearUser} />
            </MapView.Callout>
          </MapView.Marker>
        ))}
      </MapView>
      <Text>1</Text>
    </View>
  );
};

MainPage.propTypes = {};

export default MainPage;
