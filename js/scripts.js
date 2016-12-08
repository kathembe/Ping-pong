//business interface
var display = [];
var pingpong=function(userInput){
  for (n= 1;n<= userInput;n++){
  display.push(n)
  }
  for(index=0;index<=display.length;index++){
    if(display[index]%15 === 0) {
    display[index] = "ping pong"
    }else{
      if (display[index]%3 === 0) {
      display[index] = "ping";
    }
        if (display[index]%5 === 0) {
      display[index] = "pong";
    }
    }
   }
  return display;
};





//userinterface
$(document).ready(function() {
  $("#formation").submit(function(event) {
    event.preventDefault();

    var userInput = parseInt($("input#firstnumber").val());
    var result = pingpong(userInput);
    result.forEach(function(index){
      $(".show-result ul").append("<li class='index'>"+index+"</li>");
    });
  });
});
