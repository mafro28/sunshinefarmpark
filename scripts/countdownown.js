// Print to the console to show the script has loaded
console.log("Script loaded: countdownown.js");

// Function to start countdown timer
function startTimer(timeString, countdownElement)
{
    // Set dates the timer is counting down to
    var countDownDate = new Date(timeString).getTime();
    
    // SetInterval value is set to its own function
    // which will be called every second and the result
    // is stored in a variable so the timer can be
    // stopped.
    var repeater = setInterval(function() {
        
    // Get current date and time
    var now = new Date().getTime();
        
    // Calculate the difference between current date (now) and the target date (countDownDate) by subtracting the latter from the former
    var milisecondsRemaining = countDownDate - now;
        
    // Find the remaining time in the form of seconds, minutes, hours and days.
        
    // Find the remaining seconds by dividing the remaining miliseconds by 1000.
    var secondsRemaining = milisecondsRemaining / 1000;
    
    // Find the remaining minutes by dividing the remaining seconds by 60.
    var minutesRemaining = secondsRemaining / 60;
        
    // Find the remaining hours by dividing the remainaing minutes by 60.
    var hoursRemaining = minutesRemaining / 60;
        
    // Find the remaining days by dividing the remainaing hours by 24.
    var daysRemaining = hoursRemaining / 24;
        
    // Math.floor rounds a number down to the nearest integer and returns the result.
    var days = Math.floor(daysRemaining);
        
    var hoursAccountedFor = days * 24;
    var hours = Math.floor(hoursRemaining) - hoursAccountedFor;
        
    var minutesAccountedFor = (hoursAccountedFor + hours) * 60;
    var minutes = Math.floor(minutesRemaining) - minutesAccountedFor;
        
    var secondsAccountedFor = (minutesAccountedFor + minutes) * 60;
    var seconds = Math.floor(secondsRemaining) - secondsAccountedFor;
        
    // Output the results to the #easter <div> at the bottom of the attractions page.
    document.getElementById(countdownElement).innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
        
    }, 1000 )
}