function carousel(TIME = 8000){
  
  function prev(){
    $slides[i].classList.remove('active');
    $selector[i].classList.remove('active');
   
    i--;

    if(i < 0) i = $slides.length - 1;    
   
    $slides[i].classList.add('active');
    $selector[i].classList.add('active');
 }

 function next(){
   $slides[i].classList.remove('active');
   $selector[i].classList.remove('active');
   
   i++;
   
   if(i >= $slides.length) i = 0;
   
   $slides[i].classList.add('active');
   $selector[i].classList.add('active');
 }

 const $slides = document.querySelectorAll('.slider-slide'),
  $prevBtn = document.querySelector('.previous'),
  $nextBtn = document.querySelector('.next'),
  $selector = document.querySelectorAll('.selector');
  
  let nextSlide = setInterval(next, TIME);
  
  let i = 0;

 document.addEventListener('click', (e)=>{
  
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
    nextSlide = setInterval(next, TIME);
   }
  }

  if(e.target === $prevBtn || e.target === $nextBtn){
   clearInterval(nextSlide);

   if(e.target === $prevBtn) prev();
  
   if(e.target === $nextBtn) next();

   nextSlide = setInterval(next, TIME);
  }
 })
}

document.addEventListener('DOMContentLoaded', (e)=>{
 carousel();
})
