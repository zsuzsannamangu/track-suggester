$(document).ready(function() {
  $("#button1").click(function(event) {
    var frontorback = $("#frontorback").val();
    var firstnameInput = $("input#firstname").val();
    var emailInput = $("input#email").val();

    $(".email").text(emailInput);
    $(".firstname").text(firstnameInput);

      if (frontorback === "front") {
        $(".backend").hide();
        $(".tasks").hide();
        $("#suggestion").fadeToggle();
        $("#design").fadeToggle();
        $("#endmessage").fadeToggle();
      } else if (frontorback === "back") {
        $(".nextquestions").show();
        $(".btntwo").show();
        $(".answer").hide();
        $("#endmessage").hide();
      } else {
        console.log("error");
      }
  event.preventDefault();
  });

  $("#button2").click(function(event) {
    var largeorsmall = $("#largeorsmall").val();
    var tasksone = $("#tasksone").val();
    var taskstwo = $("#taskstwo").val();
    var firstnameInput = $("input#firstname").val();
    var emailInput = $("input#email").val();

    $(".email").text(emailInput);
    $(".firstname").text(firstnameInput);

      if (largeorsmall === "small") {
        $("#ruby").show();
        $(".suggestion-choice:not(#ruby)").hide();
      } else if (tasksone === "csharp") {
        $("#csharp").show();
        $(".suggestion-choice:not(#csharp)").hide();
      } else if (taskstwo === "javatwo") {
        $("#java").show();
        $(".suggestion-choice:not(#java)").hide();
      } else if (taskstwo === "php") {
        $("#php").show();
        $(".suggestion-choice:not(#php)").hide();
      } else {
        console.log("error");
      }
      $("#design").hide();
      $(".answer").show();
      $("#endmessage").show();
      $("#suggestion").show();
    event.preventDefault();
  });
});
