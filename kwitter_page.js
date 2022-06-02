// Your web app's Firebase configuration
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
//YOUR FIREBASE LINKS

user_name=localStorage.getItem("user_name") ;

room_name=localStorage.getItem("room_name") ;

function send ()
{
      msg=document.getElementById("msg").value ;

      firebase.database().ref(room_name).push({
  
          name:user_name,
          message:msg,
          like:0
     
      }) ;
  
      document.getElementById("msg").value="" ;
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

console.log(firebase_message_id) ;

console.log(message_data) ; 

name=  message_data['name'] ;

like=  message_data['like'] ;

message=  message_data['message'] ;

tag="<h4>" +name+"<img id='mamneactivitynedekai' class='user_tick' src='tick.png'></h4>" ;

mtag="<h4 class='message_h4'>" +message+"</h4>" ;

likebutton="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";

thumb="<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

shivam=tag+mtag+likebutton+thumb ;

document.getElementById("output").innerHTML +=shivam ;




//End code
      } });  }); }
getData();

function updateLike(message_id)

{
      shbeeu=message_id ;

      likes=document.getElementById(shbeeu).value ;

      updated=Number(likes)+1 ;

      
      firebase.database().ref(room_name).child(message_id).update({
  
            
            like:updated
       
        }) ;
}

function logout()

{
localStorage.removeItem ("user_name") ;

localStorage.removeItem ("room_name") ;

window.location= "index.html" ;

}