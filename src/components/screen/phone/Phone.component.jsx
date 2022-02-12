import PhoneCard from "./Phone-card.component";
import {PhoneContext} from "../../../context/Phone-context.component"
import { useContext } from "react";
const Phone =()=>{
const phone = useContext(PhoneContext);
return(
    <div className="div">
       {
         phone.phone.map((res)=>
         <PhoneCard item={res}/>
         )
       }
    </div>
)    
}
export default Phone;