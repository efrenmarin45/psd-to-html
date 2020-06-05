//Allows for the Navbar to change with scrolling
$(window).scroll(function(){
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 430);
});