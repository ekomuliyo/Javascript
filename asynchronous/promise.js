// promise mempunyai tiga state / kondisi, 1. pending = undefined, 2. resolve = value, 3. rejected = error

function buttonSearchPromise(){
    const keyword = document.getElementById("keyword2").value;

    const promiseProduct = getProducts(keyword);

    promiseProduct
        .then(function (value){
            return value.data.products;
        })
        .then(function (products){
            clearProducts();
            products.forEach(function (product){
                displayProduct(product);
            })
        });
}

function getProductsUrl(keyword) {
    return `https://www.blibli.com/backend/search/products?searchTerm=${keyword}`;
}

function getProducts(keyword) {
    // Code Promise Here!

    const promiseProducts = new Promise(function (resolve, rejected){
        // code async
        
        // membuat instansiasi object ajax
        const ajax = new XMLHttpRequest();

        // onload adalah dipanggil ketika data yang diambil dari server di load ke ajax tsb
        ajax.onload = function(){
            // handel ajax
            if(ajax.status === 200){
                const data = JSON.parse(ajax.response);
                resolve(data);
            }else{
                rejected(Error("gagal mengambil data produk"));
            }
        }

        const url = getProductsUrl(keyword);
        ajax.open("GET", url, true);
        ajax.send();
    })

    return promiseProducts;

}

function clearProducts() {
    const productUl = document.getElementById("product_promise");
    productUl.textContent = "";
}

function displayProducts(data) {
    data.data.products.forEach(product => displayProduct(product));
}

function displayProduct(product) {
    const productLi = document.createElement("li");
    productLi.textContent = product.name;

    const productUl = document.getElementById("product_promise");
    productUl.appendChild(productLi);
}
