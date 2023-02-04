fetch('http://localhost:3000/api/products')
.then(data=> {
    return data.json();
})
.then(products => {
    console.log(products);
});