var randomizeFont = function (word) {

  var fonts = ['Raleway',
               'Lora',
               'Georgia',
               'Times New Roman',
               'Arial'];

  var letters = $(word).text().split('');

  setTimeout(function () {
    $(word).text('');

    $.each(letters, function (i, letter) {
      var randomFont = fonts[Math.floor(Math.random() * fonts.length)];
      $(word).append('<span style="font-family: ' + randomFont + '">' + letter + '</span>');
    });
  }, 500);
};

var randomizeColor = function (object) {

  var colors = ['rgba(255, 145, 140, 0.93)',
                'rgba(255, 102, 211, 1)',
                'rgba(109, 104, 255, 0.93)',
                'rgba(155, 250, 155, 1)',
                'rgb(255, 249, 247)'];

  var randomColor = colors[Math.floor(Math.random() * colors.length)];
  $(object).css('background-color', randomColor);
  $(object).css('border-color', randomColor);
};

var rotateImage = function (image) {
  
}

$(function() {

  $('h1').each(function () {
    randomizeFont(this);
    randomizeColor(this);
  });
  randomizeColor('header img');

  $('h1').on('mouseenter', function () {
    randomizeFont(this);
    randomizeColor(this);
  });

  $('header img').on('mouseenter', function () {

  });
});
