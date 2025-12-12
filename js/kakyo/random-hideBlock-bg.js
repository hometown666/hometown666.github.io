function initArticleScript() {
    const currentPath = window.location.pathname;
    const targetArticle = 'English%20Phrases/';
    
    if (currentPath.includes(targetArticle)) {
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