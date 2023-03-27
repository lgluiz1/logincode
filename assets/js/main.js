const menuClick = document.querySelector('#navegationMobile')
const loginMenu = document.querySelector('.input_login');
const registroMenu = document.querySelector('.registro');

function menuMobile(){
    if (menuClick.style.scale == '1'){
        menuClick.style.scale= '0'
}
    else{
        menuClick.style.scale = '1'
    }
}
function registroConta(){
    if(loginMenu.style.transform == 'translateX(0)'){
        loginMenu.style.transform = 'translateX(-500px)';
    }
   else{
    loginMenu.style.transform = 'translateX(500px)';
    registroMenu.style.transform = 'translateX(0px)';
   }
}

function fazerLogin(){
    if(registroMenu.style.transform == 'translateX(0)'){
        registroMenu.style.transform = 'translateX(-500px)';
    }
    else{
        registroMenu.style.transform = 'translateX(-500px)';
        loginMenu.style.transform = 'translateX(0px)';
    }
}
