import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from './styles';
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  MelhorAprendiz: undefined;
  InCompany: undefined;
  AgoraVai: undefined;
  PTE: undefined;
};

const Programs = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Programas</Text>

      <Image source={require("../../assets/images/programas.png")} style={styles.image} />

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("MelhorAprendiz")}>
        <Text style={styles.buttonText}>MELHOR APRENDIZ</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("InCompany")}>
        <Text style={styles.buttonText}>IN-COMPANY</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("AgoraVai")}>
        <Text style={styles.buttonText}>AGORA VAI!</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("PTE")}>
        <Text style={styles.buttonText}>PTE</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Programs;
