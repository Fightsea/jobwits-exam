import express from 'express';
import bodyParser from 'body-parser';
import firebase from 'firebase/app';
import 'firebase/database';

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

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/api/v1/messages', (req, res, next) => {
  console.log(new Date().toISOString(), '/api/v1/messages');

  let dbRef = firebase.database().ref('/Messages');

  dbRef.once('value', function (snapshot) {
    let allMessages = [];
    let oddMessages = [];
    let evenMessages = [];

    snapshot.forEach(function (child) {
      allMessages.push(child.val());

      if (child.val().timestamp % 2 == 1) {
        oddMessages.push(child.val());
      } else {
        evenMessages.push(child.val());
      }
    });

    res.json({
      message: { all: allMessages, odd: oddMessages, even: evenMessages },
    });
  });
});

app.listen(8080, () => {
  console.log(`Server is running`);
});
