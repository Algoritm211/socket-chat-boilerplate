let ws = null
let subscribers = []

const messageHandler = (message) => {
  subscribers.forEach(handler => handler(message))
}

const connection = () => {
  if (ws) {
    ws.removeEventListener('message', messageHandler)
  }
  ws = new WebSocket('ws://localhost:5000')
  ws.addEventListener('message', messageHandler)
}


export const chatAPI = {
  start: () => {
    connection()
  },
  addSubscriber: (subscriber) => {
    subscribers.push(subscriber)
  },
  sendMessage: (message) => {
    ws.send(message)
  },
  stopListening: () => {
    ws.removeEventListener('message', messageHandler)
    subscribers = []
  }
}
