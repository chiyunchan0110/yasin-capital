// 純 JavaScript 打字機效果 - 不依賴 React
(function() {
  const heroTexts = ["毅信資本控股", "YASIN CAPITAL", "穩健創新"];
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const speed = 150;
  
  // 初始化：立即顯示第一個文字
  function init() {
    const firstText = heroTexts[0];
    document.querySelectorAll('.hero-text').forEach(el => {
      el.textContent = firstText;
    });
    // 延遲後開始動畫循環
    setTimeout(startAnimation, 3000);
  }
  
  function startAnimation() {
    charIndex = heroTexts[0].length;
    isDeleting = true;
    typeWriter();
  }
  
  function typeWriter() {
    const currentText = heroTexts[textIndex];
    const displayText = isDeleting 
      ? currentText.substring(0, charIndex - 1)
      : currentText.substring(0, charIndex + 1);
    
    // 更新所有 hero text 元素
    document.querySelectorAll('.hero-text').forEach(el => {
      el.textContent = displayText;
    });
    
    if (!isDeleting && charIndex === currentText.length) {
      isDeleting = true;
      setTimeout(typeWriter, 2000); // 暫停2秒
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % heroTexts.length;
      setTimeout(typeWriter, 500);
    } else {
      charIndex += isDeleting ? -1 : 1;
      setTimeout(typeWriter, speed);
    }
  }
  
  // 頁面加載完成後初始化
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
