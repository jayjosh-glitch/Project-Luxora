const curruser = localStorage.getItem('username');
let isloggedin = localStorage.getItem('isloggedin');
let display = document.getElementById('display');
let log = document.getElementById('log');
const issignedup = localStorage.getItem('issignedup');
let sign = document.getElementById('signup');


document.addEventListener('DOMContentLoaded', () =>{
    if(isloggedin){
        display.innerText = "Welcome" + " " + curruser.toUpperCase();
        log.innerText="LOG OUT";
    }
    if(issignedup){
        sign.innerText = "SIGNOUT"
        log.innerText="LOG OUT";
        isloggedin = true;
    }
    console.log(curruser, isloggedin);
    user1 = localStorage.getItem('user1');
    password1 = localStorage.getItem('password1');
    console.log(user1, password1);
})

sign.addEventListener('click', () =>{
    if(issignedup){
        localStorage.clear();
        window.location.replace('index.html');
    }else{
        window.location.replace('signup.html');
    }
})

log.addEventListener('click', () =>{
    if(isloggedin){
        localStorage.clear();
        window.location.replace('index.html');
    }
    else {
        window.location.replace('login.html');
    }
    
})