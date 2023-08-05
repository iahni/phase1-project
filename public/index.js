fetch('db.json')
.then(response =>response.json())
.then(data =>{
    var clothingList =
        document.getElementById('clothingList');
    var clothing = data.clothing;
    clothing