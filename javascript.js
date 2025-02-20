let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

function displayTime() {
    let date = new Date();

    // Getting hour, minutes, seconds from date
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    // Calculating rotations
    let hRotation = 30 * hh + mm / 2; // 360° / 12 hours
    let mRotation = 6 * mm;           // 360° / 60 minutes
    let sRotation = 6 * ss;           // 360° / 60 seconds

    // Apply rotations
    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;
}

setInterval(displayTime, 1000);
