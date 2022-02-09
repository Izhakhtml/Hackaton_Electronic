import {BrowserRouter,Route,Routes} from "react-router-dom";
import Header from "../components/parts/header/Header.component";
import Footer from "../components/parts/footer/Footer.component";
import Computer from "../components/screen/computer/Computer.component";
import Phone from "../components/screen/phone/Phone.component";
import Tv from "../components/screen/tv/Tv.component";
import Refrigeator from "../components/screen/refrigerator/Refrigerator.component";
import HomePage from "../components/screen/home/HomePage.component";
const ApiRouter =()=>{
return(
    <BrowserRouter>
    <Header/>
      <Routes>
           <Route  exact path="/" element={<HomePage/>}/>
           <Route  path="/Computer" element={<Computer/>}/>
           <Route  path="/Phone" element={<Phone/>}/>
           <Route  path="/Tv" element={<Tv/>}/>
           <Route  path="/Refrigerator" element={<Refrigeator/>}/>
      </Routes>
    <Footer/>
</BrowserRouter>
)    
}
export default ApiRouter;