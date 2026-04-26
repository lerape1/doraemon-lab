// 角色数据库
const characters = [
  { name: "哆啦A梦", quote: "不管发生什么，口袋里总会有办法的！祝你今天顺利！", img: "doraemon.png" },
  { name: "大雄", quote: "即使摔倒了，也要有重新站起来的勇气啊。加油！", img: "nobita.png" },
  { name: "静香", quote: "温柔地对待世界，世界也会温柔地拥抱你。", img: "shizuka.png" },
  { name: "胖虎", quote: "知心好友一生难求！你就是我认定的那个挚友！", img: "gian.png" },
  { name: "小夫", quote: "生活偶尔也需要一点小小的奢侈和好心情。", img: "suneo.png" }
];

// 开门逻辑
function openDoor() {
  const doorWing = document.querySelector('.door-wing');
  doorWing.style.transform = 'rotateY(-100deg)'; // 门完全打开的动画
  
  setTimeout(() => {
    // 随机抽取角色
    const randomChar = characters[Math.floor(Math.random() * characters.length)];
    
    // 注入数据
    document.getElementById('char-name').innerText = randomChar.name;
    document.getElementById('char-quote').innerText = randomChar.quote;
    
    // 注入头像图片并保证铺满圆框居中显示
    document.getElementById('char-img').style.backgroundImage = `url(${randomChar.img})`; 
    document.getElementById('char-img').style.backgroundSize = 'cover';
    document.getElementById('char-img').style.backgroundPosition = 'center';
    
    // 显示弹窗
    document.getElementById('blessing-modal').style.display = 'flex';
  }, 600); // 等待门打开一点后再弹窗
}

// 关门逻辑
function closeDoor() {
  document.getElementById('blessing-modal').style.display = 'none';
  document.querySelector('.door-wing').style.transform = 'rotateY(0deg)'; // 门关上
}