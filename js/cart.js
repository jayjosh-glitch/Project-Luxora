

document.addEventListener('DOMContentLoaded', () =>{
    let cartitem = sessionStorage.getItem('cartitem');
    cartitem = JSON.parse(cartitem);
    console.log(cartitem);
})