var app = document.getElementById("quotesection");

var Typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

Typewriter.pauseFor(2500)
  .typeString("28yrs of Experience")
  .pauseFor(300)
  .typeString("Experienced Civil")
  .pauseFor(300)
  .typeString("Construction Expert")
  .pauseFor(300)
  .start();
