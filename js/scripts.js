$(document).ready(function() {
  $("#button1").click(function(event) {
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

  $("#button2").click(function(event) {
    var largeorsmall = $("#largeorsmall").val();
    var tasksone = $("#tasksone").val();
    var taskstwo = $("#taskstwo").val();
    var firstnameInput = $("input#firstname").val();

    $(".firstname").text(firstnameInput);

      if (largeorsmall === "small" && tasksone === ("csharp" || "javaone") && taskstwo === ("javatwo" || "phpone" || "phptwo")) {
        $("#suggestion").show();
        $(".answer").show();
        $("#ruby").show();
        $("#endmessage").show();
      } else if (largeorsmall === "large" && tasksone === "csharp" && taskstwo === ("javatwo" || "phpone" || "phptwo")) {
        $("#suggestion").show();
        $(".answer").show();
        $("#csharp").show();
        $("#endmessage").show();
      } else if (largeorsmall === "large" && tasksone === "javaone" && taskstwo === "javatwo") {
        $("#suggestion").show();
        $(".answer").show();
        $("#java").show();
        $("#endmessage").show();
      } else if (largeorsmall === "large" && tasksone === ("csharp" || "javaone") && taskstwo === ("phpone" || "phptwo")) {
        $("#suggestion").show();
        $(".answer").show();
        $("#php").show();
        $("#endmessage").show();
      } else if (largeorsmall === "large" && tasksone === ("csharp" || "javaone") && taskstwo === ("javatwo" || "phpone" || "phptwo")) {
        $("#suggestion").show();
        $(".answer").show();
        $("#php").show();
        $("#endmessage").show();
      } else {
        console.log("error");
      }

    event.preventDefault();
  });
});
