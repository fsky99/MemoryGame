let icon1 = document.getElementById('icon1')
let icon2 = document.getElementById('icon2')
let icon3 = document.getElementById('icon3')
let icon4 = document.getElementById('icon4')
let icon5 = document.getElementById('icon5')
let icon6 = document.getElementById('icon6')
let icon8 = document.getElementById('icon8')
let icon10 = document.getElementById('icon10')

let icon1Match = document.getElementById('icon1Match')
let icon2Match = document.getElementById('icon2Match')
let icon3Match = document.getElementById('icon3Match')
let icon4Match = document.getElementById('icon4Match')
let icon5Match = document.getElementById('icon5Match')
let icon6Match = document.getElementById('icon6Match')
let icon8Match = document.getElementById('icon8Match')
let icon10Match = document.getElementById('icon10Match')

let icon1IMG = document.getElementById('icon1IMG')
let icon2IMG = document.getElementById('icon2IMG')
let icon3IMG = document.getElementById('icon3IMG')
let icon4IMG = document.getElementById('icon4IMG')
let icon5IMG = document.getElementById('icon5IMG')
let icon6IMG = document.getElementById('icon6IMG')
let icon8IMG = document.getElementById('icon8IMG')
let icon10IMG = document.getElementById('icon10IMG')

let icon1MatchIMG = document.getElementById('icon1MatchIMG')
let icon2MatchIMG = document.getElementById('icon2MatchIMG')
let icon3MatchIMG = document.getElementById('icon3MatchIMG')
let icon4MatchIMG = document.getElementById('icon4MatchIMG')
let icon5MatchIMG = document.getElementById('icon5MatchIMG')
let icon6MatchIMG = document.getElementById('icon6MatchIMG')
let icon8MatchIMG = document.getElementById('icon8MatchIMG')
let icon10MatchIMG = document.getElementById('icon10MatchIMG')

icon1.addEventListener('click', () => {
  icon1IMG.innerHTML = '<img src="../Icons/icon1.png">'
  let icon1Interval = 0
  console.log(icon1Interval)

  icon1Interval = setInterval(() => {
    icon1IMG.innerHTML = ''
    clearInterval(icon1Interval)
  }, 2000)
  if (icon1MatchIMG.innerHTML == '<img src="../Icons/icon1.png">') {
    icon1IMG.innerHTML = '<img src="../Icons/icon1.png">'
    clearInterval(icon1Interval)
  }
  console.log('icon one interval: ' + icon1Interval)
})
icon2.addEventListener('click', () => {
  icon2IMG.innerHTML = '<img src="../Icons/icon2.png">'
  let icon2Interval = 0
  console.log(icon2Interval)

  icon2Interval = setInterval(() => {
    icon2IMG.innerHTML = ''
    clearInterval(icon2Interval)
  }, 2000)
  if (icon2MatchIMG.innerHTML == '<img src="../Icons/icon2.png">') {
    icon2IMG.innerHTML = '<img src="../Icons/icon2.png">'
    clearInterval(icon2Interval)
  }
  console.log('icon 2 interval: ' + icon2Interval)
})
icon3.addEventListener('click', () => {
  icon3IMG.innerHTML = '<img src="../Icons/icon3.png">'
  let icon3Interval = 0

  icon3Interval = setInterval(() => {
    icon3IMG.innerHTML = ''
    clearInterval(icon3Interval)
  }, 2000)
  if (icon3MatchIMG.innerHTML == '<img src="../Icons/icon3.png">') {
    icon3IMG.innerHTML = '<img src="../Icons/icon3.png">'
    clearInterval(icon3Interval)
  }
})
icon4.addEventListener('click', () => {
  icon4IMG.innerHTML = '<img src="../Icons/icon4.png">'
  let icon4Interval = 0

  icon4Interval = setInterval(() => {
    icon4IMG.innerHTML = ''
    clearInterval(icon4Interval)
  }, 2000)
  if (icon4MatchIMG.innerHTML == '<img src="../Icons/icon4.png">') {
    icon4IMG.innerHTML = '<img src="../Icons/icon4.png">'
    clearInterval(icon4Interval)
  }
})
icon5.addEventListener('click', () => {
  icon5IMG.innerHTML = '<img src="../Icons/icon5.png">'
  let icon5Interval = 0

  icon5Interval = setInterval(() => {
    icon5IMG.innerHTML = ''
    clearInterval(icon5Interval)
  }, 2000)
  if (icon5MatchIMG.innerHTML == '<img src="../Icons/icon5.png">') {
    icon5IMG.innerHTML = '<img src="../Icons/icon5.png">'
    clearInterval(icon5Interval)
  }
})
icon6.addEventListener('click', () => {
  icon6IMG.innerHTML = '<img src="../Icons/icon6.png">'
  let icon6Interval = 0

  icon6Interval = setInterval(() => {
    icon6IMG.innerHTML = ''
    clearInterval(icon6Interval)
  }, 2000)
  if (icon6MatchIMG.innerHTML == '<img src="../Icons/icon6.png">') {
    icon6IMG.innerHTML = '<img src="../Icons/icon6.png">'
    clearInterval(icon6Interval)
  }
})
icon8.addEventListener('click', () => {
  icon8IMG.innerHTML = '<img src="../Icons/icon8.png">'
  let icon8Interval = 0

  icon8Interval = setInterval(() => {
    icon8IMG.innerHTML = ''
    clearInterval(icon8Interval)
  }, 2000)
  if (icon8MatchIMG.innerHTML == '<img src="../Icons/icon8.png">') {
    icon8IMG.innerHTML = '<img src="../Icons/icon8.png">'
    clearInterval(icon8Interval)
  }
})
icon10.addEventListener('click', () => {
  icon10IMG.innerHTML = '<img src="../Icons/icon10.png">'
  let icon10Interval = 0

  icon10Interval = setInterval(() => {
    icon10IMG.innerHTML = ''
    clearInterval(icon10Interval)
  }, 2000)
  if (icon10MatchIMG.innerHTML == '<img src="../Icons/icon10.png">') {
    icon10IMG.innerHTML = '<img src="../Icons/icon10.png">'
    clearInterval(icon10Interval)
  }
})

