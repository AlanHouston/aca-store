'use strict';

document.getElementById('productList').innerHTML = products.map(item=>`<li>${item.name}</li>`).join('');

let searchBoxInput = document.getElementById('searchBox');

let searchHandlers = {
    input: document.getElementById('searchBox'),
    results: [],
    search: function(){
        products.filter(item=>{
            if(item.name.includes(this.input.value)){
                this.results.push(item);
                this.showResults();
                console.log(item);
            }
        })
    },
    showResults: function(){
        document.getElementById('productList').innerHTML = this.results.map(item=>`<li>${item.name}</li>`).join('');
    }
}



