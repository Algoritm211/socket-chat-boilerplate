# Run app on your local machine


1. Clone app to your computer (`git clone https://github.com/Algoritm211/socket-chat-boilerplate.git`)
2. Run `npm install` to install all libraries (dependencies) of project
3. Make separate directory on your computer (not in the project) and run `npm init -y`, it wll be your server
4. Install dependencies: `npm install nodemon ws`
5. Add `"dev": "nodemon app.js"` to scripts in package.json of server
6. Make file `app.js` and write here this code, it runs websocket server:

```javascript 
const websocket = require('ws')


const wsServer = new websocket.Server({
  port: 5000
}, () => {
  console.log('Server started')
})

wsServer.on('connection', (ws) => {

  ws.on('message', (msg) => {
    const message = JSON.parse(msg)
    if (message.type === 'entry') {
      broadcastMessages(message)
    } else if (message.type === 'default') {
      broadcastMessages(message)
    }
  })
})


function broadcastMessages(message) {
  wsServer.clients.forEach(client => {
    client.send(JSON.stringify(message))
  })
}



```
7. Run server with command `npm run dev`
8. Launch frontend app with command `npm run start`. App will be run on http://localhost:3000
