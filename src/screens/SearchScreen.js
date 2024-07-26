import React, { useState } from "react";
import { Text, View,StyleSheet,ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultList from "../components/ResultList";


export default function SearchScreen(){
    const [searchApi,results,errorMessage]=useResults();
    const [term,setTerm]=useState('');
    console.log(results);

    const filterResultByPrice = (price)=>{
        return results.filter((result)=>{
            return result.price === price;
        });
    }
    return(
       <View>
         <SearchBar
         term={term}
         onTermChange={setTerm}
         onTermSubmit={()=>searchApi(term)}
         />
         {errorMessage ? <Text>{errorMessage}</Text> : null }
         {results.length ==0 ? <Text style={styles.errorMessage}> No restaurants to list found  </Text> : <>
           <ResultList title='Cheap restaurants'   results={filterResultByPrice('₺')} />
           <ResultList title='Affordable restaurants'   results={filterResultByPrice('₺₺')} />
           <ResultList title='Expensive restaurants'   results={filterResultByPrice('₺₺₺')} />
           </>
         }
       </View>
    );
}

const styles= StyleSheet.create({
    errorMessage: {
        flex: 1,
        fontSize: 18,
        color: 'red',
        textAlign: 'center',
        marginVertical: 20,
      },
});






