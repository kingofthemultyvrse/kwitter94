
const firebaseConfig = {
    apiKey: "AIzaSyA4p3yWeoVxArEqyzPFlZEe7M0qvGWqxAE",
    authDomain: "quityourgame.firebaseapp.com",
    databaseURL: "https://quityourgame-default-rtdb.firebaseio.com",
    projectId: "quityourgame",
    storageBucket: "quityourgame.appspot.com",
    messagingSenderId: "458261820904",
    appId: "1:458261820904:web:db0b1fe332864437d2205d",
    measurementId: "G-ZT6EM6HWT2"
  };
  firebase.const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app)
  
  function addUser()
  {
      user_name = document.getElementById("user_name").Value;
      firebase.database().ref("/").child(user_name).update({
          purpose : "adding user"
      });
  }