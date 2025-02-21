 let hr = document.getElementById('hour');
        let min = document.getElementById('min');
        let sec = document.getElementById('sec');

        function displayTime() {
            let date = new Date();

            // Get hours, minutes, and seconds
            let hh = date.getHours() % 12; // Convert to 12-hour format
            let mm = date.getMinutes();
            let ss = date.getSeconds();

            // Calculate rotations
            let hRotation = 30 * hh + mm / 2; 
            let mRotation = 6 * mm;           
            let sRotation = 6 * ss;           

            // Apply rotations
            hr.style.transform = `rotate(${hRotation}deg)`;
            min.style.transform = `rotate(${mRotation}deg)`;
            sec.style.transform = `rotate(${sRotation}deg)`;
        }

        // Update time every second
        setInterval(displayTime, 1000);
        displayTime(); // Initial call to set the correct time immediately
