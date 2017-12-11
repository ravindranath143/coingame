(function() {
        var canvas = document.getElementById('doorClose');
        var ctx = canvas.getContext("2d");
        canvas.width = 489;
        canvas.height = 650;

        var myTimeout;
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
        Door.x = -40;
        Door.z = 40;
        	Door.y = 1;
        document.addEventListener("click",clickHandler,false);
       	function clickHandler (){
       		Door.x = Door.x+3;
       		Door.z = Door.z-3;
            
            if(Door.x>=0){
                console.log("closed",Door.x);
                Door.x = 0;
                Door.z =0;
            }

       	}
        var render = function() {
            // console.log("render");
            if (doorbackimage) {
                // console.log("image");
                ctx.drawImage(backimage, 0, 0,980,1300,0,0,490,650);

            }
            if(doorReady){
            	ctx.drawImage(doorimage1,0,0,980,1300,Door.x,Door.y,490,650);
            
            }
            if (doorReady1) {
                ctx.drawImage(doorimage2,0,0,980,1300,Door.z,Door.y,490,650);
            }
            if(frontimage){
                ctx.drawImage(front,0,0,980,1300,0,0,490,650);
            }
            if(buttonImage){
                ctx.drawImage(button,0,0,980,1300,0,0,490,650);
            }
            if(timerImage){
                ctx.drawImage(timer,0,0,821,313,200,0,100,50);
            }
            
        };
        var update = function() {
        	
        	if(Door.x <0){
        		Door.x = Door.x -.2;
                Door.z = Door.z +.2;
            
        	}
            if (Door.x >= 0) {
                Door.x =0;
                Door.y=0;
            }
            if(Door.x <-158){
                console.log("log" );
                Door.x = -160;
                Door.z = 155;
            }
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