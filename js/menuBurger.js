/* gestion de l'ouvertur du menu burger en mobile */

const menuBurgerTag = document.getElementById('burger_menu');
const mobileMenuTag = document.getElementById('menu_mobile');
const bodyTag = document.querySelector('.application');
const mobileLinksTags = document.querySelectorAll('.mobile_link');
const menuBurgerOpennerTag = document.querySelector('.burger_menu_openner');
let mobileMenuOpen = false;
const onClickMenuBurger = (event) => {
    mobileMenuOpen = !mobileMenuOpen;
    if(mobileMenuOpen) {
        mobileMenuTag.classList.remove('translateToTop');
        mobileMenuTag.classList.add('translateFromTop');
        mobileMenuTag.style.display = 'flex';
        bodyTag.style.overflow = 'hidden';
        bodyTag.style.position = 'fixed';
    } else {
        mobileMenuTag.classList.remove('translateFromTop');
        mobileMenuTag.classList.add('translateToTop');
        menuBurgerTag.removeEventListener('click', menuBurgerTag, true);
        menuBurgerTag.checked = false;
        setTimeout(() => {
            mobileMenuTag.style.display = 'none';
            bodyTag.style.overflow = 'visible';
            bodyTag.style.position = 'unset';  
            menuBurgerTag.addEventListener('click', onClickMenuBurger);
        }, 150);
    }   
}
menuBurgerTag.addEventListener('click', onClickMenuBurger);
mobileLinksTags.forEach(linkTag => {
    linkTag.addEventListener('click', onClickMenuBurger);
});