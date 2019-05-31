function getRandom(min, max) {
  var delta = max - min + 1;
  var rnd = Math.floor(Math.random() * delta) + min;

  return rnd;
}

function minusClick() {
  var green = $(".green");
  var white = $(".white");

  green.click(function() {

    var contatore = white.text();
    contatore --;
    if (contatore >= 0) {
        white.text(contatore);
        removeColorClasses();
        randomColor();
    }
  });
}

function plusClick() {
  var white = $(".white");
  var red = $(".red");

  red.click(function() {

    var contatore = white.text();
    contatore ++;
    white.text(contatore);
    removeColorClasses();
    randomColor();
  });
}

var colorClasses = [ "box-green", "box-blue", "box-purple" ];

function removeColorClasses() {
  var valueDiv = $("#box-value");

  for (var i=0;i<colorClasses.length;i++) {
      valueDiv.removeClass(colorClasses[i]);
  }
}

function randomColor() {

  var rndInd = getRandom(0, 2);
  var colorClass = colorClasses[rndInd];

  ("rndInd", rndInd);
  ("colorClass", colorClass);

  var valueDiv = $("#box-value");
  valueDiv.addClass(colorClass);
}

function init() {
  minusClick();
  plusClick();
}

init();
