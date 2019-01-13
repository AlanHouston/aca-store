'use strict';
//Fix details, SEE FUNCTION LINE 39
//sterilize search input, tolowercase
//make input form
//after add item to cart, show cart
//if no cart, display 'no items in cart'

window.onload = function(){
    displayProducts.display(products);
}

let displayProducts={
    // products: products,
    display: function(theProducts){
        document.getElementById('productList').innerHTML = theProducts.map(item=>
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
        </li>`).join('');   
    },
    showDetails: function(detail){
        console.log(detail)
        document.getElementById('detailSpace').innerHTML = detail;
        //WRONG - NEEDS TO OCCUPY WHOLE PAGE, NOT JUST POPULATE BELOW, ALSO NEEDS *ALL* INFO
        // let newLi = document.createElement('li');
        // newLi.textContent = detail;
        // document.getElementById('productUl').appendChild(newLi);
    }
}

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
        document.getElementById('searchBox').value='';
    },
    showResults: function(){
        document.getElementById('titleHolder').innerHTML = 'Search Results!'
        displayProducts.display(this.results)
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
        console.log(cartCart[0])
        // displayProducts.display(cartCart)
    }
}
