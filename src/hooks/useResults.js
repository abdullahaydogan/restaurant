import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () =>{

    const [result,setResults] =useState([]);
    const [errorMessage,setrrorMessage]=useState('')
    const searchApi= async (searchTerm) => {
        try {
            const response =  await yelp.get('/search',{
                params:{
                    limit:50,
                    term:searchTerm,
                    location:'İstanbul',
                },
            });
            setResults(response.data.businesses);
            setrrorMessage('');
        } catch (error) {
            setrrorMessage('Connection Error');
        }
     
    };

    useEffect(()=>{
        searchApi('Toast');
    },[] );

    return[searchApi,result,errorMessage];

};

