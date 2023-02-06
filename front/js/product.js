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

// Create a click even for the add to cart button

let button = document.getElementById('addToCart');
console.log(button);
button.addEventListener('click', function(){
  console.log(document.getElementById('colors').value, document.getElementById('quantity').value);
  let selectedProduct = {
    selectedAltTxt : document.querySelector('.item__img img').alt,
    selectedColors : document.getElementById('colors').value,
    selectedId : id,
    selectedImage : document.querySelector('.item__img img').src,
    selectedName : document.getElementById('title').textContent,
    selectedPrice : document.getElementById('price').textContent,
    selectedQuantity : Number(document.getElementById('quantity').value),
  }
  let cart = localStorage.getItem('cart');
  console.log(localStorage,cart);

      if (cart === null ) {
        cart = [];
    } else {
        cart = JSON.parse (cart);
    }

   let notFound = true

    for (let i = 0; i < cart.length; i++) {
        console.log(cart[i].selectedId)
        console.log(selectedProduct.selectedId)
        console.log(cart[i].selectedColors)
        console.log(selectedProduct.selectedColors)
        console.log(cart[i]);
  
    if (cart[i].selectedId === selectedProduct.selectedId && cart[i].selectedColors === selectedProduct.selectedColors) {
        cart[i].selectedQuantity += selectedProduct.selectedQuantity;
        console.log(cart[i].selectedQuantity)
        console.log(selectedProduct.selectedQuantity)
        notFound = false;  
        console.log("find") 
        }
    }

  if (notFound) {cart.push(selectedProduct)}
   
    localStorage.setItem("cart", JSON.stringify(cart))

     alert('The product has been added to the cart')

})