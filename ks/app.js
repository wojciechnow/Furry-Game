document.addEventListener('DOMContentLoaded',function () {
    console.log("yeahBitch");


    function GameOfLife  (boardWidth , boardHeight) {

        this.width= boardWidth;

        this.height= boardHeight;

        this.cells=[];


        this.board=document.getElementById('board');

        this.createBoard = function (width , height) {

            this.width=width;

            this.height=height;

            this.board.style.width = (this.width * 10).toString() + "px";

            this.board.style.height = (this.height * 10).toString() + "px";

            var sum= (this.width * this.height);

            for(var i=0 ; i<sum ; i++){

                var div=document.createElement('div');

                this.board.appendChild(div);

                this.cells.push(div);

            }
            console.log(this.cells);

            for(i=0; i<this.cells.length ; i++){

                this.cells[i].addEventListener('click', function () {

                    this.classList.toggle('live')
                })
            }


            };

            this.index = function (x,y) {

                return x + y * 10;
            };


            this.setCellState = function (x,y,state) {

                    if(this.board[this.index(this.cells.x, this.cells.y)].className === 'live'){

                        this.board[this.index(this.cells.x, this.cells.y)].classList.toggle('live')

                    }else  {

                        this.board[this.index(this.cells.x, this.cells.y)].classList.toggle('live')

                    }



                };

                this.firstGlider = function ()
                {
                    this.setCellState(0,1,'live');
                    this.setCellState(1,1,'live');
                    this.setCellState(1,2,'live');
                    this.setCellState(0,2,'live');
                    this.setCellState(2,2,'live');


                }
        }




  var game= new GameOfLife();
    game.createBoard(10,10);
    game.setCellState()

    game.firstGlider();








});