document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    var errors = [];

    if (name === '') {
        errors.push("Name is required.");
    }

    if (email === '') {
        errors.push("Email is required.");
    } else if (!emailPattern.test(email)) {
        errors.push("Please enter a valid email address.");
    }

    if (message === '') {
        errors.push("Message is required.");
    }

    if (errors.length > 0) {
        alert(errors.join("\n"));
    } else {
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Message:", message);
        alert("Thank you for your message!");
        document.getElementById('contactForm').reset();
    }
});
