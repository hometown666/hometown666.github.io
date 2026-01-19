function initArticleScript() {
    const currentPath = window.location.pathname;
    const targetArticles = ['English%20Phrases/', '%E6%AF%9B%E6%A6%82%E6%9C%9F%E6%9C%AB/'];
    
    if (targetArticles.some(article => currentPath.includes(article))) {
        console.log('我要进来啦！！！<(￣︶￣)↗[GO!]');
        const hideButtons = document.querySelectorAll('.hide-button');
        let previousColorIndex = null;
        const totalColorSchemes = 20;

        hideButtons.forEach(button => {
            let randomIndex;
            
            do {
                randomIndex = Math.floor(Math.random() * totalColorSchemes) + 1;
            } while (randomIndex === previousColorIndex && hideButtons.length > 1);
            
            previousColorIndex = randomIndex;

            button.style.backgroundColor = `var(--color-scheme-${randomIndex}-bg)`;
            button.style.color = `var(--color-scheme-text)`;
        });
    }
}

document.addEventListener('DOMContentLoaded', initArticleScript);

document.addEventListener('pjax:complete', initArticleScript);