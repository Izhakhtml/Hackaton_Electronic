import React,{useEffect, useState} from "react";
import { GetAllPhone } from "../services/Phone";
export const PhoneContext = React.createContext();
export const ContextProvider =({children})=>{
const[phone,setPhone] = useState([])
useEffect(()=>{
    GetAllPhone().then((data)=> setPhone(data) )
},[])    
return(
    <PhoneContext.Provider value={{phone,setPhone}}>
        {children}
    </PhoneContext.Provider>
)
}