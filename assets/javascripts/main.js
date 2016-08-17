$('.main').mouseover(function(e) {
  console.log('hi');
  if (e.target.hasClass('no-sub')) {
    $('.showing').hide();
  } else {
    $('.showing').show();
  }
});
