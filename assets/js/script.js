var localTime = moment().format('MMMM Do YYYY');
$("#currentDay").html(localTime);

$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        //on save click, get variables, push to local storage!
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, text);
    })
 
})