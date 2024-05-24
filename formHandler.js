// Check if the event listener has already been added before attaching it
if (!document.getElementById("contactForm").hasAttribute("data-submitted")) {
    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from submitting
        
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const question = document.getElementById("question").value;
        
        // Store the form submission in localStorage
        const submission = { name, email, question };
        const submissions = JSON.parse(localStorage.getItem('submissions')) || [];
        submissions.push(submission);
        localStorage.setItem('submissions', JSON.stringify(submissions));
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("question").value = "";
        
        // Optionally, you can display a message to indicate that the form submission is successful
        alert('Form data submitted successfully!');
        
        // Optionally, you can redirect the user to another page after form submission
        // window.location.href = 'success.html';
    });
    // Mark the form as having the event listener attached
    document.getElementById("contactForm").setAttribute("data-submitted", "true");
}
