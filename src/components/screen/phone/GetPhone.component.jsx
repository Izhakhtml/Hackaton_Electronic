import { ContextProvider } from "../../../context/Phone-context.component"
import Phone from "./Phone.component"
const GetPhones =()=>{
return(
    <ContextProvider>
     <Phone/>
    </ContextProvider>
)
}
export default GetPhones