const navResponsive =()=>{
  let burger = document.querySelector('.burger') ;
   let nav = document.querySelector('.nav_link');
   burger.addEventListener('click', function(){
     nav.classList.toggle('active');  
     burger.classList.toggle('toggle')                                                 
   })
  
}
navResponsive()