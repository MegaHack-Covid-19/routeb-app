import React from "react";
import {
  View,
  ScrollView,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { Card } from "react-native-elements";
import logocolor from "../../../assets/images/logocolor.png";
import profile from "../../../assets/images/profile.jpg";
import checkIcon from "../../../assets/images/check-icon.png";
import buttonUpdate from "../../../assets/images/button-update.png";

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    paddingTop: 50
  },
  body: {
    flex: 1,
    alignItems: "flex-start",
    paddingTop: 30
  },
  logo: {
    width: 150,
    height: 30
  },
  profile: {
    height: 66,
    width: 66,
    alignSelf: "center",
    backgroundColor: "#5DBCD2",
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    paddingTop: 20,
    color: "gray",
    fontSize: 20,
    fontFamily: "Raleway_bold"
  },
  formTopic: {
    flex: 1,
    width: 300,
    paddingTop: 30
  },
  formTopicText: {
    fontFamily: "Raleway",
    fontSize: 15,
    color: "gray",
    textAlign: "left"
  },
  formTopicResponse: {
    fontFamily: "Raleway",
    fontSize: 13,
    color: "black",
    textAlign: "left",
    paddingTop: 10,
    paddingBottom: 20
  },
  business: {},
  businessView: {
    width: 300,
    paddingBottom: 23
  },
  businessText: {
    fontFamily: "Raleway",
    fontSize: 13,
    color: "black",
    textAlign: "left"
  },
  mainView: {
    backgroundColor: "#fff",
    height: "100%",
    width: "100%",
    borderRadius: 10,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flex: 1
  },
  button: {
    width: 300
  },
  buttonImage: {
    height: 30,
    width: 300,
    alignSelf: "center",
    backgroundColor: "#5DBCD2",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center"
  },
  updateButton: {
    width: 300,
    height: 60,
    paddingBottom: 15,
    paddingTop: 15,
    alignItems: "flex-end"
  }
});

const name = "Abner Ernâni dos Anjos";
const business = ["Desenvolvimento Web", "Java", "Python", "C++"];
const phone = "(12) 9 xxxx - xxxx";
const address = "Rua Felicidade, Bairro Satisfação";
const password = "xxxxxxxxxxxxxxxxxxx - xx";

function update() {}

const ListPage = (props) => {
  return (
    <View style={styles.mainView}>
      <View style={styles.header}>
        <Image style={styles.logo} source={logocolor} />
        <Text style={styles.title}>PERFIL</Text>
      </View>
      <View style={styles.body}>
        <ScrollView>
          <Image style={styles.profile} source={profile} />
          <View style={styles.formTopic}>
            <Text style={styles.formTopicText}>Nome</Text>
            <Text style={styles.formTopicResponse}>{name}</Text>
            <Text style={styles.formTopicText}>Tipo de negócio</Text>
            <View style={styles.businessView}>
              <Card style={styles.business}>
                {business.map((topic) => {
                  return (
                    <View>
                      <Image source={checkIcon} />
                      <Text style={styles.businessText}>{topic}</Text>
                    </View>
                  );
                })}
              </Card>
            </View>
            <Text style={styles.formTopicText}>Número de contato</Text>
            <Text style={styles.formTopicResponse}>{phone}</Text>
            <Text style={styles.formTopicText}>Endereço</Text>
            <Text style={styles.formTopicResponse}>{address}</Text>
            <Text style={styles.formTopicText}>Senha</Text>
            <Text style={styles.formTopicResponse}>{password}</Text>
          </View>
        </ScrollView>
      </View>
      <View style={styles.updateButton}>
        <TouchableOpacity onPress={update} style={styles.button}>
          <Image style={styles.buttonImage} source={buttonUpdate} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

ListPage.propTypes = {};

export default ListPage;
