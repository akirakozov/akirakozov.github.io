window.onload = function() {
    $(".menu-item").click(function(event) {     
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
    }); 
}
