import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet, TextInput, Image } from "react-native";
import { Content, Button, Form, Item, Label, Input, Icon } from "native-base";

const styles = StyleSheet.create({
  subtitle_item: {
    fontSize: 10,
  },
  white: {
    color: "white",
  },
  black: {
    color: "black",
  },
});

const LoginPage = (props) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#2B53BE",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={Object.assign({ ...styles.subtitle_item }, { color: "white" })}
      >
        Bem vindos ao RouteB
      </Text>
      <Image
        source={require("../../../assets/images/logoblack.png")}
        style={{ width: 150, height: 30, marginTop: 10, marginBottom: 10 }}
      />
      <Text
        style={Object.assign({ ...styles.subtitle_item }, { color: "white" })}
      >
        Localize profissionais perto de você
      </Text>
      <View style={{ height: 20 }}></View>
      <View
        style={{
          backgroundColor: "#fff",
          height: 400,
          width: "80%",
          borderRadius: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: 20,
        }}
      >
        <Text style={{ fontSize: 30, fontFamily: "Raleway_bold" }}>OLÁ</Text>
        <Form style={{ width: "80%", flex: 1 }}>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input />
            <Icon name="mail" />
          </Item>
          <Item floatingLabel>
            <Label>Senha</Label>
            <Input />
            <Icon name="eye" />
          </Item>
          <Text
            style={{
              alignSelf: "flex-end",
              marginTop: 15,
              marginBottom: 15,
              textDecorationLine: "underline",
            }}
            onPress={() => props.navigation.navigate("LostPassword")}
          >
            Esqueceu sua senha?
          </Text>
          <Button
            style={{
              backgroundColor: "#000",
              display: "flex",
              justifyContent: "center",
              borderRadius: 100,
            }}
            onPress={() => props.navigation.navigate("Root")}
          >
            <Text style={{ color: "white" }}>ENTRAR</Text>
          </Button>
          <Text
            style={Object.assign(
              { ...styles.subtitle_item },
              { alignSelf: "center", marginTop: 20, marginBottom: 20 }
            )}
          >
            Se preferir, use as mídias sociais para acessar
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <Text>F</Text>
            <Text>T</Text>
            <Text>G</Text>
          </View>
        </Form>
      </View>
      <View style={{ height: 20 }} />
      <Text style={{ color: "white" }}>
        Ainda não tem conta?
        <Text style={{ textDecorationLine: "underline" }}> Cadastre-se</Text>
      </Text>
    </View>
  );
};

LoginPage.propTypes = {};

export default LoginPage;
