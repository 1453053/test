var isMenu = false;

function showMenu(){
  if(!isMenu) {
    isMenu = true;
    $('.main-menu').animate({left: 0});
  }
};

function hideMenu(){
  if(isMenu) {
    isMenu = false;
    $('.main-menu').animate({left: '-500px'});
  }
};
