var btn = document.getElementById('btnMenu');
var menu = document.getElementById('popupMenu');

function exibirMenu(){
  menu.style.display = 'flex';
}

function ocultarMenu(){
  menu.style.display = 'none'
}

function ocultarfora(event){
  if(!menu.contains(event.target) && event.target !== btn){
    ocultarMenu();
  }
}

function showandclear(){
  if(menu.style.display === 'none'){
    exibirMenu();
  }
  else{
    ocultarMenu();
  }
}

btn.addEventListener('click', showandclear);
//document.addEventListener('click', ocultarfora);

