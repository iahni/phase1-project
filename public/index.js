fetch('clothing.json')
.then(Response =>Response.json())
.then(data =>
    {var clothingList =
        document.getElementById('clothingList')
    }
    )