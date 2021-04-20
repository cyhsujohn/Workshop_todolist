document.addEventListener('DOMContentLoaded', function(){
  document.querySelector('ul').addEventListener('click', (e) => {
    console.log(e.target)
    console.log(e.currentTarget)
    e.target.classList.toggle('checked')
  })

  document.querySelectorAll('.close').forEach(target => target.addEventListener('click', (e) => {
    // console.log(e.target)
    e.target.parentNode.remove()
  })
  )
})