//Getting current name of the day of the week and the date
var today = new Date();

function getDayName(dateStr, locale) {
    var date = new Date(dateStr);
    return date.toLocaleDateString(locale, {weekday: 'long'});
}

var dateStr = today;
var dayOfWeek = getDayName(dateStr, "en-US");
var dayOfMonth = String(today.getDate()).padStart(2, '0');
var month = today.toLocaleString('default', {month: 'long'});

document.getElementById("currentDayDate").textContent = dayOfWeek + ", " + dayOfMonth + " " + month;

//Dropdown pushes content down when clicked
$("li.dropdown").click(function() {
  $("nav.navbar" ).toggleClass( "open");
});