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
            
            let selectedProductContent = document.createElement('div');
            selectedProductContainer.appendChild(selectedProductContent);
            selectedProductContent.className = "cart__item__content";

            let selectedProductContentDescription = document.createElement('div');
            selectedProductContent.appendChild(selectedProductContentDescription);
            selectedProductContentDescription.className = "cart__item__content__description";

            let selectedProductName = document.createElement('h2');
            selectedProductContentDescription.appendChild(selectedProductName);
            selectedProductName.innerHTML = selectedProduct.selectedName;

            let selectedProductColor = document.createElement('p');
            selectedProductContentDescription.appendChild(selectedProductColor);
            selectedProductColor.innerHTML = selectedProduct.selectedColors;

            let selectedProductPrice = document.createElement('p');
            selectedProductContentDescription.appendChild(selectedProductPrice);
            selectedProductPrice.innerHTML = '€' + selectedProduct.selectedPrice;

           let selectedProductContentSettings = document.createElement('div');
           selectedProductContent.appendChild(selectedProductContentSettings);
           selectedProductContentSettings.className = "cart__item__content__settings";
           
           let selectedProductContentSettingsQuantity = document.createElement('div');
           selectedProductContentSettings.appendChild(selectedProductContentSettingsQuantity);
           selectedProductContentSettingsQuantity.className = "cart__item__content__settings__quantity";

           let selectedProductQuantity = document.createElement('p');
           selectedProductContentSettingsQuantity.appendChild(selectedProductQuantity);
           selectedProductQuantity.innerHTML = "Quantity:";

           let selectedProductQuantityInput = document.createElement('input');
           selectedProductContentSettingsQuantity.appendChild(selectedProductQuantityInput);
           selectedProductQuantityInput.setAttribute('type', 'number');
           selectedProductQuantityInput.setAttribute('name', 'itemQuantity');
           selectedProductQuantityInput.setAttribute('min', '1');
           selectedProductQuantityInput.setAttribute('max', '100');
           selectedProductQuantityInput.value = selectedProduct.selectedQuantity;
           selectedProductQuantityInput.className = "itemQuantity";


            let selectedProductContentSettingsDelete = document.createElement('div');
            selectedProductContentSettings.appendChild(selectedProductContentSettingsDelete);
            selectedProductContentSettingsDelete.className = "cart__item__content__settings__delete";

            let selectedProductDelete = document.createElement('p');
            selectedProductContentSettingsDelete.appendChild(selectedProductDelete);
            selectedProductDelete.className = "deleteItem";

        }
    }
}


getSelectedProductsInCart(selectedProductsInCart);      // Invoke the function to dynamically display product in the cart on the cart page. 
