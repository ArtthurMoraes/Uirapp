import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from '../pte/styles';
import { router } from 'expo-router';

const MelhorAprendiz = () => {
  return (
    <View style={styles.container}>

      {/* Título */}
      <Text style={styles.title}>Programa de Trabalho Educativo</Text>

      {/* Imagem "logoDir" */}
      <Image source={require("../../assets/images/logoDir.png")} style={styles.image} />

      {/* Descrição */}
      <Text style={styles.description}>
        <Text style={styles.italic}>O Programa de Trabalho Educativo</Text> é curso oferecido gratuitamente pelo Projeto Uirapuru, que prepara jovens de 16 a 19 anos, estudantes de escola pública 
        e moradores de Taboão da Serra e regiões próximas, para o primeiro emprego.

        O curso tem duração de cinco meses com 4 horas de aulas diárias presenciais (manhã ou tarde). A seleção é feita por meio de uma avaliação de conhecimentos em Matemática, uma Redação e uma entrevista.
      </Text>

      <Text style={styles.description}>
        O curso tem duração de cinco meses com 4 horas de aulas diárias presenciais (manhã ou tarde). A seleção é feita por meio de uma avaliação de conhecimentos em Matemática, uma Redação e uma entrevista.
      </Text>

    </View>
  );
};

export default MelhorAprendiz;
