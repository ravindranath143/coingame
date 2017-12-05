(function(){
    var startscreen,
        gamescreen,
        winscreen,
        losescreen,
        gameflow,
        playbutton,
        canvas,
        context,
        distance=0,
        audio_no = 10,
        audiopitch,
        pitch,
        gametimeout,
        timeout,
        timer_text,
        timer_cnt = 60;
        var t = window.AudioContext || window.webkitAudioContext,
            e = /iPad|iPhone|iPod/.test(navigator.userAgent);

        //creating gameflow object
        function Gameflow() {
            this.gameSprites = new Array();
            this.gameImages = new Array();
            this.gameSounds = new Array();
            this.downloadQueue = new Array();
            this.downloadQueueaudio = new Array();
            this.totalimages = 9;
            this.loadedimages = 0;
            this.failedimages = 0;
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
                this.blockradius = Math.floor(Math.sqrt((canvas.width/3) * (canvas.height/3))/3);
                this.CoinX = (Math.random() * (canvas.width - this.blockradius)).toFixed();
                this.CoinY = (Math.random() * (canvas.height - this.blockradius)).toFixed();
                canvas.addEventListener("click",checkcoin,false);
                this.maxdistance = Math.floor(Math.sqrt(Math.pow(0 - canvas.width-this.blockradius/2, 2) + Math.pow(0 - canvas.height-this.blockradius/2, 2)));

                document.addEventListener('mousemove', listentomouse, false);
                playsound();
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
            this.playsound = function() {
                this.gameSounds[5].pause();
                this.gameSounds[5].currentTime = 0;
                this.gameSounds[5].play();
                gametimeout = setTimeout(this.playsound(), 300);
            }
        }
        gameflow = new Gameflow();
        //adding prototypes
        Gameflow.prototype.DownloadAll = function() {
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
        Gameflow.prototype.DownloadAllaudio = function() {
            var _self = this;
            for (var i = 0; i < this.downloadQueueaudio.length; i++) 
            {   
                var gameaudio = new Audio();
                gameaudio.src = this.downloadQueueaudio[i][1];
                gameaudio.autobuffer = true;
                gameaudio.load();
                this.gameSounds[this.downloadQueueaudio[i][0]] = gameaudio;
            }
        };
        Gameflow.prototype.downloadimage = function(name,path) {
            this.downloadQueue.push([name,path]);
        };
        Gameflow.prototype.downloadaudio = function(key,path) {
            this.downloadQueueaudio.push([key,path]);
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

            //loading images
            gameflow.downloadimage("lose1", "img/1.-Bat.png");
            gameflow.downloadimage("lose2", "img/2.-Robber.png");
            gameflow.downloadimage("lose3", "img/3.-Hand.png");
            gameflow.downloadimage("lose4", "img/4.-Spider.png");
            gameflow.downloadimage("lose5", "img/5.-Skeleton.png");
            gameflow.downloadimage("lose6", "img/6.-Girl.png");
            gameflow.downloadimage("lose7", "img/7.-Ghost.png");
            gameflow.downloadimage("lose8", "img/8.-Cat.png");
            gameflow.downloadimage("win", "img/Pop-up-min.png");
            gameflow.downloadimage("timer", "img/timer-02.png");

            //loading sounds
            gameflow.downloadaudio("14", "sounds/1.mp3");
            gameflow.downloadaudio("13", "sounds/1.mp3");
            gameflow.downloadaudio("12", "sounds/1.mp3");
            gameflow.downloadaudio("11", "sounds/1.mp3");
            gameflow.downloadaudio("10", "sounds/1.mp3");
            gameflow.downloadaudio("9", "sounds/2.mp3");
            gameflow.downloadaudio("8", "sounds/3.mp3");
            gameflow.downloadaudio("7", "sounds/4.mp3");
            gameflow.downloadaudio("6", "sounds/5.mp3");
            gameflow.downloadaudio("5", "sounds/6.mp3");
            gameflow.downloadaudio("4", "sounds/7.mp3");
            gameflow.downloadaudio("3", "sounds/8.mp3");
            gameflow.downloadaudio("2", "sounds/9.mp3");
            gameflow.downloadaudio("1", "sounds/10.mp3");
            gameflow.downloadaudio("0", "sounds/10.mp3");

            gameflow.DownloadAll();
            gameflow.DownloadAllaudio();
            getstarted();
        }

        //varying sounds
         playsound = function() {
            console.log(audio_no)
            gameflow.gameSounds[audio_no].pause();
            gameflow.gameSounds[audio_no].currentTime = 0;
            gameflow.gameSounds[audio_no].play();
            gametimeout = setTimeout(playsound, 300);
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
            audio_no = (distance/gameflow.blockradius).toFixed()
            if(distance < gameflow.blockradius){
                document.body.style.cursor = 'pointer';
            }else{
                document.body.style.cursor = 'default';
            }
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
            context.drawImage(gameflow.gameImages[9],17,18,774,264,canvas.width/2, 30,100,50);
            timer_text = timer_cnt;
            context.font = 'italic 20pt Calibri';
            context.fillStyle = '#000';
            context.fillText(timer_text, canvas.width/2+40, 65);
            timeout = setTimeout(starttimer, 1000);
        }
        //finding coin 
        function checkcoin(e) {
            distance = calculateDistance(e.pageX,e.pageY);
            if(distance < gameflow.blockradius){
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
                    context.drawImage(gameflow.gameImages[9],17,18,774,264,canvas.width/2, 0,100,50);
                    context.font = 'italic 20pt Calibri';
                    context.fillStyle = '#000';
                    context.fillText(timer_text, canvas.width/2+40, 33);
                }, 30);
            }
        }

        //claculating distance b/t mouse and coin
        function calculateDistance(mouseX, mouseY) {
            return Math.floor(Math.sqrt(Math.pow(mouseX - gameflow.CoinX-gameflow.blockradius/2, 2) + Math.pow(mouseY - gameflow.CoinY-gameflow.blockradius/2, 2)));
        }
        window.addEventListener("load",loadhanler,false);
})()