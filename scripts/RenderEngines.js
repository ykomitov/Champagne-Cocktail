var RenderEngines = (function() {

    var CanvasRenderer = function() {

        function init(width, height) {
            this.stage = new Kinetic.Stage({
                container: 'canvas-container',
                width: width,
                height: height
            });
           
            this.layer = new Kinetic.Layer();
            this.stage.add(this.layer);

           
            this.canvas = document.getElementsByTagName('canvas')[0];
            this.canvas.width = width;
            this.canvas.height = height;
            this.ctx = this.canvas.getContext('2d');

            return this;
        }


		 function drawBackground() {
		 	var ctx = this.ctx;
		 	//this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
		 	
			var img = new Image();

			img.onload = function () {

				var pattern = ctx.createPattern(img, 'repeat');
				ctx.fillStyle = pattern;
				ctx.fillRect(-20, 0, 680, 500);
				this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
			};

			img.src = 'media/grass.jpg';
		



		 }
        function renderState(worldObjects) {
        	//this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            
            renderSnake.call(this, worldObjects.snake);
            renderWalls.call(this, worldObjects.walls);
            renderFood.call(this, worldObjects.food);
            
            drawBackground.call(this);
            
            // this.layer.draw();
        }

        function renderSnake(snake) {
            var ctx = this.ctx;

            var img = new Image();

			img.onload = function () {
				var pattern = ctx.createPattern(img, 'repeat');
				ctx.fillStyle = pattern;
				ctx.fillRect(0, 0, 640, 480);
			};

			img.src = 'pattern.jpg';

            for (var i = (snake.tail.length - 1); i >= 0; i -= 1) {
                ctx.beginPath();
                ctx.fillStyle = '#aaa';
                ctx.arc(snake.tail[i].x, snake.tail[i].y, snake.radius, 0, 2 * Math.PI, false);
                ctx.fill();
            }
        }

        function renderWalls(walls) {
            var ctx = this.ctx;
            walls.forEach(function(wall) {
                ctx.beginPath();
                ctx.fillStyle = '#111';
                ctx.rect(wall.x - wall.size/2, wall.y-wall.size/2, wall.size, wall.size);
                // ctx.arc(wall.x, wall.y, wall.size, 0, 2 * Math.PI, false);
                ctx.fill();
                // ctx.stroke();
            });
        }

        function renderFood(food){
            var ctx = this.ctx;

            ctx.beginPath();
            ctx.fillStyle = '#aaa';
            ctx.arc(food.x, food.y, food.radius, 0, 2*Math.PI);
            ctx.fill();
        }

        function clearFood(food){
            ctx.clearRect(food.x - food.radius, food.y - food.radius, food.radius, food.radius);
        }

        return {
            init: init,
            renderState: renderState
        };
    }();

    return {
        CanvasRenderer: CanvasRenderer
    };

}());