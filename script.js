var countDownDate = new Date("Apr 5, 2024 20:00:00").getTime();

var x = setInterval(function() {
    var now = new Date().getTime();
    var timeRemain = countDownDate - now;
    var days = Math.floor(timeRemain / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeRemain % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeRemain % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeRemain % (1000 * 60)) / 1000);


    document.getElementById("timeLeft").innerHTML = + days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    if (timeRemain < 0) {
        clearInterval(x);
        document.getElementById("timeLeft").innerHTML = "EVENT OVER";
    }
}, 1000);

let playersLeft = 16
let serverUp = true

document.getElementById("playersLeft").innerHTML = "Players Left: " + playersLeft

function times() {
    if (playersLeft >= 10) {
        document.getElementById("playersLeft").style.color = "lightgreen"
    }
    if (playersLeft < 5) {
        document.getElementById("playersLeft").style.color = "orange"
    }
    if (playersLeft <= 3) {
        document.getElementById("playersLeft").style.color = "red"
    }
    document.getElementById("playersLeft").innerHTML = "Players Left: " + playersLeft

    
    if (serverUp) {
        document.getElementById("serverStatus").style.color = "lightgreen"
        document.getElementById("serverStatus").innerHTML = "Server Status: UP"
    } else {
        document.getElementById("serverStatus").style.color = "red"
        document.getElementById("serverStatus").innerHTML = "Server Status: DOWN ):"
    }
}

setInterval(times, 1000)