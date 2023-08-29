const primarynav = document.querySelector('.primary-nav');
const navToggle = document.querySelector('.Mobile-nav-toggle');

navToggle.addEventListener('click', ()=>{
     const visibility = primarynav.getAttribute('data-visible');
     if (visibility === "false" ){
        primarynav.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);
     }else if( visibility === "true" ){
        primarynav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
     }
})  

var contactButtons = document.querySelectorAll("#button-contact");
contactButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    document.getElementById("contactPopup").style.display = "block";
    document.getElementById("contactPopup").style.animation = "in 0.2s";
  });
});

document.getElementById("closeButton").addEventListener("click", function() {
  document.getElementById("contactPopup").style.display = "none";
  document.getElementById("contactPopup").style.transition = "all .20s ease-in-out";
});