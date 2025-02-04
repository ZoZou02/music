class GlitchEffect {
    constructor() {
      this.maxLines = 2;
      this.activeLines = 0;
      this.linePool = [];
      this.container = document.querySelector('.glitch-overlay');
      this.initPool();
      this.startEffect();
    }
  
    initPool() {
      // 预创建5个横条
      for(let i = 0; i < 5; i++) {
        const line = document.createElement('div');
        line.className = 'glitched-line';
        this.container.appendChild(line);
        this.linePool.push({
          element: line,
          active: false
        });
      }
    }
  
    getAvailableLine() {
      return this.linePool.find(line => !line.active);
    }
  
    showLine(line) {
      if(!line) return;
      
      // 设置随机位置
      const topPos = Math.random() * (window.innerHeight - 4);
      line.element.style.top = `${topPos}px`;
      line.element.style.display = 'block';
      line.active = true;
      this.activeLines++;
  
      // 随机显示时间（50-300ms）
      const duration = Math.random() * 50;
      
      setTimeout(() => {
        line.element.style.display = 'none';
        line.active = false;
        this.activeLines--;
      }, duration);
    }
  
    startEffect() {
      setInterval(() => {
        if(this.activeLines < this.maxLines && Math.random() < 0.5) {
          const line = this.getAvailableLine();
          this.showLine(line);
        }
      }, 100);
    }
  }
  
  // 初始化效果
  new GlitchEffect();