$(`.spoiler`).on(`click`, `button`, function(event) {
    console.log(event.target);
    //  Show Span
    $(event.target).prev().delay(200);
    $(event.target).prev().slideDown(400);
    //  Hide button
    $(event.target).delay(1000);
    $(event.target).slideUp(300);
});

$(`.spoiler`).on(`click`, `span`, function(event) {
    $(event.target).delay(1000);
    $(event.target).slideUp();
    $(event.target).next().delay(500);
    $(event.target).next().slideDown();
});

//Create the reveal spoiler button and append to webpage

const $button = (`<button>Reveal Spoiler</button>`);

$(`.spoiler`).append($button);


//Notes: Hide spoiler on page 

$('.spoiler span').hide();

//When button pressed

//$('.spoiler button').on(`click `, function(){
//  
//  $('.spoiler span').delay(200);
//  $('.spoiler span').slideDown(400);
//  $('.spoiler button').delay(1000);
//  $('.spoiler button').slideUp(300);
//
//});
//
//$('.spoiler span').on(`click`,function(){
//
//  $('.spoiler span').delay(1000);
//  $('.spoiler span').slideUp();
//  $('.spoiler button').delay(500);
//  $('.spoiler button').slideDown();
//
//});

//1. Show spoiler Text
//2. Hide button