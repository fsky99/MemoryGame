let winner = document.getElementById('winner')
let Win = 16

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
function CheckWin() {
  if (Win == 0) {
    winner.innerHTML = '<h1>YOU WON !!!! :)</h1>'
  }
}
icon1.addEventListener('click', () => {
  icon1IMG.innerHTML = '<img src="../Icons/icon1.png">'
  let icon1Interval = 0
  icon1Interval = setInterval(() => {
    if (icon1MatchIMG.innerHTML == '<img src="../Icons/icon1.png">') {
      icon1IMG.innerHTML = '<img src="../Icons/icon1.png">'
      clearInterval(icon1Interval)
      Win--
    } else {
      icon1IMG.innerHTML = ''
      clearInterval(icon1Interval)
    }
  }, 2000)

  CheckWin()
})
icon2.addEventListener('click', () => {
  icon2IMG.innerHTML = '<img src="../Icons/icon2.png">'
  let icon2Interval = 0
  icon2Interval = setInterval(() => {
    if (icon2MatchIMG.innerHTML == '<img src="../Icons/icon2.png">') {
      icon2IMG.innerHTML = '<img src="../Icons/icon2.png">'
      clearInterval(icon2Interval)
      Win--
    } else {
      icon2IMG.innerHTML = ''
      clearInterval(icon2Interval)
    }
  }, 2000)

  CheckWin()
})
icon3.addEventListener('click', () => {
  icon3IMG.innerHTML = '<img src="../Icons/icon3.png">'
  let icon3Interval = 0

  icon3Interval = setInterval(() => {
    if (icon3MatchIMG.innerHTML == '<img src="../Icons/icon3.png">') {
      icon3IMG.innerHTML = '<img src="../Icons/icon3.png">'
      clearInterval(icon3Interval)
      Win--
    } else {
      icon3IMG.innerHTML = ''
      clearInterval(icon3Interval)
    }
  }, 2000)

  CheckWin()
})
icon4.addEventListener('click', () => {
  icon4IMG.innerHTML = '<img src="../Icons/icon4.png">'
  let icon4Interval = 0

  icon4Interval = setInterval(() => {
    if (icon4MatchIMG.innerHTML == '<img src="../Icons/icon4.png">') {
      icon4IMG.innerHTML = '<img src="../Icons/icon4.png">'
      clearInterval(icon4Interval)
      Win--
    } else {
      icon4IMG.innerHTML = ''
      clearInterval(icon4Interval)
    }
  }, 2000)

  CheckWin()
})
icon5.addEventListener('click', () => {
  icon5IMG.innerHTML = '<img src="../Icons/icon5.png">'
  let icon5Interval = 0

  icon5Interval = setInterval(() => {
    if (icon5MatchIMG.innerHTML == '<img src="../Icons/icon5.png">') {
      icon5IMG.innerHTML = '<img src="../Icons/icon5.png">'
      clearInterval(icon5Interval)
      Win--
    } else {
      icon5IMG.innerHTML = ''
      clearInterval(icon5Interval)
    }
  }, 2000)

  CheckWin()
})
icon6.addEventListener('click', () => {
  icon6IMG.innerHTML = '<img src="../Icons/icon6.png">'
  let icon6Interval = 0

  icon6Interval = setInterval(() => {
    if (icon6MatchIMG.innerHTML == '<img src="../Icons/icon6.png">') {
      icon6IMG.innerHTML = '<img src="../Icons/icon6.png">'
      clearInterval(icon6Interval)
      Win--
    } else {
      icon6IMG.innerHTML = ''
      clearInterval(icon6Interval)
    }
  }, 2000)

  CheckWin()
})
icon8.addEventListener('click', () => {
  icon8IMG.innerHTML = '<img src="../Icons/icon8.png">'
  let icon8Interval = 0

  icon8Interval = setInterval(() => {
    if (icon8MatchIMG.innerHTML == '<img src="../Icons/icon8.png">') {
      icon8IMG.innerHTML = '<img src="../Icons/icon8.png">'
      clearInterval(icon8Interval)
      Win--
    } else {
      icon8IMG.innerHTML = ''
      clearInterval(icon8Interval)
    }
  }, 2000)

  CheckWin()
})
icon10.addEventListener('click', () => {
  icon10IMG.innerHTML = '<img src="../Icons/icon10.png">'
  let icon10Interval = 0

  icon10Interval = setInterval(() => {
    if (icon10MatchIMG.innerHTML == '<img src="../Icons/icon10.png">') {
      icon10IMG.innerHTML = '<img src="../Icons/icon10.png">'
      clearInterval(icon10Interval)
      Win--
    } else {
      icon10IMG.innerHTML = ''
      clearInterval(icon10Interval)
    }
  }, 2000)

  CheckWin()
})

