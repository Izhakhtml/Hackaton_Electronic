import React,{useEffect, useState} from "react";
export const ComputerContext = createContext();
export const ContextProvider =({children})=>{
const[user,setUser] = useState([])
useEffect(()=>{
GetAllUser().then((data)=>{setUser(data)})
},[])    
return(
    <ComputerContext.Provider value={{user,setUser}}>
        {children}
    </ComputerContext.Provider>
)
}