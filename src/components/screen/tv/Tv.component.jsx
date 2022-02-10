import { useContext } from "react";
import { TvContext } from "../../../context/Tv-context.component";
import TvCard from "./Tv-card.component";
const Tv =()=>{
const{tv}=useContext(TvContext)
return(
    <div>
      {
        tv.map((res)=>{
       <TvCard item={res}/>
        })
      }
    </div>
)    
}
export default Tv;