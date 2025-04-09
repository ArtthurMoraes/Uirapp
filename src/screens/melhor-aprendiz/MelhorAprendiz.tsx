import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from './styles';

const MelhorAprendiz = () => {
  return (
    <View style={styles.container}>

      {/* Título */}
      <Text style={styles.title}>MELHOR APRENDIZ</Text>

      {/* Imagem "voando" */}
      <Image source={require("../../assets/images/voando.png")} style={styles.image} />

      {/* Descrição */}
      <Text style={styles.description}>
        <Text style={styles.italic}>O apoio</Text> teórico e emocional ao jovem durante o trabalho 
        de aprendiz em empresa parceira.
      </Text>

       {/* Descrição 2*/}
       <Text style={styles.description}>
       No Programa Melhor Aprendiz, acolhemos jovens entre 16 e 24 anos, que estejam estudando ou tenham concluído o Ensino Médio. 
       Eles são contratados por nossas empresas parceiras não apenas para executar tarefas, mas para aprender uma profissão.
      </Text>

       {/* Descrição */}
       <Text style={styles.description}>
       A jornada semanal é cuidadosamente dividida: 24 horas são dedicadas à Aprendizagem Prática na empresa contratante,
        e 6 horas são reservadas para a Aprendizagem Teórica no Projeto Uirapuru, onde complementam suas experiências com conhecimento técnico e comportamental.
      </Text>
    </View>
  );
};

export default MelhorAprendiz;
