// adding array contains method:
Array.prototype.contains = function ( needle ) {
  for (var i in this) {
    if (this[i] == needle) return true;
  }
  return false;
};

Array.prototype.doesNotContain = function ( needle ) {
  for (var i in this) {
    if (this[i] == needle) return false;
  }
  return true;
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
// fades in each letter of spanned word
var fadeInLetters = function (word) {

  var letters = $(word).children();
  $(word).text('');
  $(word).css('display','block');

  var i = 0;
  var fade = setInterval(function () {
    $(letters[i]).appendTo($(word)).hide().fadeIn(1000);
    i += 1;
    if (i >= letters.length) clearInterval(fade);
  }, 200);
};
// -------------------------------------- //
// returns any number of random colors
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
      if (randomColors.doesNotContain(randomColor)) {
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
    if (usedColors.doesNotContain(color)) {
      colors.push(color);
    }
  });

  while (colors.length < 2) {
    var randomColor = randomColors(1)[0];
    if (colors.doesNotContain(randomColor)) {
      colors.push(randomColor);
    }
  }
  return colors;
};
// return a different color from the parameter
var differentColor = function (unwantedColors) {
  var newColor = '';
  while (newColor === '') {
    var randomColor = randomColors(1);
    if (unwantedColors.doesNotContain(randomColor)) {
      newColor = randomColor;
    }
  }
  return newColor;
};
// -------------------------------------- //
var animateColorRotation = function (object, colorArea, colors, animation) {
  $(object).addClass('ease-in');
  $(object).css(colorArea, differentColor(colors));
  $(object).addClass(animation);
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

  setTimeout(function () {
    fadeInLetters('#projects');
  }, 1000);
};
// -------------------------------------- //
$(function() {

  // on page load:
  loadHeader();

  // on mouseover:
  $('header img').hover(function () {
    var currentColor = $(this).css('border-color');
    animateColorRotation(this, 'border-color', [currentColor], 'flip');
  }, function () {
    $(this).removeClass('flip');
  });

  $('i').hover(function () {
    var currentColor = $(this).css('color');
    animateColorRotation(this, 'color', [currentColor, 'rgb(240, 240, 240)'], 'spin');
  }, function () {
    $(this).removeClass('spin');
  });

  $('#title div').hover(function () {
    var colors = unusedColors( siblingColors(this) );
    setColors([this], colors);
  }, function () {
    $(this).children().each(function () {
      randomizeFont(this);
    });
  });
});
