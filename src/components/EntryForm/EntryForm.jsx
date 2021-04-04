import React, {useState} from 'react';
import classes from './EntryForm.module.css'
import {Button, Form} from "react-bootstrap";
import ChatStore from '../../store/chatStore'
import {observer} from "mobx-react-lite";

const EntryForm = () => {

  const [name, setName] = useState('')
  const [error, setError] = useState(false)

  const onAuthUser = () => {
    if (name.trim().length !== 0) {
      setError(false)
      ChatStore.authUser(name)
      ChatStore.sendMessage(name, 'entry')
      setName('')
    } else {
      setError(true)
    }
  }

  return (
    <div className={classes.container}>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            value={name}
            onChange={(event) => setName(event.target.value)}
            type="text"
            placeholder="Enter your name" />
          <Form.Text className="text-muted">
            {error && <span style={{color: 'red'}}>Enter your name</span>}
          </Form.Text>
        </Form.Group>
        <Button variant="primary" onClick={onAuthUser}>
          Enter chat
        </Button>
      </Form>
    </div>
  );
};

export default observer(EntryForm);
