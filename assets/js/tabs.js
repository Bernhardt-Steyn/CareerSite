const tabs = document.querySelectorAll('.tabs button');
    const articles = document.querySelectorAll('article');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        // deactivate all
        tabs.forEach(t => {
          t.classList.remove('active');
          t.setAttribute('aria-selected', 'false');
        });
        articles.forEach(a => a.classList.remove('active'));

        // activate selected
        tab.classList.add('active');
        tab.setAttribute('aria-selected', 'true');
        document.getElementById(tab.dataset.target).classList.add('active');
      });
    });