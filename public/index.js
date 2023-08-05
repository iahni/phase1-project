fetch('products.json')
.then(response =>response.json())
.then(data =>{
    var productList=
        document.getElementById('productList');

        console.log(data);
    var products = data.products;

    products.forEach(function(product)
     { console.log('ID:',product.id);
     console.log('Name:', product.name);
     console.log('Description:', product.description);
     });
   var listItem = document.createElement('li');
        var nameElement =
        document.createElement('h2');
        var priceElement =
        document.createElement('p');
        var descriptionElement =
        document.createElement('p');
        nameElement.textContent= products.name;
        priceElement.textContent = 'Price: $', + 
        products.price.toFixed(2);
        descriptionElement.textContent = products.description;

        listItem.appendChild(nameElement);
        listItem.appendChild(priceElement);
        listItem.appendChild(descriptionElement);
        productList.appendChild(listItem);
});
;

