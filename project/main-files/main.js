const selectElement = selector => {
    const element = document.querySelector(selector);
    if (element) return element;
    throw new Error(`you fucked up. Make sure the ${selector} even exists`);

}
const scrollHeader = () => {
    const headerElement = selectElement('#header');
    if (this.scrollY >= 15) {
        headerElement.classList.add('activated');
    }
    else {
        headerElement.classList.remove('activated');
    }
}
window.addEventListener('scroll', scrollHeader);

const menuToggleIcon = selectElement('#menu-toggle-icon');
const mobileMenu = selectElement('#menu');
const toggleMenu = () => {
    mobileMenu.classList.toggle('activated');
    menuToggleIcon.classList.toggle('activated');
}
menuToggleIcon.addEventListener('click', toggleMenu);


const bodyElement = document.body;
const themeToggleBtn = selectElement('#theme-toggle-btn');
const currentTheme = localStorage.getItem('currentTheme');

if (currentTheme) {
    bodyElement.classList.add('currentTheme')
}
themeToggleBtn.addEventListener('click', () => {
    bodyElement.classList.toggle('light-theme')
});
if (bodyElement.classList.contains('light-theme')) {
    localStorage.setItem('currentTheme', 'themeActive');
}
else {
    localStorage.removeItem('current-theme')
}


const categoryToggle = selectElement('#category-toggle-btn');
const categoryMenu = selectElement('#category-menu');

const categoryToggleMenu = () => {
    categoryMenu.classList.toggle('active');
    categoryToggle.classList.toggle('active');
};
categoryToggle.addEventListener('click', categoryToggleMenu)


