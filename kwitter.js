function adduser(){
    username=document.getElementById("un").value;
    localStorage.setItem("user_name",username);
    window.location="kwitter_room.html";
}