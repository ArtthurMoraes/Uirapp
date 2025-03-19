import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import CustomButton from "../components/CustomButton";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.logo} />
      <Text style={styles.description}>
        Um ninho que acolhe, cuida, apoia e prepara jovens da rede pública para o trabalho.
      </Text>
      <CustomButton title="Cadastre-se" onPress={() => console.log("Cadastre-se Pressionado")} />
      <CustomButton title="Conheça" onPress={() => console.log("Conheça Pressionado")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0a2472",
    padding: 20,
  },
  logo: {
    width: 190,
    height: 80,
    marginBottom: 20,
  },
  description: {
    color: "#fff",
    fontSize: 16,
    fontStyle: "italic",
    textAlign: "center",
    marginBottom: 20,
  },
});

export default HomeScreen;
