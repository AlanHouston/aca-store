'use strict';

let displayProducts={
    products: products,
    display: function(theProducts){
        document.getElementById('productList').innerHTML = theProducts.map(item=>
        `<li>
            <ul>
                <li><h2>${item.name}<h2></li>
                <li><img src="${item.imgUrl}" alt="${item.description}"/></li>
                <li>Rating: ${item.rating}</li>
                <li>Reviews: ${item.reviews.length}</li>
                <li>${item.price}</li>
            </ul>
        </li>`).join('');    
    }
}

displayProducts.display(products);

// document.getElementById('productList').innerHTML = products.map(item=>
//     `<li>
//         <ul>
//             <li><h2>${item.name}<h2></li>
//             <li><img src="${item.imgUrl}" alt="${item.description}"/></li>
//             <li>Rating: ${item.rating}</li>
//             <li>Reviews: ${item.reviews.length}</li>
//             <li>${item.price}</li>
//         </ul>
//     </li>`).join('');

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
        displayProducts.display(this.results)
    }
}
