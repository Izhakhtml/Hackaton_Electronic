import'../login-form/Login-form.component'
import HomePage from '../home/HomePage.component';
import LoginForm from '../login-form/Login-form.component';
const UserAccount =()=>{
return(
    <div className="user_details">
         <label htmlFor="">User Name</label><br/>
           <input type="text" /><br/>
        <label htmlFor="">Password</label><br/>
           <input type="text" /><br/>
           
           <span>CRETAE ACCOUNT:</span><a href="/Login-form">LOG IN</a><br/>
           <button id="btn_send">SEND</button>
    </div>
)    
}
export default UserAccount;