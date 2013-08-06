$(function(){
  $('#favorite-color').hover(changeToGreen);
  $('h1')click(changeToGreen);
  $('#my-field').last().keydown(function(event){
    if (event.which === 84) {
      alert("Yup")
    }
  });

})

function changeToGreen(){
  $(this).toggleClass('green');
}

