
import firebase from 'firebase';

let config = {
    apiKey: "AIzaSyDHhKqb52a5jrAAiO1-mYSprfMGuLqBZzA",
    authDomain: "adventureticketing.firebaseapp.com",
    databaseURL: "https://adventureticketing.firebaseio.com",
    projectId: "adventureticketing",
    storageBucket: "adventureticketing.appspot.com",
    messagingSenderId: "439826340394"
};
let app = firebase.initializeApp(config);
export const db = app.database()