$( function() {
    $( ".draggable" ).draggable();
  } );
$('#widget').draggable();

var meow = new Audio(`./music/meow.mp3`);

$(function(){
  $(".form1").click(function(){
    meow.play();
    $( ".everything1" ).toggleClass("visibility");
    $( ".form2" ).toggleClass("visibility");
});
});

$(function(){
  $(".close1").click(function(){
    meow.play();
    $( ".everything1" ).toggleClass("visibility");
    $( ".form2" ).toggleClass("visibility");
});
});

$(function(){
  $(".submit").click(function(){
    meow.play();
    $( ".name" ).val("");
    $( ".name2" ).val("");
    $( ".email" ).val("");
});
});


$(function(){
  $(".rhomb1").click(function(){
    meow.play();
    $( ".a1" ).toggleClass("visibility");
    $( ".prints" ).toggleClass("visibility");
});
});

$(function(){
  $(".rhomb2").click(function(){
    meow.play();
    $( ".a2" ).toggleClass("visibility");
    $( ".souvenirs" ).toggleClass("visibility");
});
});
$(function(){
  $(".rhomb3").click(function(){
    meow.play();
    $( ".a3" ).toggleClass("visibility");
    $( ".knots" ).toggleClass("visibility");
});
});

$(function(){
  $(".sotr").click(function(){
    meow.play();
    var value = $(".password").val();
    if (value == "сюр"){
      window.open("employ.html");
    }else{
      alert("пароль неверный! подумай ещё");
    };
});
});
