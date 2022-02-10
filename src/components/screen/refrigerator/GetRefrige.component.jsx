import { ContextProvider } from "../../../context/Refrigerator-context.component"
import Refrigeator from "./Refrigerator.component"
const GetRefrige =()=>{
return(
    <ContextProvider>
     <Refrigeator/>
    </ContextProvider>
)
}
export default GetRefrige