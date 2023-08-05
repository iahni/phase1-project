fetch('data.json')
.then(response =>response.json())
.then(data =>{
    var productList =
        document.getElementById('clothingList');
    var 
    products = data.products;

    products.forEach(product => {
        var listItem = document.createElement('li');
        var nameElement =
        document.createElement('h2');
        var priceElement =
        document.createElement('p');
        var descriptionElement =
        document.createElement('p');

        
});
});