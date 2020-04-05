// contoh callback sederhana

function callback(){
    console.log("ini fungsi callback()");
}

function buttonClick(){
    // async
    setTimeout(function(){
        callback();
    }, 3000);

    setInterval(function(){
        callback();
    }, 1000);

    console.log('sukses klik');
}
