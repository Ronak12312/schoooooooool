var firebaseConfig = {
    apiKey: "AIzaSyB0DKo2iOoykO4OqozPg52aPDFcstPcvxk",
    authDomain: "nothing-b092d.firebaseapp.com",
    databaseURL: "https://nothing-b092d-default-rtdb.firebaseio.com",
    projectId: "nothing-b092d",
    storageBucket: "nothing-b092d.appspot.com",
    messagingSenderId: "771785264964",
    appId: "1:771785264964:web:8ddfac201b790804abd111"
  };
  firebase.initializeApp(firebaseConfig);

  username=localStorage.getItem("user_name");
  roomname=localStorage.getItem("roomname");
  
  function send(){
        msg=document.getElementById("msg").value;
        firebase.database().ref("/").child(roomname).push({
          name:username,
          message:msg,
          like:0
      });
      document.getElementById("msg").value="";
  }

function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
       name=message_data['name'];
       like=message_data['like'];
       message=message_data['message'];
       nwt="<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
       mwt="<h4 class='message_h4'>"+message+"</h4>";
       lb="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='ul(this.id)'>";
       swt="<span class='glyphicon glyphicon-thumbs-up'>like:"+like+"</span></button><hr>";
       row=nwt+mwt+lb+swt;
       document.getElementById("output").innerHTML +=row;
    } });  }); }
getData();

function ul(message_id){
    button_id=message_id;
    like=document.getElementById(button_id).value;
    updatelike= Number(like)+1;
    firebase.database().ref(roomname).child(message_id).update({
          like:updatelike
      });
}