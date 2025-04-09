import { View, Text, Image } from "react-native";
import { styles } from './styles';

const AboutScreen = () => {
  return (
    <View style={styles.container}>

      {/* Título */}
      <Text style={styles.title}>Sobre nós</Text>

      {/* Imagem do ninho */}
      <Image source={require("../../assets/images/about.png")} style={styles.image} />

      {/* Bloco de Indicadores */}
      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>17</Text>
          <Text style={styles.statLabel}>Anos de atuação</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>2.167</Text>
          <Text style={styles.statLabel}>Formados no curso</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>80%</Text>
          <Text style={styles.statLabel}>
            dos formados em 2023/24{"\n"}encaminhados como aprendizes
          </Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>34</Text>
          <Text style={styles.statLabel}>Empresas parceiras</Text>
        </View>
      </View>

      {/* Descrição */}
      <Text style={styles.description}>
        <Text style={styles.italic}>Imagine um ninho.</Text> Um lugar de acolhimento, cuidado e apoio. 
        É isso que nós somos. Aqui no Projeto Uirapuru nos dedicamos a preparar jovens da rede pública 
        para alcançar novos voos.
      </Text>
    </View>
  );
};

export default AboutScreen;
