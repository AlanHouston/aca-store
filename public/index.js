//Changing!
//filter() for search 

//document.body.innerHTML = "whatever"

'use strict';

const search=()=>{
    const searchInput = document.getElementById("searchBox");
    const searchResults = products.filter(item=>item.name = searchInput)
    // document.getElementById("showSearchResults").innerHTML = searchResults;
}

document.getElementById("productList").innerHTML = products.map(item=>`<li>${item.name}</li>`).join('')

