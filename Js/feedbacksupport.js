document.addEventListener('DOMContentLoaded', () => {
    const faqButtons = document.querySelectorAll('.q');

    faqButtons.forEach(button => {
        button.addEventListener('click', () => {
 
            const item = button.closest('.item');

            if (item) {
                item.classList.toggle('active');

      
                const icon = item.querySelector('.icon');
                if (icon) {
                    icon.textContent = item.classList.contains('active') ? '−' : '+';
                }
            }
        });
    });
});