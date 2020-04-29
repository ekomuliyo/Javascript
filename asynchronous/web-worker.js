// web worker hanya support di web browser modern / terbaru

const worker = new Worker("worker1.js");

worker.addEventListener("message", function(event){
    console.log(`received message from web worker : ${event.data}`);
});

function btnClick() {
    console.log("start log");
    worker.postMessage(50000);
    console.log("end log");
    
}