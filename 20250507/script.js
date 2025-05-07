const countElement = document.querySelector("#count span");
const scoreElement = document.querySelector("#score span");
const startButton = document.getElementById("start");
const stage = document.querySelector("#stage");
const bgm = document.getElementById("bgm");
const bgmBtn = document.getElementById("bgmBtn");
const clickSound = document.getElementById("clickSound"); // クリック音のaudio要素

let score = 0;
let count = 30;
let timer, appearID = null;

function getPosition() {
    return {
        left: Math.floor(Math.random() * 770), // stage width - chara width
        top: Math.floor(Math.random() * 420)   // stage height - chara height
    };
}

function appear() {
    appearID = setInterval(function () {
        const baseChara = document.querySelector(".chara");
        const newChara = baseChara.cloneNode(true);
        const position = getPosition();

        newChara.style.left = position.left + 'px';
        newChara.style.top = position.top + 'px';
        newChara.style.opacity = '1';

        // クリックイベントでキャラクターをクリックしたとき
        newChara.addEventListener("click", function () {
            // クリック音を再生
            clickSound.play();  
            
            score++;
            scoreElement.textContent = score;
            this.remove();  // クリックされたキャラクターを削除
        });

        stage.appendChild(newChara);
    }, 300);
}

startButton.addEventListener("click", function () {
    startButton.style.opacity = 0;
    appear();

    timer = setInterval(function () {
        count--;
        countElement.textContent = count;
        if (count <= 0) {
            clearInterval(timer);
            clearInterval(appearID);
            alert(`あなたのスコアは${score}です！`);
        }
    }, 1000);
});

// BGMの再生/停止を管理するボタン
bgmBtn.addEventListener("click", function () {
    if (bgm.paused) {
        bgm.play(); // BGMを再生
        bgmBtn.textContent = "BGM: ON"; // ボタンのテキストを変更
    } else {
        bgm.pause(); // BGMを停止
        bgmBtn.textContent = "BGM: OFF"; // ボタンのテキストを変更
    }
});
