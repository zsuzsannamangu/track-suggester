$(document).ready(function() {
  $("button").click(function(event) {
    var frontorback = $("#frontorback").val();
    var largeorsmall = $("#largeorsmall").val();
    var tasks1 = $("#tasks1").val();
    var tasks2 = $("#tasks2").val();
    var tasks3 = $("#tasks3").val();
      if (frontorback === "front") {
        $(".nextquestions:not(#frontorback)").hide();
        $(".answer:not(#design)").hide();
        $("#design").show();
      } else if (frontorback === "back") {
        $(".nextquestions").show();
        $(".answer").hide();
      } else {
        console.log("error");
      }
      
        $(".nextquestions").show();
        $(".answer").show();
  event.preventDefault();

  });
});
