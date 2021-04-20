document.addEventListener('DOMContentLoaded', function(){
  document.querySelector('ul').addEventListener('click', (e) => {
    console.log(e.target)
    console.log(e.currentTarget)
    e.target.classList.toggle('checked')
  })
})