class ActionProvider {
  constructor(createChatbotMessage, setStateFunc, createClientMessage) {
    this.createChatbotMessage = createChatbotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }

  handleHello = () => {
    const greetMessage = this.createChatbotMessage("שלום !");
    this.addMessageToState(greetMessage);
  }

  handleHelp = () => {
    const helpMessage = this.createChatbotMessage('במה אפשר לעזור ?');
    this.addMessageToState(helpMessage);
  }

  handleNavigator = () => {
    const naviMessage = this.createChatbotMessage(
      'אולי הלינקים האלו יעזרו',
      {
        widget: 'cbNav'
      }
      );
      this.addMessageToState(naviMessage);
  }

  sayMyName = () => {
    const myName = this.createChatbotMessage("אבי ג'י, אבשה ג'י עד יום מותי");
    this.addMessageToState(myName);
  }

  addMessageToState = (message) => {
    this.setState(prevState => ({
      ...prevState,
      messages: [...prevState.messages, message]
    }))
  }
}

export default ActionProvider;