icon1Match.addEventListener('click', () => {
  icon1MatchIMG.innerHTML = '<img src="../Icons/icon1.png">'
  let icon1MtachInterval = 0

  icon1MtachInterval = setInterval(() => {
    if (icon1IMG.innerHTML == '<img src="../Icons/icon1.png">') {
      icon1MatchIMG.innerHTML = '<img src="../Icons/icon1.png">'
      clearInterval(icon1MtachInterval)
      Win--
    } else {
      icon1MatchIMG.innerHTML = ''
      clearInterval(icon1MtachInterval)
    }
  }, 2000)

  CheckWin()
})
icon2Match.addEventListener('click', () => {
  icon2MatchIMG.innerHTML = '<img src="../Icons/icon2.png">'
  let icon2MtachInterval = 0
  icon2MtachInterval = setInterval(() => {
    if (icon2IMG.innerHTML == '<img src="../Icons/icon2.png">') {
      icon2MatchIMG.innerHTML = '<img src="../Icons/icon2.png">'
      clearInterval(icon2MtachInterval)
      Win--
    } else {
      icon2MatchIMG.innerHTML = ''
      clearInterval(icon2MtachInterval)
    }
  }, 2000)

  CheckWin()
})
icon3Match.addEventListener('click', () => {
  icon3MatchIMG.innerHTML = '<img src="../Icons/icon3.png">'
  let icon3MtachInterval = 0

  icon3MtachInterval = setInterval(() => {
    if (icon3IMG.innerHTML == '<img src="../Icons/icon3.png">') {
      icon3MatchIMG.innerHTML = '<img src="../Icons/icon3.png">'
      clearInterval(icon3MtachInterval)
      Win--
    } else {
      icon3MatchIMG.innerHTML = ''
      clearInterval(icon3MtachInterval)
    }
  }, 2000)

  CheckWin()
})
icon4Match.addEventListener('click', () => {
  icon4MatchIMG.innerHTML = '<img src="../Icons/icon4.png">'
  let icon4MtachInterval = 0
  icon4MtachInterval = setInterval(() => {
    if (icon4IMG.innerHTML == '<img src="../Icons/icon4.png">') {
      icon4MatchIMG.innerHTML = '<img src="../Icons/icon4.png">'
      clearInterval(icon4MtachInterval)
      Win--
    } else {
      icon4MatchIMG.innerHTML = ''
      clearInterval(icon4MtachInterval)
    }
  }, 2000)

  CheckWin()
})
icon5Match.addEventListener('click', () => {
  icon5MatchIMG.innerHTML = '<img src="../Icons/icon5.png">'
  let icon5MtachInterval = 0

  icon5MtachInterval = setInterval(() => {
    if (icon5IMG.innerHTML == '<img src="../Icons/icon5.png">') {
      icon5MatchIMG.innerHTML = '<img src="../Icons/icon5.png">'
      clearInterval(icon5MtachInterval)
      Win--
    } else {
      icon5MatchIMG.innerHTML = ''
      clearInterval(icon5MtachInterval)
    }
  }, 2000)

  CheckWin()
})
icon6Match.addEventListener('click', () => {
  icon6MatchIMG.innerHTML = '<img src="../Icons/icon6.png">'
  let icon6MtachInterval = 0
  icon6MtachInterval = setInterval(() => {
    if (icon6IMG.innerHTML == '<img src="../Icons/icon6.png">') {
      icon6MatchIMG.innerHTML = '<img src="../Icons/icon6.png">'
      clearInterval(icon6MtachInterval)
      Win--
    } else {
      icon6MatchIMG.innerHTML = ''
      clearInterval(icon6MtachInterval)
    }
  }, 2000)

  CheckWin()
})
icon8Match.addEventListener('click', () => {
  icon8MatchIMG.innerHTML = '<img src="../Icons/icon8.png">'
  let icon8MtachInterval = 0
  icon8MtachInterval = setInterval(() => {
    if (icon8IMG.innerHTML == '<img src="../Icons/icon8.png">') {
      icon8MatchIMG.innerHTML = '<img src="../Icons/icon8.png">'
      clearInterval(icon8MtachInterval)
      Win--
    } else {
      icon8MatchIMG.innerHTML = ''
      clearInterval(icon8MtachInterval)
    }
  }, 2000)

  CheckWin()
})
icon10Match.addEventListener('click', () => {
  icon10MatchIMG.innerHTML = '<img src="../Icons/icon10.png">'
  let icon10MtachInterval = 0

  icon10MtachInterval = setInterval(() => {
    if (icon10IMG.innerHTML == '<img src="../Icons/icon10.png">') {
      icon10MatchIMG.innerHTML = '<img src="../Icons/icon10.png">'
      clearInterval(icon10MtachInterval)
      Win--
    } else {
      icon10MatchIMG.innerHTML = ''
      clearInterval(icon10MtachInterval)
    }
  }, 2000)

  CheckWin()
})
