const video = document.getElementById("omikujiVideo");
const drawBtn = document.getElementById("drawBtn");
const result = document.getElementById("result");
const resultImg = document.getElementById("resultImg");
const retryBtn = document.getElementById("retryBtn");

const results = [
  "img/huun.png",
  "img/daikiti.png",
  "img/syokiti.png",
  "img/syokiti2.png",
  "img/tyukiti.png",
  "img/tyukiti2.png",
  "img/tyukiti3.png"
];

const specialIndex = 0; // レアは大吉
let isPlaying = false;
let decidedIndex = null;

// おみくじを引く
drawBtn.addEventListener("click", () => {
  if (isPlaying) return;
  isPlaying = true;

  decidedIndex = Math.floor(Math.random() * results.length);

  drawBtn.style.display = "none";
  result.style.display = "none";
  retryBtn.style.display = "none";

  // クリック時に初めて動画を再生
  video.src = (decidedIndex === specialIndex) ? "img/kuzihuun.mp4" : "img/kuzi.mp4";
  video.currentTime = 0;
  video.play();
});

// 動画終了 → 結果表示
video.addEventListener("ended", () => {
  showResult(decidedIndex);
});

// 結果表示
function showResult(index) {
  resultImg.src = results[index];
  result.style.display = "flex";
  retryBtn.style.display = "inline-block";
  isPlaying = false;
}

// もう一度
retryBtn.addEventListener("click", () => {
  location.reload();
});
