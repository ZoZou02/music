// 获取音频播放器和控制元素
const audioPlayer = document.getElementById("audioPlayer");
const audioPlayerControl = document.getElementById("audioPlayerControl");
const playPauseIcon = document.getElementById("playPauseIcon");
const playIcon = document.getElementById("playIcon");
const pauseIcon = document.getElementById("pauseIcon");
const progressBarContainer = document.getElementById("progressBarContainer");
const progressBar = document.getElementById("progressBar");
const volumeIcon = document.getElementById("volumeIcon");
const volumeControlContainer = document.getElementById(
    "volumeControlContainer"
);
const volumeControl = document.getElementById("volumeControl");
const contentElement = document.getElementById("content");

// 歌词数组，包含歌词文本和对应时间
const lyrics = [
    {
        text: " ",
        time: 0
    },
    {
        text: "我突然感觉好痛好想回家",
        time: 19.7
    },
    {
        text: "不想看纸片人了妈妈我想回家",
        time: 21.7
    },
    {
        text: "脾气比你还臭的人太多了爸爸我想回家",
        time: 23.6
    },
    {
        text: "我真的不够强大也许只能回家",
        time: 26.6
    },
    {
        text: "很对不起 我弄得这么狼藉",
        time: 29.1
    },
    {
        text: "我不会做人 制造过几个僵局",
        time: 31.5
    },
    {
        text: "我只能躲藏在角落 别人在光里",
        time: 34.1
    },
    {
        text: "尽管一切在我看来 都满是疮痍",
        time: 36.4
    },
    {
        text: "曾把游戏和音乐当作我的全部",
        time: 39.6
    },
    {
        text: "直到现在不知被什么东西圈住",
        time: 42.0
    },
    {
        text: "看起来像和朋友喝酒边笑边吐",
        time: 44.3
    },
    {
        text: "其实我真的累了 满盘全输",
        time: 46.9
    },
    {
        text: "我在这里请求安宁",
        time: 50.0
    },
    {
        text: "像外星人在观星",
        time: 51.5
    },
    {
        text: "阴谋家在看新闻",
        time: 52.9
    },
    {
        text: "不想朋友为我担心",
        time: 55.0
    },
    {
        text: "狠话说的干净",
        time: 56.6
    },
    {
        text: "不喜欢我的赶紧",
        time: 57.6
    },
    {
        text: "全凭心一点点消化",
        time: 59.3
    },
    {
        text: "我不想赢 我希望不用招架",
        time: 61.7
    },
    {
        text: "我很软弱 我没有那么潇洒",
        time: 64.2
    },
    {
        text: "可能我还在笑 可能心如刀刮",
        time: 66.7
    },
    {
        text: "电影的分镜太紧簇一瞬间填满双目",
        time: 70.6
    },
    {
        text: "一天天变得恍惚",
        time: 75.3
    },
    {
        text: "起的名字低俗地很含糊",
        time: 79.4
    },
    {
        text: " ",
        time: 81
    },
    {
        text: "GEE 忘掉我的称呼",
        time: 81.8
    },
    {
        text: " ",
        time: 83.5
    },
    {
        text: "头晕目眩 就踏上了长途",
        time: 84.4
    },
    {
        text: "究竟什么意义 现在都还没想清楚",
        time: 86.1
    },
    {
        text: "我终于明白每个人都是座孤岛",
        time: 88.8
    },
    {
        text: "成年人在窥探 未成年在胡闹",
        time: 91.3
    },
    {
        text: "明明自己点进来嘴上却说不要",
        time: 93.6
    },
    {
        text: "我也是其中一员 吞过毒药",
        time: 96.1
    },
    {
        text: "我怎能拒绝共舞一曲的邀约",
        time: 98.6
    },
    {
        text: "我tm真的麻烦 现在才有了解",
        time: 101.0
    },
    {
        text: "都是随风的飞舞 凭什么要凋谢",
        time: 103.5
    },
    {
        text: "存活的向往温度 其他向往飘雪",
        time: 105.9
    },
    {
        text: "其实我也讨厌这些内容",
        time: 110.3
    },
    {
        text: "我也讨厌这些话题",
        time: 111.7
    },
    {
        text: "讨厌这些从业者",
        time: 113.2
    },
    {
        text: "我讨厌这群垃圾",
        time: 114.1
    },
    {
        text: "讨厌让我痛苦",
        time: 115.7
    },
    {
        text: "讨厌我也是个傻逼",
        time: 116.6
    },
    {
        text: "我突然感觉好痛好想回家",
        time: 118.1
    },
    {
        text: "不想看纸片人了妈妈我想回家",
        time: 120.2
    },
    {
        text: "脾气比你还臭的人太多了爸爸我想回家",
        time: 122.0
    },
    {
        text: "我真的不够强大也许只能回家",
        time: 125.1
    },
    {
        text: "很对不起 我弄得这么狼藉",
        time: 127.5
    },
    {
        text: "我不会做人 制造过几个僵局",
        time: 130.0
    },
    {
        text: "我只能躲藏在角落 别人在光里",
        time: 132.5
    },
    {
        text: "尽管一切在我看来都满是疮痍",
        time: 134.9
    },
    {
        text: "我本想分享快乐最后全是脏话",
        time: 138.0
    },
    {
        text: "我还是痛恨这个世界没有变化",
        time: 140.4
    },
    {
        text: "我能力没有进步还被你们牵挂",
        time: 142.9
    },
    {
        text: "这样的日子到底还有多少年啊",
        time: 145.3
    },
    {
        text: " ",
        time: 148
    },
    {
        text: "听说完美不能强求",
        time: 149.8
    },
    {
        text: "可我还是不能迁就",
        time: 154.7
    },
    {
        text: " ",
        time: 160
    }
];

