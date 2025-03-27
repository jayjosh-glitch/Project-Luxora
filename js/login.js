 const users = [
    {
        "username" : "admin",
        "password" : "admin"
    },
    {
        "username" : "jay123",
        "password" : "jay"
    },
    {
        "username" : "j123",
        "password" : "12345"
    }
]

let isloggedin = false;
let button = document.getElementById('submit');
function login(){

   let user = document.getElementById('username').value;
   let pass = document.getElementById('password').value;
   
   if(user == ""){
    alert("Username is required");
   }
   if(pass == ""){
    alert("password is required");
   }

   if(user != "" || pass != ""){
    for(let i =0; i < users.length; i++){
        // console.log(user);
        // console.log(pass);
        if(users[i].username === user && users[i].password === pass) {
            isloggedin = true;
            localStorage.setItem('isloggedin', isloggedin);
            localStorage.setItem('username', user);
            window.location.replace('index.html');
        }
    }
    if(!isloggedin){
        isloggedin = false;
        localStorage.setItem('isloggedin', isloggedin);
        alert("Invalid credentials");
    }
}
}

button.addEventListener('click', () =>{
    event.preventDefault();
    login();
})

