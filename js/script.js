// 简单的滚动效果
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// 添加滚动动画效果
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.feature-card, .screenshot, .principle');
    
    elements.forEach(element => {
        const position = element.getBoundingClientRect();
        
        // 如果元素在视口中
        if(position.top < window.innerHeight - 100) {
            element.style.opacity = 1;
            element.style.transform = 'translateY(0)';
        }
    });
});

// 初始化元素状态
document.querySelectorAll('.feature-card, .screenshot, .principle').forEach(element => {
    element.style.opacity = 0;
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

// 触发一次滚动事件以初始化页面状态
window.dispatchEvent(new Event('scroll'));

// 获取元素
const musicToggle = document.getElementById('musicToggle');
const bgMusic = document.getElementById('bgMusic');
const playIcon = document.getElementById('playIcon');
const pauseIcon = document.getElementById('pauseIcon');

// 点击事件
musicToggle.addEventListener('click', () => {
  if (bgMusic.paused) {
    // 播放音乐
    bgMusic.play().catch(err => {
      console.log('播放失败：', err); // 部分浏览器需用户交互后才能播放
    });
    // 更新状态：显示暂停图标，添加播放动画
    playIcon.style.display = 'none';
    pauseIcon.style.display = 'inline-block';
    musicToggle.classList.add('playing');
  } else {
    // 暂停音乐
    bgMusic.pause();
    // 更新状态：显示播放图标，移除动画
    pauseIcon.style.display = 'none';
    playIcon.style.display = 'inline-block';
    musicToggle.classList.remove('playing');
  }
});
