const selectElement= selector => {
    const element = document.querySelector(selector);
    if(element) return element;
    throw new Error(`you fucked up. Make sure the ${selector} even exists`);

}
const scrollHeader= () => {
    const headerElement= selectElement('#header');
    if( this.scrollY>= 15){
        headerElement.classList.add('activated');
    }
    else{
        headerElement.classList.remove('activated');
    }
}
window.addEventListener('scroll', scrollHeader);
const menuToggleIcon= selectElement('#menu-toggle-icon');

const toggleMenu = ()=> {
    const mobileMenu= selectElement('#menu');
    mobileMenu.classList.toggle('activated');
    menuToggleIcon.classList.toggle('activated');
}
menuToggleIcon.addEventListener('click', toggleMenu);


const bodyElement = document.body;
const themeToggleBtn= selectElement('#theme-toggle-btn');
const currentTheme = localStorage.getItem('currentTheme');

if (currentTheme){
    bodyElement.classList.add('currentTheme')
}
themeToggleBtn.addEventListener('click', ()=>{
    bodyElement.classList.toggle('light-theme')
});
if(bodyElement.classList.contains('light-theme')){
    localStorage.selector('currentTheme', 'themeActive');
}
else{
    localStorage.remove('current-theme')
}

const categoryBullet= ()=>{
    const categoryMenu = selectElement('#category-all');
    categoryMenu.classList.toggle('active');
}
