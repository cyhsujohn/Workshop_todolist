document.addEventListener('DOMContentLoaded', function(){
  document.querySelector('ul').addEventListener('click', (e) => {
    console.log(e.target)
    console.log(e.currentTarget)
    e.target.classList.toggle('checked')
  })

  document.querySelectorAll('.close').forEach(
    target => target.addEventListener('click', (e) => {
      e.target.parentNode.remove()
    })
  )

  document.querySelector('#addBtn').addEventListener(
    'click', (e) => {
      content = e.target.previousElementSibling.value
      e.target.previousElementSibling.value = ""
      newLi = document.createElement('li')
      newLi.innerHTML = content + '<span class="close">x</span>'
      newLi.firstElementChild.addEventListener('click', (e) => {
        e.target.parentNode.remove()
      })
      document.querySelector('ul').appendChild(newLi)
    }
  )
})