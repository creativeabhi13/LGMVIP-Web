let slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}


function currentSlide(n) {
    console.log('heheh')
  showSlides(slideIndex = n);
}

function showSlides(n) {
    
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

 /* var slideIndex = 0;
 showSlides();
 function showSlides() {
    console.log('sssssss')
  var i;
     var slides = document.getElementsByClassName("slide");
     console.log(slides);
     for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
  }
  slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
 } */

 