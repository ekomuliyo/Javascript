// callback, secara intisari pengertiannya adalah 
// function yang akan menjadi argument dari sebuah function lain

// Asynchronous callback dengan vanila JS atau JS murni
function getDataDrinks(url, success, error){
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                success(xhr.response);
            }
            else if(xhr.status === 404){
                error();
            }
        }
    }
    xhr.open('Get', url);
    xhr.send();
}

getDataDrinks('https://www.thecocktaildb.com/api/json/v1/1/search.php?s', results => {
    const drinks = JSON.parse(results);
    drinks.drinks.forEach(d => console.log(d.strDrink));
}, () => {

});

// Asynchronous callback dengan library jquery
$.ajax({
    url: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s',
    success: (drinks) => {
        drinks.drinks.forEach(d => console.log(d.strDrink));
    },
    error: (e) => {
        console.log(e.responseText);
    }
})

