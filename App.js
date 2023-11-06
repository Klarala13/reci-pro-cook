import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import Recipies from "./src/screens/Recipies"

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        <StatusBar />
        <Text style={styles.title}>Holi! Aquí tienes unas recetas:</Text>
        <Recipies/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f1f1f1',
    flex: 1,
  },
  title: {
    fontSize: 22,
    textAlign: "center",
    marginBottom: 24,
    color: "#7925C7"
  }
});
