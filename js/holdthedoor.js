(function() {
    var game_time = 10,starttimeout,timertimeout,is_loop = 1;
    var Door = {};
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