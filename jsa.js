const menut = document.getElementById('menu_toggle');
const menu = document.querySelector('.navbar-menu');

menut.onclick = function(){
  menu.classList.toggle('active');
  menut.classList.toggle('is-active');  
}

