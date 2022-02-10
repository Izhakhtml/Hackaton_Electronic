class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    const recievedMessage = message.toLowerCase(); 

    if(recievedMessage.includes('שלום')){
      this.actionProvider.handleHello();
    }

    if(recievedMessage.includes('עזרה')){
      this.actionProvider.handleHelp();
      this.actionProvider.handleNavigator();
    }
  }
}
  
  export default MessageParser;