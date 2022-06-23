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
    $( ".name1" ).val("");
    $( ".email" ).val("");
});
});
