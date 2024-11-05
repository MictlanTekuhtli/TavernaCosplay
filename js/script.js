import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        
        alert(`Gracias, ${name}! Nos pondremos en contacto contigo a través de ${email}.`);
    });
});
