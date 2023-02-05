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


for (product in products) {
    let productLink = document.createElement('a');
    productsCard.appendChild(productLink);
    productLink.href = `./product.html?id=${products.id}`;
    let productElement = document.createElement('article');
    productsCard.appendChild(productElement);
    let productImage = document.createElement('img');
    productsCard.appendChild(productImage);
    productImage.src = `${products.imageUrl}`;
    productImage.alt = `${products.altTxt}`;
    let productName = document.createElement('h3')
    productsCard.appendChild(productName);
    productName.setAttribute('class', 'productName');
    productName.innerHTML = `${products.name}`

        
        
    }
});

