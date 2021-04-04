import React from 'react';
import classes from './Message.module.css'
import {Alert, Card} from "react-bootstrap";

const Message = ({message}) => {

  return (
    <div className={classes.container}>
      {message.type === 'default' && <Card body>{message.author}: {message.message}</Card>}
      {message.type === 'entry'
        && <Alert variant={'success'}>
        {message.author} joined the chat
      </Alert>}
    </div>
  );
}

export default Message;
