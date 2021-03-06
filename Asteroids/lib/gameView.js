(function (){
  if (typeof Asteroids === "undefined"){
    window.Asteroids = {};
  }

  var GameView = Asteroids.GameView = function(game, context){
    this.game = game
    this.context = context;
  }

  GameView.prototype.start = function(){
    setInterval(this.takeTurn, 20);
  }

  GameView.prototype.takeTurn = function(){
    this.game.moveObjects();
    this.game.draw(this.context);
  }



})();