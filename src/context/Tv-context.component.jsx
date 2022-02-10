import React,{useEffect, useState} from "react";
import {GetAllTv} from "../services/Tv"
export const TvContext = React.createContext();
export const ContextProvider =({children})=>{
const[tv,setTv] = useState([])
useEffect(()=>{
GetAllTv().then((data)=>{setTv(data)})
},[])    
return(
    <TvContext.Provider value={{tv,setTv}}>
        {children}
    </TvContext.Provider>
)
}