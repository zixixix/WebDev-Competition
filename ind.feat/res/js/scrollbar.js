window.onscroll = function(){

    var nav = document.getElementById('navConent');
    if(window.pageYOffset > 100){
        nav.classList.add('position-fixed');
    }else{
        nav.classList.remove('position-fixed');
    }

}