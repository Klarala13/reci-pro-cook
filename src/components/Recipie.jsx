import { Text, View, StyleSheet } from "react-native";

const Recipie = ({item}) => {
    return (
        <View style={styles.container}> 
            <Text style={[styles.text, fontSize=22, fontWeight="bold"]}> {item.title} </Text>
            <Text style={styles.text}>{item.description}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: "#f7f7f7",
        marginBottom: 5,
    },
    text: {
      color: '#000',
    },
  });

export default Recipie;