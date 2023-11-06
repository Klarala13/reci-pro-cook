import { useState, useEffect } from "react";
import { FlatList, View, Text } from "react-native"
import axios from "axios";

const Recipies = () => {
  const [items, setItems] = useState([]);

  useEffect(()=>{
    const fetchData = () => {
      axios.get('http://localhost:3000/recipies')
      .then(({ data })=> {
        setItems(data)
      })
      .catch(error=> console.log(error))
    }
    
    fetchData()
}, [])

  return (
    <View>
      <FlatList data={items} keyExtractor={(item) => item.id} renderItem = {({item}) => (<Text>{item.title}</Text>)}/>
    </View>
  )
}

export default Recipies;