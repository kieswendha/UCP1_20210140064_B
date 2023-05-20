var currentHour = new Date().getHours();

var greetings = {
    morning: "Good morning!",
    afternoon: "Good afternoon!",
    evening: "Good evening!",
    night: "Good night!"
};

var greeting;
if (currentHour >= 5 && currentHour < 12) {
    greeting = greetings.morning;
} else if (currentHour >= 12 && currentHour < 18) {
    greeting = greetings.afternoon;
} else if (currentHour >= 18 && currentHour < 24) {
    greeting = greetings.evening;
} else {
    greeting = greetings.night;
}

var greetingElement = document.getElementById("greeting");
greetingElement.innerText = greeting;

function updateTime() {
    var now = new Date();
    var day = now.toLocaleDateString('en-US', { weekday: 'long' });
    var date = now.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    hours = hours.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');

    var timeString = hours + ':' + minutes + ':' + seconds;
    var dateTimeString = day + ', ' + date + ' ' + timeString;

    document.getElementById('clock').textContent = dateTimeString;
}

setInterval(updateTime, 1000);