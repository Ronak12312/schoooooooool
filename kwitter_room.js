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

usernames=localStorage.getItem("user_name");
document.getElementById("namegive").innerHTML="Welcome "+usernames;
function addroom(){
roomname=document.getElementById("room_name").value;
firebase.database().ref("/").child(roomname).update({
purpose:"adding user"
});
localStorage.setItem("roomname",roomname);
window.location="kwitterpage.html";
}
function getData() {
firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
 room_names = childKey;
row="<div class='room_name' id="+room_names+"onclick='rdtrn(this.id)'>"+room_names+"</div><hr>";
document.getElementById("output").innerHTML +=row;
});});}
getData();
function rdtrn(name){
localStorage.setItem("roomname",name);
window.location="kwitterpage.html";
}
function logout(){
localStorage.removeItem("roomname");
localStorage.removeItem("user_name");
window.location="index.html";
}