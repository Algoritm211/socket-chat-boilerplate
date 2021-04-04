import {makeAutoObservable} from "mobx";
import {chatAPI} from "../socket/socket-work";


class ChatStore {
  messages = []
  userName = ''
  isAuth = false
  _messageHandler = (message) => {
    this.messages = [JSON.parse(message.data), ...this.messages]
  }

  constructor() {
    makeAutoObservable(this)
  }

  startMessageListening = () => {
    chatAPI.addSubscriber(this._messageHandler.bind(this))
    chatAPI.start()
  }

  stopMessageListening = () => {
    chatAPI.stopListening()
  }

  sendMessage = (message, type) => {
    const msgObj = {
      type, message,
      author: this.userName
    }
    chatAPI.sendMessage(JSON.stringify(msgObj))
  }

  authUser(name) {
    this.isAuth = true
    this.userName = name
  }
}

export default new ChatStore()


