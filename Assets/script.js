var currentDate = dayjs().format("dddd, MMMM D, YYYY");
$("#currentDay").text(currentDate);



$(function () {
  

  $(".saveBtn").on("click", function() {
    var timeBlockID = $(this).parent().attr("id");
    var textValue = $(this).siblings("textarea").val();
    localStorage.setItem(timeBlockID, textValue);

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

  $(".time-block").each(function () {
    var timeBlockId = $(this).attr("id");
    var storedText = localStorage.getItem(timeBlockId);

    if (storedText) {
      $(this).find("textarea").val(storedText);
    }

    
  });





});
