'use strict';
//Fix details, SEE FUNCTION LINE 39
//sterilize search input, tolowercase
//make input form
//after add item to cart, show cart
//if no cart, display 'no items in cart'
//if search returns nothing, display 'nothing matched your search'

function backToHome(){
    let allProducts = [];
    for(let i=0;i<products.length;i++){
        allProducts.push(products[i]._id)
    }
    document.getElementById('titleHolder').innerHTML = ''
    displayProducts.beginDisplay(allProducts);
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
        this.finishDisplay();
        // console.log(this.productsToDisplay)
    },
    finishDisplay: function(){
        // console.log('products to display',this.productsToDisplay)
        document.getElementById('productList').innerHTML = this.productsToDisplay.map(item=> 
            `<li>
                <ul id="productUl">
                    <li><h2>${item.name}<h2></li>
                    <li><img src="${item.imgUrl}" alt="${item.description}"/></li>
                    <li>Rating: ${item.rating}</li>
                    <li>Reviews: ${item.reviews.length}</li>
                    <li>${item.price}</li>
                    <li>
                        <button onclick="displayProducts.showDetails('${item.description}')">Details</button>
                    </li>
                    <li>
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
                    </li>
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
    results: [],
    search: function(){
        products.filter(item=>{
            if(item.name.includes(this.input.value)){
                this.results.push(item._id);
            }
        })
        // products.filter(item=>{
        //     console.log(item.name)
        //     let lowercaseProduct = item.name.split('').toLowerCase();
        //     let lowercaseSearch = this.input.toLowerCase();
        //     if(lowercaseProduct.includes(lowercaseSearch.value)){
        //         this.results.push(item._id);
        //     }
        // })
        if(this.results.length === 0){
            document.getElementById('productList').innerHTML = `<h1>"Your search returned no results!"</h1>`
        }else{
            this.showResults();
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
    cartId: [],
    addToCart: function(productId){
        let cartProduct = products.filter(item=>item._id == productId)
        for (let i=0;i<cartProduct.length;i++){
            this.cartId.push(cartProduct[i]._id);
        }
        // console.log('cartProduct',cartProduct)
    },
    displayCart: function(){
        document.getElementById('titleHolder').innerHTML = 'Your Cart!';
        // console.log('cart id',this.cartId)
        if (this.cartId.length === 0){
            document.getElementById('productList').innerHTML = `<h1>"You have no items in your cart!"</h1>`
        }else{
            displayProducts.beginDisplay(this.cartId);
        }
    },
    removeFromCart: function(productId){
        this.cartId.find((item, index)=>{
            item._id == productId
            this.cartId.splice(index,1);
        });
        let removeButton = document.createElement('li')
        document.getElementById('productUl').appendChild(removeButton);
        removeButton.innerHTML = `<button onclick="cartHandlers.removeFromCart('{item._id}')">Remove from Cart</button>`
        //^^none of this works :/
    }
}

window.onload = backToHome();
