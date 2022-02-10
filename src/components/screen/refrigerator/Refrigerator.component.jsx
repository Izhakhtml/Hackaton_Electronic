import { useContext } from "react";
import {RefrigeContext} from "../../../context/Refrigerator-context.component"
import RfrigeCard from "./Rfrige-card.component"
const Refrigeator =()=>{
const{refrige} = useContext(RefrigeContext)
return(
    <div>
      {
        refrige.map((res)=>{
         <RfrigeCard item={res}/>
        })
      }
    </div>
)    
}
export default Refrigeator;