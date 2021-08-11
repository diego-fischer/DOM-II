// Your code goes here
//   * `mouseover` ok
//   * `keydown`
//   * `wheel`
//   * `load`
//   * `focus`
//   * `resize`
//   * `scroll` ok
//   * `select`
//   * `dblclick` ok
//   * `drag / drop`

console.log('teste')
let zoomAlertMsg = 0

document.querySelectorAll('a.nav-link').forEach((e) => {
  e.addEventListener('click', (e) => {
    e.target.classList.toggle('shadedTag')
    const firstLetter = e.target.innerText.charAt(0)
    alert(`From now on you can select me by pressing ${firstLetter}`)
  })
})

document.querySelectorAll('img').forEach((e) => {
  e.addEventListener('mouseover', (e) => {
    e.target.classList.add('zoom')
    if (zoomAlertMsg == 0) {
      alert('Dougle click images to see them in Black & White')
      zoomAlertMsg++
    }
  })
})

document
  .querySelectorAll('img')
  .forEach((e) =>
    e.addEventListener('mouseout', (e) => e.target.classList.remove('zoom'))
  )

document
  .querySelectorAll('img')
  .forEach((e) =>
    e.addEventListener('dblclick', (e) =>
      e.target.classList.toggle('blackAndWhite')
    )
  )

document.addEventListener('scroll', () => {
  if (window.scrollY % 100 == 0 && window.scrollY != 0) {
    alert(
      `ScrollY is ${window.scrollY} and I'll alert you when you ScrollY is divisible by 100`
    )
  }
})

document.addEventListener('keydown', (e) => {
  let getLetter = e.key
  console.log('KEY PRESSED', getLetter)
  switch (getLetter) {
    case 'h':
      document.querySelectorAll('a.nav-link')[0].classList.toggle('shadedTag')
      break
    case 'a':
      document.querySelectorAll('a.nav-link')[1].classList.toggle('shadedTag')
      break
    case 'b':
      document.querySelectorAll('a.nav-link')[2].classList.toggle('shadedTag')
      break
    case 'c':
      document.querySelectorAll('a.nav-link')[3].classList.toggle('shadedTag')
      break
  }
})
