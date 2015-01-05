
// var linkAppear = function(id) {
// 	var div = document.getElementById(id)
// 	div.style.display = 'none';
// 	var div2 = document.getElementById(id + '2')
// 	div2.style.display = 'inline';
// 	var h1 = div2.querySelector('h1')
// 	h1.style.display = 'inline';
// };
// var linkDisappear = function(id) {
// 	var div2 = document.getElementById(id + '2')
// 	div2.style.display = 'none';
// 	var h1 = div2.querySelector('h1')
// 	h1.style.display = 'none';
// 	var div = document.getElementById(id)
// 	div.style.display = 'inline';
// };

$(document).ready(function() {


$('.links div').mouseenter(function() {
   $(this).animate({top: "+=20px", left: "-=40px"}, 'slow');
   $(this).find('h1').fadeIn('slow');   
  });
$('.links div').mouseleave(function() {
   $(this).animate({top: "-=20px", left: "+=40px"}, 'slow');
   $(this).find('h1').fadeOut('slow');   
  });


});

