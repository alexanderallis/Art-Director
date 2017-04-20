//------------------------------------------------MENU

var mq = window.matchMedia( "(max-width: 600px)" );

var moved = false;

var menuBar = document.getElementById('menu_bar');
var menuButton = document.getElementById('menu_button');
var menu = document.getElementById('menu_button_svg');

function slideMenu(){

  var mov = moved ? 0 : 30;

  menuBar.style.webkittransform = 'translateX('+mov+'%)';
  menuBar.style.moztransform = 'translateX('+mov+'%)';
  menuBar.style.mstransform = 'translateX('+mov+'%)';
  menuBar.style.otransform = 'translateX('+mov+'%)';
  menuBar.style.transform = 'translateX('+mov+'%)';

  moved = !moved;

};

//CLICK-ON-BUTTON
document.getElementById('menu_button').onclick = function() {
  if (mq.matches) {
    slideMenu();
  } else {
  }
}
//CLOSE MENU WHEN YOU CLICK OFF THE MENU
document.getElementById('body_container').onclick = function(){
  if (mq.matches && moved) {
    slideMenu();
  }
}


// MEDIA QUERY
if (matchMedia) {
  mq.addListener(WidthChange);
  WidthChange(mq);
}

//--IF THE MENU IS OUT WHEN THE SCREEN GETS BIGGER, COLLAPSE MENU BY RUNNING slideMenu() FUNCTION
function WidthChange(mq) {
  if(moved){
    if (mq.matches && !moved) {
    } else {
      slideMenu();
    }
  }
}
