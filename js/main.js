var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true,
  pageDots: false
});

var selected, curr;
$('nav a').click(function(){
  // get the current selected tab
  curr = $(this).attr('data-nav');
  // fake a toggle behavior
  if(curr==selected){
    // clear selected
    selected = '';
    $('nav').find('a').removeClass();
    $('li').removeClass('remove');
    setTimeout(returnItems,100);
  } else {
    // tag this one as the current option
    selected = curr;
    $('nav').find('a').removeClass();
    // hide everything
    $('li').addClass('hide');
    setTimeout(removeItems,300);
    // show selected
    $('.'+curr).removeClass('hide');
    $(this).addClass('curr');
  }
})

if(document.body.classList.contains('login-guest')){
  const form = document.querySelector('form');
   form.addEventListener('submit',function(e){
    e.preventDefault();
    location.href ='page-main.html';
   })
}

function removeItems(){
  $('li').addClass('remove');
  $('.'+curr).removeClass('remove');
}

function returnItems(){
  $('li').removeClass('hide');
}

const form = document.querySelector('form');

form.addEventListener('submit',function(e){
  e.preventDefault();
  alert('Form submitted. Thanks, ' + firstname.value + ' ' + lastname.value);
})

var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  cellAlign: 'left',
  contain: true,
  pageDots: false
});

