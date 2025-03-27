

const womensClothing = [
    {
        "id": 1,
        "name": "Floral Summer Dress",
        "gender":"female",
        "description": "A lightweight floral dress perfect for summer outings.",
        "price": 5000,
        "size": ["S", "M", "L", "XL"],
        "color": ["Red", "Blue", "Yellow"],
        "category": "Dress",
        "inStock": true,
        "imageUrl": "https://example.com/images/floral-dress.jpg"
    },
    {
        "id": 2,
        "name": "Denim Jacket",
        "gender":"female",
        "description": "A stylish and classic denim jacket for casual looks.",
        "price": 2000,
        "size": ["S", "M", "L", "XL"],
        "color": ["Blue", "Black"],
        "category": "Jacket",
        "inStock": true,
        "imageUrl": "https://example.com/images/denim-jacket.jpg"
    },
    {
        "id": 3,
        "name": "White Blouse",
        "gender":"female",
        "description": "A versatile white blouse for both work and casual occasions.",
        "price": 1000,
        "size": ["S", "M", "L"],
        "color": ["White", "Ivory"],
        "category": "Top",
        "inStock": true,
        "imageUrl": "https://example.com/images/white-blouse.jpg"
    },
    {
        "id": 4,
        "name": "Black Leather Skirt",
        "gender":"female",
        "description": "A chic black leather skirt for a night out.",
        "price": 3000,
        "size": ["S", "M", "L"],
        "color": ["Black"],
        "category": "Skirt",
        "inStock": false,
        "imageUrl": "https://example.com/images/leather-skirt.jpg"
    },
    {
        "id": 5,
        "name": "Striped T-Shirt",
        "gender":"female",
        "description": "A comfy striped T-shirt for a casual look.",
        "price": 7000,
        "size": ["S", "M", "L", "XL"],
        "color": ["Black & White", "Navy & White"],
        "category": "Top",
        "inStock": true,
        "imageUrl": "https://example.com/images/striped-tshirt.jpg"
    },
    {
        "id": 6,
        "name": "Knit Sweater",
        "gender":"female",
        "description": "A warm and cozy knit sweater for fall and winter.",
        "price": 12000,
        "size": ["S", "M", "L"],
        "color": ["Gray", "Beige", "Black"],
        "category": "Sweater",
        "inStock": true,
        "imageUrl": "https://example.com/images/knit-sweater.jpg"
    },
    {
        "id": 7,
        "name": "High-Waisted Jeans",
        "gender":"female",
        "description": "Comfortable high-waisted jeans with a modern fit.",
        "price": 15000,
        "size": ["S", "M", "L", "XL"],
        "color": ["Light Blue", "Dark Blue"],
        "category": "Jeans",
        "inStock": true,
        "imageUrl": "https://example.com/images/high-waisted-jeans.jpg"
    },
    {
        "id": 8,
        "name": "High-Waisted Jeans",
        "gender":"female",
        "description": "Comfortable high-waisted jeans with a modern fit.",
        "price": 4000,
        "size": ["S", "M", "L", "XL"],
        "color": ["Light Blue", "Dark Blue"],
        "category": "Jeans",
        "inStock": true,
        "imageUrl": "https://example.com/images/high-waisted-jeans.jpg"
    },
    {
        "id": 9,
        "name": "High-Waisted Jeans",
        "gender":"female",
        "description": "Comfortable high-waisted jeans with a modern fit.",
        "price": 8000,
        "size": ["S", "M", "L", "XL"],
        "color": ["Light Blue", "Dark Blue"],
        "category": "Jeans",
        "inStock": true,
        "imageUrl": "https://example.com/images/high-waisted-jeans.jpg"
    },
    {
        "id": 10,
        "name": "High-Waisted Jeans",
        "gender":"female",
        "description": "Comfortable high-waisted jeans with a modern fit.",
        "price": 13000,
        "size": ["S", "M", "L", "XL"],
        "color": ["Light Blue", "Dark Blue"],
        "category": "Jeans",
        "inStock": true,
        "imageUrl": "https://example.com/images/high-waisted-jeans.jpg"
    },
    {
        "id": 11,
        "name": "High-Waisted Jeans",
        "gender":"male",
        "description": "Comfortable high-waisted jeans with a modern fit.",
        "price": 2500,
        "size": ["S", "M", "L", "XL"],
        "color": ["Light Blue", "Dark Blue"],
        "category": "Jeans",
        "inStock": true,
        "imageUrl": "https://example.com/images/high-waisted-jeans.jpg"
    },
    {
        "id": 12,
        "name": "High-Waisted Jeans",
        "gender":"male",
        "description": "Comfortable high-waisted jeans with a modern fit.",
        "price": 5500,
        "size": [ "M", "L", "XL"],
        "color": ["Light Blue", "Dark Blue"],
        "category": "Jeans",
        "inStock": true,
        "imageUrl": "https://example.com/images/high-waisted-jeans.jpg"
    }
];



document.addEventListener('DOMContentLoaded', () =>{
    let wdisplay = document.getElementById('Women');
    let mdisplay = document.getElementById('men');
    mdisplay.style.display = "none";
    wdisplay.style.display = "block";
})

const applybtn = document.getElementById('apply-btn');

function filters(){

    const gender = document.getElementById('gender').value;
    const category = document.getElementById('category').value;
    const size =  document.getElementById('size').value;
    const price = document.getElementById('prange').value;
    let wdisplay = document.getElementById('Women');
    let mdisplay = document.getElementById('men');
    console.log(gender,category,size,price);
    
    // gender filter
    if(gender != ""){
        let filterbygender =[];
        if(gender === "male"){
            filterbygender =  womensClothing.filter(product => product.gender == "male");
            wdisplay.style.display = "none";
            mdisplay.style.display = "block";
        }
        if(gender === "female"){
            filterbygender =  womensClothing.filter(product => product.gender =="female");
            mdisplay.style.display = "none";
            wdisplay.style.display = "block";
        }
        console.log(filterbygender);
    }

    // category filter
    if(category != ""){
        let filterbycategory = [] ;
        
        if(category === "Jeans"){
            filterbycategory = womensClothing.filter(product => product.category == "Jeans");
        }
        if(category === "Sweater"){
            filterbycategory = womensClothing.filter(product => product.category == "Sweater");
        }
        if(category === "Top"){
            filterbycategory = womensClothing.filter(product => product.category =="Top");
        }
        console.log(filterbycategory);
    }
    

    // size filter
    if(size != ""){
        let filterbysize = [];
        if(size === "XS"){
            filterbysize= womensClothing.filter(product => product.size === "XS");
        }
        if(size === "S"){
            filterbysize= womensClothing.filter(product => product.size === "S");
        }
        if(size === "M"){
            filterbysize= womensClothing.filter(product => product.size === "M");
        }
        if(size === "L"){
            filterbysize= womensClothing.filter(product => product.size === "L");
        }
        if(size === "XL"){
            filterbysize= womensClothing.filter(product => product.size === "XL");
        }
        console.log(filterbysize);
        
    }

         // Price filter
        if(price != " "){
        let filterbypricerange = [];
        if(price === "1"){
            filterbypricerange = womensClothing.filter(product => product.price <= 5000);
        }
        if(price === "2"){
            filterbypricerange = womensClothing.filter(product => product.price >5000 && product.price <=10000);
        }
        if(price === "3"){
            filterbypricerange = womensClothing.filter(product => product.price > 10000);
        }
        console.log(filterbypricerange);
    }
} 

applybtn.addEventListener('click', () =>{
    filters();
});