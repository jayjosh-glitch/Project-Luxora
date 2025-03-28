
//   console.log(menClothing);
let menClothing;
let womensClothing;

async function getprod(){
    var response = await fetch("../Project-Luxora/prods/men.json");
    var response1 = await fetch("../Project-Luxora/prods/women.json");
    let mdata = await response.json();
    let wdata = await response1.json();
    console.log(mdata);
    console.log(wdata);
    menClothing = mdata;
    womensClothing = wdata;
} 


document.addEventListener('DOMContentLoaded', () => {
    wdisplay = document.getElementById('Women');
    mdisplay = document.getElementById('men');
    mdisplay.style.display = "none";
    wdisplay.style.display = "block";
    getprod();
})

const applybtn = document.getElementById('apply-btn');

function filters() {

    const gender = document.getElementById('gender').value;
    const category = document.getElementById('category').value;
    const size = document.getElementById('size').value;
    const price = document.getElementById('prange').value;
    wdisplay = document.getElementById('Women');
    mdisplay = document.getElementById('men');
    console.log(gender, category, size, price);

    // gender filter
    if (gender != "") {
        filterbygender = [];
        if (gender === "male") {
            filterbygender = womensClothing.filter(product => product.gender == "male");
            wdisplay.style.display = "none";
            mdisplay.style.display = "block";
        }
        if (gender === "female") {
            filterbygender = womensClothing.filter(product => product.gender == "female");
            mdisplay.style.display = "none";
            wdisplay.style.display = "block";
        }
        console.log(filterbygender);
    }

    // category filter
    if (category != "") {
        filterbycategory = [];

        if (category === "Jeans") {
            filterbycategory = womensClothing.filter(product => product.category == "Jeans");
        }
        if (category === "Sweater") {
            filterbycategory = womensClothing.filter(product => product.category == "Sweater");
        }
        if (category === "Top") {
            filterbycategory = womensClothing.filter(product => product.category == "Top");
        }
        console.log(filterbycategory);
    }


    // size filter
    if (size != "") {
        filterbysize = [];
        if (size === "XS") {
            filterbysize = womensClothing.filter(product => product.size === "XS");
        }
        if (size === "S") {
            filterbysize = womensClothing.filter(product => product.size === "S");
        }
        if (size === "M") {
            filterbysize = womensClothing.filter(product => product.size === "M");
        }
        if (size === "L") {
            filterbysize = womensClothing.filter(product => product.size === "L");
        }
        if (size === "XL") {
            filterbysize = womensClothing.filter(product => product.size === "XL");
        }
        console.log(filterbysize);

    }

    // Price filter
    if (price != " ") {
        filterbypricerange = [];
        if (price === "1") {
            filterbypricerange = womensClothing.filter(product => product.price <= 5000);
        }
        if (price === "2") {
            filterbypricerange = womensClothing.filter(product => product.price > 5000 && product.price <= 10000);
        }
        if (price === "3") {
            filterbypricerange = womensClothing.filter(product => product.price > 10000);
        }
        console.log(filterbypricerange);
    }
}

applybtn.addEventListener('click', () => {
    filters();
});

bw1 = document.getElementById('addtocart1');
bw2 = document.getElementById('addtocart2');
bw3 = document.getElementById('addtocart3');
bw4 = document.getElementById('addtocart4');
bw5 = document.getElementById('addtocart5');
bw6 = document.getElementById('addtocart6');
bw7 = document.getElementById('addtocart7');
bw8 = document.getElementById('addtocart8');
bw9 = document.getElementById('addtocart9');
bw10 = document.getElementById('addtocart10');
bw11 = document.getElementById('addtocart11');
bw12 = document.getElementById('addtocart12');

bm1 = document.getElementById('addtocart-a1');
bm2 = document.getElementById('addtocart-a2');
bm3 = document.getElementById('addtocart-a3');
bm4 = document.getElementById('addtocart-a4');
bm5 = document.getElementById('addtocart-a5');
bm6 = document.getElementById('addtocart-a6');
bm7 = document.getElementById('addtocart-a7');
bm8 = document.getElementById('addtocart-a8');
bm9 = document.getElementById('addtocart-a9');
bm10 = document.getElementById('addtocart-a10');
bm11 = document.getElementById('addtocart-a11');
bm12 = document.getElementById('addtocart-a12');

let cartitem= [];

