function f1(id){
    const parent = document.getElementById('indicator');
    const elements = parent.querySelectorAll('*');
    for (let i = 0; i < elements.length; i++) {
        // console.log(elements[i]);
        if (getComputedStyle(elements[i]).display === 'flex' && parent.contains(elements[i])) {
            elements[i].style.display="none";
    // Do something with the id
        }
    }
    console.log(id);
    id.style.display = "flex"; 
}
$(document).ready(function(){
    AOS.init();
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });
$('.owl-carousel').owlCarousel({
  items:3,
  margin:0,
  autoHeight:true
});
