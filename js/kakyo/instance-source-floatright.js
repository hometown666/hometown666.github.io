(function () {
  const currentPath = window.location.pathname;
  const targetArticle = 'English%20Phrases/';

  const decodedPath = decodeURIComponent(currentPath);
  const isTargetPage = currentPath.includes(targetArticle) || decodedPath.includes('/English Phrases/');

  if (!isTargetPage) {
    return;
  }

  const elements = document.querySelectorAll('.chinese-translation-text');
  if (elements.length === 0) return;

  function updateWidth() {
    elements.forEach(el => {
      const ancestor = el.closest('.button-container');
      if (ancestor) {
        const width = ancestor.getBoundingClientRect().width - 48;
        el.style.width = width > 0 ? `${width}px` : 'auto';
      }
    });
  }

  updateWidth();

  window.addEventListener('resize', updateWidth);

  document.addEventListener('pjax:success', updateWidth);
})();