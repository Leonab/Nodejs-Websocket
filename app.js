var sock = new WebSocket("ws://localhost:5001");

sock.onopen = function(event){
alert("sock connected successfully");
setTimeout(function(){
  sock.send("Hello!");
},1000);

sock.onmessage = function(event){
  console.log(event);
}
}
