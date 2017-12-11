(function() {
<<<<<<< HEAD

        var startscreen,gamescreen,winscreen,losescreen,playbutton,gametimeout,timeout;



        var gamefunc = function(){
            var loadImage = new Array(); 
        }

        
        var canvas = document.getElementById('doorClose');
        var ctx = canvas.getContext("2d");
        canvas.width = 489;
        canvas.height = 650;

        var myTimeout;
        var Timer = 20;
        var w = document.innerWidth/2;
        var h = document.innerHeight/2;

        var timerImage = false;
        var timer = new Image();
        timer.onload = function(){
            timerImage = true;
        }
        timer.src = "css/timer.png";

        var buttonImage = false;
        var button = new Image();

        button.onload = function(){
            buttonImage = true;

        }
        button.src = "css/button.png";


        var frontimage = false;
        var front = new Image();

        front.onload = function(){
            frontimage= true;
        };

        front.src = "css/door-side.png";


        var doorbackimage = false;
        var backimage = new Image();

        backimage.onload = function() {
            doorbackimage = true;
        };
        backimage.src = "css/crowded.png";

        var doorReady = false;
        var doorimage1 = new Image();

        doorimage1.onload = function(){
        	doorReady = true;
        };
        doorimage1.src = "css/left_door.png";
        var doorReady1 = false;
        var doorimage2 = new Image();

        doorimage2.onload = function(){
            doorReady1 = true;
        };
        doorimage2.src = "css/right_door.png";
        var Door = {};
=======
    var game_time = 10,starttimeout,timertimeout,is_loop = 1;
    var Door = {};
>>>>>>> 9910998c7cdd20a08b5689ab63b7b46c34c32aac
        Door.x = -40;
        Door.z = 40;
        Door.y = 1;
    var canvas = document.getElementById('doorClose');
    var ctx = canvas.getContext("2d");
    canvas.width = 489;
    canvas.height = 650;
    function creategame() {
        this.totalimages = 6;
        this.loadedimages = 0;
        this.failedimages = 0;
        this.downloadimageQueue = [];
        this.gameImages = [];
    }
    var game = new creategame();
    creategame.prototype.downloadimages = function() {
        var _self = this;
        //Images
        for (var i = 0; i < this.downloadimageQueue.length; i++) 
        {
            var path = this.downloadimageQueue[i][1];
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

    creategame.prototype.startgame = function () {
        // console.log('looping')
            ctx.drawImage(game.gameImages[3], 0, 0,980,1300,0,0,490,650);
            ctx.drawImage(game.gameImages[4],0,0,980,1300,Door.x,Door.y,490,650);
            ctx.drawImage(game.gameImages[5],0,0,980,1300,Door.z,Door.y,490,650);
            ctx.drawImage(game.gameImages[2],0,0,980,1300,0,0,490,650);
            ctx.drawImage(game.gameImages[1],0,0,980,1300,0,0,490,650);
            ctx.drawImage(game.gameImages[0],0,0,821,313,200,0,100,50);
            ctx.fillStyle = "#000";
            ctx.font = "24px Helvetica";
            ctx.textAlign = "left";
            ctx.textBaseline = "top";
            ctx.fillText(game_time,240, 10);
            if(Door.x <0){
                Door.x = Door.x -.2;
                Door.z = Door.z +.2;
            }
            if (Door.x >= 0) {
                Door.x =0;
                Door.z=0;
            }
            if(Door.x <-158 && is_loop){
                Door.x = -160;
                Door.z = 155;
                document.removeEventListener("click",game.closethedoor,false);
                is_loop = 0;
                clearTimeout(starttimeout);
                game.startgame();
            }
<<<<<<< HEAD

        };
        var gameLoop = function() {
     
            render();
            update();

            requestAnimationFrame(gameLoop);
        };
        var w = window;
        requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

        gameLoop();

    })();
=======
            if(is_loop){
                starttimeout = setTimeout(game.startgame, 10);
            }
        }
    creategame.prototype.downloadimageque = function(name,path) {
        this.downloadimageQueue.push([name,path]);
    };
    creategame.prototype.closethedoor = function(name,path) {
        Door.x = Door.x+3;
        Door.z = Door.z-3;
        
        if(Door.x>=0){
            Door.x = 0;
            Door.z =0;
            document.removeEventListener("click",game.closethedoor,false);
            is_loop = 0;
            clearTimeout(starttimeout);
            game.startgame();
        }
    };
    creategame.prototype.starttimer = function(name,path) {
        if(game_time == 0){
            document.removeEventListener("click",game.closethedoor,false);
            clearTimeout(starttimeout);
        }
        game_time--;
        timertimeout = setTimeout(game.starttimer, 1000);
    };
    function loadhanler() {
        game.downloadimageque("timer", "css/timer.png");
        game.downloadimageque("button", "css/button.png");
        game.downloadimageque("frame", "css/door-side.png");
        game.downloadimageque("crowd", "css/crowded.png");
        game.downloadimageque("left_door", "css/left_door.png");
        game.downloadimageque("right_door", "css/right_door.png");
        document.addEventListener("click",game.closethedoor,false);
        game.downloadimages();
        game.startgame();
        game.starttimer();

    }
    console.log(game);
    window.addEventListener("load",loadhanler,false);
})();
>>>>>>> 9910998c7cdd20a08b5689ab63b7b46c34c32aac
