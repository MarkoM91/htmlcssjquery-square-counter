var green = $(".green");
var white = $(".white");
var red = $(".red");
var contatore = 0;



green.click(function() {

 contatore -= 1;
 white.html(contatore);
 white.css("background-color" , "rgb(120, 166, 14)");
});

red.click(function() {
  contatore += 1;
  white.html(contatore);
  white.css("background-color" , "rgb(81, 6, 128)");

});
