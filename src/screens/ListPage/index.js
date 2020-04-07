import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { View, Text, FlatList, SafeAreaView, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { Item, Input } from "native-base";

import UserTile from "./../../components/UserTile";
const users = [
  {
    id: 1,
    name: "Willys",
    thumbnail: "https://reactnative.dev/img/tiny_logo.png",
    role: "Contador",
    distance: 100,
    rate: 4.5,
    priceRate: 2,
    coords: {
      latitude: -3.08515665,
      longitude: -59.97483462,
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
      latitude: -3.08505665,
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
      latitude: -3.08525665,
      longitude: -59.97483462,
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
      latitude: -3.08505615,
      longitude: -59.97483462,
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
      latitude: -3.08542615,
      longitude: -59.97483462,
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
      latitude: -3.08512615,
      longitude: -59.97483462,
      latitudeDelta: 0.001,
      longitudeDelta: 0.001,
    },
  },
];

const styles = StyleSheet.create({
  inputItem: { backgroundColor: "white" },
  input: { fontSize: 11 },
});
const ListPage = (props) => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(users);

  const searchUsers = (value) => {
    setFilteredUsers(users.filter((user) => user.name.search(value) > -1));
  };
  useEffect(() => {
    searchUsers(searchInput);
  }, [searchInput]);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#2B53BE",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: Constants.statusBarHeight + 50,
      }}
    >
      <View style={{ width: "80%" }}>
        <View>
          <Item rounded style={styles.inputItem}>
            <Input
              style={styles.input}
              placeholder="Que Profissional Você está procurando?"
              onChangeText={(value) => setSearchInput(value)}
              value={searchInput}
            />
          </Item>
        </View>

        <FlatList
          data={filteredUsers}
          keyExtractor={(user) => user.id.toString()}
          style={{
            justifyItems: "center",
            marginBottom: 20,
          }}
          renderItem={({ item }) => (
            <UserTile
              user={item}
              style={{
                marginVertical: 20,
                width: "100%",
              }}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

ListPage.propTypes = {};

export default ListPage;
