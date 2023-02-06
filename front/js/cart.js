let cartSection = document.getElementById('cart__items');
console.log(cartSection);
let selectedProductsInCart = JSON.parse(localStorage.getItem('cart'));
console.log(selectedProductsInCart);

function getSelectedProductsInCart(selectedProductsList){ //Just a way to catch instances in which the cart is empty
if (selectedProductsList === null || selectedProductsList == 0){
        cartSection.innerHTML = '<h3>Your cart is currently empty!</h3>'
} else {

    for (let selectedProduct of selectedProductsList){
            let selectedProductContainer = document.createElement('article');
            cartSection.appendChild(selectedProductContainer);
            selectedProductContainer.className = "cart__item";
            selectedProductContainer.setAttribute('data-id', selectedProduct.selectedId);
            selectedProductContainer.setAttribute('data-color', selectedProduct.selectedColors);
            

            let selectedProductContainerImg = document.createElement('div');
            selectedProductContainerImg.className = "cart__item__img";
            selectedProductContainer.appendChild(selectedProductContainerImg);

            let selectedProductImg = document.createElement('img');
            selectedProductImg.alt = selectedProduct.selectedAltTxt;
            selectedProductImg.src = selectedProduct.selectedImage;
            selectedProductContainerImg.appendChild(selectedProductImg);
            

        }
    }
}
