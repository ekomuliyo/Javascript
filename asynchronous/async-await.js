function getProductsUrl(keyword) {
    return `https://www.blibli.com/backend/search/products?searchTerm=${keyword}`;
}

function getProducts(keyword) {
    return new Promise(function (resolve, rejected){
        const ajax = new XMLHttpRequest();
        ajax.onload = function (){
            if(ajax.status === 200){
                const data = JSON.parse(ajax.responseText);
                resolve(data);
            }else{
                rejected(Error("gagal mengambil data"));
            }
        }

        ajax.open("GET", getProductsUrl(keyword));
        ajax.send();
    });
}

function clearProducts() {
    const productUl = document.getElementById("products_async_await");
    productUl.textContent = "";
}

function displayProducts(data) {
    data.data.products.forEach(product => displayProduct(product));
}

function displayProduct(product) {
    const productLi = document.createElement("li");
    productLi.textContent = product.name;

    const productUl = document.getElementById("products_async_await");
    productUl.appendChild(productLi);
}

async function buttonSearchAsyncAwait() {
    // async await adalah sebuah metode asyncronous dengan gaya code syncronous
    // dimana setiap kembalian nilai dari method yang dipanggil dengan await adalah promise
    // dan untuk implement await pastikan di dalam method async
    
    try {
        const value = await getProducts(document.getElementById("keyword_async_await").value);
        const products = value.data.products;
        clearProducts();
        products.forEach(function (product){
            displayProduct(product);
        })
    } catch (error) {
        alert(error.message);
    } finally {
        console.log("selesai memproses async await")
    }


    
}