        attachEventListenersToFaqItems();

        function attachEventListenersToFaqItems() {
            const faqItems = document.querySelectorAll('.faq-item');
          
            faqItems.forEach(item => {
              const faqIconDiv = item.querySelector('.faqIcon');
              const faqIcon = item.querySelector('.fas');
              const answer = item.querySelector('.answer');
          
              faqIconDiv.addEventListener('click', () => {
                answer.classList.toggle('hidden');
                faqIcon.classList.toggle('down');
              });
            });
        }