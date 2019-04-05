
// Video Play
var myVideo = document.getElementById("video1");
var playPromise = myVideo.play();

playPromise.then(result => {
  var i = 5;
  //myVideo.muted = false;
}).catch(error => {
  var i = 4;
});

function unmuteVideo() {
  myVideo.muted = false;
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
  if (slideIndex === 1) {
    myVideo.play();
  }
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  //dots[slideIndex-1].className += " active";
}


// Video Overlay
function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}

function playPause() { 
  if (myVideo.paused) 
    myVideo.play();
  else 
    myVideo.pause();
} 

//playPause();