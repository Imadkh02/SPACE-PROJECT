const slect1 = document.querySelector('#li-1');
const slect2 = document.querySelector('#li-2');
const slect3 = document.querySelector('#li-3');

const element = document.getElementById('content-anim');


function changeMoon() {
    var image = document.getElementById('myImage');
    image.src = 'assets/technology/image-launch-vehicle-portrait.jpg';
    var heading = document.getElementById('myHeading');
    heading.textContent = 'Launch vehicle';
    var Paragraph = document.getElementById('myParagraph');
    Paragraph.textContent = "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our  WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!  ";
  
    
    slect1.setAttribute('aria-selected', true);
    slect2.setAttribute('aria-selected', false);
    slect3.setAttribute('aria-selected', false);
  }

  function changeMars() {
    var image = document.getElementById('myImage');
    image.src = 'assets/technology/image-space-capsule-portrait.jpg';
    var heading = document.getElementById('myHeading');
    heading.textContent = 'Space capsule';
    var Paragraph = document.getElementById('myParagraph');
    Paragraph.textContent = "  A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where  you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained. ";
 
    
    slect1.setAttribute('aria-selected', false);
    slect2.setAttribute('aria-selected', true);
    slect3.setAttribute('aria-selected', false);
  }
  

  function changeEuropa() {
    var image = document.getElementById('myImage');
    image.src = 'assets/technology/image-spaceport-portrait.jpg';
    var heading = document.getElementById('myHeading');
    heading.textContent = ' Spaceport';
    var Paragraph = document.getElementById('myParagraph');
    Paragraph.textContent = "  A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.";

    


    slect1.setAttribute('aria-selected', false);
    slect2.setAttribute('aria-selected', false);
    slect3.setAttribute('aria-selected', true);
  }
  
  var elementImage = document.getElementById('myImage');

  const handleSelectClick = () => {
    // Remove the 'animated' class from the element
    element.classList.remove('animated');
    elementImage.classList.remove('animated-img');

    // Reapply the 'animated' class after a short delay
    setTimeout(() => {
      element.classList.add('animated');
      elementImage.classList.add('animated-img');
    }, 5);
  };
  
  // Attach the event listener to each select element
  slect1.addEventListener('click', handleSelectClick);
  slect2.addEventListener('click', handleSelectClick);
  slect3.addEventListener('click', handleSelectClick);

  
  