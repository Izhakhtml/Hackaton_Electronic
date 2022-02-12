import ComputerCard from "./Computer-card.component";
import {ComputerContext} from "../../../context/Computer-context.component"
import { useContext } from "react";
const Computer =()=>{
const {computer} = useContext(ComputerContext);
return(
    <div className="div">
       {
            computer .map((res)=>
         <ComputerCard item={res}/>
         )
       }
    </div>
)    
}
export default Computer;