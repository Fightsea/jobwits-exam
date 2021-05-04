import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import firebase from 'firebase/app';
import 'firebase/database';
// import './App.css';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(5),
  },
}));

const firebaseConfig = {
  apiKey: 'AIzaSyAU8szC-MRk1ttmw27UyJelUhyW34HZmZc',
  authDomain: 'nickyjobwitsexam.firebaseapp.com',
  databaseURL: 'https://nickyjobwitsexam-default-rtdb.firebaseio.com',
  projectId: 'nickyjobwitsexam',
  storageBucket: 'nickyjobwitsexam.appspot.com',
  messagingSenderId: '660850150345',
  appId: '1:660850150345:web:c877ae62dd9a0f5affb618',
};

firebase.initializeApp(firebaseConfig);

function App() {
  // Style
  const classes = useStyles();

  // States
  const [messageText, setMessageText] = useState('');

  const handleMessageTextChanged = (e) => {
    setMessageText(e.target.value);
  };

  // UI function
  const submitMessage = function () {
    let dbRef = firebase.database().ref('/Messages');

    dbRef
      .push({
        message: messageText,
        timestamp: Date.now(), // ms
      })
      .then(function () {
        alert('Submit Successful!');
      })
      .catch(function () {
        alert('Submit Failed!');
      })
      .finally(function () {
        setMessageText(''); // Clear message board
      });
  };

  return (
    <div className={classes.root}>
      <TextField
        variant="outlined"
        id="txt-message"
        label="Message Board"
        placeholder="Leave your message here ..."
        multiline
        fullWidth
        rows={8}
        value={messageText}
        onChange={handleMessageTextChanged}
      />
      <p></p>
      <Button
        variant="contained"
        color="primary"
        id="btn-submit"
        onClick={submitMessage}
      >
        Submit
      </Button>
      <p>&nbsp;</p>
      <label>Powered by Nicky Tseng © 2021 all rights reserved.</label>
    </div>
  );
}

export default App;
