var localTime = moment().format('MMMM Do YYYY');
$("#currentDay").html(localTime);

$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        //on save click, get variables, push to local storage!
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, text);
    })
   
    function getTime() {
        //get current hour
        var timeHourEl = moment().hour();

        // grab each timeBlock
        $(".time-block").each(function () {
            var timeBlock = parseInt($(this).attr("id").split("hour")[1]);

            if (timeBlock < timeHourEl) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (timeBlock === timeHourEl) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }

    //pull information from local storage if applicable
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

    getTime();
})