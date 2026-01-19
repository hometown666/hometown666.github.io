function initHideBlock() {
  // 可选：检测特定文章路径（如需全局使用则注释掉）
  const currentPath = window.location.pathname;
  const targetArticle = 'English%20Phrases/';
  if (!currentPath.includes(targetArticle)) return;

  // 防止重复初始化：移除旧监听器（如果存在）
  if (window.hideBlockInitialized) {
    return;
  }
  window.hideBlockInitialized = true;

  // 事件委托：监听整个文档，动态匹配 .button-container
  document.addEventListener('click', handleHideBlockClick);
  
  // 预加载：确保所有 hide-content 初始样式正确
  const allBlocks = document.querySelectorAll('.hide-block');
  allBlocks.forEach(block => {
    const content = block.querySelector('.hide-content');
    if (content && !block.classList.contains('expanded')) {
      // 确保初始状态正确
      content.style.overflow = 'hidden';
    }
  });
}

function handleHideBlockClick(e) {
  // 检测点击是否在 hide-button 上
  const button = e.target.closest('.hide-button');
  if (!button) return;
  
  e.preventDefault();
  const block = button.parentElement;
  
  // 切换展开状态
  const isExpanding = !block.classList.contains('expanded');
  block.classList.toggle('expanded');
}

// 页面加载时初始化
document.addEventListener('DOMContentLoaded', initHideBlock);

// pjax 完成后重新初始化
document.addEventListener('pjax:complete', function() {
  // 重置初始化标记
  window.hideBlockInitialized = false;
  // 延迟执行确保 DOM 就绪
  setTimeout(initHideBlock, 100);
});