// 控制变量
let isDragging = false; // 是否正在拖动进度条
let clickTime, inputTime; // 用于控制点击和输入的时间
let currentLyricIndex = 0; // 当前歌词索引
let index = 0; // 当前字符索引
let isAutoScrolling = false; // 添加标志变量
let isPlay = false;

// 在文件开头添加预加载图片的代码
const preloadImages = () => {
    const images = [
        'https://cdn.jsdelivr.net/gh/ZoZou02/zozou-pic/g11cry.gif',
        'https://cdn.jsdelivr.net/gh/ZoZou02/zozou-pic/geefall1.png',
        'https://cdn.jsdelivr.net/gh/ZoZou02/zozou-pic/phonewhite.png',
        'https://cdn.jsdelivr.net/gh/ZoZou02/zozou-pic/rappercry.gif',
        'https://cdn.jsdelivr.net/gh/ZoZou02/zozou-pic/phone-stra.png'
    ];
    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
};

// 在页面加载完成后立即预加载图片
document.addEventListener('DOMContentLoaded', preloadImages);

// 添加事件监听器
playPauseIcon.addEventListener("click", togglePlay); // 播放/暂停按钮
audioPlayer.addEventListener("timeupdate", updateProgressBar); // 更新进度条
audioPlayer.addEventListener("ended", resetPlayer); // 播放结束时重置播放器
progressBarContainer.addEventListener("click", seek); // 点击进度条跳转
progressBarContainer.addEventListener("mousedown", startDrag); // 开始拖动进度条
document.addEventListener("mousemove", drag); // 拖动进度条
document.addEventListener("mouseup", endDrag); // 结束拖动
volumeIcon.addEventListener("click", toggleVolumeControl); // 音量控制按钮
volumeControl.addEventListener("input", updateVolume); // 音量输入变化
document.addEventListener("click", hideVolumeControl); // 点击隐藏音量控制
// 添加键盘事件监听器
document.addEventListener("keydown", (event) => {
    if (event.code === "Space") { // 检测空格键
        event.preventDefault(); // 防止页面滚动
        togglePlay(); // 调用播放/暂停函数
    }
});

// 播放/暂停音频
function togglePlay() {
    audioPlayer.paused ? audioPlayer.play() : audioPlayer.pause();
    playIcon.style.display = audioPlayer.paused ? "block" : "none";
    pauseIcon.style.display = audioPlayer.paused ? "none" : "block";
    isPlay = !audioPlayer.paused; // 更新 isPlay 状态
    toggleScanlines(isPlay);
}

