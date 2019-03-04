var green = $(".green");
var white = $(".white");
var red = $(".red");
var contatore = 0;



green.click(function() {

 contatore -= 1;
 white.html(contatore);
 white.toggleClass("whitepurple" , "white");
});

red.click(function() {
  contatore += 1;
  white.html(contatore);
  white.toggleClass("whiteyellow" , "white");
});
