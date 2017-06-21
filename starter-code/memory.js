// //******************************************************************
// // Game Logic
// //******************************************************************
var MemoryGame = function() {
  this.cards = [
  		{ name: "aquaman",         img: "aquaman.jpg" },
  		{ name: "batman",          img: "batman.jpg" },
  		{ name: "captain america", img: "captain-america.jpg" },
  		{ name: "fantastic four",  img: "fantastic-four.jpg" },
  		{ name: "flash",           img: "flash.jpg" },
      { name: "green arrow",     img: "green-arrow.jpg" },
  		{ name: "green lantern",   img: "green-lantern.jpg" },
  		{ name: "ironman",         img: "ironman.jpg" },
  		{ name: "spiderman",       img: "spiderman.jpg" },
  		{ name: "superman",        img: "superman.jpg" },
  		{ name: "the avengers",    img: "the-avengers.jpg" },
  		{ name: "thor",            img: "thor.jpg" },
      { name: "aquaman",         img: "aquaman.jpg" },
  		{ name: "batman",          img: "batman.jpg" },
  		{ name: "captain america", img: "captain-america.jpg" },
      { name: "fantastic four",  img: "fantastic-four.jpg" },
  		{ name: "flash",           img: "flash.jpg" },
  		{ name: "green arrow",     img: "green-arrow.jpg" },
  		{ name: "green lantern",   img: "green-lantern.jpg" },
  		{ name: "ironman",         img: "ironman.jpg" },
  		{ name: "spiderman",       img: "spiderman.jpg" },
  		{ name: "superman",        img: "superman.jpg" },
  		{ name: "the avengers",    img: "the-avengers.jpg" },
  		{ name: "thor",            img: "thor.jpg" },
  	];
    this.selectedCards = [];
    this.pairsClicked = 0;
    this.correctPairs = 0;
};


MemoryGame.prototype._shuffleCards = function() {
  var i = 0;
  var j = 0;
  var temp = null;
  for (i = this.cards.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1));
    temp = this.cards[i];
    this.cards[i] = this.cards[j];
    this.cards[j] = temp;
  }
};


MemoryGame.prototype.selectCard = function(card) {
//select cards
if (this.selectedCards.length === 0) {
  //remove back and show front

}


//increase pairs clicked + manipulate DOM
this.pairsClicked +=1;
//Compare selected cards:
if (this.selectedCards[0].name === this.selectedCards[1].name) {
  this.correctPairs +=1;
};


//Add to array

};


// //******************************************************************
// // HTML/CSS Interactions
// //******************************************************************

var memoryGame;

$(document).ready(function(){
  memoryGame = new MemoryGame();
  var html = '';

  memoryGame.cards.forEach(function(pic, index) {
    var sanitizedName = pic.name.split(' ').join('_');

    html += '<div class= "card" id="card_' + sanitizedName + '">';
    html += '<div class="back"';
    html += '    name="img/' + pic.name + '"';
    html += '    id="'       + pic.img +  '">';
    html += '</div>';
    html += '<div class="front" ';
    html += 'style="background: url(\'img/' + pic.img + '\') no-repeat"';
    html += '    id="'       + pic.img +  '">';
    html += '</div>';
    html += '</div>';
  });

  // Add all the divs to the HTML
  document.getElementById('memory_board').innerHTML = html;


  $(".card").on("click", function() {
    console.log($(this).attr("id"));
    console.log($(this).attr("class"));
    $(this).children().toggleClass("back");
    var cardId = $(this).attr("id");
    if ($(this).hasClass("back")) {
      $(this).removeClass("back");
      $(this).addClass("front");
      $(this).addClass("visible");
    }
    else {
      $(".card").removeClass("front");
      $(".card").removeClass("visible");
      $(".card").addClass("back");
    }
        console.log($(this).attr("class"));
  });


});




// <div class="card" id="card_sanitizedName">
//    <div class="back" name="img/pic.name" id="pic.img">
//    </div>
//    <div class="front" style="background: url(img/pic.img) no-repeat" id="pic.img"
//    </div>
// </div>


//    html += 'width:71px; height:71px; float:left; margin:10px; padding:20px; font-size:64px;';
