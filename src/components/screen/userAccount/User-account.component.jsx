import LoginForm from '../login-form/Login-form.component';
import { UserContext } from '../../../context/Users-context';
import { useContext } from 'react';
const UserAccount =()=>{
const user = useContext(UserContext);
return(
    <div className="user_details">
        
         <label htmlFor="">User Name:</label><br/>
           <input type="text" /><br/>
        <label htmlFor="">Password:</label><br/>
           <input type="password" /><br/>
           <span>create account: </span><a id='a_tag' href="/Login-Form">Log in</a><br/>
           <button id="btn_send">SEND</button>
    </div>
)    
}
export default UserAccount;