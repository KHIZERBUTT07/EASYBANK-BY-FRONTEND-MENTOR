function toggleElements() {
    let menu = document.querySelector('.menu');
    let closeMenu = document.querySelector('.close-menu');
    let overLay = document.querySelector('.overlaywe');
    let navItems = document.querySelector('.nav-items');

        closeMenu.classList.toggle('were');
        overLay.classList.toggle('were');
        navItems.classList.toggle('were');
        
     
}
function addElements() {
    let menu = document.querySelector('.menu');
    let closeMenu = document.querySelector('.close-menu');
    let overLay = document.querySelector('.overlaywe');
    let navItems = document.querySelector('.nav-items');

   
        closeMenu.classList.add('were');
        overLay.classList.add('were');
        navItems.classList.add('were');
        menu.classList.remove('were');
        
        
}