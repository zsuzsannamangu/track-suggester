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

      if (largeorsmall === "small" && tasksone === "csharp" || tasksone === "javaone" && taskstwo === "javatwo" || taskstwo === "php") {
        $("#suggestion").show();
        $(".answer").show();
        $("#ruby").show();
        $("#endmessage").show();
        $("#java").hide();
        $("#php").hide();
        $("#design").hide();
        $("#csharp").hide();
      } else if (largeorsmall === "large" && tasksone === "csharp" && taskstwo === "javatwo" || taskstwo === "php") {
        $("#suggestion").show();
        $(".answer").show();
        $("#csharp").show();
        $("#endmessage").show();
        $("#java").hide();
        $("#php").hide();
        $("#design").hide();
        $("#ruby").hide();
      } else if (largeorsmall === "large" && tasksone === "javaone" && taskstwo === "javatwo") {
        $("#suggestion").show();
        $(".answer").show();
        $("#java").show();
        $("#endmessage").show();
        $("#ruby").hide();
        $("#php").hide();
        $("#design").hide();
        $("#csharp").hide();
      } else if (largeorsmall === "large" && tasksone === "javaone" && taskstwo === "php") {
        $("#suggestion").show();
        $(".answer").show();
        $("#php").show();
        $("#endmessage").show();
        $("#java").hide();
        $("#ruby").hide();
        $("#design").hide();
        $("#csharp").hide();
      } else {
        console.log("error");
      }

    event.preventDefault();
  });
});
