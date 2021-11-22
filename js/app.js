window.addEventListener('load', function(){
    var result = document.querySelector('.section b');
    var product = document.querySelectorAll('.main .box');
   for(var i = 0; i < product.length; i++){
    product[i].addEventListener('click', function () {
       this.classList.toggle('active')
       result.innerHTML = count()
    })
   }
//    let res = document.querySelector('.section b').value;
   let btn =document.querySelector('footer button');
   let page = document.querySelector('footer p');
   btn.addEventListener('click', start= ()=> {
      
      if(result.innerHTML = count()){
        page.innerHTML = 'you buy products'
        setTimeout(function () {
            confetti.start()
        },1000)
      }else{
          page.innerHTML = 'you dont buy anything'
      }
      
   })
   const stop=()=>{
       setTimeout(function () {
           confetti.stop()
       },15000)
   }
   stop()
   function count() {
       let sum =0;
       for(let i =0; i < product.length; i++ ){
        if(product[i].classList.contains('active')){
            sum = sum + parseInt(product[i].getAttribute('data-price'))
        }
       }
       return sum
   }
})