// 更新进度条
function updateProgressBar() {
    if (!isDragging) {
        const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        progressBar.style.width = `${progress}%`;
        progressBarContainer.style.setProperty("--progress", `${progress}%`);

        const Image = document.querySelector(".image-container");
        const geebarImage = document.querySelector(".geebar-image");
        const phoneImage = document.querySelector(".phone-image");
        const backgroundOverlay = document.querySelector(".overlay");
        const mask = document.querySelector(".mask");
        const content = document.getElementById("content");


        //---------------------------------- 插入动画开始 ------------------------------------------------- 

        // 46秒变黑红
        if (audioPlayer.currentTime >= 46.9 && audioPlayer.currentTime < 50) {
            // 移除扫描线
            toggleScanlines(false);

            // 图片变黑
            geebarImage.style.filter = 'brightness(0) drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.5))';
            phoneImage.style.filter = 'brightness(0) drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.5))';

            // 字幕变黑
            content.style.color = 'black';

            if (audioPlayer.currentTime >= 46.9 && audioPlayer.currentTime < 48.2) {
                backgroundOverlay.style.transition = 'background-color 0.3s ease';
                backgroundOverlay.style.backgroundColor = 'rgba(182, 16, 15)';
            } else if (audioPlayer.currentTime >= 48.2 && audioPlayer.currentTime < 48.5) {
                backgroundOverlay.style.transition = 'background-color 0.3s ease';

                // 闪烁第1次
                backgroundOverlay.style.backgroundColor = 'rgba(209, 4, 3)';
                console.log("1咚！！！！！！！！！！！！！！！！！！！！！！！！");
            } else if (audioPlayer.currentTime >= 48.5 && audioPlayer.currentTime < 48.8) {
                backgroundOverlay.style.transition = 'background-color 0.3s ease';
                backgroundOverlay.style.backgroundColor = 'rgba(182, 16, 15)';
            } else if (audioPlayer.currentTime >= 48.8 && audioPlayer.currentTime < 49.1) {
                backgroundOverlay.style.transition = 'background-color 0.3s ease';

                // 闪烁第2次
                backgroundOverlay.style.backgroundColor = 'rgba(209, 4, 3)';
                console.log("2咚！！！！！！！！！！！！！！！！！！！！！！！！");

            } else if (audioPlayer.currentTime >= 49.1 && audioPlayer.currentTime < 49.5) {
                backgroundOverlay.style.transition = 'background-color 0.3s ease';
                backgroundOverlay.style.backgroundColor = 'rgba(182, 16, 15)';
            } else if (audioPlayer.currentTime >= 49.5 && audioPlayer.currentTime < 49.6) {
                backgroundOverlay.style.transition = 'background-color 0.3s ease';

                // 闪烁第3次
                backgroundOverlay.style.backgroundColor = 'rgba(209, 4, 3)';
                console.log("3咚！！！！！！！！！！！！！！！！！！！！！！！！");

            } else if (audioPlayer.currentTime >= 49.6 && audioPlayer.currentTime < 50) {
                backgroundOverlay.style.transition = 'background-color 0.3s ease';
                backgroundOverlay.style.backgroundColor = 'rgba(182, 16, 15)';
            }
        } else if (audioPlayer.currentTime >= 50.0) {
            // 恢复扫描线
            toggleScanlines(true);

            backgroundOverlay.style.transition = 'background-color 0.3s ease';
            backgroundOverlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
            geebarImage.style.filter = 'brightness(1) drop-shadow(10px 10px 5px rgba(0, 0, 0, 0.8))';
            phoneImage.style.filter = 'brightness(1) drop-shadow(10px 10px 5px rgba(0, 0, 0, 0.8))';
            // 字幕变白
            content.style.color = 'white';
        }


        // 在81秒时间变成说唱歌手
        if (audioPlayer.currentTime >= 81 && audioPlayer.currentTime < 83.48) {

            // 移除扫描线
            toggleScanlines(false);

            //动画修改
            Image.classList.remove("sliding");
            Image.classList.remove("shake");
            Image.classList.add("rapperDropping");

            mask.classList.add("maskBlinking");

            //图片修改
            geebarImage.src = 'https://cdn.jsdelivr.net/gh/ZoZou02/zozou-pic/rappercry.gif';
            geebarImage.style.filter = 'brightness(1) drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.5))';
            geebarImage.parentNode.replaceChild(geebarImage.cloneNode(true), geebarImage);

            phoneImage.src = 'https://cdn.jsdelivr.net/gh/ZoZou02/zozou-pic/phonewhite.png';
            phoneImage.style.filter = 'brightness(1) drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.5))';
            phoneImage.parentNode.replaceChild(phoneImage.cloneNode(true), phoneImage);

            //背景
            backgroundOverlay.style.backgroundColor = 'rgba(255, 255, 255)';

            // 字幕变黑
            content.style.color = 'black';
        }

        if (audioPlayer.currentTime >= 83.48 && audioPlayer.currentTime < 85) {

            // 恢复扫描线
            toggleScanlines(true);

            //动画
            Image.classList.add("shake");
            mask.classList.remove("maskBlinking");

            //图片修改
            geebarImage.src = 'https://cdn.jsdelivr.net/gh/ZoZou02/zozou-pic/g11cry.gif';
            geebarImage.style.filter = 'brightness(1) drop-shadow(10px 10px 5px rgba(0, 0, 0, 0.8))';
            geebarImage.parentNode.replaceChild(geebarImage.cloneNode(true), geebarImage);

            phoneImage.src = 'https://cdn.jsdelivr.net/gh/ZoZou02/zozou-pic/phone-stra.png';
            phoneImage.style.filter = 'brightness(1) drop-shadow(10px 10px 5px rgba(0, 0, 0, 0.8))';
            phoneImage.parentNode.replaceChild(phoneImage.cloneNode(true), phoneImage);

            //背景
            backgroundOverlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
            // 字幕变白
            content.style.color = 'white';
        }

        // 110开始讨厌  红色闪烁
        if (audioPlayer.currentTime >= 111 && audioPlayer.currentTime < 117) {
            const elapsed = audioPlayer.currentTime - 111; // 计算经过的时间
            const phase = elapsed % 1; // 1秒为一个周期
            // 设置颜色过渡效果
            backgroundOverlay.style.transition = 'background-color 0.1s ease';
            // 前0.5秒显示红色，后0.5秒恢复黑色
            backgroundOverlay.style.backgroundColor = (phase < 0.2) ?
                'rgba(182, 16, 15, 0.2)' :
                'rgba(0, 0, 0, 0.5)';
        }


        // 148开始 白色背景，黑色人物，黑色字幕，人物变小，从上往下
        if (audioPlayer.currentTime >= 148 && audioPlayer.currentTime < 160) {
            // 移除扫描线
            toggleScanlines(false);
            // 背景变白，添加过渡
            backgroundOverlay.style.transition = 'background-color 1s ease';
            backgroundOverlay.style.backgroundColor = 'rgba(255, 255, 255)';

            // 图片变黑，添加过渡
            const imageTransition = 'filter 1s ease, width 1s ease, left 1s ease';
            geebarImage.style.transition = imageTransition;
            phoneImage.style.transition = imageTransition;
            geebarImage.style.filter = 'brightness(0) drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.5))';
            phoneImage.style.filter = 'brightness(0) drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.5))';

            // 字幕变黑
            content.style.color = 'black';
            content.style.opacity = '0';

            // 人物变小和位置调整，添加过渡
            Image.style.transition = 'top 1s ease-in';
            geebarImage.style.width = '28vh';
            geebarImage.style.left = '56%';
            phoneImage.style.width = '28vh';
            phoneImage.style.left = '56%';
            Image.style.top = '18%';

            // 移除shake
            Image.classList.remove('shake');
            // 添加drop
            Image.classList.add('blackDropping');

            // 最后两句歌词渐变
            if(audioPlayer.currentTime >= 149.8 && audioPlayer.currentTime < 154){
                content.style.opacity = '1';
            }

            if(audioPlayer.currentTime >= 154.7 && audioPlayer.currentTime < 158){
                content.style.opacity = '1';
            }

        } else if (audioPlayer.currentTime >= 160 && audioPlayer.currentTime < 170) {
            // 恢复扫描线
            toggleScanlines(true);
            // 恢复shake
            if(isPlay){
                Image.classList.add('shake');
            }
            // 移除drop
            Image.classList.remove('blackDropping');
            // 恢复图片
            geebarImage.style.filter = 'brightness(1) drop-shadow(10px 10px 5px rgba(0, 0, 0, 0.8))';
            phoneImage.style.filter = 'brightness(1) drop-shadow(10px 10px 5px rgba(0, 0, 0, 0.8))';
            geebarImage.style.width = '90vh';
            geebarImage.style.left = '50%';
            phoneImage.style.width = '90vh';
            phoneImage.style.left = '50%';
            Image.style.top = '50%';
            Image.style.transition = 'none';
            // 字幕
            content.style.opacity = '1';
        }

        //---------------------------------- 插入动画结束 ------------------------------------------------- 



    }


}

