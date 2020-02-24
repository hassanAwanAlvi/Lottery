import firebase from 'firebase';
// Your web app's Firebase configuration
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
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// firebase.analytics();
export const initializeFirebase = () => {
    firebase.initializeApp(firebaseConfig);

    navigator.serviceWorker
        .register('/my-sw.js')
        .then((registration) => {
            firebase.messaging().useServiceWorker(registration);
        });
}

export const askForPermissioToReceiveNotifications = async () => {
    try {
        const messaging = firebase.messaging();
        await messaging.requestPermission();
        const token = await messaging.getToken();
        console.log('Token:', token);


        //Send token to server....
        //

        // create a new XMLHttpRequest
        var xhr = new XMLHttpRequest()

        // get a callback when the server responds
        xhr.addEventListener('load', () => {
            // update the state of the component with the result here
            console.log(xhr.responseText)



        })
        // open the request with the verb and the url
        xhr.open('POST', 'http://199.201.89.17:28100/subscribe')
        // send the request
        xhr.send(JSON.stringify({ 	"token" : token,
            "categories" : "FROM REAL" }))


        return token;
    } catch (error) {
        console.error(error);
    }
}

