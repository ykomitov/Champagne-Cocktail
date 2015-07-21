var RenderEngines = (function() {

    var CanvasRenderer = function() {

        function init(width, height) {
            // this.stage = new Kinetic.Stage({
            //     container: 'canvas-container',
            //     width: width,
            //     height: height
            // });

            // this.layer = new Kinetic.Layer();
            // this.stage.add(this.layer);

            this.canvas = document.getElementById('canvas-region');
            this.canvas.width = width;
            this.canvas.height = height;
            this.ctx = this.canvas.getContext('2d');

            return this;
        }

        function renderState(worldObjects) {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            renderSnake.call(this, worldObjects.snake);
            // this.layer.draw();
        }

        function renderSnake(snake) {
            var ctx = this.ctx;
            // console.log(snake);
            var tailLength = snake.trails.length-1-snake.length*snake.radius;
            for (var i = (snake.trails.length - 1); i > 0 && i > tailLength; i -= 1) {
                ctx.beginPath();
                ctx.fillStyle = '#aaa';
                ctx.arc(snake.trails[i].x, snake.trails[i].y, snake.radius, 0, 2 * Math.PI, false);
                ctx.fill();
            }
        }

        return {
            init: init,
            renderState: renderState
        }
    }();

    return {
        CanvasRenderer: CanvasRenderer
    }

}());