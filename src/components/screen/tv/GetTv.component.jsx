import { ContextProvider } from "../../../context/Tv-context.component"
import  Tv from "./Tv.component"
const GetTv=()=>{
return(
    <ContextProvider>
     <Tv/>
    </ContextProvider>
)
}
export default GetTv