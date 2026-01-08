const video = document.getElementById("omikujiVideo");
const drawBtn = document.getElementById("drawBtn");
const result = document.getElementById("result");
const resultImg = document.getElementById("resultImg");
const retryBtn = document.getElementById("retryBtn");

const results = [
  "おみくじ結果-07.png",
  "おみくじ結果-01.png",
  "おみくじ結果-02.png",
  "おみくじ結果-03.png",
  "おみくじ結果-04.png",
  "おみくじ結果-05.png",
  "おみくじ結果-06.png"
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
  video.src = (decidedIndex === specialIndex) ? "動画/おみくじ 2.mp4" : "動画/おみくじ.mp4";
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
