fetch('http://localhost:3000/api/products')
    .then(data=> {
        return data.json();
    })
    .then(products => {
        console.log(products)


    let main = document.querySelector('main .limitedWidthBlock')
    console.log(main);
    let productsCard = document.getElementById('items');
    console.log(productsCard);

    main.appendChild(productsCard);


    for (let product of products) {
        let productLink = document.createElement('a');
        productsCard.appendChild(productLink);
        productLink.href = `./product.html?id=${product._id}`;
        let productElement = document.createElement('article');
        productLink.appendChild(productElement);
        let productImage = document.createElement('img');
        productElement.appendChild(productImage);
        productImage.src = product.imageUrl;
        productImage.alt = product.altTxt;
        let productName = document.createElement('h3')
        productElement.appendChild(productName);
        productName.setAttribute('class', 'productName');
        productName.innerHTML = product.name;
        let productDescription = document.createElement('p');
        productElement.appendChild(productDescription);
        productDescription.innerHTML = product.description;
        productDescription.setAttribute('class', 'productDescription');
        

            
            
        }
    });

