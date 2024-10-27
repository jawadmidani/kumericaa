function enlargeImage(img) {
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImage.src = img.src;
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}

async function submitForm(event) {
    event.preventDefault();

    const form = document.getElementById('contactForm');
    const formData = new FormData(form);
    const formMessage = document.getElementById('formMessage');

    try {
        // Send the form data to Formspree
        const response = await fetch("https://formspree.io/f/xyzykjgz", {
            method: "POST",
            headers: {
                'Accept': 'application/json'
            },
            body: formData
        });

        if (response.ok) {
            formMessage.innerText = "Thank you for your message! We'll get back to you soon.";
            formMessage.style.color = "green";
            form.reset();
        } else {
            formMessage.innerText = "There was an issue submitting the form. Please try again.";
            formMessage.style.color = "red";
        }
    } catch (error) {
        formMessage.innerText = "There was an error connecting to the server. Please try again later.";
        formMessage.style.color = "red";
    }
}

// Attach the event listener to the form submission
document.getElementById('contactForm').addEventListener('submit', submitForm);