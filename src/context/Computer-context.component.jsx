import React,{useEffect, useState} from "react";
import { GetAllComputers } from "../services/Computer";
export const ComputerContext = React.createContext();
export const ContextProvider =({children})=>{
const[computer,setComputer] = useState([])
useEffect(()=>{
    GetAllComputers().then((data)=>{setComputer(data)})
},[])    
return(
    <ComputerContext.Provider value={{computer,setComputer}}>
        {children}
    </ComputerContext.Provider>
)
}