// $( function() {
//     $( ".draggable" ).draggable();
//   } );


// figures = [
// '0.svg',
// '1.svg',
// '2.svg',
// '3.svg',
// '4.svg',
// '5.svg',
// '6.svg',
// '7.svg',
// '8.svg',
// '9.svg'
// ]
//
// // создала массивчик как на питоне потому что по-другому не умею
//

// colors = [
// '#E10138',
// '#F0106A',
// '#ACE54C',
// '#3EC4E1',
// '#FFD12B',
// '#DBFF00',
// '#FF73BE',
// '#E10138',
// '#E10138',
//
// ]
function randomfigures(){
  var nomer = Math.floor(Math.random() * 10);
  var img = '<div  class='mylovers draggable'></div>';
   $("#jsback").prepend(img);
  img.mask = `./images/${nomer}.svg`;
  img.style.position = "absolute";
  const max = 100;
  // color_random = colors[Math.floor(Math.random()*colors.length)];
  // console.log(color_random);
  // img.style.top = `${Math.floor(Math.random()*max + 1)}%`
  img.style.bottom =  `${Math.floor(Math.random()*(max + 1))}%`
  img.style.left = `${Math.floor(Math.random()*max + 0.5)}%`
  img.style.right = `${Math.floor(Math.random()*max + 0.5)}%`
  var a = Math.random() * 1000 - 5;
  img.style.transform = 'rotate(' + a + 'deg)';
  img.classList.add("mylovers");
  img.classList.add("draggable");

  var audio = new Audio(`./music/${nomer}.mp3`);
  audio.play();


  document.body.appendChild(img);

  setTimeout(() => {
    document.body.removeChild(img);
}, 4000);

}

setInterval(randomfigures, 200);
