'use strict';
//Fix details, SEE FUNCTION LINE 39
//sterilize search input, tolowercase
//make input form
//after add item to cart, show cart
//if no cart, display 'no items in cart'
//if search returns nothing, display 'nothing matched your search'

window.onload = function(){
    let allProducts = [];
    for(let i=0;i<products.length;i++){
        allProducts.push(products[i]._id)
    }
    displayProducts.beginDisplay(allProducts);
    // console.log('onload happening')
    // console.log(allProducts)
}


//needs array of product ids to function properly!!
let displayProducts = {
    productsToDisplay:[],
    beginDisplay: function(theProductIds){
        products.forEach(item => {
            for(let i=0;i<theProductIds.length;i++){
                if(item._id === theProductIds[i]){
                    this.productsToDisplay.push(item)
                    // console.log(item)
                }
            }
        });
        this.completeDisplay();
        // console.log(this.productsToDisplay)
    },
    completeDisplay: function(){
        // console.log('products to dislpay',this.productsToDisplay)
        document.getElementById('productList').innerHTML = this.productsToDisplay.map(item=> 
            `<li>
                <ul id="productUl">
                    <li><h2>${item.name}<h2></li>
                    <li><img src="${item.imgUrl}" alt="${item.description}"/></li>
                    <li>Rating: ${item.rating}</li>
                    <li>Reviews: ${item.reviews.length}</li>
                    <li>${item.price}</li>
                    <button onclick="displayProducts.showDetails('${item.description}')">Details</button>
                    <br/>
                    <button onclick="cartHandlers.addToCart('${item._id}')">Add to Cart!</button>
                    <select>
                        <option value=1>1</option>
                        <option value=2>2</option>
                        <option value=3>3</option>
                        <option value=4>4</option>
                        <option value=5>5</option>
                        <option value=6>6</option>
                        <option value=7>7</option>
                        <option value=8>8</option>
                        <option value=9>9</option>
                        <option value=10>10</option>
                    </select>
                    <li id="detailSpace"></li>
                </ul>
            </li>`   
        ).join('');  
        this.productsToDisplay=[];
        searchHandlers.results=[];
    },
    // showDetails: function(detail){
    //     console.log(detail)
    //     document.getElementById('detailSpace').innerHTML = detail;
    //     //WRONG - NEEDS TO OCCUPY WHOLE PAGE, NOT JUST POPULATE BELOW, ALSO NEEDS *ALL* INFO
    //     // let newLi = document.createElement('li');
    //     // newLi.textContent = detail;
    //     // document.getElementById('productUl').appendChild(newLi);
    // }
}

let searchHandlers = {
    input: document.getElementById('searchBox'),
    // formattedInput: this.input.toLowerCase(),
    results: [],
    search: function(){
        products.filter(item=>{
            if(item.name.includes(this.input.value)){
                this.results.push(item._id);
            }
        })
        if(this.results){
            this.showResults();
        }else{
            document.getElementById('productList').innerHTML = `<h1>"Your search returned no results"</h1>`
        }
        document.getElementById('searchBox').value='';
        // console.log(this.results)
    },
    showResults: function(){
        document.getElementById('titleHolder').innerHTML = 'Search Results!'
        // console.log(this.results)
        displayProducts.beginDisplay(this.results)
    }
}

let cartHandlers = {
    cart: [],
    addToCart: function(productId){
        let cartProduct = products.filter(item=>item._id == productId)
        this.cart.push(cartProduct);
    },
    displayCart: function(){
        document.getElementById('titleHolder').innerHTML = 'Your Cart!';
        let cartCart = [];
        for (let i=0;i<this.cart.length;i++){
            cartCart.push(this.cart[i]);
        }
        // console.log(cartCart[0])
        // displayProducts.display(cartCart)
    }
}

