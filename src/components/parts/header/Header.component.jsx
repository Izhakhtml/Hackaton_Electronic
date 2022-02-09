import { Link } from "react-router-dom";
const Header = ()=>{
    return(
        <header className="header">
              <nav className="nav">
                   <Link to="/"><li>Home</li></Link> 
                   <Link to="/Computer"><li>Computer</li></Link> 
                   <Link to="/Phone"><li>Phone</li></Link> 
                   <Link to="/Tv"><li>Tv</li></Link>                    
                   <Link to="/Refrigerator"><li>Refrigerator</li></Link> 
              </nav>
        </header>
    )    
    }
    export default Header;