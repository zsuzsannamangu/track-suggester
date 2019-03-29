$(document).ready(function() {
  $("button").click(function(event) {
    var frontorback = $("#frontorback").val();
      if (frontorback === "front") {
        $(".backend").hide();
        $(".tasks").hide();
        $("#suggestion").show();
        $("#design").show();
      } else if (frontorback === "back") {
        $(".nextquestions").show();
        $(".answer").hide();
      } else {
        console.log("error");
      }
  event.preventDefault();
  });

  $("button").click(function(event) {
    var largeorsmall = $("#largeorsmall").val();
      if (largeorsmall === "small") {
        $(".tasks").hide();
        $("#suggestion").show();
        $("#ruby").show();
      } else if (largeorsmall === "large") {
        $(".tasks").show();
        $(".answer").hide();
      } else {
        console.log("error");
      }
  event.preventDefault();
  });
});
//
//
// var tasks1 = $("#tasks1").val();
// var tasks2 = $("#tasks2").val();
// var tasks3 = $("#tasks3").val();
