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
            selectedProductDelete.innerHTML = "Delete";

        }
    }
}


getSelectedProductsInCart(selectedProductsInCart); // Invoke the function to dynamically display product in the cart on the cart page. 


// Find out the total price and number of products in the cart.

let selectedProductsInCartArray = document.getElementsByClassName('itemQuantity');
console.log(selectedProductsInCartArray); //Logs an HTMLCollection of an array of objects, although we just need the value.
let quantityOfEachProductInCart = [];
let articles = 0;

for (let i = 0; i < selectedProductsInCartArray.length; i++) {
    quantityOfEachProductInCart.push(Number(selectedProductsInCartArray[i].value));
}

console.log(quantityOfEachProductInCart);

for (let i = 0; i < quantityOfEachProductInCart.length; i++){
    articles += quantityOfEachProductInCart[i];
}

console.log(articles);

let totalQuantity = document.getElementById('totalQuantity');
totalQuantity.innerHTML = articles;


let priceForEachProductInCart = [];
let price = 0;
for (let i = 0; i < selectedProductsInCart.length; i++) {
    if (selectedProductsInCart[i].selectedQuantity == 0) { //This conditional statement helps prevent adding up the cost of products add to the cart with no quantity.
        selectedProductsInCart[i].selectedPrice = 0;
        priceForEachProductInCart.push(Number(selectedProductsInCart[i].selectedPrice));
    
    } else {
        priceForEachProductInCart.push(Number(selectedProductsInCart[i].selectedPrice));
    }
   
    
}

console.log(priceForEachProductInCart);



for (let i = 0; i < quantityOfEachProductInCart.length; i++){
    price += (Number(quantityOfEachProductInCart[i]) * selectedProductsInCart[i].selectedPrice);

}

console.log(price);

let totalPrice = document.getElementById('totalPrice');
totalPrice.innerHTML = price;



// Add the ability to change the quantity within the cart page and the logic behind deleting a product from the cart.


let quantityInput = document.getElementsByClassName('itemQuantity');
console.log(quantityInput);

for (let i = 0; i < quantityInput.length; i++) {
    quantityInput[i].addEventListener('change', function(event){
        event.preventDefault();
        let modifiedQuantity = selectedProductsInCart[i].selectedQuantity;
        console.log(modifiedQuantity);
        let selectedProductModifiedValue = Number(quantityInput[i].value);
        selectedProductsInCart[i].selectedQuantity = selectedProductModifiedValue;
        localStorage.setItem('cart', JSON.stringify(selectedProductsInCart));
        window.location.reload() //forces the cart page to reload and reflects changes made to the cart.
    })
   
    
}


let deleteButton = document.getElementsByClassName('deleteItem');
console.log(deleteButton);

for (let i = 0; i < deleteButton.length; i++) {
    deleteButton[i].addEventListener('click', function(event){
        event.preventDefault();
        let deleteSelectedProductId = selectedProductsInCart[i].selectedId;
        let deleteSelectedProductColor = selectedProductsInCart[i].selectedColors;
        let selectedProductsList = selectedProductsInCart.filter((selectedProductsInCart) => {
            return selectedProductsInCart.selectedId !== deleteSelectedProductId || selectedProductsInCart.selectedColors !== deleteSelectedProductColor;
        })
        localStorage.setItem('cart', JSON.stringify(selectedProductsList));
        alert(`${selectedProductsInCart[i].selectedName}`+ ' has been successfully removed from your cart.')
        window.location.reload() //forces the cart page to reload and reflects changes made to the cart.
    })
    
  }

     //Form

    // Variables Regex
    let nameRegex = /^[a-zA-Z\-çñàéèêëïîôüù ]{2,}$/;
    let addressRegex = /^[0-9a-zA-Z\s,.'-çñàéèêëïîôüù]{3,}$/;
    let emailRegex = /^[A-Za-z0-9\-\.]+@([A-Za-z0-9\-]+\.)+[A-Za-z0-9-]{2,4}$/;

// Variables to retrieve form field ids
    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const address = document.getElementById("address");
    const city = document.getElementById("city");
    const email = document.getElementById("email");

    firstName.addEventListener("input", (event) => {
    event.preventDefault();
    if (nameRegex.test(firstName.value) == false || firstName.value == "") {
    document.getElementById("firstNameErrorMsg").innerHTML =
      "Invalid first name";
  } else {
    document.getElementById("firstNameErrorMsg").innerHTML = "";
  }
});

    lastName.addEventListener("input", (event) => {
    event.preventDefault();
    if (nameRegex.test(lastName.value) == false || lastName.value == "") {
    document.getElementById("lastNameErrorMsg").innerHTML = "Invalid last name";
    return false;
    } else {
    document.getElementById("lastNameErrorMsg").innerHTML = "";
    return true;
  }
});

    address.addEventListener("input", (event) => {
  event.preventDefault();
  if (addressRegex.test(address.value) == false || address.value == "") {
    document.getElementById("addressErrorMsg").innerHTML = "Invalid Adress";
    return false;
  } else {
    document.getElementById("addressErrorMsg").innerHTML = "";
    return true;
  }
});

    city.addEventListener("input", (event) => {
    event.preventDefault();
    if (nameRegex.test(city.value) == false || city.value == "") {
    document.getElementById("cityErrorMsg").innerHTML = "Invalid City";
    return false;
    } else {
    document.getElementById("cityErrorMsg").innerHTML = "";
    return true;
}
});

    email.addEventListener("input", (event) => {
    event.preventDefault();
    if (emailRegex.test(email.value) == false || email.value == "") {
    document.getElementById("emailErrorMsg").innerHTML = "Invalid Email";
    return false; 
    }
    else {
    document.getElementById("emailErrorMsg").innerHTML = "";
    return true;
  }
});

    let order = document.getElementById("order");
    order.addEventListener("click", function(event) {
    event.preventDefault();

    if (
    firstName.value === "" ||
    lastName.value === "" ||
    address.value === "" ||
    city.value === "" ||
    email.value === ""
  ) {
    window.confirm(
      "You must enter your details to place the order!"
    );
  } else if (
    nameRegex.test(firstName.value) == false ||
    nameRegex.test(lastName.value) == false ||
    addressRegex.test(address.value) == false ||
    nameRegex.test(city.value) == false ||
    emailRegex.test(email.value) == false
  ) {
    window.confirm("Please enter your details correctly!");
  } else {

    let contact = {
      firstName: firstName.value,
      lastName: lastName.value,
      address: address.value,
      city: city.value,
      email: email.value,
    };


    let products = [];
    selectedProductsInCart.forEach((order) => {
    products.push(order.selectedId);
    });

    let pageOrder = {contact, products};

    fetch("http://localhost:3000/api/products/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pageOrder),
      mode:"cors"
    })
      .then((res) => {
        return res.json();
      })
      .then((confirm) => {
        window.location.href = "./confirmation.html?orderId=" + confirm.orderId;
        localStorage.clear();
      })
      .catch((error) => {
        console.log("An error has occurred");
      });
  }
});