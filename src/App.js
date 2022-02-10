
import ChatbotComponent from './Chatbot/Chatbot.component'
import './App.css';
import ApiRouter from './apiRouter/ApiRouter.component';
import LoginForm from './components/screen/login-form/Login-form.component';
import { ContextProvider } from './context/Phone-context.component';
import Phone from './components/screen/phone/Phone.component';
function App() {
  return (
    <div className="App">
         
      <ChatbotComponent />
      <ApiRouter/>
    </div>
  );
}

export default App;
