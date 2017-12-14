(function() {
    var startscreen,
        gamescreen,
        winscreen,
        losescreen,
        playbutton,
        game_time = 60,
        starttimeout,
        timertimeout,
        is_loop = 1,
        decTimer = 30,
        barwidth = 10,
        bartimecout,
        gamescreen,
        timer_count,
        initial_score = 0;
        var countDownDate = 120000;
var x = setInterval(function() {
    countDownDate = countDownDate - 1000;
    var minutes = Math.floor((countDownDate % (1000 *60 * 60)) / (1000 * 60));
    var seconds = Math.floor((countDownDate % (1000 * 60)) / 1000);
    timer_count = minutes + " : " + seconds;

    if (countDownDate <= 0) {
        game.stopgame();
        clearInterval(x);
        setTimeout(game.losescreen, 300);
       
    }
}, 1000);
var decIntervel = setInterval(function(){
        decTimer = decTimer -3;
        if(decTimer <=0){
            decTimer = 5;
        }

},1000);
    var Door = {};
    var canvas = document.getElementById('doorClose');
    var ctx = canvas.getContext("2d");
    canvas.width = 489;
    canvas.height = 650;
    // game Object
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
        for (var i = 0; i < this.downloadimageQueue.length; i++) {
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
    creategame.prototype.starscreen = function() {
        loadingscreen.style.display = 'none';
        startscreen.style.display = 'block';
        gamescreen.style.display = 'none';
        winscreen.style.display = 'none';
        losescreen.style.display = 'none';
    }
    creategame.prototype.loopthegame = function() {
        ctx.drawImage(game.gameImages[3], 0, 0, 980, 1300, 0, 0, 490, 650);
        ctx.drawImage(game.gameImages[4], 0, 0, 980, 1300, Door.x, Door.y, 490, 650);
        ctx.drawImage(game.gameImages[5], 0, 0, 980, 1300, Door.z, Door.y, 490, 650);
        ctx.drawImage(game.gameImages[2], 0, 0, 980, 1300, 0, 0, 490, 650);
        ctx.drawImage(game.gameImages[1], 0, 0, 980, 1300, 0, 0, 490, 650);
        ctx.drawImage(game.gameImages[0], 0, 0, 360, 73, 200, 0, 120, 50);
        ctx.fillStyle = "#000";
        ctx.font = "24px Helvetica";
        ctx.textAlign = "left";
        ctx.textBaseline = "top";
        ctx.fillText(timer_count, 230, 10);
        if (Door.x < 0) {
            Door.x = Door.x - .2;
            Door.z = Door.z + .2;
        }
        if (Door.x >= 0) {
            Door.x = 0;
            Door.z = 0;
        }
        if (Door.x < -158 && is_loop) {
            Door.x = -160;
            Door.z = 160;
            game.stopgame();
            document.getElementById("lose_score").innerHTML = initial_score;
            setTimeout(game.losescreen, 300);
        }
        if (is_loop) {
            console.log(decTimer);
            starttimeout = setTimeout(game.loopthegame, decTimer);
        }
    }
    creategame.prototype.stopgame = function() {
        //send ajax here
        document.removeEventListener("click", game.closethedoor, false);
        is_loop = 0;
        clearTimeout(starttimeout);
        clearTimeout(timertimeout);
        game.loopthegame();
    }

    creategame.prototype.startgame = function() {
        startscreen.style.display = 'none';
        gamescreen.style.display = 'block';
        winscreen.style.display = 'none';
        losescreen.style.display = 'none';
        Door.x = -80;
        Door.z = 80;
        Door.y = 1;
        decTimer = 30,
        countDownDate = 120000;
        is_loop = 1;
        document.addEventListener("click", game.closethedoor, false);
        game.loopthegame();
        game.starttimer();
    }
    creategame.prototype.winscreen = function() {
        startscreen.style.display = 'none';
        gamescreen.style.display = 'none';
        winscreen.style.display = 'block';
        losescreen.style.display = 'none';
    }

    creategame.prototype.losescreen = function() {
        startscreen.style.display = 'none';
        gamescreen.style.display = 'none';
        winscreen.style.display = 'none';
        losescreen.style.display = 'block';
    }
    creategame.prototype.downloadimageque = function(name, path) {
        this.downloadimageQueue.push([name, path]);
    };
    creategame.prototype.closethedoor = function(name, path) {
        Door.x = Door.x + 3;
        Door.z = Door.z - 3;
        if (Door.x >= 0) {
            Door.x = 0;
            Door.z = 0;
            game.stopgame();
            initial_score = ((game_time/60)*100).toFixed();
            document.getElementById("win_score").innerHTML = initial_score;
            console.log(initial_score);
            setTimeout(game.winscreen, 300);
        }
    };
    creategame.prototype.starttimer = function(name, path) {
        if (game_time == 0) {
            game.stopgame();
            document.getElementById("lose_score").innerHTML = initial_score;
            setTimeout(game.losescreen, 300);
        }
        game_time--;
        timertimeout = setTimeout(game.starttimer, 1000);
    };
    creategame.prototype.startafterdownload = function(name,path) {
        if (barwidth >= 100) {
            for (var i = 0; i < playbutton.length; i++) {
                playbutton[i].addEventListener("click",game.startgame,false);
            }
            clearTimeout(bartimecout);
            game.starscreen();
        } else {
            barwidth = ((game.loadedimages + game.failedimages)/6).toFixed() * 100; 
            progressbar.style.width = barwidth + '%'; 
            progressbar.innerHTML = barwidth * 1  + '%';
            bartimecout = setTimeout(game.startafterdownload, 30);
        }
    };
    function loadhanler() {
        loadingscreen = document.getElementById('loading_screen');
        progressbar = document.getElementById("Progressbar");
        startscreen = document.getElementById('start_screen');
        gamescreen = document.getElementById("catchwer");
        winscreen = document.getElementById('win_screen');
        losescreen = document.getElementById('lose_screen');
        playbutton = document.getElementsByClassName('play');
        gamescreen.style.display = 'none';
        game.downloadimageque("timer", "img/timer.jpg");
        game.downloadimageque("button", "img/button.png");
        game.downloadimageque("frame", "img/door-side.png");
        game.downloadimageque("crowd", "img/crowded.png");
        game.downloadimageque("left_door", "img/left_door.png");
        game.downloadimageque("right_door", "img/right_door.png");
        game.downloadimages();
        game.startafterdownload();
    }
    var social = {
        twitter: "https://twitter.com/intent/tweet?text=myntra.com",
        facebook: "https://www.facebook.com/sharer/sharer.php?u=myntra.com"
    };
    var fbbutton = document.getElementById("facebook");
    var twitterbutton = document.getElementById("twitter");
    fbbutton.addEventListener("click",function () {
        window.open(social.facebook, '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes');
    },false);
    twitterbutton.addEventListener("click",function () {
        window.open(social.twitter, '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes');
    },false);
    console.log(social);
    console.log(game);
    window.addEventListener("load", loadhanler, false);
})();