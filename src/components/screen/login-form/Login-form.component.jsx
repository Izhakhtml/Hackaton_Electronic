const LoginForm =()=>{  
return(
    <div className="form">
         <form action="">
         <b><label htmlFor="">First name:</label></b><br />
                <input type="text" /><br />
          <b><label htmlFor="">Last name:</label></b><br />
                <input type="text" /><br />
           <b><label htmlFor="">Email:</label></b><br />
                <input type="text" /><br />
            <b><label htmlFor="">Password:</label></b><br />
                <input type="text" /><br />
         </form>
            <button>SEND</button>
    </div>
)    
}
export default LoginForm;