fetch('data.json')
.then(response =>response.json())
.then(data =>{
    var productList =
        document.getElementById('productList');
    var 
    clothing