// 跳转到指定时间
function seek(event) {
    audioPlayer.currentTime =
        (event.offsetX / progressBarContainer.offsetWidth) * audioPlayer.duration;
}

// 重置播放器
function resetPlayer() {
    playIcon.style.display = "block";
    pauseIcon.style.display = "none";
    progressBar.style.width = "0%";
    progressBarContainer.style.setProperty("--progress", "0%");
    audioPlayer.currentTime = 0;
    isPlay = false;
    // window.location.reload();

    const Image = document.querySelector(".image-container");
    Image.classList.add("backing");
}

// 开始拖动进度条
function startDrag(event) {
    isDragging = true;
    drag(event);
}

// 拖动进度条
function drag(event) {
    if (isDragging) {
        const percent = Math.min(
            Math.max(
                (event.clientX - progressBarContainer.getBoundingClientRect().left) /
                progressBarContainer.offsetWidth,
                0
            ),
            1
        );
        progressBar.style.width = `${percent * 100}%`;
        progressBarContainer.style.setProperty("--progress", `${percent * 100}%`);
    }
}

// 结束拖动进度条
function endDrag(event) {
    if (isDragging) {
        isDragging = false;
        const percent = Math.min(
            Math.max(
                (event.clientX - progressBarContainer.getBoundingClientRect().left) /
                progressBarContainer.offsetWidth,
                0
            ),
            1
        );
        audioPlayer.currentTime = percent * audioPlayer.duration;
    }
}

