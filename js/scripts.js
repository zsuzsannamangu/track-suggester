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
        $("#endmessage").show();
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

  $("button").submit(function(event) {
    var largeorsmall = $("#largeorsmall").val();
    var tasksone = $("#tasksone").val();
    var taskstwo = $("#taskstwo").val();
    var firstnameInput = $("input#firstname").val();

    $(".firstname").text(firstnameInput);
    
      if (largeorsmall === "small" && tasksone === "csharp" || "javaone" && taskstwo === "javatwo" || "phpone" || "phptwo") {
        $("#suggestion").show();
        $("#ruby").show();
      } else if (largeorsmall === "large" && tasksone === "csharp" && taskstwo === "javatwo" || "phpone" || "phptwo") {
        $("#suggestion").show();
        $("#csharp").show();
      } else if (largeorsmall === "large" && tasksone === "javaone" && taskstwo === "javatwo") {
        $("#suggestion").show();
        $("#java").show();
      } else if (largeorsmall === "large" && tasksone === "csharp" || "javaone" && taskstwo === "phpone" || "phptwo") {
        $("#suggestion").show();
        $("#php").show();
      } else if (largeorsmall === "large" && tasksone === "csharp" || "javaone" && taskstwo === "javatwo" || "phpone" || "phptwo") {
        $("#suggestion").show();
        $("#php").show();
      } else {
        console.log("error");
      }

  event.preventDefault();
  });
});