bw1.addEventListener('click', () => {
    cartitem = womensClothing.forEach(function(product){if(product.id == 1){
        console.log(product);
        sessionStorage.setItem('cartitem', JSON.stringify(product));
        bw1.innerText = "added";
    }});
})
bw2.addEventListener('click', () => {
    cartitem = womensClothing.filter(product => product.id == 2);
    console.log(cartitem);
    sessionStorage.setItem('cartitem', cartitem);
    bw2.innerText = "added";
})
bw3.addEventListener('click', () => {
    cartitem = womensClothing.filter(product => product.id == 3);
    console.log(cartitem);
    sessionStorage.setItem('cartitem', cartitem);
    bw3.innerText = "added";
})
bw4.addEventListener('click', () => {
    cartitem = womensClothing.filter(product => product.id == 4);
    console.log(cartitem);
    sessionStorage.setItem('cartitem', cartitem);
    bw4.innerText = "added";
})
bw5.addEventListener('click', () => {
    cartitem = womensClothing.filter(product => product.id == 5);
    console.log(cartitem);
    sessionStorage.setItem('cartitem', cartitem);
    bw5.innerText = "added";
})
bw6.addEventListener('click', () => {
    cartitem = womensClothing.filter(product => product.id == 6);
    console.log(cartitem);
    sessionStorage.setItem('cartitem', cartitem);
    bw6.innerText = "added";
})
bw7.addEventListener('click', () => {
    cartitem = womensClothing.filter(product => product.id == 7);
    console.log(cartitem);
    sessionStorage.setItem('cartitem', cartitem);
    bw7.innerText = "added";
})
bw8.addEventListener('click', () => {
    cartitem = womensClothing.filter(product => product.id == 8);
    console.log(cartitem);
    sessionStorage.setItem('cartitem', cartitem);
    bw8.innerText = "added";
})
bw9.addEventListener('click', () => {
    cartitem = womensClothing.filter(product => product.id == 9);
    console.log(cartitem);
    sessionStorage.setItem('cartitem', cartitem);
    bw9.innerText = "added";
})
bw10.addEventListener('click', () => {
    cartitem = womensClothing.filter(product => product.id == 10);
    console.log(cartitem);
    sessionStorage.setItem('cartitem', cartitem);
    bw10.innerText = "added";
})
bw11.addEventListener('click', () => {
    cartitem = womensClothing.filter(product => product.id == 11);
    console.log(cartitem);
    sessionStorage.setItem('cartitem', cartitem);
    bw11.innerText = "added";
})
bw12.addEventListener('click', () => {
    cartitem = womensClothing.filter(product => product.id == 12);
    console.log(cartitem);
    sessionStorage.setItem('cartitem', cartitem);
    bw12.innerText = "added";
})


bm1.addEventListener('click', () => {
    cartitem = menClothing.filter(product => product.id == 1);
    console.log(cartitem);
    sessionStorage.setItem('cartitem', cartitem);
    bm1.innerText = "added";
})
bm2.addEventListener('click', () => {
    cartitem = menClothing.filter(product => product.id == 2);
    console.log(cartitem);
    sessionStorage.setItem('cartitem', cartitem);
    bm2.innerText = "added";
})
bm3.addEventListener('click', () => {
    cartitem = menClothing.filter(product => product.id == 3);
    console.log(cartitem);
    sessionStorage.setItem('cartitem', cartitem);
    bm3.innerText = "added";

})
bm4.addEventListener('click', () => {
    cartitem = menClothing.filter(product => product.id == 4);
    console.log(cartitem);
    sessionStorage.setItem('cartitem', cartitem);
    bm4.innerText = "added";
})
bm5.addEventListener('click', () => {
    cartitem = menClothing.filter(product => product.id == 5);
    console.log(cartitem);
    sessionStorage.setItem('cartitem', cartitem);
    bm5.innerText = "added";
})
bm6.addEventListener('click', () => {
    cartitem = menClothing.filter(product => product.id == 6);
    console.log(cartitem);
    sessionStorage.setItem('cartitem', cartitem);
    bm6.innerText = "added";
})
bm7.addEventListener('click', () => {
    cartitem = menClothing.filter(product => product.id == 7);
    console.log(cartitem);
    sessionStorage.setItem('cartitem', cartitem);
    bm7.innerText = "added";
})
bm8.addEventListener('click', () => {
    cartitem = menClothing.filter(product => product.id == 8);
    console.log(cartitem);
    sessionStorage.setItem('cartitem', cartitem);
    bm8.innerText = "added";
})
bm9.addEventListener('click', () => {
    cartitem = menClothing.filter(product => product.id == 9);
    console.log(cartitem);
    sessionStorage.setItem('cartitem', cartitem);
    bm9.innerText = "added";
})
bm10.addEventListener('click', () => {
    cartitem = menClothing.filter(product => product.id == 10);
    console.log(cartitem);
    sessionStorage.setItem('cartitem', cartitem);
    bw10.innerText = "added";
})
bm11.addEventListener('click', () => {
    cartitem = menClothing.filter(product => product.id == 11);
    console.log(cartitem);
    sessionStorage.setItem('cartitem', cartitem);
    bm11.innerText = "added";
})
bm12.addEventListener('click', () => {
    cartitem = menClothing.filter(product => product.id == 12);
    console.log(cartitem);
    sessionStorage.setItem('cartitem', cartitem);
    bm12.innerText = "added";
})
