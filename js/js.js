function randomfigures(){
  var nomer = Math.floor(Math.random() * 10);
  let figure = document.createElement("div")
  $( "#jsback" ).append(figure)
  figure.style.cssText=`
  position: absolute;
  border-radius: 102px;
`;
  wrandom = Math.floor(Math.random() * 31) + 30;
  hrandom = Math.floor(Math.random() * 31) + 30;
  figure.style.width = `${wrandom}vw`;
  figure.style.height = `${hrandom}vh`;
  let hue =  1 + Math.random() * (360 - 1);
  figure.style.backgroundColor = 'hsl(' + hue + ',' + 100 + '%,' + 50 + '%)';
  const max = 100;

  figure.style.bottom = `${Math.floor(Math.random()*(max-30))}vw`
  figure.style.left = `${Math.floor(Math.random()*max-20)}vw`
  var a = Math.floor(Math.random() * 1000 - 5);
  figure.style.transform = 'rotate(' + a + 'deg)';
  figure.classList.add("mylovers");


  var audio = new Audio(`./music/${nomer}.mp3`);
  audio.play();
  setTimeout(() => {
     figure.remove()
   }, 3000);
}

setInterval(randomfigures,200);
