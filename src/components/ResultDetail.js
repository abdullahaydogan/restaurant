import React from "react";
import { View,Text,Image, StyleSheet } from "react-native";

export default function ResultDetail({result}){
    return(
        <View style={styles.container} >
            <Image
            style={styles.image}
            source={result.image_url ? {uri:result.image_url}:null} 
            />
            <Text style={styles.name} >{result.name} </Text>
            <Text> {result.rating}  Star restaurant, {result.review_count}, Reviews </Text>
        </View>
    );
}

const styles=StyleSheet.create({
    container:{
        marginLeft:15,
    },
    image:{
        width:250,
        height:120,
        borderRadius:15,
        marginBottom:5,
    },
    name:{
      fontWeight:'bold',  
    }
});



