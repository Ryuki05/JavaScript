//時間あてゲーム
let startTime,stopTime,seconds;
let dispArea =
document.querySelector("#display-area");

function start(){
    dispArea.textContent = "計測中";
    //今の時間の取得
    startTime = Date.now();
}

function stop(){
    stopTime = Date.now();
    seconds = (stopTime - startTime) / 1000;

    if(seconds >= 9.5 && seconds <= 10.5){
        dispArea.textContent = `${seconds}秒でした。すごい！`;
    }else{
        dispArea.textContent = `${seconds}秒でした。残念！`;
    }
}

if(confirm("OKを押して10秒だと思ったら何かキーを押して")){
    start();
    document.body.addEventListener(
        'keydown',
        stop
    );
}