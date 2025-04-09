import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from './styles';

const AgoraVai = () => {
  return (
    <View style={styles.container}>

      {/* Ícone do pássaro no canto superior direito */}
      <Image source={require("../../assets/images/logoDir.png")} style={styles.topRightIcon} />

      {/* Título */}
      <Text style={styles.title}>AGORA VAI!</Text>

      {/* Imagem "bird" */}
      <Image source={require("../../assets/images/bird.png")} style={styles.image} />

      {/* Descrição */}
      <Text style={styles.description}>
        <Text style={styles.italic}>Programa</Text> desenvolvido em parceria do Uirapuru
        com a Nichibrás, em Embu das Artes. 
      </Text>

       {/* Descrição 2*/}
       <Text style={styles.description}>
       O Agora Vai é um curso gratuito, aos sábados, com duração de 11 meses, direcionado a jovens de 16 a 19 da rede pública, que residem nas dependências da empresa Nichibrás (Jardim pinheiros, Pinheirinho e Santa Clara).
      </Text>

       {/* Descrição 3*/}
       <Text style={styles.description}>
       Após a formação os jovens são selecionados para trabalharem como aprendizes na Nichibrás.
      </Text>
    </View>
  );
};

export default AgoraVai;
