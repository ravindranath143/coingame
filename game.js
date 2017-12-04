(function(){
    var startscreen,
        gamescreen,
        winscreen,
        losescreen,
        gameflow,
        playbutton,
        canvas,
        context,
        circle=60,
        distance=0,
        audiopitch,
        pitch,
        gametimeout,
        timeout,
        timer_text,
        timer_cnt = 30;

        //creating gameflow object
        function Gameflow() {
            this.gameSprites = new Array();
            this.gameImages = new Array();
            this.downloadQueue = new Array();
            this.totalimages = 9;
            this.loadedimages = 0;
            this.failedimages = 0;
            // this.name = 'ravi';
            this.startscreen_func = function() {
                gamescreen.style.display = 'none';
                winscreen.style.display = 'none';
                losescreen.style.display = 'none';
            };
            this.gamescreen_func = function() {
                startscreen.style.display = 'none';
                gamescreen.style.display = 'block';
                winscreen.style.display = 'none';
                losescreen.style.display = 'none';
                //setting coin dimensions
                this.CoinX = (Math.random() * (canvas.width - 60)).toFixed();
                this.CoinY = (Math.random() * (canvas.height - 60)).toFixed();
                canvas.addEventListener("click",checkcoin,false);
                this.maxdistance = Math.floor(Math.sqrt(Math.pow(0 - canvas.width-circle/2, 2) + Math.pow(0 - canvas.height-circle/2, 2)));
                this.gameAudio = new Audio('coin.mp3');

                document.addEventListener('mousemove', listentomouse, false);
                enableaudio();
                starttimer();
            };
            this.winscreen_func = function() {
                startscreen.style.display = 'none';
                gamescreen.style.display = 'none';
                winscreen.style.display = 'block';
                losescreen.style.display = 'none';
            };
            this.losescreen_func = function() {
                startscreen.style.display = 'none';
                gamescreen.style.display = 'none';
                winscreen.style.display = 'none';
                losescreen.style.display = 'block';
            };
        }
        // Gameflow.prototype.name = "bala";
        
        gameflow = new Gameflow();
        Gameflow.prototype.DownloadAll = function(downloadCallback) {
            var _self = this;
            //Images
            for (var i = 0; i < this.downloadQueue.length; i++) 
            {
                var path = this.downloadQueue[i][1];
                var img = new Image();
                img.onload = function() {
                    _self.loadedimages++;
                };
                img.onerror = function() {
                    _self.failedimages++;
                };  
                img.src = path;
                this.gameImages[i] = img;
            }
        };
        Gameflow.prototype.downloadimage = function(name,path) {
            this.downloadQueue.push([name,path]);
        };
        //load handler function
        var loadhanler = function () {
            startscreen = document.getElementById('start_screen');
            gamescreen = document.getElementById('game_screen');
            winscreen = document.getElementById('win_screen');
            losescreen = document.getElementById('lose_screen');
            playbutton = document.getElementById('play_button');
            canvas = document.getElementById('game');
            context = canvas.getContext("2d");
            resizeCanvas();

            // gameflow.gameSprites.push('hai')
            gameflow.downloadimage("lose1", "1.-Bat.png");
            gameflow.downloadimage("lose2", "2.-Robber.png");
            gameflow.downloadimage("lose3", "3.-Hand.png");
            gameflow.downloadimage("lose4", "4.-Spider.png");
            gameflow.downloadimage("lose5", "5.-Skeleton.png");
            gameflow.downloadimage("lose6", "6.-Girl.png");
            gameflow.downloadimage("lose7", "7.-Ghost.png");
            gameflow.downloadimage("lose8", "8.-Cat.png");
            gameflow.downloadimage("win", "Pop-up-min.png");
            gameflow.DownloadAll();
            getstarted();
        }

        //setting canvas width height
        function resizeCanvas() {
            canvas.width = window.innerWidth-10;
            canvas.height = window.innerHeight-10;
            canvas.style.border = '4px solid #fff';
        }
        //start game
        function startgame() {
            gameflow.gamescreen_func();
            
        }
        //load fisrt screen
        function getstarted() {
            playbutton.addEventListener("click",startgame,false);
            gameflow.startscreen_func();
        }

        //handling mouse move
        function listentomouse(e) {
            distance = calculateDistance(e.pageX,e.pageY);
            if(distance < 30){
                document.body.style.cursor = 'pointer';
            }else{
                document.body.style.cursor = 'default';
            }
        }

        //change audio sounds
        function enableaudio() {
            audiopitch = Math.floor((distance/gameflow.maxdistance) * 100);
            if(audiopitch == 0)
                pitch = 1;
            else if(audiopitch <= 5)
                pitch = 3;
            else if(audiopitch <= 10)
                pitch = 2.5;
            else if(audiopitch <= 10)
                pitch = 2;
            else if(audiopitch <= 15)
                pitch = 1.5;
            else if(audiopitch <= 20)
                pitch = 1;
            else
                pitch = 1;
            gameflow.gameAudio.mozPreservesPitch = false;
            gameflow.gameAudio.playbackRate = pitch;
            gameflow.gameAudio.play();
            
            gametimeout = setTimeout(enableaudio, 20);
        }

        //displaying timer
        function starttimer() {
            timer_cnt--;
            if(timer_cnt == 0){
                clearTimeout(gametimeout);
                clearTimeout(timeout);
                gameflow.losescreen_func();
            }
            context.clearRect(0,0,canvas.width,canvas.height);
            timer_text = "Timer : "+timer_cnt;
            context.font = 'italic 20pt Calibri';
            context.fillStyle = '#fff';
            context.fillText(timer_text, canvas.width-150, 30);
            timeout = setTimeout(starttimer, 1000);
        }
        //finding coin 
        function checkcoin(e) {
            console.log(gameflow)
            distance = calculateDistance(e.pageX,e.pageY);
            if(distance < 30){
                clearTimeout(gametimeout);
                clearTimeout(timeout);
                context.drawImage(gameflow.gameImages[8],0,0);
                canvas.removeEventListener("click",checkcoin,false);
                setTimeout(function () {
                    context.clearRect(0,0,canvas.width,canvas.height);
                    gameflow.winscreen_func();
                }, 200);
                
            }else{
                let rabdnum = Math.floor(Math.random() * 7) + 1;
                context.drawImage(gameflow.gameImages[rabdnum],e.pageX-200,e.pageY-200);
                setTimeout(function () {
                    context.clearRect(0,0,canvas.width,canvas.height);
                    context.font = 'italic 20pt Calibri';
                    context.fillStyle = '#fff';
                    context.fillText(timer_text, canvas.width-150, 30);
                }, 30);
            }
        }

        //claculating distance b/t mouse and coin
        function calculateDistance(mouseX, mouseY) {
            return Math.floor(Math.sqrt(Math.pow(mouseX - gameflow.CoinX-circle/2, 2) + Math.pow(mouseY - gameflow.CoinY-circle/2, 2)));
        }
        window.addEventListener("load",loadhanler,false);
})()