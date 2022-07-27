var firebaseConfig = {
  apiKey: "AIzaSyB7Goa24oNfJo2d3GJdrLnPi-RZB6SR7bo",
  authDomain: "project-c96.firebaseapp.com",
  databaseURL: "https://project-c96-default-rtdb.firebaseio.com",
  projectId: "project-c96",
  storageBucket: "project-c96.appspot.com",
  messagingSenderId: "747285953686",
  appId: "1:747285953686:web:9bba33af05612a9b5716b7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser() {

  user_name = document.getElementById("user_name").value;

  localStorage.setItem("user_name", user_name);
  
    window.location = "kwitter_room.html";
}

