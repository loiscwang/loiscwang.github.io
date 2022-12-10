class GameLoop {

    constructor() {
        this.fps = 60;
        this.ctx = null;
        this.cnv = null;
        this.loop = null;
    }

    prepareCanvas() {
        this.cnv = document.getElementById('canvas');
        this.ctx = this.cnv.getContext('2d');
        document.body.style.margin = 0;
        document.body.style.padding = 0;
        this.onresize();
    }

    onresize() {
        if ( this.cnv ) {
            this.cnv.width = window.innerWidth;
            this.cnv.height = window.innerHeight;
            this.resize();
        }
    }

    start() {
        this.toggleScreen('start-screen',false);
        this.toggleScreen('canvas',true);
        this.toggleScreen('gameover-screen',false);
        this.prepareCanvas();
        this.init();
        this.loop = setInterval(() => {
            this.update();
            this.render();
        }, 1000/this.fps);
    }

    stop() {
        this.toggleScreen('start-screen',false);
        this.toggleScreen('canvas',false);
        this.toggleScreen('gameover-screen',true);
        clearInterval(this.loop);
    }

    toggleScreen(id,toggle) {
        let element = document.getElementById(id);
        let display = ( toggle ) ? 'block' : 'none';
        element.style.display = display;
    }

    init() {
    }

    resize() {
    }

    update() {
    }

    render() {
    }
}