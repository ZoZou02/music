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
const snowContainer = document.getElementById("snow-container");
const lyrics = [
	{
		text: "那天的雪—Geebar",
		time: 0
	},
	{
		text: "已经没别的话语",
		time: 26
	},
	{
		text: "BGM循环播放",
		time: 27
	},
	{
		text: "天空偷吃的伴侣",
		time: 28.5
	},
	{
		text: "消失没下雨",
		time: 29.5
	},
	{
		text: "卸下的钥匙放桌上",
		time: 30
	},
	{
		text: "这一生最后的一次",
		time: 32
	},
	{
		text: "太匆忙没什么仪式",
		time: 33.5
	},
	{
		text: "我记性差差到了极致",
		time: 35
	},
	{
		text: "希望能记住你名字",
		time: 36.5
	},
	{
		text: "可我承诺了不想再回头",
		time: 38
	},
	{
		text: "河水干涸也不选择回流",
		time: 39.5
	},
	{
		text: "这一年受够了的迷茫",
		time: 41
	},
	{
		text: "离开我 即便皱紧了眉头",
		time: 42.5
	},
	{
		text: "其实很想逃避很想瓦",
		time: 44
	},
	{
		text: "撤掉了文竹文昌塔",
		time: 45.5
	},
	{
		text: "其实倒也没有很想打",
		time: 47
	},
	{
		text: "但是还能藏在哪儿",
		time: 49
	},
	{
		text: "伤 穿过手心",
		time: 51
	},
	{
		text: "刚 锁上手机",
		time: 52.5
	},
	{
		text: "光 光速逃逸地 消失在我眼前",
		time: 54
	},
	{
		text: "装 装的简单",
		time: 57
	},
	{
		text: "一章一章地连环",
		time: 58
	},
	{
		text: "可当 夜晚又会回想起那天的",
		time: 60
	},
	{
		text: "雪",
		time: 63
	},
	{
		text: "跟着寒风飘旋转的雪",
		time: 64
	},
	{
		text: "渐渐高空掉宣判的雪",
		time: 67
	},
	{
		text: "求求你来回答我",
		time: 70.5
	},
	{
		text: "这片美丽的枷锁",
		time: 72
	},
	{
		text: "难道也算惩罚我",
		time: 73.5
	},
	{
		text: "雪",
		time: 75.5
	},
	{
		text: "跟着寒风飘旋转的雪",
		time: 77
	},
	{
		text: "我永远做不到那么坚决",
		time: 79.8
	},
	{
		text: "所以能否回答我",
		time: 83.3
	},
	{
		text: "这片美丽的枷锁",
		time: 84.8
	},
	{
		text: "难道也是惩罚我",
		time: 86.3
	},
	{
		text: "慢慢冷静",
		time: 88
	},
	{
		text: "先慢慢变得冷静",
		time: 89
	},
	{
		text: "看清眼前的棱镜",
		time: 90.5
	},
	{
		text: "现实投射的梦境",
		time: 92
	},
	{
		text: "突然不小心离太近",
		time: 94
	},
	{
		text: "不断找寻替代品",
		time: 96
	},
	{
		text: "焦虑堆了几百斤",
		time: 98
	},
	{
		text: "顾虑将自己的期待禁锢",
		time: 99.3
	},
	{
		text: "可没有幻想谁能妄想完成拼图",
		time: 101.3
	},
	{
		text: "又是谁在半场退出谁在半场进入",
		time: 104.5
	},
	{
		text: "无论谁在观赏谁在半夜完成音符",
		time: 107.5
	},
	{
		text: "唉 希望早日不用再倾诉",
		time: 111
	},
	{
		text: "想回到以前 发明足够的开心",
		time: 113.5
	},
	{
		text: "阴天暴雨前 下定足够的决心",
		time: 116.5
	},
	{
		text: "安逸焦虑前 答应足够的决定",
		time: 120
	},
	{
		text: "结果没发明 没下定 没答应",
		time: 123
	},
	{
		text: "无助无助",
		time: 126
	},
	{
		text: "究竟搭上了什么赌注赌注",
		time: 128
	},
	{
		text: "以前也不能回到",
		time: 131
	},
	{
		text: "以前也不能回到以前将故事全推倒",
		time: 132
	},
	{
		text: "有谁能在未来回以前尝后悔的味道",
		time: 135.5
	},
	{
		text: "伤 穿过手心",
		time: 139
	},
	{
		text: "刚 锁上手机",
		time: 140.5
	},
	{
		text: "光 光速逃逸地 消失在我眼前",
		time: 142
	},
	{
		text: "装 装的简单",
		time: 145
	},
	{
		text: "一章一章地连环",
		time: 147
	},
	{
		text: "可当 夜晚又会回想起那天的",
		time: 148.8
	},
	{
		text: "雪",
		time: 151.2
	},
	{
		text: "跟着寒风飘旋转的雪",
		time: 153
	},
	{
		text: "渐渐高空掉宣判的雪",
		time: 155.5
	},
	{
		text: "求求你来回答我",
		time: 158.8
	},
	{
		text: "这片美丽的枷锁",
		time: 160.5
	},
	{
		text: "难道也算惩罚我",
		time: 162
	},
	{
		text: "雪",
		time: 164
	},
	{
		text: "跟着寒风飘旋转的雪",
		time: 165.5
	},
	{
		text: "我永远做不到那么坚决",
		time: 168.5
	},
	{
		text: "所以能否回答我",
		time: 171.5
	},
	{
		text: "这片美丽的枷锁",
		time: 173
	},
	{
		text: "难道也是惩罚我",
		time: 174.8
	},
	{
		text: "",
		time: 184
	}
];