// 切换音量控制
function toggleVolumeControl() {
    volumeControlContainer.style.transform =
        volumeControlContainer.style.transform === "translate(230px, -40px)"
            ? "translate(310px, -40px)"
            : "translate(230px, -40px)";

    clearTimeout(clickTime);
    clickTime = setTimeout(() => {
        if (audioPlayer.volume == volumeControl.value) {
            volumeControlContainer.style.transform = "translate(230px, -40px)";
        }
    }, 5000);
}

// 更新音量
function updateVolume() {
    audioPlayer.volume = volumeControl.value;
    clearTimeout(inputTime);
    inputTime = setTimeout(() => {
        volumeControlContainer.style.transform = "translate(230px, -40px)";
    }, 2000);
}

// 隐藏音量控制
function hideVolumeControl(event) {
    if (
        !volumeControlContainer.contains(event.target) &&
        !volumeIcon.contains(event.target)
    ) {
        volumeControlContainer.style.transform = "translate(230px, -40px)";
    }
}

// 更新歌词显示
function updateLyrics() {
    const currentTime = audioPlayer.currentTime;
    if (
        currentLyricIndex < lyrics.length &&
        currentTime >= lyrics[currentLyricIndex].time
    ) {
        const text = lyrics[currentLyricIndex].text;
        contentElement.textContent = text; 
        currentLyricIndex++;
    }

    if (currentTime == 0 && isPlay) {
        const Image = document.querySelector(".image-container");
        Image.classList.remove("shake");
        Image.classList.add("sliding");
    }

    console.log("歌词时间: " + currentTime)

    requestAnimationFrame(updateLyrics);
}

// 播放事件
audioPlayer.addEventListener("play", () => {
    currentLyricIndex = 0;
    updateLyrics();
    isAutoScrolling = true; // 开始自动滑动
    setInterval(autoScroll, 20); // 每20毫秒滚动一次

    // 添加晃动效果
    const geebarImage = document.querySelector(".geebar-image");
    const Image = document.querySelector(".image-container");
    Image.classList.add("shake");

    //调整图片
    geebarImage.src = 'https://cdn.jsdelivr.net/gh/ZoZou02/zozou-pic/g11cry.gif';
    geebarImage.parentNode.replaceChild(geebarImage.cloneNode(true), geebarImage);
    //添加手机旋转
    const phoneImage = document.querySelector(".phone-image");
    phoneImage.classList.add("rotate");

    Image.classList.remove("backing");
});

