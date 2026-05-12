// 纯 JavaScript 打字机效果 - 不依赖 React
(function() {
  const heroTexts = ["毅信資本", "YASIN CAPITAL", "穩健創新"];
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const speed = 150;
  
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
      setTimeout(typeWriter, 2000); // 暂停2秒
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % heroTexts.length;
      setTimeout(typeWriter, 500);
    } else {
      charIndex += isDeleting ? -1 : 1;
      setTimeout(typeWriter, speed);
    }
  }
  
  // DOM 加载后开始动画
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', typeWriter);
  } else {
    typeWriter();
  }
})();
