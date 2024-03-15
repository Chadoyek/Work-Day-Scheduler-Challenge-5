// Set current date using dayjs library
var currentDate = dayjs().format("dddd, MMMM D, YYYY");
$("#currentDay").text(currentDate);

// Event handler for save buttons
$(function () {
  $(".saveBtn").on("click", function() {
    // Retrieve time block ID and text value, store in local storage
    var timeBlockID = $(this).parent().attr("id");
    var textValue = $(this).siblings("textarea").val();
    localStorage.setItem(timeBlockID, textValue);
  });

  // Determine current hour and update time block classes accordingly
  var currentHour = dayjs().hour();
  $(".time-block").each(function () {
    var timeBlockHour = parseInt($(this).attr("id").split("-")[1]);

    // Apply past, present, or future class based on comparison with current hour
    if (timeBlockHour < currentHour) {
      $(this).addClass("past");
    } else if (timeBlockHour === currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });

  // Populate textareas with stored values from local storage
  $(".time-block").each(function () {
    var timeBlockId = $(this).attr("id");
    var storedText = localStorage.getItem(timeBlockId);

    if (storedText) {
      $(this).find("textarea").val(storedText);
    }
  });
});
