import logo from './logo.svg';
import './App.css';
import CustomChatbot from './Chatbot/CustomChatbot';
import config from './Chatbot/Config';
import MessageParser from './Chatbot/MessageParser';
import ActionProvider from './Chatbot/ActionProvider';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css'

function App() {
  return (
    <>
    <div className="App">
    <div className="App-header">
        <Chatbot config={config} messageParser={MessageParser} actionProvider={ActionProvider} />
        </div>
        </div>
    </>
  );
}

export default App;
