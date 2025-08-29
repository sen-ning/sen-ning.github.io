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