fetch('data.json')
.then(response =>response.json())
.then(data =>{
    var clothingList =
        document.getElementById('clothingList');
    var 
    products = data.products;

    products.forEach(products => {
        var listItem = document.createElement('li');
        var nameElement =
        document.createElement('h2');
        var priceElement =
        document.createElement('p');
        var descriptionElement =
        document.createElement('p');
        nameElement.textContent= products.name;
        priceElement.textContent = 'Price: $'+ 
        products.price.toFixed(2);
        descriptionElement.textContent = products.description;

        listItem.appendChild(nameElement);
        listItem.appendChild(priceElement);
        listItem.appendChild(descriptionElement);
        clothingList.appendChild(listItem);
});
});

