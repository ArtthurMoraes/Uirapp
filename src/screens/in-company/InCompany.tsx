import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from './styles';

const InCompany = () => {
  return (
    <View style={styles.container}>

      {/* Título */}
      <Text style={styles.title}>IN-COMPANY</Text>

      {/* Imagem "passaro" */}
      <Image source={require("../../assets/images/passaro.png")} style={styles.image} />

      {/* Descrição */}
      <Text style={styles.description}>
        <Text style={styles.italic}>A capacitação</Text> de jovens aprendizes customizada para 
        a empresa em suas próprias instalações. 
      </Text>

       {/* Descrição 2*/}
       <Text style={styles.description}>
       O In-Company é uma parceria entre o Projeto Uirapuru e a empresa que deseja contratar aprendizes, sendo uma solução personalizada 
       para empresas que reconhecem o valor de investir em jovens talentosos.
      </Text>

       {/* Descrição */}
       <Text style={styles.description}>
        Com o In-Company, oferecemos a comodidade de formar aprendizes 
        diretamente nas dependências da sua empresa, especialmente quando a demanda por jovens aprendizes é significativa.
      </Text>
    </View>
  );
};

export default InCompany;
