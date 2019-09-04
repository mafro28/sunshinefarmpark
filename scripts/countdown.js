// Print to the console to show the script has loaded
console.log("Script loaded: countdown.js");

// Function to start out timer counting down
function startTimer(timeString, countdownElement)
{
    // Set the date we're counting down to
    var countDownDate = new Date(timeString).getTime();
    
    // Update the countdown every 1 second using the setInterval function.
    // We provide our own function directly to the setInterval function - this will be called at each interval (1 seconds)
    // We then store the result in a variable so we can stop the timer later.
    var repeater = setInterval(function() {
        
        // Get the current date and time
        var now = new Date().getTime();
        
        // Find the difference between now and the target date
        var milisecondsRemaining = countDownDate - now;
        
        // Find the absolute time remaining for each denomenation
        var secondsRemaining = milisecondsRemaining / 1000;
        var minutesRemaining = secondsRemaining / 60;
        var hoursRemaining = minutesRemaining / 60;
        var daysRemaining = hoursRemaining / 24;
        
        // Format nicely
        var days = Math.floor(daysRemaining);
        
        var hoursAccountedFor = days * 24;
        var hours = Math.floor(hoursRemaining) - hoursAccountedFor;
        
        var minutesAccountedFor = (hoursAccountedFor + hours) * 60;
        var minutes = Math.floor(minutesRemaining) - minutesAccountedFor;
        
        var secondsAccountedFor = (minutesAccountedFor + minutes) * 60;
        var seconds = Math.floor(secondsRemaining) - secondsAccountedFor;
        
        // Output the result in an element on our html page
        document.getElementById(countdownElement).innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
        
    }, 1000 )
}