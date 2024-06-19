//Digital Clock

function CurrentTime() {
    const now = new Date();
    let hours = now.getHours();
    const meridiem = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // Reassigning hours to 12-hour format
    hours = hours.toString().padStart(2, '0'); // Padding hours
    const minutes = now.getMinutes().toString().padStart(2, '0'); // Padding minutes
    const seconds = now.getSeconds().toString().padStart(2, '0'); // Padding seconds
    const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;
    document.getElementById("clock").textContent = timeString;
}

// Update the clock every second
function startClock() {
    setInterval(CurrentTime, 1000);
}

//POMODORO TIME
