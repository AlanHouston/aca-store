'use strict';
//sterilize search input
//make input form

// import searchHandlers from './searchHandlers';

let displayProducts={
    // products: products,
    display: function(theProducts){
        document.getElementById('productList').innerHTML = theProducts.map(item=>
        `<li>
            <ul>
                <li><h2>${item.name}<h2></li>
                <li><img src="${item.imgUrl}" alt="${item.description}"/></li>
                <li>Rating: ${item.rating}</li>
                <li>Reviews: ${item.reviews.length}</li>
                <li>${item.price}</li>
                <button onclick="displayProducts.showDetails(${item})">Details</button>
                <br/>
                <button onclick="cartHandlers.addToCart(${item})">Add to Cart!</button>
                <select>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                    <option value='6'>6</option>
                    <option value='7'>7</option>
                    <option value='8'>8</option>
                    <option value='9'>9</option>
                    <option value='10'>10</option>
                </select>
                <li id="detailSpace"></li>
            </ul>
        </li>`).join('');    
    },
    showDetails: function(theProduct){
        document.getElementById('detailSpace').innerHTML = theProduct.description
    }
}
displayProducts.display(products);

//if searchhandlers module, start delete here
let searchHandlers = {
    input: document.getElementById('searchBox'),
    // formattedInput: this.input.toLowerCase(),
    results: [],
    search: function(){
        // console.log(this.formattedInput)
        products.filter(item=>{
            if(item.name.includes(this.input.value)){
                this.results.push(item);
                this.showResults();
                // console.log(item);
            }
        })
    },
    showResults: function(){
        document.getElementById('titleHolder').innerHTML = 'Search Results!'
        displayProducts.display(this.results)
    }
}
//if searchhandlers module, end delete here


let cartHandlers = {
    cart: [],
    addToCart: function(product){
        this.cart.push(product);
    },
    displayCart: function(){
        document.getElementById('titleHolder').innerHTML = 'Your Cart!'
        displayProducts.display(this.cart);
    }

}