let isDragging = false;
let clickTime, inputTime;
let currentLyricIndex = 0;
let index = 0;
let snowAnimation;

playPauseIcon.addEventListener("click", togglePlay);
audioPlayer.addEventListener("timeupdate", updateProgressBar);
audioPlayer.addEventListener("ended", resetPlayer);
progressBarContainer.addEventListener("click", seek);
progressBarContainer.addEventListener("mousedown", startDrag);
document.addEventListener("mousemove", drag);
document.addEventListener("mouseup", endDrag);
volumeIcon.addEventListener("click", toggleVolumeControl);
volumeControl.addEventListener("input", updateVolume);
document.addEventListener("click", hideVolumeControl);

function togglePlay() {
	audioPlayer.paused ? audioPlayer.play() : audioPlayer.pause();
	playIcon.style.display = audioPlayer.paused ? "block" : "none";
	pauseIcon.style.display = audioPlayer.paused ? "none" : "block";
}

function updateProgressBar() {
	if (!isDragging) {
		const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
		progressBar.style.width = `${progress}%`;
		progressBarContainer.style.setProperty("--progress", `${progress}%`);
	}
}

function seek(event) {
	audioPlayer.currentTime =
		(event.offsetX / progressBarContainer.offsetWidth) * audioPlayer.duration;
}

function resetPlayer() {
	playIcon.style.display = "block";
	pauseIcon.style.display = "none";
	progressBar.style.width = "0%";
	progressBarContainer.style.setProperty("--progress", "0%");
	audioPlayer.currentTime = 0;
}

function startDrag(event) {
	isDragging = true;
	drag(event);
}

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

function toggleVolumeControl() {
	volumeControlContainer.style.transform =
		volumeControlContainer.style.transform === "translate(230px, -26px)"
			? "translate(310px, -26px)"
			: "translate(230px, -26px)";

	clearTimeout(clickTime);
	clickTime = setTimeout(() => {
		if (audioPlayer.volume == volumeControl.value) {
			volumeControlContainer.style.transform = "translate(230px, -26px)";
		}
	}, 5000);
}

function updateVolume() {
	audioPlayer.volume = volumeControl.value;
	clearTimeout(inputTime);
	inputTime = setTimeout(() => {
		volumeControlContainer.style.transform = "translate(230px, -26px)";
	}, 2000);
}

