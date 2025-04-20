// You can add more complex JavaScript interactions here later.
// For example:
// - Toggle a mobile navigation menu
// - Implement smooth scrolling more robustly
// - Add form validation or submission handling (AJAX)
// - Implement advanced project filtering or loading
// - Animations or transitions
// - "Read more" toggle for the About section

// Example: Log a message when the page loads
console.log("Portfolio script loaded!");

// The basic smooth scrolling and project filtering logic is included in index.html for this example.
// If you move it here, make sure it runs after the DOM is fully loaded (e.g., using DOMContentLoaded event).
/*
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Project Filtering (if not inlined)
    document.querySelectorAll('.project-filters button').forEach(button => {
         button.addEventListener('click', function() {
             const filter = this.getAttribute('data-filter');

             document.querySelectorAll('.project-filters button').forEach(btn => btn.classList.remove('active'));
             this.classList.add('active');

             document.querySelectorAll('.project-item').forEach(item => {
                 if (filter === 'all' || item.getAttribute('data-category').includes(filter)) {
                     item.style.display = 'block'; // Or your desired display type
                 } else {
                     item.style.display = 'none';
                 }
             });
         });
     });
});
*/

function sendMail() {
    let parameters = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    }

    emailjs.send("service_pmzvnao","template_2otgcyq",parameters).then(alert("Email Sent!"))
}