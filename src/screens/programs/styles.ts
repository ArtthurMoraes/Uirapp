import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#0a2472",
      padding: 20,
      position: "relative",
    },
    image: {
      width: '100%',
      height: 300,
      marginBottom: 20,
      borderRadius: 7
    },
    title: {
      fontSize: 20,
      color: "#dba567",
      fontWeight: "bold",
      marginBottom: 15,
    },
    italic: {
      fontWeight: "bold",
    },
    button: {
      backgroundColor: "#fff",
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 10,
      marginTop: 10,
      width: 300,
      alignItems: 'center',
    },
    buttonText: {
      color: "#0a2472",
      fontSize: 16,
      fontWeight: "bold",
    },
  });
  