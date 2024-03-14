$(function () {
  

  $(".saveBtn").on("click", function() {
    var timeBlockID = $(this).parent().attr("id");
    var textValue = $(this).siblings("textarea").val();
    localStorage.setItem(timeBlockID, textValue);

    saveNotification("Event Saved ✔️");
  });


  var currentHour = dayjs().hour();
  $(".time-block").each(function () {
    var timeBlockHour = parseInt($(this).attr("id").split("-")[1]);

    if (timeBlockHour < currentHour) {
      $(this).addClass("past");
    } else if (timeBlockHour === currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });



});
