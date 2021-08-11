// Your code goes here
//   * `mouseover` ok ok
//   * `keydown` ok
//   * `wheel`
//   * `load` ok
//   * `focus`
//   * `resize` ok
//   * `scroll` ok
//   * `select`
//   * `dblclick` ok
//   * `drag / drop`

let zoomAlertMsg = 0

//1-CLICK
document.querySelectorAll('a.nav-link').forEach((e) => {
  e.addEventListener('click', (e) => {
    e.target.classList.toggle('shadedTag')
    const firstLetter = e.target.innerText.charAt(0)
    alert(`From now on you can select me by pressing ${firstLetter}`)
  })
})

//2-MOUSEOVER
document.querySelectorAll('img').forEach((e) => {
  e.addEventListener('mouseover', (e) => {
    e.target.classList.add('zoom')
    if (zoomAlertMsg == 0) {
      alert('Dougle click images to see them in Black & White')
      zoomAlertMsg++
    }
  })
})

//3-MOUSEOUT
document
  .querySelectorAll('img')
  .forEach((e) =>
    e.addEventListener('mouseout', (e) => e.target.classList.remove('zoom'))
  )

//4-DBCLICK
document
  .querySelectorAll('img')
  .forEach((e) =>
    e.addEventListener('dblclick', (e) =>
      e.target.classList.toggle('blackAndWhite')
    )
  )

//5-SCROLL
document.addEventListener('scroll', () => {
  if (window.scrollY % 100 == 0 && window.scrollY != 0) {
    alert(
      `ScrollY is ${window.scrollY} and I'll alert you when you ScrollY is divisible by 100`
    )
  }
})

//6-KEYDOWN
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

//7-LOAD

window.addEventListener('load', (event) => {
  console.log(event)
  let obj = JSON.stringify(event)
  alert(
    `Look at how cool your event for page loading looks like ${obj}`,
    null,
    4
  )
})

//8-resize

const heightOutput = document.querySelector('#height')
const widthOutput = document.querySelector('#width')

function reportWindowSize() {
  heightOutput.textContent = window.innerHeight
  widthOutput.textContent = window.innerWidth
}

window.onresize = reportWindowSize

window.addEventListener('resize', reportWindowSize)

//9 - mouseup

window.addEventListener('mouseup', (event) => {
  if (document.getSelection()) {
    alert(`You've just selected ${document.getSelection().toString()}`)
  } else if (window.getSelection()) {
    alert(`You've just selected ${document.getSelection().toString()}`)
  } else if (document.selection) {
    alert(`You've just selected ${document.getSelection().toString()}`)
  }
})

//10-mousemove

var totalDistance = 0
var lastSeenAt = { x: null, y: null }

document.addEventListener('mousemove', (event) => {
  {
    if (lastSeenAt.x) {
      totalDistance += Math.sqrt(
        Math.pow(lastSeenAt.y - event.clientY, 2) +
          Math.pow(lastSeenAt.x - event.clientX, 2)
      )
      console.log(
        'So far your mouse ran this many pixels:   ' + Math.round(totalDistance)
      )
    }
    lastSeenAt.x = event.clientX
    lastSeenAt.y = event.clientY
  }
})
