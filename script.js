const bar_btn = document.getElementById('toggle-button');
const navbar = document.getElementById('menu-navbar');

var menu_display = document.getElementById('menu-navbar').style.display;


bar_btn.addEventListener('click', () => {
    if(!navbar.checkVisibility()){
        navbar.style.display = "block";
    }else{
        navbar.style.display = "none";
    }
});
