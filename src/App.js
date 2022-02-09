
import ChatbotComponent from './Chatbot/Chatbot.component'
import './App.css';
import ApiRouter from './apiRouter/ApiRouter.component';
function App() {
  return (
    <div className="App">
      <ChatbotComponent />
      <ApiRouter/>
    </div>
  );
}

export default App;
