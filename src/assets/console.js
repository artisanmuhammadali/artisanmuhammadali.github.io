document.addEventListener("DOMContentLoaded", function () {
  const image = document.getElementById("console");
  // Check if the image is already loaded
  if (image.complete) {
    typewriter();
  }
  else {
    image.addEventListener("load", function () {
      typewriter();
    });
}
});

var birthday = new Date('December 26, 2001 00:00:00');
var ageDifMs = Date.now() - birthday.getTime();
var ageDate = new Date(ageDifMs); // milliseconds from epoch
var age = Math.abs(ageDate.getUTCFullYear() - 1970).toString();
var finished_typing = false;
var filled = false;

// set up text to print, each item in array is new line
var aText = [
  "> Hey there!",
  "> I’m Muhammad Ali Bin Sarwar, "+ age +" years old Software Engineer.",
  "> Apart from coding, I love to Diving into the world of Cars and Bikes.",
  "> Right now, I work as a Software Developer at IPS Pakistan.",
  "> Let’s connect! 😊",
];
var iSpeed = 10; // time delay of print out
var iIndex = 0; // start printing array at this position
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines

var iTextPos = 0; // initialize text position
var sContents = ''; // initialize contents variable
var iRow; // initialize current row

function typewriter() {
  sContents = ' ';
  iRow = Math.max(0, iIndex - iScrollAt);
  var destination = document.getElementById("typedtext");
  while (iRow < iIndex) {
      sContents += aText[iRow++] + '<br />';
  }
  if (!finished_typing) {
      destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
  }
  if (iTextPos++ == iArrLength) {
      iTextPos = 0;
      iIndex++;
      if (iIndex != aText.length) {
          iArrLength = aText[iIndex].length;
          if (!finished_typing) {
              setTimeout(typewriter, 500);
          }
      } else {
          finished_typing = true;
          filled = true;
          showcontent();
          destination.innerHTML = destination.innerHTML.replace("_", "");
      }
  } else {
      if (!finished_typing) {
          setTimeout(typewriter, iSpeed);
      }
  }
}

function showcontent() {
	var elements = document.getElementsByClassName('aftertw');
  	for(var i = 0; i < elements.length; i++) {
		document.body.style.overflow = 'visible';
    	elements[i].style.visibility = 'visible';
		elements[i].style.animation = 'fadein 2s';
  	}
}