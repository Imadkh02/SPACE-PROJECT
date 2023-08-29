




function changeMoon() {
    var image = document.getElementById('myImage');
    image.src = 'assets/destination/image-moon.webp';
    var heading = document.getElementById('myHeading');
    heading.textContent = 'MOON';
    var Paragraph = document.getElementById('myParagraph');
    Paragraph.textContent = "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.";
    var Altitude = document.getElementById('myAltitude');
    Altitude .textContent = "384,400KM";

    var Diameter = document.getElementById('myDiameter');
    Diameter.textContent = "3 DAYS";

    // const selcted = slect1.getAttribute('aria-selected');
    // // if (selcted === "false" ){
    //   slect1.setAttribute('aria-selected', true);
    //   slect2.setAttribute('aria-selected', false);
    //   slect3.setAttribute('aria-selected', false);

    // // }else if( visibility === "true" ){
    // //   slect1.setAttribute('aria-selected', true);
    // //   slect2.setAttribute('aria-selected', true);
    // //   slect3.setAttribute('aria-selected', true);
    // // }
  }

  function changeMars() {
    var image = document.getElementById('myImage');
    image.src = 'assets/destination/image-mars.webp';
    var heading = document.getElementById('myHeading');
    heading.textContent = 'MARS';
    var Paragraph = document.getElementById('myParagraph');
    Paragraph.textContent = "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!";
    
    var Altitude = document.getElementById('myAltitude');
    Altitude .textContent = "225 MIL. KM";

    var Diameter = document.getElementById('myDiameter');
    Diameter.textContent = "9 MONTHS";
  }
  

  function changeEuropa() {
    var image = document.getElementById('myImage');
    image.src = 'assets/destination/image-europa.webp';
    var heading = document.getElementById('myHeading');
    heading.textContent = 'EUROPA';
    var Paragraph = document.getElementById('myParagraph');
    Paragraph.textContent = "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.";

    var Altitude = document.getElementById('myAltitude');
    Altitude .textContent = "628 MIL. KM";

    var Diameter = document.getElementById('myDiameter');
    Diameter.textContent = "3 YEARS";
  }
  


  function changeTitan() {
    var image = document.getElementById('myImage');
    image.src = 'assets/destination/image-titan.webp';
    var heading = document.getElementById('myHeading');
    heading.textContent = 'TITAN';
    var Paragraph = document.getElementById('myParagraph');
    Paragraph.textContent = "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.";
 
    var Altitude = document.getElementById('myAltitude');
    Altitude .textContent = "1.6 BIL. KM";

    var Diameter = document.getElementById('myDiameter');
    Diameter.textContent = "7 YEARS";
  }
  
  