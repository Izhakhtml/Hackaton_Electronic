import React,{useEffect, useState} from "react";
import {GetAllFridge} from "../services/Refrigerator"
export const RefrigeContext = React.createContext();

export const ContextProvider =({children})=>{
const[refrige,setRefrige] = useState([])
useEffect(()=>{
GetAllFridge().then((data)=>{setRefrige(data)})
},[])    
return(
    <RefrigeContext.Provider value={{refrige,setRefrige}}>
        {children}
    </RefrigeContext.Provider>
)
}