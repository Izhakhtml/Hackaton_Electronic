import React,{useEffect, useState} from "react";
import { GetAllUser } from "../services/Users";
export const UserContext =React.createContext();
export const ContextProvider =({children})=>{
const[user,setUser] = useState([])
useEffect(()=>{
GetAllUser().then((data)=>{setUser(data)})
},[])    
return(
    <UserContext.Provider value={{user,setUser}}>
        {children}
    </UserContext.Provider>
)
}