icon1Match.addEventListener('click', () => {
  icon1MatchIMG.innerHTML = '<img src="../Icons/icon1.png">'
  let icon1MtachInterval = 0

  icon1MtachInterval = setInterval(() => {
    icon1MatchIMG.innerHTML = ''
    clearInterval(icon1MtachInterval)
  }, 2000)
  if (icon1IMG.innerHTML == '<img src="../Icons/icon1.png">') {
    icon1MatchIMG.innerHTML = '<img src="../Icons/icon1.png">'
    clearInterval(icon1MtachInterval)
  }
})
icon2Match.addEventListener('click', () => {
  icon2MatchIMG.innerHTML = '<img src="../Icons/icon2.png">'
  let icon2MtachInterval = 0
  icon2MtachInterval = setInterval(() => {
    icon2MatchIMG.innerHTML = ''
    clearInterval(icon2MtachInterval)
  }, 2000)
  if (icon2IMG.innerHTML == '<img src="../Icons/icon2.png">') {
    icon2MatchIMG.innerHTML = '<img src="../Icons/icon2.png">'
    clearInterval(icon2MtachInterval)
  }
})
icon3Match.addEventListener('click', () => {
  icon3MatchIMG.innerHTML = '<img src="../Icons/icon3.png">'
  let icon3MtachInterval = 0

  icon3MtachInterval = setInterval(() => {
    icon3MatchIMG.innerHTML = ''
    clearInterval(icon3MtachInterval)
  }, 2000)
  if (icon3IMG.innerHTML == '<img src="../Icons/icon3.png">') {
    icon3MatchIMG.innerHTML = '<img src="../Icons/icon3.png">'
    clearInterval(icon3MtachInterval)
  }
})
icon4Match.addEventListener('click', () => {
  icon4MatchIMG.innerHTML = '<img src="../Icons/icon4.png">'
  let icon4MtachInterval = 0
  icon4MtachInterval = setInterval(() => {
    icon4MatchIMG.innerHTML = ''
    clearInterval(icon4MtachInterval)
  }, 2000)
  if (icon4IMG.innerHTML == '<img src="../Icons/icon4.png">') {
    icon4MatchIMG.innerHTML = '<img src="../Icons/icon4.png">'
    clearInterval(icon4MtachInterval)
  }
})
icon5Match.addEventListener('click', () => {
  icon5MatchIMG.innerHTML = '<img src="../Icons/icon5.png">'
  let icon5MtachInterval = 0

  icon5MtachInterval = setInterval(() => {
    icon5MatchIMG.innerHTML = ''
    clearInterval(icon5MtachInterval)
  }, 2000)
  if (icon5IMG.innerHTML == '<img src="../Icons/icon5.png">') {
    icon5MatchIMG.innerHTML = '<img src="../Icons/icon5.png">'
    clearInterval(icon5MtachInterval)
  }
})
icon6Match.addEventListener('click', () => {
  icon6MatchIMG.innerHTML = '<img src="../Icons/icon6.png">'
  let icon6MtachInterval = 0
  icon6MtachInterval = setInterval(() => {
    icon6MatchIMG.innerHTML = ''
    clearInterval(icon6MtachInterval)
  }, 2000)
  if (icon6IMG.innerHTML == '<img src="../Icons/icon6.png">') {
    icon6MatchIMG.innerHTML = '<img src="../Icons/icon6.png">'
    clearInterval(icon6MtachInterval)
  }
})
icon8Match.addEventListener('click', () => {
  icon8MatchIMG.innerHTML = '<img src="../Icons/icon8.png">'
  let icon8MtachInterval = 0
  icon8MtachInterval = setInterval(() => {
    icon8MatchIMG.innerHTML = ''
    clearInterval(icon8MtachInterval)
  }, 2000)
  if (icon8IMG.innerHTML == '<img src="../Icons/icon8.png">') {
    icon8MatchIMG.innerHTML = '<img src="../Icons/icon8.png">'
    clearInterval(icon8MtachInterval)
  }
})
icon10Match.addEventListener('click', () => {
  icon10MatchIMG.innerHTML = '<img src="../Icons/icon10.png">'
  let icon10MtachInterval = 0

  icon10MtachInterval = setInterval(() => {
    icon10MatchIMG.innerHTML = ''
    clearInterval(icon10MtachInterval)
  }, 2000)
  if (icon10IMG.innerHTML == '<img src="../Icons/icon10.png">') {
    icon10MatchIMG.innerHTML = '<img src="../Icons/icon10.png">'
    clearInterval(icon10MtachInterval)
  }
})