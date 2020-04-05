// contoh mengambil data dari blibli.com

function buttonSearch(){
    const keyword = document.getElementById("keyword").value;
    getProducts(keyword);
    console.log("success click, ini di posisi synchronous")
}

function getProductsUrl(keyword){
    return `https://www.blibli.com/backend/search/products?searchTerm=${keyword}`;
}

function getProducts(keyword){
    // membuat instansiasi object ajax
    const ajax = new XMLHttpRequest();

    // onload adalah dipanggil ketika data yang diambil dari server di load ke ajax tsb
    ajax.onload = function(){
        const data = JSON.parse(ajax.response);
        clearProducts();
        displayProducts(data);
    }

    const url = getProductsUrl(keyword);
    ajax.open("GET", url, true);
    ajax.send();




}

function clearProducts(){
    const productUl = document.getElementById("products");
    productUl.textContent = "";
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