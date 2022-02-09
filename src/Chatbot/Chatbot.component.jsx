import React from 'react';
import Chatbot from "react-chatbot-kit";
import 'react-chatbot-kit/build/main.css';
import {useState} from 'react';

import config from "./config";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";

const ChatbotComponent = () => {

    const[style, setStyle] = useState("chatbotContainer")

    const closeCB = () => {
        setStyle("chatClosed");
    }

    const openCB = () => {
        setStyle("chatbotContainer");
    }

    return (
        <div className= "chatbotSection">
        <div className={style}>
            <button onClick={closeCB} className="chatbotCloseBtn">X</button>
        <Chatbot
          config={config}
          actionProvider={ActionProvider}
          messageParser={MessageParser}
        />
        
      </div>
        <button onClick={openCB} className="chatbotInitiateBtn"><img src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffreesvg.org%2Fimg%2F1538298822.png&f=1&nofb=1" /></button>
        </div>
    )
}

export default ChatbotComponent;