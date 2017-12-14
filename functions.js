
// Robin
window.addEventListener('load', init);
  function init () {
  console.log("Dude wtf");
  }
  
$(".open-overlay").click(function() {
  var overlay_navigation = $(".overlay-navigation"),
    nav_item_1 = $("nav li:nth-of-type(1)"),
    nav_item_2 = $("nav li:nth-of-type(2)"),
    nav_item_3 = $("nav li:nth-of-type(3)"),
    nav_item_4 = $("nav li:nth-of-type(4)"),
    nav_item_5 = $("nav li:nth-of-type(5)"),
    top_bar = $(".bar-top"),
    middle_bar = $(".bar-middle"),
    bottom_bar = $(".bar-bottom");
 
  overlay_navigation.toggleClass("overlay-active");
  if (overlay_navigation.hasClass("overlay-active")) {
    top_bar.removeClass("animate-out-top-bar").addClass("animate-top-bar");
    middle_bar
      .removeClass("animate-out-middle-bar")
      .addClass("animate-middle-bar");
    bottom_bar
      .removeClass("animate-out-bottom-bar")
      .addClass("animate-bottom-bar");
    overlay_navigation
      .removeClass("overlay-slide-up")
      .addClass("overlay-slide-down");
    nav_item_1
      .removeClass("slide-in-nav-item-reverse")
      .addClass("slide-in-nav-item");
    nav_item_2
      .removeClass("slide-in-nav-item-delay-1-reverse")
      .addClass("slide-in-nav-item-delay-1");
    nav_item_3
      .removeClass("slide-in-nav-item-delay-2-reverse")
      .addClass("slide-in-nav-item-delay-2");
    nav_item_4
      .removeClass("slide-in-nav-item-delay-3-reverse")
      .addClass("slide-in-nav-item-delay-3");
    nav_item_5
      .removeClass("slide-in-nav-item-delay-4-reverse")
      .addClass("slide-in-nav-item-delay-4");
  } else {
    top_bar.removeClass("animate-top-bar").addClass("animate-out-top-bar");
    middle_bar
      .removeClass("animate-middle-bar")
      .addClass("animate-out-middle-bar");
    bottom_bar
      .removeClass("animate-bottom-bar")
      .addClass("animate-out-bottom-bar");
    overlay_navigation
      .removeClass("overlay-slide-down")
      .addClass("overlay-slide-up");
    nav_item_1
      .removeClass("slide-in-nav-item")
      .addClass("slide-in-nav-item-reverse");
    nav_item_2
      .removeClass("slide-in-nav-item-delay-1")
      .addClass("slide-in-nav-item-delay-1-reverse");
    nav_item_3
      .removeClass("slide-in-nav-item-delay-2")
      .addClass("slide-in-nav-item-delay-2-reverse");
    nav_item_4
      .removeClass("slide-in-nav-item-delay-3")
      .addClass("slide-in-nav-item-delay-3-reverse");
    nav_item_5
      .removeClass("slide-in-nav-item-delay-4")
      .addClass("slide-in-nav-item-delay-4-reverse");
  }
});

// Machteld
/* 
 * This is the file with all the functions that are used to create the board
 * Created by: HD Dalhuisen 
 * Created on: 28-11-2017
 */

var desWest, desNorth, desEast, desSouth;

function drawBoard() {    
    boardDestinations();
    boardCitiesMonuments();
}

function boardDestinations(){
    var boardDestinations = [destination_0, destination_1, destination_2, destination_3,
        destination_4, destination_5, destination_6, destination_7];
    
    boardDestinations = shuffle(boardDestinations);
    
    desWest = boardDestinations[0];
    document.writeln(drawDestination(desWest, "west"));
    desNorth = boardDestinations[1];
    document.writeln(drawDestination(desNorth, "north"));
    desEast = boardDestinations[2];
    document.writeln(drawDestination(desEast, "east"));
    desSouth = boardDestinations[3];
    document.writeln(drawDestination(desSouth, "south"));
}

function drawDestination(destination, id) {
    var image = "<div class='" + id +"'>";
    image += "<img src='images/Destination Cards/" + destination.name + ".jpg' id='destination'>";
    image += "</div>";
    return image;
}

function boardCitiesMonuments() {
    var boardCards = [citycard_0, citycard_1, citycard_2, citycard_3, 
        citycard_4, citycard_5, citycard_6, citycard_7, citycard_8, citycard_9, citycard_10, citycard_11, 
        monument_0, monument_1, monument_2, monument_3, monument_4, monument_5, monument_6, monument_7,
        monument_8, monument_9, monument_10, monument_11];
    
    boardCards = shuffle(boardCards);
    
    count = 0;
    document.writeln("<div class='cards'>");
    for (var card in boardCards) {
        var line = "";
        if([0,5,10,15,20].includes(count)) {
            line += "<div class='row' id=row" + count +">";
        }
        if(boardCards[card].identifier < 12) {
            line += drawCityCard(boardCards[card], count);
        } else {
            line += drawMonumentCard(boardCards[card], count);
        }
        if([4,9,14,19,24].includes(count)) {
            line += "</div>";
        }
        document.writeln(line);
        count++;
    }
    document.writeln ("</div>");
}

function drawCityCard (card, nr){
    var image = "<img src='images/City cards/" + card.name + ".jpg' alt='Mountain View' class='card'>";
    return image;
}

function drawMonumentCard (card, nr) {
    var image = "<img src='images/Monument Cards/tablecards/" + card.name + ".jpg' alt='Mountain View' class='card'>";
    return image;
}

// Shuffle deck
function shuffle(deck) {
    var j, x, i;
    for (i = deck.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = deck[i];
        deck[i] = deck[j];
        deck[j] = x;
    }
    return deck;
}

