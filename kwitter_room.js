var firebaseConfig = {

    apiKey: "AIzaSyCTPh1qwOwt0BDJ43uePFxQkEi71ZmJ4QY",

    authDomain: "kiwwter-c996a.firebaseapp.com",

    databaseURL: "https://kiwwter-c996a-default-rtdb.firebaseio.com",

    projectId: "kiwwter-c996a",

    storageBucket: "kiwwter-c996a.appspot.com",

    messagingSenderId: "267137992047",

    appId: "1:267137992047:web:bc191c5c80fcdc0b48149a"

  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name") ;

document.getElementById("user_name").innerHTML="WELCOME "+user_name+"!" ;

function addroom()

{
    room_name=document.getElementById("room_name").value ;

    firebase.database().ref("/").child(room_name).update({

        purpose:"adding room"
   
    }) ;

    localStorage.setItem("room_name",room_name) ;

    window.location="kwitter_page.html" ;

}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key ;

       Room_names = childKey ;

      //Start code
console.log(Room_names) ;

sheebu="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>" ;

document.getElementById("output").innerHTML +=sheebu ;

      //End code
      } ) ; } ) ; }

getData() ;

function redirectToRoomName(name)

{
      console.log(name) ;

      
    localStorage.setItem("room_name",name) ;

    window.location="kwitter_page.html" ;
}

function logout()

{
localStorage.removeItem ("user_name") ;

localStorage.removeItem ("room_name") ;

window.location= "index.html" ;
}
  