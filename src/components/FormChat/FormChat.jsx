import React, {useEffect, useState} from 'react';
import {Button, Form} from "react-bootstrap";
import classes from './FormChat.module.css'
import {observer} from "mobx-react-lite";
import ChatStore from '../../store/chatStore'
import Message from "./Message/Message";

const FormChat = () => {
  const {messages} = ChatStore
  const [messageText, setMessageText] = useState('')
  const [emptyError, setEmptyError] = useState(false)

  const onSendMessage = () => {
    if (messageText.trim().length !== 0) {
      setEmptyError(false)
      ChatStore.sendMessage(messageText, 'default')
      setMessageText('')
    } else  {
      setEmptyError(true)
    }
  }

  const messageBlock = messages.map((message, index) => {
    return <Message key={index} message={message}/>
  })

  return (
    <React.Fragment>

      <div className={classes.container}>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Message</Form.Label>
            <Form.Control
              value={messageText}
              onChange={(event) => setMessageText(event.target.value)}
              as="textarea"
              placeholder="Enter your message"
            />
            <Form.Text className="text-muted">
              {emptyError && <span style={{color: 'red'}}>Enter your text here </span>}
            </Form.Text>
          </Form.Group>
          <Button variant="primary" onClick={onSendMessage}>
            Send message
          </Button>
        </Form>
      </div>
      {messageBlock}
    </React.Fragment>
  );
};

export default observer(FormChat);
