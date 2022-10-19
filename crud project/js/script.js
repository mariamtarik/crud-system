

var productNameInput = document.getElementById("productName");
var productPriceInput = document.getElementById("productPrice");
var productDescInput = document.getElementById("productDesc");
var productCategoryInput = document.getElementById("productCategory");
var productNameUpdate = document.getElementById("productNameUpdate");
var productPriceUpdate = document.getElementById("productPriceUpdate");
var productDescUpdate = document.getElementById("productDescUpdate");
var productCategoryUpdate = document.getElementById("productCategoryUpdate");
var nameError = document.getElementById("nameError");
var CategoryError = document.getElementById("CategoryError");
var priceError = document.getElementById("priceError");
var nameErrorUpdate = document.getElementById("nameErrorUpdate");
var CategoryErrorUpdate = document.getElementById("CategoryErrorUpdate");
var priceErrorUpdate = document.getElementById("priceErrorUpdate");

var productsContainer;
if (localStorage.getItem("productsList") == null) {
    productsContainer = [];
}
else {
    productsContainer = JSON.parse(localStorage.getItem('productsList'));
    displayProducts();
}
function addProduct() {

    if (validateProductName() == true && validateProductCategory() == true && validateProductPrice() == true) {
        var product = {

            name: productNameInput.value,
            price: productPriceInput.value,
            category: productCategoryInput.value,
            desc: productDescInput.value
        }
        productsContainer.push(product);
        localStorage.setItem("productsList", JSON.stringify(productsContainer));
        clearForm();
        displayProducts();

    }

}


function clearForm() {
    productNameInput.value = "";
    productPriceInput.value = "";
    productCategoryInput.value = "";
    productDescInput.value = "";

}



function displayProducts() {

    var cartoona = ``;
    for (var i = 0; i < productsContainer.length; i++) {//3
        cartoona += `<tr>
        <td>${i}</td>
        <td>${productsContainer[i].name}</td>
        <td>${productsContainer[i].price}</td>
        <td>${productsContainer[i].category}</td>
        <td>${productsContainer[i].desc}</td>
        <td> <button onclick="update(${i})" class="btn btn-outline-warning" data-toggle="modal" data-target="#exampleModal" >update</button></td>
        <td> <button onclick="deleteProducts(${i})" class="btn btn-outline-danger">delete</button></td>
    </tr>`;
    }
    document.getElementById("tableBody").innerHTML = cartoona;
}

function searchProducts(term) {
    var cartoona = ``;
    for (var i = 0; i < productsContainer.length; i++) {

        if (productsContainer[i].name.toLowerCase().includes(term.toLowerCase()) == true) {
            cartoona += `<tr>
            <td>${i}</td>
            <td>${productsContainer[i].name}</td>
            <td>${productsContainer[i].price}</td>
            <td>${productsContainer[i].category}</td>
            <td>${productsContainer[i].desc}</td>
             <td> <button class="btn btn-outline-warning">update</button></td>
            <td> <button  onclick="deleteProducts(${i})" class="btn btn-outline-danger">delete</button></td>
        </tr>`;
        }
    }
    document.getElementById("tableBody").innerHTML = cartoona;
}


