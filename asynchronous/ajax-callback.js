// contoh mengambil data dari blibli.com

function buttonSearch(){
    const keyword = document.getElementById("keyword").value;
    
    getProducts(keyword, function (data){
        clearProducts();
        displayProducts(data);
    }, function (){
        getProductsError();
    });

    getProducts(keyword, function (data){
        clearTableProducts();
        displayTableProducts(data);
    }, function (){
        getProductsError();
    });


    console.log("success click, ini di posisi synchronous")
}

function getProductsUrl(keyword){
    return `https://www.blibli.com/backend/search/products?searchTerm=${keyword}`;
}

function getProducts(keyword, callbackSuccess, callbackError){
    // membuat instansiasi object ajax
    const ajax = new XMLHttpRequest();

    // onload adalah dipanggil ketika data yang diambil dari server di load ke ajax tsb
    ajax.onload = function(){
        // handel ajax
        if(ajax.status === 200){
            const data = JSON.parse(ajax.response);

            // Dynamic Callback, function callback nya sebagai argument function getProducts()
            callbackSuccess(data);
        }else{
            callbackError();
        }
    }

    const url = getProductsUrl(keyword);
    ajax.open("GET", url, true);
    ajax.send();

}

function clearProducts(){
    const productUl = document.getElementById("products");
    productUl.textContent = "";
}

function getProductsError(){
    console.log("error get products");
    alert("Error get products!");
}

function displayProducts(data){
    data.data.products.forEach(product => displayProduct(product));
}

function displayProduct(product){
    const productLi = document.createElement("li");
    productLi.textContent = product.name;

    const productUl = document.getElementById("products");
    productUl.appendChild(productLi);
}

function clearTableProducts(){
    const productDiv = document.getElementById("table-products");
    productDiv.textContent = "";
}

function displayTableProducts(data){
    const table = document.createElement("table");
    table.setAttribute("border", 1);

    let index = 0;
    data.data.products.forEach(product => {
        table.insertRow(index).insertCell(0).innerText = product.name;
        index++;
    });

    const tableProduct = document.getElementById("table-products");
    tableProduct.appendChild(table);
}