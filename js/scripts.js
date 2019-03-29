$(document).ready(function() {
  $("button").click(function(event) {
    var frontorback = $("#frontorback").val();
    var firstnameInput = $("input#firstname").val();

    $(".firstname").text(firstnameInput);

      if (frontorback === "front") {
        $(".backend").hide();
        $(".tasks").hide();
        $("#suggestion").show();
        $("#design").show();
      } else if (frontorback === "back") {
        $(".nextquestions").show();
        $(".btntwo").show();
        $(".answer").hide();
      } else {
        console.log("error");
      }
  event.preventDefault();
  });

  $("button").submit(function(event) {
    var largeorsmall = $("#largeorsmall").val();
    var tasks1 = $("#tasks1").val();
    var tasks2 = $("#tasks2").val();
    var tasks3 = $("#tasks3").val();
    var firstnameInput = $("input#firstname").val();
      if (largeorsmall === "large" && tasks1 === "csharp") {
        $("#suggestion").show();
        $("#csharp").show();
      } else if (largeorsmall === "large" && tasks1 === "java1" && tasks2 === "php1") {
        $("#suggestion").show();
        $("#java").show();
      } else if (largeorsmall === "large" && tasks2 === "php1" && tasks3 === "php2") {
        $("#suggestion").show();
        $("#php").show();
      } else if (largeorsmall === "small" && tasks3 === "ruby") {
        $("#suggestion").show();
        $("#ruby").show();
      } else {
        console.log("error");
      }

      $(".firstname").text(firstnameInput);

  event.preventDefault();
  });
});
