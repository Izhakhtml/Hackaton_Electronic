import { Link } from "react-router-dom";
import UserAccount from "../../screen/userAccount/User-account.component";
import { ContextProvider } from "../../../context/Phone-context.component";
const Header = ()=>{
    return(
        <header className="header">
              <nav className="nav">
                   <Link to="/"><li>Home</li></Link> 
                   <Link to="/Computer"><li>Computer</li></Link> 
                   {/* <ContextProvider> */}
                    <Link to="/Phone"><li>Phone</li></Link>    
                   {/* </ContextProvider> */}
                   <Link to="/Tv"><li>Tv</li></Link>                    
                   <Link to="/Refrigerator"><li>Refrigerator</li></Link> 
                   <Link to="/User-account"> 
                    <img src="https://cdn-icons-png.flaticon.com/512/456/456212.png"/>
                   </Link> 
                  
              </nav>
        </header>
    )    
    }
    export default Header;