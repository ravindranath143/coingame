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
        prev_audio_no = 10,
        soundtimeout,
        timertimeout,
        timer_cnt,
        is_mobile = 0,
        is_touch = 0,
        gmethods,
        gevents,
        progressbar,
        loadingscreen,
        barwidth = 10,
        bartimecout,
        starttimeout,
        initial_score = 0;
        //creating gameflow object
        function Gameflow() {
            this.gameImages = new Array();
            this.gameSounds = new Array();
            this.downloadQueue = new Array();
            this.downloadQueueaudio = new Array();
            this.totalimages = 10;
            this.loadedimages = 0;
            this.failedimages = 0;
            this.startscreen_func = function() {
                if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
                    is_mobile = !0;
                }else{
                    is_mobile = 0;
                }
                loadingscreen.style.display = 'none';
                startscreen.style.display = 'block';
                gamescreen.style.display = 'none';
                winscreen.style.display = 'none';
                losescreen.style.display = 'none';
            };
            this.gamescreen_func = function() {
                startscreen.style.display = 'none';
                gamescreen.style.display = 'block';
                gamescreen.style.webkitOverflowScrolling = 'auto';
                winscreen.style.display = 'none';
                losescreen.style.display = 'none';
                timer_cnt = 60;
                //setting coin dimensions
                this.blockradius = Math.floor(Math.sqrt((canvas.width/3) * (canvas.height/3))/3);
                this.CoinX = Math.floor(Math.random() * (canvas.width - this.blockradius));
                this.CoinY = Math.floor(Math.random() * (canvas.height - this.blockradius));
                if(this.CoinY < 100) this.CoinY = this.CoinY+100;
                if(this.CoinX < 100) this.CoinX = this.CoinX+100;
                canvas.addEventListener("click",gevents.CanvasClick,false);
                
                this.maxdistance = Math.floor(Math.sqrt(Math.pow(0 - canvas.width-this.blockradius/2, 2) + Math.pow(0 - canvas.height-this.blockradius/2, 2)));
                if( is_mobile) {
                    document.addEventListener('touchstart', gevents.startsound, false);
                    document.addEventListener('touchend', gevents.stopsound, false);
                    document.addEventListener('touchmove', gevents.onTouchMove, false);
                }else{
                    document.addEventListener('mousemove', gevents.onMouseMove, false);
                    gevents.playsound();
                }
                gevents.starttimer();
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
        gameflow = new Gameflow();

        //adding prototypes
        Gameflow.prototype.DownloadAll = function() {
            var _self = this;
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
            for (var i = 0; i < this.downloadQueueaudio.length; i++) 
            {   
                let sound = new Howl({
                          src: [this.downloadQueueaudio[i][1]]
                        });
                 this.gameSounds[this.downloadQueueaudio[i][0]] = sound;
            } 
        };
        Gameflow.prototype.downloadimage = function(name,path) {
            this.downloadQueue.push([name,path]);
        };
        Gameflow.prototype.downloadaudio = function(key,path) {
            this.downloadQueueaudio.push([key,path]);
        };

        function methods() {
            this.loadhanler = function () {
                
                loadingscreen = document.getElementById('loading_screen');
                startscreen = document.getElementById('start_screen');
                gamescreen = document.getElementById('game_screen');
                winscreen = document.getElementById('win_screen');
                losescreen = document.getElementById('lose_screen');
                progressbar = document.getElementById("Progressbar"); 
                playbutton = document.getElementsByClassName('play');
                canvas = document.getElementById('game');
                context = canvas.getContext("2d");
                this.resizeCanvas();

                //loading images
                gameflow.downloadimage("lose1", "img/coin/1.-Bat.png");
                gameflow.downloadimage("lose2", "img/coin/2.-Robber.png");
                gameflow.downloadimage("lose3", "img/coin/3.-Hand.png");
                gameflow.downloadimage("lose4", "img/coin/4.-Spider.png");
                gameflow.downloadimage("lose5", "img/coin/5.-Skeleton.png");
                gameflow.downloadimage("lose6", "img/coin/6.-Girl.png");
                gameflow.downloadimage("lose7", "img/coin/7.-Ghost.png");
                gameflow.downloadimage("lose8", "img/coin/8.-Cat.png");
                gameflow.downloadimage("win", "img/coin/Pop-up-min.png");
                gameflow.downloadimage("timer", "img/coin/timer.png");
                // gameflow.downloadimage("win_screen", "img/lose-screen.jpg");
                // gameflow.downloadimage("lose_screen", "img/win-screen.png");
                // gameflow.downloadimage("coach_mark", "img/coach-mark.png");

                //loading sounds
                gameflow.downloadaudio("10", "/sounds/1.mp3");
                gameflow.downloadaudio("9", "/sounds/2.mp3");
                gameflow.downloadaudio("8", "/sounds/3.mp3");
                gameflow.downloadaudio("7", "/sounds/4.mp3");
                gameflow.downloadaudio("6", "/sounds/5.mp3");
                gameflow.downloadaudio("5", "/sounds/6.mp3");
                gameflow.downloadaudio("4", "/sounds/7.mp3");
                gameflow.downloadaudio("3", "/sounds/8.mp3");
                gameflow.downloadaudio("2", "/sounds/9.mp3");
                gameflow.downloadaudio("1", "/sounds/10.mp3");
                gameflow.downloadaudio("0", "/sounds/10.mp3");

                gameflow.DownloadAll();
                gameflow.DownloadAllaudio();
                this.startafterdownload();
            }
        }
        methods.prototype.startafterdownload = function () {
            if (barwidth >= 100) {
              clearTimeout(bartimecout);
              gmethods.getstarted();
            } else {
              barwidth = (gameflow.loadedimages + gameflow.failedimages) * 10; 
              progressbar.style.width = barwidth + '%'; 
              progressbar.innerHTML = barwidth * 1  + '%';
              bartimecout = setTimeout(gmethods.startafterdownload, 10);
            }
            
        }
        methods.prototype.resizeCanvas = function () {
            canvas.width = window.innerWidth-10;
            canvas.height = window.innerHeight-10;
            canvas.style.border = '4px solid #fff';
        }
        methods.prototype.getstarted = function () {
            for (var i = 0; i < playbutton.length; i++) {
                playbutton[i].addEventListener("click",this.startgame,false);
            }
            gameflow.startscreen_func();
        };
        methods.prototype.startgame = function() {
            gameflow.gamescreen_func();
        }
        gmethods = new methods();

        function Gameevents() {
            this.calculateDistance = function (mouseX, mouseY) {
                return Math.floor(Math.sqrt(Math.pow(mouseX - gameflow.CoinX-gameflow.blockradius/2, 2) + Math.pow(mouseY - gameflow.CoinY-gameflow.blockradius/2, 2)));
            }
        }

        Gameevents.prototype.playsound = function() {
            gameflow.gameSounds[audio_no].play();
            soundtimeout = setTimeout(gevents.playsound, 300);
        }
        Gameevents.prototype.startsound = function(e) {
            if(!is_touch){
                is_touch = !is_touch;
                distance = gevents.calculateDistance(e.touches[0].pageX,e.touches[0].pageY);
                audio_no = (distance/gameflow.blockradius).toFixed();
                if(audio_no >= 10)
                    audio_no = 10;
                // if(prev_audio_no != audio_no){
                //     gameflow.gameSounds[prev_audio_no].pause();
                //     prev_audio_no = audio_no;
                // }
                starttimeout = setTimeout(gevents.playsound, 300);
            } 
            setTimeout(function () {
                e.preventDefault();
            }, 300);
            
        }
        Gameevents.prototype.stopsound = function(e) {
            is_touch = !is_touch;
            clearTimeout(starttimeout);
            clearTimeout(soundtimeout);
        }
        
        Gameevents.prototype.starttimer = function () {
            timer_cnt--;
            if(timer_cnt == 0){
                clearTimeout(soundtimeout);
                clearTimeout(timertimeout);
                if( is_mobile) {
                    document.removeEventListener('touchstart', gevents.startsound, false);
                    document.removeEventListener('touchend', gevents.stopsound, false);
                    document.removeEventListener('touchmove', gevents.onTouchMove, false);
                }else{
                    document.removeEventListener('mousemove', gevents.onMouseMove, false);
                }
                //send ajax here
                gameflow.losescreen_func();
            }else{
                context.clearRect(0,0,canvas.width,canvas.height);
                context.drawImage(gameflow.gameImages[9],canvas.width/2-50, 10);
                // context.drawImage(gameflow.gameImages[9],17,18,774,264,canvas.width/2-50, 30,100,50);
                context.font = '18pt serif';
                context.fillStyle = '#000';
                context.fillText(timer_cnt, canvas.width/2-3, 40);
                if(timer_cnt <= 3){
                    context.font = '50pt serif';
                    context.fillStyle = '#fff';
                    context.fillText(timer_cnt, canvas.width/2, canvas.height/2);
                }
                
                timertimeout = setTimeout(gevents.starttimer, 1000);
            }
            
        }
        Gameevents.prototype.onMouseMove = function (e) {
            if(e.type == 'touchmove'){
                distance = gevents.calculateDistance(e.touches[0].pageX,e.touches[0].pageY);
            }else{
                distance = gevents.calculateDistance(e.pageX,e.pageY);
            }
            audio_no = (distance/gameflow.blockradius).toFixed();
            if(audio_no >= 10)
                    audio_no = 10;
            if(distance < gameflow.blockradius){
                document.body.style.cursor = 'pointer';
            }else{
                document.body.style.cursor = 'default';
            }
            e.preventDefault();
        }
        Gameevents.prototype.onTouchMove = function(e) {
            gevents.onMouseMove(e);
        }
        Gameevents.prototype.CanvasClick = function (e) {
            distance = gevents.calculateDistance(e.pageX,e.pageY);
            if(distance < gameflow.blockradius){
                initial_score = ((timer_cnt/60)*100).toFixed();
                clearTimeout(soundtimeout);
                clearTimeout(timertimeout);
                context.drawImage(gameflow.gameImages[8],e.pageX-100,e.pageY-100);
                canvas.removeEventListener("click",gevents.CanvasClick,false);
                if( is_mobile) {
                    document.removeEventListener('touchstart', gevents.startsound, false);
                    document.removeEventListener('touchend', gevents.stopsound, false);
                    document.removeEventListener('touchmove', gevents.onTouchMove, false);
                }else{
                    document.removeEventListener('mousemove', gevents.onMouseMove, false);
                }
                //send ajax here
                setTimeout(function () {
                    context.clearRect(0,0,canvas.width,canvas.height);
                    gameflow.winscreen_func();
                }, 1000);
                
            }else{
                let randnum = Math.floor(Math.random() * 7) + 1;
                context.drawImage(gameflow.gameImages[randnum],e.pageX-100,e.pageY-100);
                setTimeout(function () {
                    context.clearRect(0,0,canvas.width,canvas.height);
                    context.drawImage(gameflow.gameImages[9],canvas.width/2-50, 10);
                    context.font = '18pt serif';
                    context.fillStyle = '#000';
                    context.fillText(timer_cnt, canvas.width/2-3, 40);
                    if(timer_cnt <= 3){
                        context.font = '50pt serif';
                        context.fillStyle = '#fff';
                        context.fillText(timer_cnt, canvas.width/2, canvas.height/2);
                    }
                }, 400);
            }
        }
        
        gevents = new Gameevents();
        function loadthegame() {
            gmethods.loadhanler()
        }
        window.addEventListener("load",loadthegame,false);
})()