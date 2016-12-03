var pingpong = function() {
  var userInput = prompt("input any number")
  var display = [];
  for (n= 1;n<= userInput;n++){
  display.push(n)
  }

  for(index=0;index<=display.length;index++){
    if(display[index]%3 === 0) {
      display.splice(index, 1, "ping");
    }else if(display[index]%5 === 0) {
      display.splice(index, 1, "pong");
    }else if(display[index]%15 === 0) {
      display.splice(index, 1, "ping-pong");
    };
  document.write(display);
  };

  $(document).ready(function() {
    $("#result").submit(function(event) {
      event.preventDefault();
      pingpong()
    });
