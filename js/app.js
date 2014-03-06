define(['tools/bot'],

function(Bot) {
  var App = function(){
  var canvas = document.getElementById("worksheet");
  var canvasB = document.createElement('canvas');
  this.contextAlpha = 0.8;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  canvasB.width = canvas.width;
  canvasB.height = canvas.height;

   this.contextB = canvasB.getContext('2d');

  if (canvas.getContext) {
    this.context = canvas.getContext('2d');
    this.context.fillStyle = "rgb(150,29,28)";
    }

  this.bots = [];


  var testSr = "   _dfadffasfa  ";
  var regEx = /^\W$/;

  console.log("ewrewr£   " + regEx.test(testSr));



    this.setPos = function(event){

     
     console.log("creating  " +   this.bots.length)
     
     for ( var i = 0; i<this.bots.length; i++){
      var bot = this.bots[i];
        console.log ("bot  " + bot)
         bot.setTarget(event.clientX, event.clientY)//.bind(bot);
        }
     },



   this.createBots = function(){
      for ( var i = 0; i< 300; i++){
        var xPos = Math.random()*1000;
        var yPos = Math.random()*800;
        var bot = new Bot(this.context, {x:xPos, y:yPos});
        bot.init();
        bot.beginMovement();
        this.bots.push(bot);
       
   
     console.log("creating  " +   this.bots.length)
  }
   canvas.onclick = this.setPos.bind(this) 
   //console.log("ewwerw" + this.setPos);
     }, 


     this.fadeCanvas = function(){
        //this.context.globalAlpha = 0.2;
    // var lastImage = this.context.getImageData(0,0,canvas.width,canvas.height);
    this.contextB.globalAlpha = 0.7;
      this.contextB.drawImage(canvas,0,0);
       
      //this.contextB.putImageData(lastImage, 0,0 );
    
     // lastImage = this.contextB.getImageData(0,0,canvasB.width,canvasB.height);
      this.context.clearRect ( 0 , 0 , canvas.width , canvas.height );
     
      //this.context.putImageData(lastImage, 0,0 );
       this.context.drawImage(canvasB,0,0);
        this.contextB.clearRect ( 0 , 0 , canvasB.width , canvasB.height );
      requestAnimFrame(this.fadeCanvas.bind(this));
      //console.log("drawimage")
   
     }

 
    this.createBots();
    this.fadeCanvas();
     //console.log("ewwjkjbkbkjrw" + this.setPos);

  
  }


  return App;
});
 
   

requestAnimFrame = (function() {
   return window.requestAnimationFrame ||
     window.webkitRequestAnimationFrame ||
     window.mozRequestAnimationFrame ||
     window.oRequestAnimationFrame ||
     window.msRequestAnimationFrame ||
     function(/* function FrameRequestCallback */ callback, /* DOMElement Element */ element) {
       window.setTimeout(callback, 1000/60);
     };
})();

