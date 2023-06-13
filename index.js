let saved = document.querySelector('.saved')
let econtent = document.querySelector('.econtent')
let button = document.querySelector('#btn')

econtent.addEventListener('click', function(){
    saved.style.display = 'block'
   
})
button.addEventListener('click', function(){
    saved.style.display = 'none'
})
window.addEventListener('click', function(e){
    if(e.target === econtent){
        saved.style.display = 'none'
    }
})
