import React, { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, View,Text } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

import yelp from "../api/yelp";

export default function ResultShowScreen( {route} ){
    const id = route.params.id;
    const [result,setResult]= useState(null);

    const getResult= async(id)=>{
        const response = await yelp.get(`/${id} `);
        setResult(response.data);
    }

    useEffect(()=>{
        getResult(id);
    },[]);

    if(!result){
        return null;
    }

    return(
        <View>
            <Text style={styles.title} >{result.name} </Text>
            <Text style={styles.phone}>{result.phone} </Text>

            <View style={styles.icon} >
            {
                result.is_closed ?   <Icon
                name={isOpen ? 'checkmark-circle-outline' : 'close-circle-outline'}
                size={30}
                color={isOpen ? 'green' : 'red'}
                style={styles.statusIcon}
            /> : <Icon
            name="ios-car"
            size={30}
            color="blue"
            style={styles.deliveryIcon}
        />
            }
            </View>
          
            <FlatList
            data={result.photos}
            renderItem={({item})=>{
                return (
                    <Image
                    style={styles.image}
                    source={{uri:item}}
                    />
                );
            } }    
            />
        </View>
    );
};

const styles = StyleSheet.create({
    image:{
        height:180,
        margin:10,
        borderRadius:20,
    },
    title:{
        alignSelf:'center',
        fontSize:25,
        marginVertical:10,
    },
    phone:{
        alignSelf:'center',
        fontSize:20,
    },
    icon:{
        alignSelf:'center',

    },
});






