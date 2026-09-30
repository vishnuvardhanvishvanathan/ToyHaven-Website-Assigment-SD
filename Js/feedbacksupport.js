
document.addEventListener('DOMContentLoaded', () => {


    const faqButtons = document.querySelectorAll('.q');

    faqButtons.forEach(button => {
        button.addEventListener('click', () => {

            const item = button.closest('.item');
            if (item) {
    
                item.classList.toggle('active');


                const icon = button.querySelector('span:last-child');
                if (icon) {
                    icon.textContent = item.classList.contains('active') ? '−' : '+';
                }
            }
        });
    });


    const form = document.getElementById('form');

    const alertBox = document.getElementById('alert');

    if (form) {
        form.addEventListener('submit', (e) => {

            e.preventDefault(); 

            // Get form values
            const name = document.getElementById('name').value.trim();

            const email = document.getElementById('email').value.trim();

            const message = document.getElementById('msg').value.trim();


            if (!name || !email || !message) {

                alert('Please fill out all required fields before submitting.');
                return;
            }

 
            const newFeedback = {
                id: 'TH-' + Math.floor(10000 + Math.random() * 90000),
                name: name,
                email: email,

                message: message,
                date: new Date().toLocaleString()
            };

  
            const existingFeedback = JSON.parse(localStorage.getItem('toy_haven_feedback')) || [];


            existingFeedback.push(newFeedback);



            localStorage.setItem('toy_haven_feedback', JSON.stringify(existingFeedback));


            if (alertBox) {


                alertBox.style.display = 'block';
                setTimeout(() => {
                    alertBox.style.display = 'none';
                }, 4000);
            }


            form.reset();


            displaySavedFeedback();
        });
    }



    function displaySavedFeedback() {
        const feedbackContainer = document.getElementById('saved-responses');


        if (!feedbackContainer) return;


        const savedData = JSON.parse(localStorage.getItem('toy_haven_feedback')) || [];

        if (savedData.length === 0) {
            feedbackContainer.innerHTML = '<p>No saved feedback yet.</p>';
            return;
        }



        feedbackContainer.innerHTML = savedData.map(ticket => `
            <article class="item" style="padding: 1rem; margin-top: 0.75rem; border: 1px solid var(--primary-color, #ced4da); border-radius: 6px; background-color: #ffffff;">
                <p><strong>Ticket ID:</strong> ${ticket.id} <small>(${ticket.date})</small></p>
                <p><strong>From:</strong> ${ticket.name} (${ticket.email})</p>
                <p><strong>Message:</strong> ${ticket.message}</p>
            </article>
        `).reverse().join('');
    }


    displaySavedFeedback();
});