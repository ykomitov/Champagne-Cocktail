var WorldObjects = function() {
    var snake = function() {
        function init(length, radius, x, y, speed) {
            this.length = length;
            this.radius = radius;
            this.headX = x;
            this.headY = y;
            this.tail = [{
                x: 100,
                y: 100
            }];
            this.direction = 'right';
            this.speed = speed;
            return this;
        }

        return {
            init: init
        };
    }();

    var wall = function() {
        function init(x, y, size) {
            this.x = x;
            this.y = y;
            this.size = size;
            return this;
        }

        return {
            init: init
        };
    }();

    var food = function(){
        function init(x, y){
            this.x = x;
            this.y = y;
            this.radius = 15;

            return this;
        }

        return {
            init: init
        };
    }();

    return {
        snake: snake,
        wall: wall,
        food: food
    };
}();