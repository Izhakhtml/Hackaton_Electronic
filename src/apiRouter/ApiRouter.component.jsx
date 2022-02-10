import {BrowserRouter,Route,Routes} from "react-router-dom";
import Header from "../components/parts/header/Header.component";
import Footer from "../components/parts/footer/Footer.component";
import Computer from "../components/screen/computer/Computer.component";
import HomePage from "../components/screen/home/HomePage.component";
import GetPhones from "../components/screen/phone/GetPhone.component";
import UserAccount from "../components/screen/userAccount/User-account.component";
import GetRefrige from "../components/screen/refrigerator/GetRefrige.component";
import GetTv from "../components/screen/tv/GetTv.component";
import GetComputer from "../components/screen/computer/GetComputer.component";
const ApiRouter =()=>{
return(
    <BrowserRouter>
    <Header/>
      <Routes>
           <Route  exact path="/" element={<HomePage/>}/>
           <Route  path="/Computer" element={<GetComputer/>}/>
           <Route  path="/Phone" element={<GetPhones/>}/>
           <Route  path="/Tv" element={<GetTv/>}/>
           <Route  path="/Refrigerator" element={<GetRefrige/>}/>
           <Route  path="/User-account" element={<UserAccount/>}/>
      </Routes>
    <Footer/>
</BrowserRouter>
)    
}
export default ApiRouter;