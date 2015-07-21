var WorldObjects = function() {
    var snake = {
        id: 'snake',
        length: 5,
        radius: 10,
        headX: 100,
        headY: 100,
        trails: [{x:100, y:100}],
        direction: 'right'
    }

    return {
        snake: snake
    }
}();