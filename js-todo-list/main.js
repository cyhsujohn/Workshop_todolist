document.addEventListener('DOMContentLoaded', function(){
  document.querySelector('ul').addEventListener('click', (e) => {
    console.log(e.target)
    console.log(e.currentTarget)
    document.querySelector('.checked').classList.remove('checked')
    e.target.classList.add('checked')
  })
})