function deleteProducts(index) {
    productsContainer.splice(index, 1);
    displayProducts();
    localStorage.setItem("productsList", JSON.stringify(productsContainer));
}
var indexUpdate;
function update(index) {
    productNameUpdate.value = productsContainer[index].name;
    productPriceUpdate.value = productsContainer[index].price;
    productCategoryUpdate.value = productsContainer[index].category;
    productDescUpdate.value = productsContainer[index].desc;
    indexUpdate = index;
}
function addUpdateProduct() {
    if (validateProductNameUpdate() == true && validateProductCategoryUpdate() == true && validateProductPriceUpdate() == true) {
        var productUpdate = {
            name: productNameUpdate.value,
            price: productPriceUpdate.value,
            category: productCategoryUpdate.value,
            desc: productDescUpdate.value
        }
    
    productsContainer.splice(indexUpdate, 1, productUpdate);
    localStorage.setItem("productsList", JSON.stringify(productsContainer));
    clearForm();
    displayProducts();
}
}
function validateProductName() {
    var regex = /^[A-Z][a-z]{3,8}$/;
    if (regex.test(productNameInput.value) == true) {
        productNameInput.classList.add("is-valid");
        productNameInput.classList.remove("is-invalid");
        nameError.classList.replace("d-block", "d-none");
        return true;
    }
    else {
        productNameInput.classList.add("is-invalid");
        productNameInput.classList.remove("is-valid");
        nameError.classList.replace("d-none", "d-block");
        return false;
    }
}
productNameInput.addEventListener("blur", validateProductName);
function validateProductCategory() {
    var regex = /^(tv|mobile)$/;
    if (regex.test(productCategoryInput.value) == true) {
        productCategoryInput.classList.add("is-valid");
        productCategoryInput.classList.remove("is-invalid");
        CategoryError.classList.replace("d-block", "d-none");
        return true;
    }
    else {
        productCategoryInput.classList.add("is-invalid");
        productCategoryInput.classList.remove("is-valid");
        CategoryError.classList.replace("d-none", "d-block");
        return false;
    }
}
productCategoryInput.addEventListener("blur", validateProductCategory);
function validateProductPrice() {
    var regex = /^([1-9][0-9]{1,3}|10000)$/;
    if (regex.test(productPriceInput.value) == true) {
        productPriceInput.classList.add("is-valid");
        productPriceInput.classList.remove("is-invalid");
        priceError.classList.replace("d-block", "d-none");
        return true;
    }
    else {

        productPriceInput.classList.add("is-invalid");
        productPriceInput.classList.remove("is-valid");
        priceError.classList.replace("d-none", "d-block");
        return false;
    }
}
productPriceInput.addEventListener("blur", validateProductPrice);



function validateProductNameUpdate() {
    var regex = /^[A-Z][a-z]{3,8}$/;
    if (regex.test(productNameUpdate.value) == true) {
        productNameUpdate.classList.add("is-valid");
        productNameUpdate.classList.remove("is-invalid");
        nameErrorUpdate.classList.replace("d-block", "d-none");
        return true;
    }
    else {
        productNameUpdate.classList.add("is-invalid");
        productNameUpdate.classList.remove("is-valid");
        nameErrorUpdate.classList.replace("d-none", "d-block");
        return false;
    }
}
productNameUpdate.addEventListener("blur", validateProductNameUpdate);
function validateProductCategoryUpdate() {
    var regex = /^(tv|mobile)$/;
    if (regex.test(productCategoryUpdate.value) == true) {
        productCategoryUpdate.classList.add("is-valid");
        productCategoryUpdateclassList.remove("is-invalid");
        CategoryErrorUpdate.classList.replace("d-block", "d-none");
        return true;
    }
    else {
        productCategoryUpdate.classList.add("is-invalid");
        productCategoryUpdate.classList.remove("is-valid");
        CategoryErrorUpdate.classList.replace("d-none", "d-block");
        return false;
    }
}
productCategoryUpdate.addEventListener("blur", validateProductCategoryUpdate);
function validateProductPriceUpdate() {
    var regex = /^([1-9][0-9]{1,3}|10000)$/;
    if (regex.test(productPriceUpdate.value) == true) {
        productPriceUpdate.classList.add("is-valid");
        productPriceUpdate.classList.remove("is-invalid");
        priceErrorUpdate.classList.replace("d-block", "d-none");
        return true;
    }
    else {

        productPriceUpdate.classList.add("is-invalid");
        productPriceUpdate.classList.remove("is-valid");
        priceErrorUpdate.classList.replace("d-none", "d-block");
        return false;
    }
}
productPriceUpdate.addEventListener("blur", validateProductPriceUpdate);





