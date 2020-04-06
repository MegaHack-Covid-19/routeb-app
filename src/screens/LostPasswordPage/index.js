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

const LostPasswordPage = (props) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#BC3B6E",
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
        <Text style={{ fontSize: 30, fontFamily: "Raleway_bold" }}>
          Ah Não!
        </Text>
        <Form style={{ width: "80%", flex: 1 }}>
          <Text style={{ alignSelf: "center" }}>
            Digite seu e-mail para definir uma nova senha
          </Text>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input />
            <Icon name="mail" />
          </Item>
          <View style={{ height: 10 }} />
          <Button
            style={{
              backgroundColor: "#000",
              display: "flex",
              justifyContent: "center",
              borderRadius: 100,
            }}
          >
            <Text style={{ color: "white" }}>ENVIAR</Text>
          </Button>
          <View style={{ height: 10 }} />
          <Button
            style={{
              backgroundColor: "#fff",
              display: "flex",
              justifyContent: "center",
              borderRadius: 100,
            }}
          >
            <Text onPress={() => props.navigation.goBack()}>VOLTAR</Text>
          </Button>
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

LostPasswordPage.propTypes = {};

export default LostPasswordPage;
