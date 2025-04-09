import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from './styles';
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import CustomButton from "../../components/CustomButton";

type RootStackParamList = {
  Sobre: undefined;
};

const HomeScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>

      <Image source={require("../../assets/images/logo.png")} style={styles.logo} />
      <Text style={styles.description}>
        Um ninho que acolhe, cuida, apoia e prepara jovens da rede pública para o trabalho.
      </Text>

      <CustomButton title="Seja um Uirapuru" onPress={() => console.log("Seja um Uirapuru - Click")} />
      <CustomButton title="Conheça" onPress={() => navigation.navigate("Sobre")} />
    </View>
  );
};

export default HomeScreen;