importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');


var firebaseConfig = {
    apiKey: "AIzaSyCog1bydLc-M0qV4TknyPDwrht-VyfwUEg",
    authDomain: "lottery-50a0a.firebaseapp.com",
    databaseURL: "https://lottery-50a0a.firebaseio.com",
    projectId: "lottery-50a0a",
    storageBucket: "lottery-50a0a.appspot.com",
    messagingSenderId: "555256544306",
    appId: "1:555256544306:web:6e13287e1f93160d97102b",
    measurementId: "G-40NRGRW0RN"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();