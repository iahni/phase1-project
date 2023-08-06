fetch('products.json')
.then(response =>response.json())
.then(data =>{
    var productList=
        document.getElementById('productList');

        console.log(data);
    var products = data.products;

    products.forEach(function(products)
     { console.log('ID:',products.id);
     console.log('Name:', products.name);
     console.log('Description:', products.description);
     console.log ('Price:', products.price);
     console.log('Image:', products.image);


   var listItem = document.createElement('li');
        var nameElement =
        document.createElement('h4');
        var priceElement =
        document.createElement('p');
        var descriptionElement =
        document.createElement('p');
        var imageElement =
        document.createElement('p');
        
        nameElement.textContent= products.name;
        priceElement.textContent = 'Price: $' + products.price;
        descriptionElement.textContent = products.description;
        imageElement =
        document.createElement('p');
      
        listItem.appendChild(nameElement);
        listItem.appendChild(priceElement);
        listItem.appendChild(descriptionElement);
        productList.appendChild(listItem);

productList.addEventListener('click',function(event) {
    var clickedItem = event.target;
    if (clickedItem.tagName ==='LI'){
        console.log('Clicked on product:',
        clickedItem.textContent);

    productList.addEventListener('mouseover',
    function (event){
        var hoveredItem =event.target;
        if (hoveredItem.tagName ==='LI'){
            hoveredItem.style.backgroundColor =
            'lightgray';
        
        }
    })
     }});
    });
});