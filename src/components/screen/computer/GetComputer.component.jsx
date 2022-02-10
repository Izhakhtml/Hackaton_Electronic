import { ContextProvider } from "../../../context/Computer-context.component"
import Computer from "./Computer.component"
const GetComputer=()=>{
return(
    <ContextProvider>
     <Computer/>
    </ContextProvider>
)
}
export default GetComputer