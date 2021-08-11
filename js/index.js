// Your code goes here
//   * `mouseover`
//   * `keydown`
//   * `wheel`
//   * `load`
//   * `focus`
//   * `resize`
//   * `scroll`
//   * `select`
//   * `dblclick`
//   * `drag / drop`

console.log('teste')

const aTags = document.querySelectorAll('a.nav-link')

aTags.forEach((e) => {
  e.addEventListener('click', (e) => {
    console.log('CURRENT TARGET', e.target)
    e.target.classList.add('shadedTag')
  })
})
