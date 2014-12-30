// adding array contains method:
Array.prototype.contains = function ( needle ) {
  for (var i in this) {
    if (this[i] == needle) return true;
  }
  return false;
};
// -------------------------------------- //
// returns a random font
var randomFont = function () {

  var fonts = ['Raleway',
               'Lora',
               'Georgia',
               'Times New Roman',
               'Arial'];

  return fonts[Math.floor(Math.random() * fonts.length)];
};
// changes each letter of a word to a different font
var randomizeFont = function (word) {

  var letters = $(word).text().split('');
  var newWord = '';

  $.each(letters, function (i, letter) {
    newWord += '<span style="font-family: ' + randomFont() + '">' + letter + '</span>';
  });
  $(word).html(newWord);
};
// -------------------------------------- //
// returns any number of random colors based on the parameter
var randomColors = function (numOfColors) {

  var colors = ['rgb(240, 240, 240)',
                'rgb(53, 103, 135)',
                'rgb(144, 139, 95)',
                'rgb(23, 45, 59)'];
  var randomColors = [];

  if (numOfColors >= colors.length || numOfColors === 'all') {
    return colors;
  } else {
    while (randomColors.length < numOfColors) {
      var randomColor = colors[Math.floor(Math.random() * colors.length)];
      if (randomColors.contains(randomColor)) {
      } else {
        randomColors.push(randomColor);
      }
    }
    return randomColors;
  }
};
// sets colors for an object
var setColor = function (object, color1, color2) {

  var $h1 = $(object).children();
  $h1.css('background-color', color1);
  $h1.css('border-color', color1);
  $h1.css('color', color2);
};
// changes colors of an object's or objects' children
var setColors = function (objects, colors) {

  $.each(objects, function (i, object) {
    var j = i-1;
    if (j < 0) {
      j = colors.length-1;
    }
    setColor(object, colors[i], colors[j]);
  });
};
// returns background colors of an object's siblings and its own
var siblingColors = function (object) {

  var colors = [];

  var $siblings = $(object).siblings().children();
  $.each($siblings, function (i, sibling) {
    colors.push( $(sibling).css('background-color') );
  });

  var currentColor = $(object).children().css('background-color');
  colors.push(currentColor);
  return colors;
};
// returns unused colors from parameter
var unusedColors = function (usedColors) {

  var colors = [];
  $.each(randomColors('all'), function (i, color) {
    if (usedColors.contains(color)) {
    } else {
      colors.push(color);
    }
  });

  while (colors.length < 2) {
    var randomColor = randomColors(1)[0];
    if (colors.contains(randomColor)) {
    } else {
      colors.push(randomColor);
    }
  }
  return colors;
};
// return a different color from the parameter
var differentColor = function (color) {
  var newColor = '';
  while (newColor === '') {
    var randomColor = randomColors(1);
    if (color != randomColor) {
      newColor = randomColor;
    }
  }
  return newColor;
};
// -------------------------------------- //
var loadHeader = function () {
  // selects 3 random but unique colors for title divs and matching fonts
  var $title = $('#title div');
  var colors = randomColors($title.length);
  setColors($title, colors);
  // randomizes each letter of each word
  $('h1').each(function () {
    randomizeFont(this);
  });
  // matches image border to title div of my name
  var nameColor = $('#name').css('background-color');
  $('header img').css('border-color', nameColor);
};
// -------------------------------------- //
$(function() {

  // on page load:
  loadHeader();

  // on mouseover:
  $('header img').hover(function(){
    $(this).addClass('ease-in');
    var currentColor = $(this).css('border-color');
    $(this).css('border-color', differentColor(currentColor));
    $(this).addClass('flip');
  },function(){
    $(this).removeClass('flip');
  });

  $('#title div').on('mouseenter', function () {
    var colors = unusedColors( siblingColors(this) );
    setColors([this], colors);
  });

  $('#title div').on('mouseleave', function () {
    $(this).children().each(function () {
      randomizeFont(this);
    });
  });
});
