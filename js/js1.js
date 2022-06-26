$( function() {
    $( ".draggable" ).draggable();
  } );
$(function(){
  $(".form1").click(function(){
    $( ".everything1" ).toggleClass("visibility");
    $( ".form2" ).toggleClass("visibility");
});
});

$(function(){
  $(".close1").click(function(){
    $( ".everything1" ).toggleClass("visibility");
    $( ".form2" ).toggleClass("visibility");
});
});

$(function(){
  $(".submit").click(function(){
    $( ".name" ).val("");
    $( ".name2" ).val("");
    $( ".email" ).val("");
});
});


$(function(){
  $(".rhomb1").click(function(){
    $( ".a1" ).toggleClass("visibility");
    $( ".prints" ).toggleClass("visibility");
});
});

$(function(){
  $(".rhomb2").click(function(){
    $( ".a2" ).toggleClass("visibility");
    $( ".souvenirs" ).toggleClass("visibility");
});
});
$(function(){
  $(".rhomb3").click(function(){
    $( ".a3" ).toggleClass("visibility");
    $( ".knots" ).toggleClass("visibility");
});
});

$(function(){
  $(".sotr").click(function(){
    var value = $(".password").val();
    if (value == "сюр"){
      window.open("employ.html");
    }else{
      alert("пароль неверный! подумай ещё");
    };



});
});
