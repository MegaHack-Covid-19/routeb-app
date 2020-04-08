import React from "react";
import PropTypes from "prop-types";
import { View, Text, Image, StyleSheet } from "react-native";
import { Icon } from "native-base";
import { LinearGradient } from "expo-linear-gradient";
const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 100,
      height: 1000,
    },
    shadowOpacity: 1,
    elevation: 6,
    display: "flex",
    padding: 20,
    borderRadius: 20,
  },
  container: {
    height: 100,

    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  thumbnail: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  itemData: {
    flexDirection: "column",
    marginLeft: 10,
    width: 150,
  },
  whiteText: { color: "white" },
  blackText: { color: "black" },
  title: { fontWeight: "bold" },
  subTitle: { fontSize: 11 },
});
const DEFAULT_COLORS = ["#fff", "#fff"];

const UserTile = (props) => {
  return (
    <LinearGradient
      colors={props.colorful ? ["#2B53BE", "#BC3B6E"] : DEFAULT_COLORS}
      start={[0, 0]}
      end={[1, 0]}
      style={[styles.container, styles.shadow, props.style]}
    >
      <View>
        <Image
          style={styles.thumbnail}
          source={{ uri: props.user.thumbnail }}
        />
      </View>
      <View style={styles.itemData}>
        <Text
          style={[styles.title, { color: props.colorful ? "white" : "black" }]}
        >
          {props.user.name}
        </Text>
        <Text style={{ color: props.colorful ? "white" : "black" }}>
          {props.user.role}
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 10,
          }}
        >
          <Text
            style={[
              styles.subTitle,
              { color: props.colorful ? "white" : "black" },
            ]}
          >
            <Icon
              color={"#000"}
              style={[
                styles.subTitle,
                { color: props.colorful ? "white" : "black" },
              ]}
              type="FontAwesome"
              name="map-marker"
            />
            {props.user.distance}m
          </Text>
          <View>
            <Text>
              {[...Array(parseInt(props.user.priceRate))].map((element, i) => (
                <Icon
                  key={i}
                  color={"#000"}
                  style={[
                    styles.subTitle,
                    { color: props.colorful ? "white" : "black" },
                  ]}
                  type="FontAwesome"
                  name="dollar"
                />
              ))}
            </Text>
          </View>
          <View>
            <Text
              style={[
                styles.subTitle,
                { color: props.colorful ? "white" : "black" },
              ]}
            >
              {props.user.rate}
            </Text>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};
UserTile.propTypes = {};

UserTile.defaultProps = {
  colorful: false,
  backgroundColor: "#B73B70",
};

export default UserTile;