// 自动下滑功能
function autoScroll() {
    if (isAutoScrolling) { // 只有在自动滑动时才执行
        const currentTime = audioPlayer.currentTime; // 获取当前播放时间
        const totalDuration = audioPlayer.duration; // 获取音频总时长
        const scrollHeight = document.body.scrollHeight - window.innerHeight; // 可滚动的总高度
        const scrollPercent = currentTime / totalDuration; // 计算播放进度百分比
        const targetScrollTop = scrollPercent * scrollHeight; // 计算目标滚动位置

        window.scrollTo(0, targetScrollTop); // 滚动到目标位置
    }
}

// 暂停事件
audioPlayer.addEventListener("pause", () => {
    isAutoScrolling = false;

    // 立即移除晃动效果并更新图片
    requestAnimationFrame(() => {
        const geebarImage = document.querySelector(".geebar-image");
        const Image = document.querySelector(".image-container");
        Image.classList.remove("shake");
        Image.classList.remove("sliding");
        Image.classList.remove("rapperDropping");
        geebarImage.src = 'https://cdn.jsdelivr.net/gh/ZoZou02/zozou-pic/geefall1.png';
        geebarImage.parentNode.replaceChild(geebarImage.cloneNode(true), geebarImage);

        const phoneImage = document.querySelector(".phone-image");
        phoneImage.classList.remove("rotate");
    });
});


// 跳转事件
audioPlayer.addEventListener("seeked", () => {
    const Image = document.querySelector('.image-container')

    if (isPlay) {  // 只在播放状态时执行动画
        if (audioPlayer.currentTime < 11 && audioPlayer.currentTime != 0) {
            Image.classList.remove("shake");
            Image.classList.add("sliding");
        }
        else if (audioPlayer.currentTime >= 11) {
            Image.classList.remove("sliding");
            Image.classList.add("shake");
        }
    }
    // 原有的歌词处理逻辑
    currentLyricIndex = lyrics.findIndex((lyric) => lyric.time > audioPlayer.currentTime) - 1;
    currentLyricIndex = Math.max(currentLyricIndex, 0);
    contentElement.textContent = "";
    index = 0;
    updateLyrics();
});

// 鼠标移动事件
let mouseMoveTimeout;
document.addEventListener("mousemove", () => {
    clearTimeout(mouseMoveTimeout);
    // const audioBox = document.querySelector(".audioBox");
    const audioPlayerContainer = document.querySelector("#audioPlayerContainer");
    const fullscreenBtn = document.querySelector("#fullscreen-btn");
    audioPlayerContainer.style.opacity = 1;
    fullscreenBtn.style.opacity = 1;

    document.body.style.cursor = "auto";
    mouseMoveTimeout = setTimeout(() => {
        audioPlayerContainer.style.opacity = 0;
        fullscreenBtn.style.opacity = 0;
        document.body.style.cursor = "none";
    }, 5000);
});

// 全屏
const fullscreenBtn = document.getElementById('fullscreen-btn');

fullscreenBtn.addEventListener('click', () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
});

// 监听全屏状态变化
document.addEventListener('fullscreenchange', () => {
    const svg = fullscreenBtn.querySelector('svg');
    if (document.fullscreenElement) {
        svg.innerHTML = '<path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"/>';
    } else {
        svg.innerHTML = '<path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>';
    }
});

// 移除和恢复扫描线
function toggleScanlines(show) {
    const glitchOverlay = document.querySelector('.glitch-overlay');
    if (glitchOverlay) {
        glitchOverlay.style.display = show ? 'block' : 'none';
    }
}

window.addEventListener('load', function() {
    const images = document.querySelectorAll('img');
    const loadingScreen = document.getElementById('loading-screen');
    
    Promise.all(Array.from(images).map(img => {
        if (img.complete) {
            return Promise.resolve();
        } else {
            return new Promise(resolve => {
                img.addEventListener('load', resolve);
                img.addEventListener('error', resolve);
            });
        }
    })).then(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 1000);
    });
});