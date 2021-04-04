import './App.css';
import FormChat from "./components/FormChat/FormChat";
import ChatStore from './store/chatStore'
import {observer} from "mobx-react-lite";
import EntryForm from "./components/EntryForm/EntryForm";
import {useEffect} from "react";

function App() {
  const {isAuth, stopMessageListening, startMessageListening} = ChatStore

  useEffect(() => {
    startMessageListening()

    return () => {
      stopMessageListening()
    }
  }, [])

  return (
    <div className="App">
      {isAuth ? (
        <FormChat />
      ) : (<EntryForm />)}
    </div>
  );
}

export default observer(App);
