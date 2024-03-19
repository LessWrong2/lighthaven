        fetch('q-and-a.csv')
          .then(response => response.text())
          .then(data => {
            const rows = data.split('\n').slice(1); // Skip header row
            const faqList = document.getElementById('faq-list');
            rows.forEach(row => {
              const [question, answer] = row.split(',');
              const faqItem = document.createElement('div');
              faqItem.classList.add('faq-item');

              const iconDiv = document.createElement('div');
              iconDiv.classList.add('faqIcon');
              const icon = document.createElement('i');
              icon.className = 'fas fa-chevron-right';
              iconDiv.style.paddingRight = '10px';
              iconDiv.appendChild(icon);

              const qandaDiv = document.createElement('div');
              qandaDiv.classList.add('q-and-a');

              const questionDiv = document.createElement('div');
              questionDiv.classList.add('question');
              const questionText = document.createElement('span'); // Create a span for the question text
              questionText.textContent = question; // Set the text content to the question
              questionDiv.appendChild(questionText); // Append the question text after the icon

              const answerDiv = document.createElement('div');
              answerDiv.classList.add('answer');
              answerDiv.textContent = answer;
              answerDiv.style.display = 'none';

              qandaDiv.appendChild(questionDiv);
              qandaDiv.appendChild(answerDiv);

              faqItem.appendChild(iconDiv);
              faqItem.appendChild(qandaDiv);

              faqList.appendChild(faqItem);
          });
          
          attachEventListenersToFaqItems();
        });

        function attachEventListenersToFaqItems() {
            const faqItems = document.querySelectorAll('.faq-item');
          
            faqItems.forEach(item => {
              const faqIconDiv = item.querySelector('.faqIcon');
              const faqIcon = item.querySelector('.fas');
              const answer = item.querySelector('.answer');
          
              faqIconDiv.addEventListener('click', () => {
                answer.style.display = answer.style.display === 'none' ? 'block' : 'none';
                faqIcon.classList.toggle('down');
              });
            });
        }