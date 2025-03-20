document.addEventListener("DOMContentLoaded", function() {
    // Countdown Timer
    function startCountdown(targetDate) {
        function updateTimer() {
            let now = new Date().getTime();
            let distance = targetDate - now;

            if (distance < 0) {
                document.getElementById("timer").innerHTML = "The journey has begun!";
                clearInterval(interval);
                return;
            }

            let years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365));
            let months = Math.floor((distance % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
            let days = Math.floor((distance % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
            let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);

            let countdownText = `${years} years ${months} months`;

            if (years < 1) {
                countdownText += ` ${days} days`;
                // and also...
                if (months < 3) {
                    countdownText += ` ${hours} hours`;
                    // and also...
                    if (months === 0 && days < 7) {
                        countdownText += ` ${minutes} minutes ${seconds} seconds`;
                    }
                }
            }

            countdownText = countdownText
                .replace(/\b1 years\b/, '1 year')
                .replace(/\b1 months\b/, '1 month')
                .replace(/\b1 days\b/, '1 day')
                .replace(/\b1 hours\b/, '1 hour')
                .replace(/\b1 minutes\b/, '1 minute')
                .replace(/\b1 seconds\b/, '1 second');

            countdownText = countdownText
                .replace(/\b0 years\b/, '')
                .replace(/\b0 months\b/, '')
                .replace(/\b0 days\b/, '')
                .replace(/\b0 hours\b/, '')
                .replace(/\b0 minutes\b/, '');

            countdownText = countdownText.replace(/\s+/g, ' ').trim();

            document.getElementById("timer").innerHTML = countdownText;
        }

        updateTimer();
        let interval = setInterval(updateTimer, 1000);
    }

    let launchDate = new Date("2035-08-07T05:15:00Z").getTime(); // Set a realistic future launch date
    startCountdown(launchDate);

    // Application Form Handling
    document.getElementById("applicationForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission

        let name = document.getElementById("name").value;
        let age = document.getElementById("age").value;
        let skills = document.getElementById("skills").value;
        let motivation = document.getElementById("motivation").value;

        if (name && age && skills && motivation) {
            alert(`Thank you, ${name}! Your application has been submitted.`);
            this.reset(); // Clear the form
        } else {
            alert("Please fill in all fields before submitting.");
        }
    });
});
