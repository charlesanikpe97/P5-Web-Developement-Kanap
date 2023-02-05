let params = (new URL(document.location)).searchParams;
console.log(params)
let id = params.get('id'); 
console.log(id)

fetch('http://localhost:3000/api/products/'+id)
    .then(data=> {
        return data.json();
    })
    .then(product => {
        console.log(product)

let pageTitle = document.getElementsByTagName('title')[0];
pageTitle.innerHTML = product.name;
let itemImageContainer = document.getElementsByClassName('item__img')[0];
console.log(itemImageContainer);
let itemImage = document.createElement('img');
itemImageContainer.appendChild(itemImage);
itemImage.src = product.imageUrl;
itemImage.alt = product.altTxt;

//Title and Price 

let titlePriceContainer = document.getElementsByClassName('item__content__titlePrice')[0];
console.log(titlePriceContainer);
let title = document.getElementById('title');
title.innerHTML = product.name;
let price = document.getElementById('price');
price.innerHTML = product.price;
let productDescription = document.getElementById('description');
productDescription.innerHTML = product.description;


let colors = document.getElementById('colors');

for (let color of product.colors){
  let optionElement = document.createElement('option');
  colors.appendChild(optionElement);
  optionElement.setAttribute('value', `${color}`);
  optionElement.innerHTML = color;


}

});