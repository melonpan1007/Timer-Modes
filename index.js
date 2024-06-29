document.addEventListener('DOMContentLoaded', function() {
    startClock(); // Start the clock immediately on page load
});

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

function startClock() {
    CurrentTime(); // Initial call to display current time immediately
    setInterval(CurrentTime, 1000); // Update the clock every second
}
