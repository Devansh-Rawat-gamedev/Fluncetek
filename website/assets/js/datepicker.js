// Backdate Hide Script 
document.addEventListener("DOMContentLoaded", () => {
    let dtToday = new Date();
    let month = dtToday.getMonth() + 1;
    let day = dtToday.getDate();
    let year = dtToday.getFullYear();
    if (month < 10)
        month = '0' + month.toString();
    if (day < 10)
        day = '0' + day.toString();
    let maxDate = year + '-' + month + '-' + day;
    document.getElementById("date_app").setAttribute('min', maxDate);
});


