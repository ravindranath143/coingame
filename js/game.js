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
        gametimeout,
        timeout,
        timer_cnt = 60,
        is_mobile = 0,
        audiocontext,
        audioBuffer,
        M;
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
                if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
                    is_mobile = !0;
                }else{
                    is_mobile = 0;
                }
                startscreen.style.display = 'block';
                gamescreen.style.display = 'none';
                winscreen.style.display = 'none';
                losescreen.style.display = 'none';
            };
            this.gamescreen_func = function() {
                startscreen.style.display = 'none';
                gamescreen.style.display = 'block';
                winscreen.style.display = 'none';
                losescreen.style.display = 'none';
                timer_cnt = 60;
                //setting coin dimensions
                this.blockradius = Math.floor(Math.sqrt((canvas.width/3) * (canvas.height/3))/3);
                this.CoinX = (Math.random() * (canvas.width - this.blockradius)).toFixed();
                this.CoinY = (Math.random() * (canvas.height - this.blockradius)).toFixed();
                canvas.addEventListener("click",M.CanvasClick,false);
                

                this.maxdistance = Math.floor(Math.sqrt(Math.pow(0 - canvas.width-this.blockradius/2, 2) + Math.pow(0 - canvas.height-this.blockradius/2, 2)));
                if( is_mobile) {
                    console.log('mobile')
                    document.addEventListener('touchstart', M.startsound, false);
                    document.addEventListener('touchend', M.stopsound, false);
                    document.addEventListener('touchmove', M.onTouchMove, false);
                }else{
                    console.log('desktop')
                    document.addEventListener('mousemove', M.onMouseMove, false);
                    M.playsound();
                }
                M.starttimer();
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
            var xhr = [];
            for (var i = 0; i < this.downloadQueueaudio.length; i++) 
            {   (function (i){
                    xhr[i] = new XMLHttpRequest();
                    // console.log(this.downloadQueueaudio[i][1])
                    xhr[i].open("GET",gameflow.downloadQueueaudio[i][1],true);
                    xhr[i].responseType= 'arraybuffer';
                    xhr[i].number = 3;
                    xhr[i].onload = function(){
                        //take the audio from http request and decode it in an audio buffer
                        audiocontext.decodeAudioData(xhr[i].response, function(buffer){
                          audioBuffer = buffer;
                          gameflow.gameSounds[gameflow.downloadQueueaudio[i][0]] = audioBuffer;
                        });

                    };
                    xhr[i].send();
                })(i)
            }
            
        };
        Gameflow.prototype.downloadimage = function(name,path) {
            this.downloadQueue.push([name,path]);
        };
        Gameflow.prototype.downloadaudio = function(key,path) {
            this.downloadQueueaudio.push([key,path]);
        };
        console.log(gameflow)
        //all methods and events
        M = {
                loadhanler : function () {
                    try
                    {
                        window.AudioContext = window.AudioContext || window.webkitAudioContext;
                        audiocontext=new AudioContext();

                    }
                    catch(e)
                    {
                        alert("Your browser doesn't support Web Audio API");
                    }

                    startscreen = document.getElementById('start_screen');
                    gamescreen = document.getElementById('game_screen');
                    winscreen = document.getElementById('win_screen');
                    losescreen = document.getElementById('lose_screen');
                    // playbutton = document.getElementById('play');
                    playbutton = document.getElementsByClassName('play');
                    canvas = document.getElementById('game');
                    context = canvas.getContext("2d");
                    M.resizeCanvas();

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
                    gameflow.downloadaudio("14", "/sounds/1.mp3");
                    gameflow.downloadaudio("13", "/sounds/1.mp3");
                    gameflow.downloadaudio("12", "/sounds/1.mp3");
                    gameflow.downloadaudio("11", "/sounds/1.mp3");
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
                    M.getstarted();
                },
                getstarted: function () {
                    for (var i = 0; i < playbutton.length; i++) {
                        playbutton[i].addEventListener("click",M.startgame,false);
                    }
                    // playbutton.addEventListener("click",M.startgame,false);
                    gameflow.startscreen_func();
                },
                startgame: function() {
                    gameflow.gamescreen_func();
                    
                },
                playsound: function() {
                    console.log('play')
                    //creating source node
                    var source = audiocontext.createBufferSource();
                    //passing in file
                    source.buffer = gameflow.gameSounds[audio_no];
                    //start playing
                    source.connect(audiocontext.destination);  // added
                    source.start(0);
                    gametimeout = setTimeout(M.playsound, 300);
                },
                startsound: function(e) {
                    distance = M.calculateDistance(e.touches[0].pageX,e.touches[0].pageY);
                    audio_no = (distance/gameflow.blockradius).toFixed()
                    console.log(distance)
                    sterttimeout = setTimeout(M.playsound, 300);
                    // M.playsound();
                },
                stopsound: function(e) {
                    clearTimeout(sterttimeout);
                    clearTimeout(gametimeout);
                },
                calculateDistance: function (mouseX, mouseY) {
                    return Math.floor(Math.sqrt(Math.pow(mouseX - gameflow.CoinX-gameflow.blockradius/2, 2) + Math.pow(mouseY - gameflow.CoinY-gameflow.blockradius/2, 2)));
                },
                starttimer: function () {
                    timer_cnt--;
                    if(timer_cnt == 0){
                        clearTimeout(gametimeout);
                        clearTimeout(timeout);
                        if( is_mobile) {
                            console.log('mobile')
                            document.removeEventListener('touchstart', M.startsound, false);
                            document.removeEventListener('touchend', M.stopsound, false);
                            document.removeEventListener('touchmove', M.onTouchMove, false);
                        }else{
                            console.log('desktop')
                            document.removeEventListener('mousemove', M.onMouseMove, false);
                        }
                        gameflow.losescreen_func();
                    }
                    context.clearRect(0,0,canvas.width,canvas.height);
                    context.drawImage(gameflow.gameImages[9],17,18,774,264,canvas.width/2-50, 30,100,50);
                    context.font = 'italic 20pt Calibri';
                    context.fillStyle = '#000';
                    context.fillText(timer_cnt, canvas.width/2-10, 65);
                    timeout = setTimeout(M.starttimer, 1000);
                },
                onMouseMove: function (e) {
                    if(e.type == 'touchmove'){
                        distance = M.calculateDistance(e.touches[0].pageX,e.touches[0].pageY);
                    }else{
                        distance = M.calculateDistance(e.pageX,e.pageY);
                    }
                    audio_no = (distance/gameflow.blockradius).toFixed()
                    if(distance < gameflow.blockradius){
                        document.body.style.cursor = 'pointer';
                    }else{
                        document.body.style.cursor = 'default';
                    }
                },
                onTouchMove: function(e) {
                    M.onMouseMove(e);
                },
                CanvasClick: function (e) {
                    console.log(e)
                    distance = M.calculateDistance(e.pageX,e.pageY);
                    if(distance < gameflow.blockradius){
                        clearTimeout(gametimeout);
                        clearTimeout(timeout);
                        context.drawImage(gameflow.gameImages[8],0,0);
                        canvas.removeEventListener("click",M.CanvasClick,false);
                        if( is_mobile) {
                            console.log('mobile')
                            document.removeEventListener('touchstart', M.startsound, false);
                            document.removeEventListener('touchend', M.stopsound, false);
                            document.removeEventListener('touchmove', M.onTouchMove, false);
                        }else{
                            console.log('desktop')
                            document.removeEventListener('mousemove', M.onMouseMove, false);
                        }
                        setTimeout(function () {
                            context.clearRect(0,0,canvas.width,canvas.height);
                            gameflow.winscreen_func();
                        }, 200);
                        
                    }else{
                        let rabdnum = Math.floor(Math.random() * 7) + 1;
                        context.drawImage(gameflow.gameImages[rabdnum],e.pageX-200,e.pageY-200);
                        setTimeout(function () {
                            context.clearRect(0,0,canvas.width,canvas.height);
                            context.drawImage(gameflow.gameImages[9],17,18,774,264,canvas.width/2-50, 30,100,50);
                            context.font = 'italic 20pt Calibri';
                            context.fillStyle = '#000';
                            context.fillText(timer_cnt, canvas.width/2-10, 65);
                        }, 400);
                    }
                },
                resizeCanvas: function () {
                    canvas.width = window.innerWidth-10;
                    canvas.height = window.innerHeight-10;
                    canvas.style.border = '4px solid #fff';
                }
            };
        window.addEventListener("load",M.loadhanler,false);
})()