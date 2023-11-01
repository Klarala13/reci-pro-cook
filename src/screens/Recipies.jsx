import { useState } from "react";
import { FlatList, Link } from "react-native"

const Recipies = () => {
    const [recipies, setRecipies] = useState();

    const getRecipies = async () => {
        const config = {
          method: "get",
          url: "http://localhost:3000/recipies/",
          headers: {
            "content-type": "text/json",
          },
        };
        const res = await axios(config);
        console.log("response", res.data);
    }

    getRecipies()
}

export default Recipies