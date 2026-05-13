// 純 JavaScript 打字機效果 - 不依賴 React
(function() {
  // 根據頁面路徑選擇文字
  const isEnglishPage = window.location.pathname.startsWith('/en/');
  const heroText = isEnglishPage 
    ? "YASIN CAPITAL" 
    : "毅信資本控股";
  
  let charIndex = 0;
  const speed = 150;
  
  function typeWriter() {
    const displayText = heroText.substring(0, charIndex + 1);
    
    // 更新所有 hero text 元素
    document.querySelectorAll('.hero-text').forEach(function(el) {
      el.textContent = displayText;
    });
    
    charIndex++;
    
    if (charIndex < heroText.length) {
      // 繼續打字
      setTimeout(typeWriter, speed);
    }
    // 打字完成，無需額外操作
  }
  
  // 頁面加載完成後開始打字
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', typeWriter);
  } else {
    typeWriter();
  }
})();
