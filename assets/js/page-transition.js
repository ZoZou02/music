document.addEventListener('DOMContentLoaded', () => {
    // 创建预加载框架
    const preloadFrame = document.createElement('div');
    preloadFrame.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 999;
        transform: translateX(100%);
        transition: transform 0.5s ease-in-out;
    `;
    
    const iframe = document.createElement('iframe');
    iframe.style.cssText = `
        width: 100%;
        height: 100%;
        border: none;
        position: absolute;
        top: 0;
        left: 0;
    `;
    preloadFrame.appendChild(iframe);
    document.body.appendChild(preloadFrame);

    // 主页面容器
    const mainContent = document.createElement('div');
    mainContent.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transition: transform 0.5s ease-in-out;
    `;
    
    // 将所有现有内容移动到主容器中
    while (document.body.firstChild !== preloadFrame) {
        mainContent.appendChild(document.body.firstChild);
    }
    document.body.insertBefore(mainContent, preloadFrame);

    // 处理箭头点击事件
    const arrows = document.querySelectorAll('.arrow');
    arrows.forEach(arrow => {
        arrow.addEventListener('click', (e) => {
            e.preventDefault();
            const href = arrow.getAttribute('href');
            const direction = arrow.classList.contains('arrow-left') ? 'left' : 'right';
            
            // 设置 iframe 源
            iframe.src = href;
            
            // 等待 iframe 加载完成
            iframe.onload = () => {
                // 设置初始位置
                preloadFrame.style.transform = `translateX(${direction === 'left' ? '100%' : '100%'})`;
                
                // 触发动画
                requestAnimationFrame(() => {
                    // 当前页面滑出
                    mainContent.style.transform = `translateX(${direction === 'left' ? '100%' : '-100%'})`;
                    // 新页面滑入
                    preloadFrame.style.transform = 'translateX(0)';
                    
                    // 动画完成后跳转
                    setTimeout(() => {
                        window.location.href = href;
                    }, 500);
                });
            };
        });
    });
});