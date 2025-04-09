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
    title: {
      fontSize: 20,
      color: '#dba567',
      fontWeight: "bold",
      marginBottom: 10,
    },
    image: {
      width: 400,
      height: 300,
      marginBottom: 20,
      borderRadius: 7
    },
    description: {
      color: "#e3e3e5",
      fontSize: 16,
      fontStyle: "italic",
      textAlign: "center",
      marginBottom: 20,
    },
    italic: {
      fontWeight: "bold",
      color: '#dba567',
    },
    button: {
      backgroundColor: "#fff",
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 10,
      marginTop: 10,
    },
    buttonText: {
      color: "#0a2472",
      fontSize: 16,
      fontWeight: "bold",
    },
    statsContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      marginBottom: 20,
      gap: 20,
    },
    statItem: {
      width: '45%',
      alignItems: 'center',
      marginBottom: 10,
    },
    statNumber: {
      fontSize: 20,
      color: '#dba567',
      fontWeight: 'bold',
    },
    statLabel: {
      color: '#e3e3e5',
      fontSize: 13,
      textAlign: 'center',
    },  
  });