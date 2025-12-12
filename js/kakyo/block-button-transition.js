function initHideBlock() {
  const currentPath = window.location.pathname;
  const targetArticle = 'English%20Phrases/';
  if (!currentPath.includes(targetArticle)) return;

  if (window.hideBlockInitialized) {
    return;
  }
  window.hideBlockInitialized = true;

  document.addEventListener('click', handleHideBlockClick);
  
  const allBlocks = document.querySelectorAll('.hide-block');
  allBlocks.forEach(block => {
    const content = block.querySelector('.hide-content');
    if (content && !block.classList.contains('expanded')) {
      content.style.overflow = 'hidden';
    }
  });
}
function handleHideBlockClick(e) {
  const button = e.target.closest('.hide-button');
  if (!button) return;
  
  e.preventDefault();
  const block = button.parentElement;
  
  const isExpanding = !block.classList.contains('expanded');
  block.classList.toggle('expanded');
}

document.addEventListener('DOMContentLoaded', initHideBlock);

document.addEventListener('pjax:complete', function() {
  window.hideBlockInitialized = false;
  setTimeout(initHideBlock, 100);
});