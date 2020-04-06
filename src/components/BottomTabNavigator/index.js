import React, { useState, useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import MainPage from "./../../screens/MainPage";
import ProfilePage from "./../../screens/ProfilePage";
import ListPage from "./../../screens/ListPage";
import FaqPage from "./../../screens/FaqPage";

import { Icon } from "native-base";

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = (props) => {
  const [title, setTitle] = useState(false);

  props.navigation.setOptions({ headerTitle: "test" });

  return (
    <BottomTab.Navigator initialRouteName="Main">
      <BottomTab.Screen
        name="Profile"
        component={ProfilePage}
        options={{
          title: "Perfil",
          tabBarIcon: ({ focused }) => (
            <Icon color={"#000"} type="FontAwesome" name="user" />
          ),
        }}
      />
      <BottomTab.Screen
        name="Main"
        component={MainPage}
        options={{
          title: "Mapa",
          tabBarIcon: ({ focused }) => (
            <Icon color={"#000"} type="FontAwesome" name="map-marker" />
          ),
        }}
      />
      <BottomTab.Screen
        name="List"
        component={ListPage}
        options={{
          title: "Lista",
          tabBarIcon: ({ focused }) => (
            <Icon color={"#000"} type="FontAwesome" name="list" />
          ),
        }}
      />
      <BottomTab.Screen
        name="Faq"
        component={FaqPage}
        options={{
          title: "Perguntas",
          tabBarIcon: ({ focused }) => (
            <Icon active={focused} type="FontAwesome" name="question-circle" />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
