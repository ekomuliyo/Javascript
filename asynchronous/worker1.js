function showLog(total){
    for (let index = 0; index < total; index++) {
        console.log(index);
    }
}

addEventListener("message", function(event){
    const total = event.data;
    showLog(total);
    postMessage("Done")
})