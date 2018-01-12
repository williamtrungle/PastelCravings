"use strict"

function carousel() {
    var x = document.getElementsByClassName("slides");
    for (let i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    slideIndex++; //initialized globally in index.html
    if (slideIndex > x.length) {slideIndex = 1} 
    x[slideIndex-1].style.display = "block"; 
    setTimeout(carousel, 10000); // Change image every 10 seconds
}

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var x = document.getElementsByClassName("slides");
    if (n > x.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = x.length} ;
    for (let i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    x[slideIndex-1].style.display = "block";
}

function mobileNav() {
    var x = document.getElementById("menu");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else { 
        x.className = x.className.replace(" w3-show", "");
    }
}

// Note that the target's class should be nonempty for indexOf
// to work and w3-hide should not be the first or last element.
function myAccordion(id, other) {
    var socials = ['facebook', 'instagram', 'email'];
    var i = document.getElementById(id);
    var o = document.getElementById(other);
    
    if (i.className.indexOf(" w3-hide ") == -1) {
        i.className += " w3-hide ";
    } else {
        i.className = i.className.replace(" w3-hide ", " ");
    }
    
    if (o.className.indexOf(" w3-hide ") == -1) {
        o.className += " w3-hide ";
    } else {
        for (let k = 0; k < socials.length; k++) {
            let social = document.getElementById(socials[k]);
            if (social.className.indexOf(" w3-hide ") == -1) {
                social.className += " w3-hide ";
            } else {
                social.className = social.className.replace(" w3-hide ", " ");
            }
        }
    }
}

function topFunction(scrollDuration) {
    var scrollStep = -window.scrollY / (scrollDuration / 15),
        scrollInterval = setInterval(function(){
        if ( window.scrollY != 0 ) {
            window.scrollBy( 0, scrollStep );
        }
        else clearInterval(scrollInterval); 
    },15);
}