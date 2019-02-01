var myIndex = 0;

carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var y = document.getElementsByClassName("description");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    y[i].style.color = "#d1d1d1";
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1
  }
  x[myIndex - 1].style.display = "block";
  y[myIndex - 1].style.color = "#000";
  setTimeout(carousel, 2000); // changing images every 2 second
}
