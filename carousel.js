function carousel(time = 8000){
  
  function previousButton(){
    $slides[i].classList.remove('active');
    $selector[i].classList.remove('active');
   
    i--;

    if(i < 0) i = $slides.length - 1;    
   
    $slides[i].classList.add('active');
    $selector[i].classList.add('active');
 }

 function nextButton(){
   $slides[i].classList.remove('active');
   $selector[i].classList.remove('active');
   
   i++;
   
   if(i === $slides.length) i = 0;
   
   $slides[i].classList.add('active');
   $selector[i].classList.add('active');
 }

 const $slides = document.querySelectorAll('.slider-slide'),
  $prevBtn = document.querySelector('.previous'),
  $nextBtn = document.querySelector('.next'),
  $selector = document.querySelectorAll('.selector');
  
  let nextSlide = setInterval(next, time);
  
  let i = 0;

 document.addEventListener('click', (e)=>{
  
//    Detects if the click was made on a selector. And how it should act if it is the active selector or not.
  if(e.target.matches('.selector')){
   if(e.target.matches('.active')){
    return false;
   }else{
    clearInterval(nextSlide);

    $slides[i].classList.remove('active');
    $selector[i].classList.remove('active');
    
    i = e.target.getAttribute('data-id');
    
    $slides[i].classList.add('active');
    $selector[i].classList.add('active');
    nextSlide = setInterval(next, time);
   }
  }

  if(e.target === $prevBtn || e.target === $nextBtn){
   clearInterval(nextSlide);

   if(e.target === $prevBtn) previousButton();
  
   if(e.target === $nextBtn) nextButton();

   nextSlide = setInterval(next, time);
  }
 })
}

document.addEventListener('DOMContentLoaded', (e)=>{
//   In the case of not entering a value (milliseconds), the slides will change every eight seconds.
 carousel();
})
