$('.menu-toggle').click(function(e){
  //click event for left clicks only! http://www.jacklmoore.com/notes/click-events
  if (!(e.which > 1 || e.shiftKey || e.altKey || e.metaKey)) {
    e.preventDefault();
    if($(this).parent().find('.menu').hasClass('expanded-mobile-menu')){
      $(this).removeClass('expanded-menu-toggle').parent().removeClass('nav-expanded').find('.menu').removeClass('expanded-mobile-menu');
    }else{
      $(this).addClass('expanded-menu-toggle').parent().addClass('nav-expanded').find('.menu').addClass('expanded-mobile-menu');
    }
  }
});


// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
