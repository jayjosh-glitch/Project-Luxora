
let user1 = document.getElementById('username').value;
let password1 = document.getElementById('password').value;
let submit = document.getElementById('submit');
let issignedup = false;

submit.addEventListener('click', () =>{
    localStorage.setItem('user1', user1);
    localStorage.setItem('password1', password1);
    issignedup = true;
    localStorage.setItem('issignedup', issignedup);
    window.location.replace('index.html');
})

