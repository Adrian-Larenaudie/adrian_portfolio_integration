/* gestion du changement de theme et du theme par défaut */

const allTags = document.querySelectorAll('*');

const retro_theme_switcher = document.querySelector('.retro_theme_switcher');
const oceanic_theme_switcher = document.querySelector('.oceanic_theme_switcher');

let currentTheme = 'retro';
//const currentTheme = 'oceanic';

retro_theme_switcher.addEventListener('click', (event) => {
    if(currentTheme !== 'retro') {
        currentTheme = 'retro';
        event.target.classList.add('retro_theme_selector_active');
        application.classList.add('retro_theme_main_background');
        application.classList.remove('oceanic_theme_main_background');
        menu_mobile.classList.add('retro_theme_main_background');
        menu_mobile.classList.remove('oceanic_theme_main_background');
        
        allTags.forEach(tag => {
            try {
                tag.classList.remove('oceanic_theme_main', 'oceanic_theme_link', 'oceanic_theme_word', 'oceanic_theme_background_text', 'oceanic_theme_selector_active', 'oceanic_theme_svg');
                if(tag.className.includes('solo_word')) {
                    tag.classList.add('retro_theme_word');
                } else if (tag.className.includes('background_word')) {
                    tag.classList.add('retro_theme_background_text');
                } else if (tag.className.includes('link')) {
                    tag.classList.add('retro_theme_link');
                } else if (tag.className.includes('social_network')) {
                    tag.classList.add('retro_theme_svg');
                } else if (tag.className.includes('footer_segment') || tag.className.includes('burger_span') || tag.className.includes('menu_mobile_segment')) {
                    tag.classList.add('retro_theme_selector_active')
                } else {
                    tag.classList.add('retro_theme_main');
                }
            } catch (error) {
                if(!error.TYpeError === 'tag.className.includes is not a function')
                    console.log(error);
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
        menu_mobile.classList.add('oceanic_theme_main_background');
        menu_mobile.classList.remove('retro_theme_main_background');
        allTags.forEach(tag => {
            try {
                tag.classList.remove('retro_theme_main', 'retro_theme_link', 'retro_theme_word', 'retro_theme_background_text', 'retro_theme_selector_active', 'retro_theme_svg');
            if(tag.className.includes('solo_word')) {
                tag.classList.add('oceanic_theme_word');
            } else if (tag.className.includes('background_word')) {
                tag.classList.add('oceanic_theme_background_text');
            } else if (tag.className.includes('link')) {
                tag.classList.add('oceanic_theme_link');
            } else if (tag.className.includes('social_network')) {
                tag.classList.add('oceanic_theme_svg');
            } else if (tag.className.includes('footer_segment') || tag.className.includes('burger_span') || tag.className.includes('menu_mobile_segment')) {
                tag.classList.add('oceanic_theme_selector_active')
            } else {
                tag.classList.add('oceanic_theme_main');
            }
            } catch (error) {
                if(!error.TYpeError === 'tag.className.includes is not a function')
                    console.log(error); 
            }
            
        });
    }
});

const loadingApplication = () => {
    application.classList.add('retro_theme_main_background');
    menu_mobile.classList.add('retro_theme_main_background');
    allTags.forEach(tag => {
        try {
            if(tag.className.includes('solo_word')) {
                tag.classList.add('retro_theme_word');
            } else if (tag.className.includes('background_word')) {
                tag.classList.add('retro_theme_background_text');
            } else if (tag.className.includes('link')) {
                tag.classList.add('retro_theme_link');
            } else if (tag.className.includes('social_network')) {    
                tag.classList.add('retro_theme_svg');
            } else if (tag.className.includes('footer_segment') || tag.className.includes('burger_span') || tag.className.includes('menu_mobile_segment')) {
                tag.classList.add('retro_theme_selector_active')
            } else {
                tag.classList.add('retro_theme_main');
            }  
        } catch (error) {
            if(!error.TYpeError === 'tag.className.includes is not a function')
                console.log(error);
        }       
    });

};

loadingApplication();
