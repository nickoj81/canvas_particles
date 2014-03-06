define([],

function() {
 
 var  Bot = function(context, initPos, drawmethod) {
  this.context = context;
  this.initPos = initPos;
  this.drawmethod = drawmethod;
  this.bounds = { top:0, right:800, bottom:600, left:0};
   this.fillstyles = ["#03899C", "#133AAC", "#FFAE00" ,"#FF7A00"]
   this.fillStyle =  this.fillstyles[Math.round(Math.random()*4)];


  var dist = 0;
 
  this.init = function(){
     
    this.xPos = this.initPos.x;
    this.yPos = this.initPos.y;
    this.lastXPos = 0;
    this.lastYPos = 0;
    this.accel = 1.2;
    this.xSpeed =0;
    this.ySpeed=0;
    this.targetX = 600;
    this.targetY = 400;
    this.xMov = 0;
    this.yMov = 0;

    


  },


  this.setTarget = function(x, y){
    this.targetX = x;
    this.targetY = y;
     this.xMov = 0;
    this.yMov = 0;
     this.xSpeed =0;
    this.ySpeed=0;
    //this.xPos = this.targetX + Math.random()*50;
   // this.yPos = this.targetY + Math.random()*50;
    console.log( this.targetX)


  },

  this.beginMovement = function(){
    requestAnimFrame(this.beginMovement.bind(this))//  setInterval(, 50);
    this.render();
    this.move();

  },

  this.getDirection = function(){
    var dir = {};

    var xDir = Math.random()*10;
    var yDir = Math.random()*10;

    if(xDir<2){
      xDir*=-1;
    }

    if(yDir<2){
      yDir*=-1;
    }

    dir.x = xDir;
    dir.y = yDir;

    return dir;
  },

  this.render=function(){

    var dir = this.getDirection();
    var size = Math.random()*100;
    this.context.beginPath();
    //console.log(this.xPos + "    3423423    " + this.yPos);
   this.context.moveTo( this.lastXPos, this.lastYPos); 
    this.context.lineTo(this.xPos, this.yPos);

    //this.xPos += dir.x;
    //this.yPos += dir.y;
   this.context.strokeStyle =  this.fillStyle;
    this.context.fillStyle =  this.fillStyle;
    this.context.lineWidth = 0.3+(dist/120);
   // this.context.globalAlpha1 - (dist/5);
  //  this.context.fillRect(this.xPos, this.yPos, 5, 5);

    //console.log( this.lastXPos + "   "  + this.lastYPos + "   " + this.xPos + "   " +  this.yPos) 
    this.context.stroke();
     //this.context.strokeText("Nick", this.xPos,this.yPos);
    this.context.closePath();  


    this.lastXPos = this.xPos;
    this.lastYPos = this.yPos;



    
    //console.log("hello world" + this.canvas);

  },

  this.move = function(){
  
    var xDiff = this.targetX- this.xPos;
    var yDiff = this.targetY- this.yPos;

    dist = Math.sqrt((xDiff*xDiff)+(yDiff*yDiff));
   
    var angle = Math.atan2(yDiff, xDiff);
  
    this.xSpeed = this.accel*Math.cos(angle);
    this.ySpeed = this.accel*Math.sin(angle);

    this.xMov += this.xSpeed;
    this.yMov += this.ySpeed;
   // this.yMov +=0.7;

    this.xPos += this.xMov
    this.yPos += 50*(Math.sin(this.yMov));

  }



  this.drawCircle = function() {

     


  }

}

return Bot;
  });
 
   
