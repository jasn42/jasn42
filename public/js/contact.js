document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".contact-form");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent default form submission

        // Get form values
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const message = document.getElementById("message").value;

        // Construct the mailto link
        const subject = encodeURIComponent(`Civil Energy Request`);
        const body = encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`
        );

        const mailtoLink = `mailto:info@civil.energy?subject=${subject}&body=${body}`;

        // Open the mailto link
        window.location.href = mailtoLink;
    });
});
