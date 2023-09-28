//your JS code here. If required.

 // Function to update the timer every second
        function updateTimer() {
            const timerElement = document.getElementById("timer");

            // Create a new Date object to get the current date and time
            const now = new Date();

            // Format the date and time as a string
            const dateTimeString = now.toLocaleString();

            // Update the content of the timer element
            timerElement.textContent = dateTimeString;
        }

        // Call the updateTimer function immediately to set the initial time
        updateTimer();

        // Set an interval to update the timer every second (1000 milliseconds)
        setInterval(updateTimer, 1000);
