var days = ["Monday","Tuesday","Wednesday","Thusday","Friday"];
// slice for range. Each one of these selections just cooresponds to a number 1-14
var hours = ["09:00 AM","10:00 AM","11:00 AM","12:00 PM",
                "01:00 PM","02:00 PM","03:00 PM","04:00 PM",
                "05:00 PM","06:00 PM","07:00 PM","08:00 PM",
                "09:00 PM","10:00 PM"];
days.forEach(() => {
    hours.forEach(() => {
        document.querySelector(`input[name='${day} ${hour}']`).click();
    });
});