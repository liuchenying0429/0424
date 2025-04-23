let toggle = false; // 用於切換 iframe 的連結
let homeToggle = false; // 用於切換首頁按鈕的連結

const menuItems = document.querySelectorAll('.menu__item');
const menuBorder = document.querySelector('.menu__border');
const body = document.body;

// 定義每個按鈕對應的背景顏色
const backgroundColors = [
  '#ff6f61', // 第一個按鈕的背景顏色
  '#6b5b95', // 第二個按鈕的背景顏色
  '#88b04b', // 第三個按鈕的背景顏色
  '#f7cac9', // 第四個按鈕的背景顏色
  '#92a8d1'  // 第五個按鈕的背景顏色
];

menuItems.forEach((button, index) => {
  button.addEventListener('click', () => {
    // 移除所有按鈕的 active 狀態
    menuItems.forEach((btn) => btn.classList.remove('active'));

    // 為當前按鈕添加 active 狀態
    button.classList.add('active');

    // 更新半圓形的位置和顏色
    updateMenuBorder(button);

    // 更改背景顏色
    body.style.backgroundColor = backgroundColors[index];

    // 如果是第一個按鈕，顯示 iframe 並切換連結
    if (index === 0) {
      const iframeContainer = document.getElementById('iframe-container');
      const url = toggle ? 'https://www.et.tku.edu.tw/' : 'https://www.tku.edu.tw/';
      toggle = !toggle;

      // 如果 iframe 不存在，創建 iframe
      if (!iframeContainer.querySelector('iframe')) {
        const iframe = document.createElement('iframe');
        iframeContainer.appendChild(iframe);
      }

      // 設置 iframe 的 src 並顯示
      const iframe = iframeContainer.querySelector('iframe');
      iframe.src = url;
      iframeContainer.style.display = 'block';
    }
  });
});

// 自我介紹按鈕
document.getElementById('about-button').addEventListener('click', () => {
  const iframeContainer = document.getElementById('iframe-container');
  const url = 'https://liuchenying0429.github.io/name/';

  // 如果 iframe 容器不存在，則創建
  if (!iframeContainer.querySelector('iframe')) {
    const iframe = document.createElement('iframe');
    iframeContainer.appendChild(iframe);
  }

  // 設置 iframe 的 src 並顯示
  const iframe = iframeContainer.querySelector('iframe');
  iframe.src = url;
  iframeContainer.style.display = 'block';
});

// 測驗卷按鈕
document.getElementById('quiz-button').addEventListener('click', () => {
  const iframeContainer = document.getElementById('iframe-container');
  const url = 'https://liuchenying0429.github.io/text/';

  // 如果 iframe 容器不存在，則創建
  if (!iframeContainer.querySelector('iframe')) {
    const iframe = document.createElement('iframe');
    iframeContainer.appendChild(iframe);
  }

  // 設置 iframe 的 src 並顯示
  const iframe = iframeContainer.querySelector('iframe');
  iframe.src = url;
  iframeContainer.style.display = 'block';
});

// 教學影片按鈕
document.getElementById('video-button').addEventListener('click', () => {
  const iframeContainer = document.getElementById('iframe-container');
  const url = 'https://cfchen58.synology.me/%E7%A8%8B%E5%BC%8F%E8%A8%AD%E8%A8%88%E4%B8%8B/%E9%80%B1%E5%9B%9BA%E7%8F%AD/week4/20230309_154110.mp4';

  // 如果 iframe 容器不存在，則創建
  if (!iframeContainer.querySelector('iframe')) {
    const iframe = document.createElement('iframe');
    iframeContainer.appendChild(iframe);
  }

  // 設置 iframe 的 src 並顯示
  const iframe = iframeContainer.querySelector('iframe');
  iframe.src = url;
  iframeContainer.style.display = 'block';
});

// 首頁按鈕
document.getElementById('home-button').addEventListener('click', () => {
  const iframeContainer = document.getElementById('iframe-container');
  const url = homeToggle ? 'https://www.et.tku.edu.tw/' : 'https://www.tku.edu.tw/';
  homeToggle = !homeToggle; // 切換狀態

  // 如果 iframe 容器不存在，則創建
  if (!iframeContainer.querySelector('iframe')) {
    const iframe = document.createElement('iframe');
    iframeContainer.appendChild(iframe);
  }

  // 設置 iframe 的 src 並顯示
  const iframe = iframeContainer.querySelector('iframe');
  iframe.src = url;
  iframeContainer.style.display = 'block';
});

// 子選單按鈕對應的連結
const portfolioLinks = {
  week1: 'https://liuchenying0429.github.io/0221/',
  week2: 'https://liuchenying0429.github.io/0307/',
  week3: 'https://liuchenying0429.github.io/0314/',
  week4: 'https://liuchenying0429.github.io/202050411/'
};

// 為每個子選單按鈕綁定事件
Object.keys(portfolioLinks).forEach((weekId) => {
  document.getElementById(weekId).addEventListener('click', () => {
    const iframeContainer = document.getElementById('iframe-container');
    const url = portfolioLinks[weekId];

    // 如果 iframe 容器不存在，則創建
    if (!iframeContainer.querySelector('iframe')) {
      const iframe = document.createElement('iframe');
      iframeContainer.appendChild(iframe);
    }

    // 設置 iframe 的 src 並顯示
    const iframe = iframeContainer.querySelector('iframe');
    iframe.src = url;
    iframeContainer.style.display = 'block';
  });
});

// 關閉 iframe 按鈕
document.getElementById('close-iframe').addEventListener('click', () => {
  const iframeContainer = document.getElementById('iframe-container');
  iframeContainer.style.display = 'none';
});

function updateMenuBorder(activeButton) {
  const buttonRect = activeButton.getBoundingClientRect();
  const menuRect = activeButton.parentElement.getBoundingClientRect();

  // 計算半圓形的位置
  const leftPosition = buttonRect.left - menuRect.left + buttonRect.width / 2 - menuBorder.offsetWidth / 2;

  // 更新半圓形的位置
  menuBorder.style.transform = `translateX(${leftPosition}px)`;

  // 更新半圓形的顏色（根據需要設置不同的顏色）
  menuBorder.style.backgroundColor = getComputedStyle(activeButton).backgroundColor || 'var(--bgColorItem)';
}
