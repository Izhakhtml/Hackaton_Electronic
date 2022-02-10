import { Link } from "react-router-dom";
<<<<<<< HEAD
const Header = () => {
  return (
    <header className="header">
      <div id="theNav">
        <nav className="nav">
          <a class="active" href="index.html">
            Home
          </a>

          <a href="/Computer">Computer</a>
          <a href="/Phone">Phone</a>
          <a href="/Tv">Tv</a>
          <a href="/Refrigerator">Refrigerator</a>
          <a href="/User-account">
            <img
              id="logInIcon"
              src="https://cdn-icons-png.flaticon.com/512/456/456212.png"
            />
          </a>
        </nav>
      </div>
    </header>
  );
};
export default Header;
=======
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
>>>>>>> izhak
