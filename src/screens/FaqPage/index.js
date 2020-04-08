import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontFamily: "Raleway_bold",
    color: "blue",
    paddingTop: 50
  },
  subtitle: {
    fontSize: 25,
    fontFamily: "Raleway_bold",
    textAlign: "center",
    padding: 20
  },
  topic: {
    fontSize: 25,
    fontFamily: "Raleway_bold",
    padding: 15
  },
  subtitle1: {
    fontSize: 15,
    fontFamily: "Raleway_bold",
    paddingBottom: 10,
    paddingTop: 10,
    textAlign: "left"
  },
  textSample: {
    fontSize: 15,
    fontFamily: "Raleway",
    textAlign: "center",
    padding: 15
  },
  mainView: {
    backgroundColor: "#fff",
    height: "100%",
    width: "100%",
    borderRadius: 10,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 15,
    flex: 1
  },
  aboutView: {
    flex: 2,
    borderRadius: 10,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 15
  },
  link: {
    color: "blue",
    paddingLeft: 5,
    textDecorationLine: "underline"
  },
  questionView: {
    flex: 3
  }
});

const FaqPage = (props) => {
  return (
    <View style={styles.mainView}>
      <Text style={styles.title}>Suporte</Text>
      <View style={styles.aboutView}>
        <Text style={styles.subtitle}>Dúvidas Frequentes:</Text>
        <View style={{ height: 400 }}>
          <ScrollView style={styles.questionView}>
            <Text style={styles.textSample}>
              <View>
                <Text style={styles.subtitle1}>1. O que a RouteB faz?</Text>
                <Text style={{ textAlign: "left" }}>
                  Por meio de geolocalização, a plataforma contém dados de
                  empreendedores que possuem produtos e serviços em determinada
                  região, aproximando-os para futuros negócios.
                </Text>
              </View>
              <View>
                <Text style={styles.subtitle1}>
                  2. O cadastro na RouteB possui algum custo?
                </Text>
                <Text style={{ textAlign: "left" }}>
                  Sim. A plataforma trabalha com a assinatura de planos “basic”
                  e “premium”.
                </Text>
              </View>
              <View>
                <Text style={styles.subtitle1}>
                  3. Quais tipos de negócios são aceitos na plataforma?
                </Text>
                <Text style={{ textAlign: "left" }}>
                  A plataforma trabalha com pequenos empreendedores e startups
                  que ofereçam os mais diversos produtos e serviços, tais como:
                  costureiras, marceneiros, pintores, eletricistas, manicures,
                  etc.
                </Text>
              </View>
              <View>
                <Text style={styles.subtitle1}>
                  4. Quais os benefícios de usar a RouteB?
                </Text>
                <Text style={{ textAlign: "left" }}>
                  A plataforma possibilita a interação dos empreendedores
                  localizados em regiões próximas para futuras oportunidades, o
                  que traz otimização de tempo, praticidade e maior interação
                  para fechamentos de negócios.
                </Text>
              </View>
              <View>
                <Text style={styles.subtitle1}>
                  5. A RouteB faz intermediação do fechamento de negócios entre
                  empreendedores locais?
                </Text>
                <Text style={{ textAlign: "left" }}>
                  Não. A plataforma somente exibe, de uma forma ágil e
                  descomplicada, oportunidades de negócios para os usuários, sem
                  intermediar e tampouco se responsabilizar pelo insucesso do
                  negócio efetivado.
                </Text>
              </View>
            </Text>
          </ScrollView>
        </View>
      </View>
      <View style={{ alignItems: "flex-end" }}>
        <View style={styles.aboutView}>
          <Text style={styles.subtitle}>Fale Conosco:</Text>
          <Text style={styles.textSample}>
            Permanecendo alguma dúvida adicional, não hesite em nos contatar por
            meio do e-mail
            <Text style={styles.link}>suporte@routeb.com</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

FaqPage.propTypes = {};

export default FaqPage;
