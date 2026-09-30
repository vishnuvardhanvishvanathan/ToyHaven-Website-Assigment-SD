const loginemail= document.getElementById('loginemail');
const loginpassword = document.getElementById('loginpassword');
const loginform = document.getElementById("loginform");

const registerform = document.getElementById("signinform");
const registeremail = document.getElementById('signinemail');
const registerpassword = document.getElementById('signinpassword');
const checkpassword = document.getElementById('checkpassword');


const log1errorMsg = document.getElementById('log1errorMsg');
const log2errorMsg = document.getElementById('log2errorMsg');
const log3errorMsg = document.getElementById('log3errorMsg');
const errormsg = document.getElementById('errormsg');

let loginemailstorage = localStorage.getItem('newEmail');
let loginpasswordstorage = localStorage.getItem('newPassword');





function login(event){
    //stores the login details
    const registeremailstorage = localStorage.getItem('oldEmail');
    const registerpasswordstorage = localStorage.getItem('oldPassword');
    console.log("hi");
    event.preventDefault();
    if (loginemail.value!=registeremailstorage){
        console.log(registerpasswordstorage)
        log3errorMsg.textContent = 'Please sign in , This account doesnt exist.';
        

    }
    else if (registerpasswordstorage!=loginpassword.value){
        
        log2errorMsg.textContent = 'Password doesnt match!';
        

    }
    else{
        
        localStorage.setItem('newEmail',loginemail.value);
        localStorage.setItem('newPassword',loginpassword.value);
        loginemailstorage =localStorage.getItem('newEmail');
        loginpasswordstorage = localStorage.getItem('newPassword');
        console.log(loginemailstorage);
        console.log(loginpasswordstorage);
        window.location.href = '../../index.html';
    }

};
function signin(event){
    event.preventDefault();

    if (checkpassword.value!=registerpassword.value || registerpassword.value!=checkpassword.value){
        
        errormsg.textContent = 'Both passwords should be the same!';
        
    }

    else{
        localStorage.setItem('oldEmail',registeremail.value);
        localStorage.setItem('oldPassword',registerpassword.value);
        registeremailstorage =localStorage.getItem('oldEmail');
        registerpasswordstorage = localStorage.getItem('oldPassword');
        console.log(registeremailstorage);
        console.log(registerpasswordstorage);
        console.log("Navigating to:", new URL('../../index.html', window.location.href).href);
         window.location.href='../../index.html';
    } //stores the signin details
  
};
if (loginform){
    loginform.addEventListener('submit',login);
}
if (registerform){
    registerform.addEventListener('submit',signin);
}




