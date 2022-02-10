import { createChatBotMessage } from 'react-chatbot-kit';
import ChatbotNav from './ChatbotNav.component';

const config = {
  botName : "Avi Admaso",
  initialMessages: [createChatBotMessage(`היי איך אפשר לעזור?`)],
  widgets: [
    {
      widgetName: 'cbNav',
      widgetFunc: (props) => <ChatbotNav {...props} />
    }
  ]
};

export default config;