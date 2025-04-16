let a = 5;
const b = 10; //再定義不可


console.log(a + b);
console.log(a < b);

a = "hello world";
console.log(a);

let menu = ["ハンバーガー","ポテト","ジュース"];
console.log(menu);
console.log(menu[0]);
console.log(menu.length);

//オブジェクト1
// let item = {
//     name:'モバイルバッテリーMax',
//     capacity:'10000mAh',
//     price:4998,
//     connectionToBattery(){
//         console.log("本体の充電の開始");
//     },
//     connectionToSmartPhone(){
//         console.log("スマホの充電開始");
//     }
// }

// console.log(item.name);
// console.log(item["name"]);
// item.connectionToBattery();

class BatteryItem{
    //初期情報を登録・コンストラクタ
    constructor(name,capacity,price){
        this.name = name;
        this.capacity = capacity;
        this.price = price;
    }
    connectionToBattery(){
        console.log("本体の充電の開始");
    }
    connectionToSmartPhone(){
        console.log("スマホの充電開始");
    }
}

class SuperBatteryItem extends BatteryItem{
    constructor(name,capacity,price){
        super(name,capacity,price);//親クラスのコンストラクタを呼び出す
    }
    //新しいメソッドを追加する
    simultaneousCgarging(){
        console.log("本体とスマホの同時充電");
    }
}

const superItem = new SuperBatteryItem("スーパーバッテリー","20000mAh",7998);
superItem.simultaneousCgarging();
superItem.connectionToBattery();

const item = new BatteryItem("モバイルバッテリー","10000mAh",4998);
console.log(item.name);