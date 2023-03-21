const allTags = document.querySelectorAll('*');

const retro_theme_switcher = document.querySelector('.retro_theme_switcher');
const oceanic_theme_switcher = document.querySelector('.oceanic_theme_switcher');

let currentTheme = 'retro';
//const currentTheme = 'oceanic';

retro_theme_switcher.addEventListener('click', (event) => {
    console.log('coucou');
    if(currentTheme !== 'retro') {
        currentTheme = 'retro';
        event.target.classList.add('retro_theme_selector_active');
        application.classList.add('retro_theme_main_background');
        application.classList.remove('oceanic_theme_main_background');
        allTags.forEach(tag => {
            tag.classList.remove('oceanic_theme_main', 'oceanic_theme_link', 'oceanic_theme_word', 'oceanic_theme_background_text', 'oceanic_theme_selector_active');
            if(tag.className.includes('solo_word')) {
                tag.classList.add('retro_theme_word');
            } else if (tag.className.includes('background_word')) {
                tag.classList.add('retro_theme_background_text');
            } else if (tag.className.includes('link')) {
                tag.classList.add('retro_theme_link');
            } else {
                tag.classList.add('retro_theme_main');
            }
        });
    }
});

oceanic_theme_switcher.addEventListener('click', (event) => {
    if(currentTheme !== 'oceanic') {
        currentTheme = 'oceanic'; 
        event.target.classList.add('oceanic_theme_selector_active');
        application.classList.add('oceanic_theme_main_background');
        application.classList.remove('retro_theme_main_background');
        allTags.forEach(tag => {
            tag.classList.remove('retro_theme_main', 'retro_theme_link', 'retro_theme_word', 'retro_theme_background_text', 'retro_theme_selector_active');
            if(tag.className.includes('solo_word')) {
                tag.classList.add('oceanic_theme_word');
            } else if (tag.className.includes('background_word')) {
                tag.classList.add('oceanic_theme_background_text');
            } else if (tag.className.includes('link')) {
                tag.classList.add('oceanic_theme_link');
            } else {
                tag.classList.add('oceanic_theme_main');
            }
        });
    }
});

const setRetroTheme = () => {
    application.classList.add('retro_theme_main_background');
    allTags.forEach(tag => {
        if(tag.className.includes('solo_word')) {
            tag.classList.add('retro_theme_word');
        } else if (tag.className.includes('background_word')) {
            tag.classList.add('retro_theme_background_text');
        } else if (tag.className.includes('link')) {
            tag.classList.add('retro_theme_link');
        } else {
            tag.classList.add('retro_theme_main');
        }
    });
};

setRetroTheme();
