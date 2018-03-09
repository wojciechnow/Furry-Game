
var Furry = require('./Furry.js');
var Coin = require('./Coin.js');





function Game () {
    this.board = document.querySelectorAll('#board div');

    this.furry = new Furry();

    this.coin = new Coin();

    this.score = 0;

    this.index = function (x, y) {
        return x + (y * 10);

    };
    this.showFurry = function () {

        this.hideVisibleFurry();

        this.board[this.index(this.furry.x, this.furry.y)].classList.add('furry');
    };
    this.showCoin = function () {
        this.board[this.index(this.coin.x, this.coin.y)].classList.add('coin');
    };

    var self = this;
    this.moveFurry = function () {
        if (this.furry.direction === "right") {
            this.furry.x = this.furry.x + 1;
        } else if (this.furry.direction === "left") {
            this.furry.x = this.furry.x - 1;
        } else if (this.furry.direction === "up") {
            this.furry.y = this.furry.y - 1;
        } else if (this.furry.direction === "down") {
            this.furry.y = this.furry.y + 1;
        }
        this.gameOver();
        this.showFurry();
        this.checkCoinCollision();

    };
    this.startGame = function () {
        this.idSetInterval = setInterval(function () {
            self.moveFurry();
            self.showFurry();
        }, 250);
    };

    this.hideVisibleFurry = function () {
        var first= document.querySelector('.furry');

        if(first !== null){

            first.classList.remove('furry')

        }

    };
    this.turnFurry = function () {
        switch (event.which) {
            case 37:
                self.furry.direction = 'left';
                break;
            case 38:
                self.furry.direction = 'up';
                break;
            case 39:
                self.furry.direction = 'right';
                break;
            case 40:
                self.furry.direction = 'down';
                break;

        }
    };
    this.checkCoinCollision= function () {
        if ((this.furry.x === this.coin.x) && (this.furry.y === this.coin.y)){
            this.board[this.index(this.coin.x, this.coin.y)].classList.remove('coin');
            this.score++;
            document.querySelector('#score div strong').innerText = this.score;
            this.coin=new Coin();
            this.showCoin()
        }

    };
    this.gameOver = function () {
        if ((this.furry.x < 0) || (this.furry.y < 0) || (this.furry.x > 9) || (this.furry.y > 9) ){

            clearInterval(this.idSetInterval);
            this.hideVisibleFurry();
            var over=document.getElementById('over')
            over.classList.remove('invisible');
            over.querySelector('h1').innerText = 'GAME OVER'
            over.querySelector('h2').innerText = "Your score:"
            over.querySelector('h3').innerText = this.score


        }

    }






}
var game1= new Game();
game1.showFurry();
game1.showCoin();
game1.startGame();

document.addEventListener('keydown', function(event){

    game1.turnFurry(event);

});

module.exports = Game