function hideVolumeControl(event) {
	if (
		!volumeControlContainer.contains(event.target) &&
		!volumeIcon.contains(event.target)
	) {
		volumeControlContainer.style.transform = "translate(230px, -26px)";
	}
}

function updateLyrics() {
	const currentTime = audioPlayer.currentTime;
	if (
		currentLyricIndex < lyrics.length &&
		currentTime >= lyrics[currentLyricIndex].time
	) {
		const text = lyrics[currentLyricIndex].text;
		contentElement.textContent = "";
		index = 0;
		if (
			currentLyricIndex + 1 < lyrics.length &&
			lyrics[currentLyricIndex + 1].time - currentTime < 0.01
		) {
			contentElement.textContent = text;
		} else {
			addNextCharacter(text);
		}
		currentLyricIndex++;
	}
	requestAnimationFrame(updateLyrics);
}

function addNextCharacter(text) {
	if (index < text.length) {
		contentElement.textContent += text[index++];
		const nextDelay =
			currentLyricIndex === lyrics.length - 1
				? 130
				: ((lyrics[currentLyricIndex + 1].time - audioPlayer.currentTime) /
						text.length) *
				  100;
		setTimeout(() => addNextCharacter(text), nextDelay);
	}
}

function createSnowflakes() {
	for (let i = 0; i < 100; i++) {
		const snowflake = document.createElement("div");
		snowflake.className = "snowflake";
		snowflake.style.width = `${Math.random() * 5 + 2}px`;
		snowflake.style.height = snowflake.style.width;
		snowflake.style.left = `${Math.random() * 100}vw`;
		snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
		snowflake.style.animationDelay = `${Math.random() * 2}s`;
		snowContainer.appendChild(snowflake);
	}
}

function animateSnowflakes() {
	document.querySelectorAll(".snowflake").forEach((snowflake) => {
		const startPosition = parseFloat(snowflake.style.left);
		const endPosition = startPosition + (Math.random() * 10 - 5);
		snowflake.animate(
			[
				{ transform: `translate(0, -10px)`, opacity: 0 },
				{ opacity: 0.8, offset: 0.1 },
				{
					transform: `translate(${endPosition - startPosition}vw, 100vh)`,
					opacity: 0
				}
			],
			{
				duration: parseFloat(snowflake.style.animationDuration) * 1000,
				iterations: Infinity
			}
		);
	});
}

audioPlayer.addEventListener("play", () => {
	createSnowflakes();
	snowAnimation = requestAnimationFrame(animateSnowflakes);
	currentLyricIndex = 0;
	updateLyrics();
});

audioPlayer.addEventListener("pause", () => {
	if (snowAnimation) cancelAnimationFrame(snowAnimation);
	document
		.querySelectorAll(".snowflake")
		.forEach((snowflake) =>
			snowflake.getAnimations().forEach((animation) => animation.pause())
		);
});

audioPlayer.addEventListener("ended", () =>
	cancelAnimationFrame(snowAnimation)
);
audioPlayer.addEventListener("seeked", () => {
	currentLyricIndex =
		lyrics.findIndex((lyric) => lyric.time > audioPlayer.currentTime) - 1;
	currentLyricIndex = Math.max(currentLyricIndex, 0);
	contentElement.textContent = "";
	index = 0;
	updateLyrics();
});

let mouseMoveTimeout;
document.addEventListener("mousemove", () => {
	clearTimeout(mouseMoveTimeout);
	const audioBox = document.querySelector(".audioBox");
	audioBox.style.transform = "translate(0, -50%)";
	audioBox.style.opacity = 1;
	document.body.style.cursor = "auto";
	mouseMoveTimeout = setTimeout(() => {
		audioBox.style.transform = "translate(0, 50%)";
		audioBox.style.opacity = 0;
		document.body.style.cursor = "none";
	}, 5000);
});
