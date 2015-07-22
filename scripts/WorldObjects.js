var WorldObjects = function() {
    var snake = {
        length: 50,
        radius: 10,
        headX: 100,
        headY: 100,
        tail: [{x:100, y:100}],
        direction: 'right',
        speed: 2
    }

    return {
        snake: snake
    }
}();