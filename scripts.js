function handleContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        const urlParams = new URLSearchParams(window.location.search);
        const artistToBook = urlParams.get('artist');

        if (artistToBook) {
            const subjectField = document.getElementById('subject');
            if (subjectField) {
                subjectField.value = `Booking Inquiry for: ${artistToBook}`;
            }
        }

        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); 
            alert('Thank you for your message! We have received it and will get back to you soon.');
            contactForm.reset(); 
        });
    }
}

function handleBookingButtons() {
    const bookingButtons = document.querySelectorAll('.book-now-button');
    bookingButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); 
            const artistName = this.getAttribute('data-artist');
            window.location.href = `contact.html?artist=${encodeURIComponent(artistName)}`;
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    handleContactForm();
    handleBookingButtons();
});