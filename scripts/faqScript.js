        attachEventListenersToFaqItems();

        function attachEventListenersToFaqItems() {
            const faqItems = document.querySelectorAll('.faq-item');
            console.log(faqItems);
          
            faqItems.forEach(item => {
              const faqIconDiv = item.querySelector('.faqIcon');
              const faqIcon = item.querySelector('.fas');
              const answer = item.querySelector('.answer');
              console.log(answer.textContent)
          
              faqIconDiv.addEventListener('click', () => {
                answer.classList.toggle('hidden');
                faqIcon.classList.toggle('down');
              });
            });
        }