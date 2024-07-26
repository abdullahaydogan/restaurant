import React from "react";
import { FlatList, View,TouchableOpacity, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import ResultDetail from "./ResultDetail";
import { useNavigation } from "@react-navigation/native";
useNavigation

export default function ResultList({title,results}){
   
   const navigation=useNavigation();
    console.log(results);
    return(
        <View style={styles.container}>
          <Text style={styles.title}> {title} </Text>  
          <FlatList 
          horizontal
          showsHorizontalScrollIndicator = {false}
          data={results}
          renderItem={({item})=>{
            return(
                <TouchableOpacity onPress={()=>{
                navigation.navigate("ResultShow",{id:item.id })}} >
                    <ResultDetail result={item} />
                </TouchableOpacity>
            );
          }}
          />
        </View>
    );
}


const styles=StyleSheet.create({
    container:{
        marginBottom:10,
    },
    title:{
        fontSize:18,
        fontWeight:'bold',
        marginLeft:15,
        marginBottom:5,
    }
});
