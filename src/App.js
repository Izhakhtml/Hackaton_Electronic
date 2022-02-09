import './App.css';
import ApiRouter from './apiRouter/ApiRouter.component';
import LoginForm from './components/screen/login-form/Login-form.component';
function App() {
  return (
    <div className="App">
      <ApiRouter/>
      {/* <LoginForm/> */}
    </div>
  );
}

export default App;
