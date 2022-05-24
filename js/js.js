// $( function() {
//     $( ".draggable" ).draggable();
//   } );


figures = [
'0.svg',
'1.svg',
'2.svg',
'3.svg',
'4.svg',
'5.svg',
'6.svg',
'7.svg',
'8.svg',
'9.svg'
]
//
// // создала массивчик как на питоне потому что по-другому не умею
//

colors = [
'#E10138',
'#F0106A',
'#ACE54C',
'#3EC4E1',
'#FFD12B',
'#DBFF00',
'#FF73BE',
'#E10138',
'#E10138',

]
function randomfigures(){
  var nomer = Math.floor(Math.random() * 10);
  var img = document.createElement("img");
  img.src = `./images/${nomer}.svg`;
  img.style.position = "absolute";
  const max = 100;
  color_random = colors[Math.floor(Math.random()*colors.length)];
  console.log(color_random);
  img.style.bottom =  `${Math.floor(Math.random()*(max + 0.5))}%`
  img.style.left = `${Math.floor(Math.random()*max + 0.5)}%`
  img.style.right = `${Math.floor(Math.random()*max + 0.5)}%`
  var a = Math.random() * 1000 - 5;
  img.style.transform = 'rotate(' + a + 'deg)';
  img.classList.add("mylovers");
  img.classList.add("draggable");
  document.body.appendChild(img);
}

setInterval(randomfigures, 1000);
