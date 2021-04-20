document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('.close').forEach(target => target.addEventListener('click', (e) => {
    // console.log(e.target)
    e.target.parentNode.remove()
  })
  )
})