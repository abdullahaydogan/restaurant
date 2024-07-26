import axios from "axios";

export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization:'Bearer HEXUFacId7NqDWLn7buJW_bwJjnZmsveK4_EhtH6WYB6tk0XpxxHAaBUiq1rVMzjMvxs1tOYOjbLjJJXDSMeh8KLSMEVIbTXr3MGRllyk0IbORzy4IuKkPEgODieZnYx'
    },
})






