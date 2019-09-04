// Print to the console to show the script has loaded.
console.log("Script loaded: scrolltotop.js");

// The button remains hidden until the user scrolls 500px down the page.
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    // If the user scrolls down the page 700px or more then show the button element.
  if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
    document.getElementById("myBtn").style.display = "block";
    // Otherwise, the button remains hidden.
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// The page scrolls back to the top when the button is clicked.
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}