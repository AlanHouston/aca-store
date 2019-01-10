//Changing!
//filter() for search 

//document.body.innerHTML = "whatever"

'use strict';

document.getElementById("productList").innerHTML = products.map(item=>`<li>${item.name}</li>`).join('')

const search=()=>{
    const searchInput = document.getElementById("searchBox");
    products.filter(item,index){
        if (item.name == searchInput)
    }
    // document.getElementById("showSearchResults").innerHTML = searchResults;
}


