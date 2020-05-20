process.stdin.setEncoding("utf8");
console.log('抽奖游戏开始,输入1为抽奖,2为退出。"SSR卡"为大奖');
const Shikigami = ["N卡", "R卡", "SR卡", "SSR卡"];
var Num = 0;
var ssrNum = 0;
const DrawCard = () => {
  var probability = Math.floor(Math.random() * 100);
  if (!(ssrNum == 10)) {
    if (probability < 95) {
      var random = Math.floor(Math.random() * 3);
      console.log(`恭喜获得${Shikigami[random]},当前抽奖${Num}次,还差${10-ssrNum}获得SSR`);
    } else {
      ssrNum = 0;
      console.log(`恭喜获得${Shikigami[3]},当前抽奖${Num}次`,'欧皇');
    }
  }else{
    ssrNum = 0;
    console.log(`恭喜获得${Shikigami[3]},当前抽奖${Num}次,达成非酋成就。`);
  }
};
process.stdin.on("data", (input) => {
  if (input == 1) {
    Num++;
    ssrNum++;
    DrawCard();
  } else if (input == 2) {
    process.exit();
  }
});
process.on("exit", () => console.log("退出抽奖"));
