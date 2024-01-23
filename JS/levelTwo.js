let winner = document.getElementById('winner')
let timerDiv = document.getElementById('timerDiv')
let Win = 36

let icon1 = document.getElementById('icon1')
let icon2 = document.getElementById('icon2')
let icon3 = document.getElementById('icon3')
let icon4 = document.getElementById('icon4')
let icon5 = document.getElementById('icon5')
let icon6 = document.getElementById('icon6')
let icon8 = document.getElementById('icon8')
let icon10 = document.getElementById('icon10')

let icon11 = document.getElementById('icon11')
let icon12 = document.getElementById('icon12')
let icon13 = document.getElementById('icon13')
let icon14 = document.getElementById('icon14')
let icon15 = document.getElementById('icon15')
let icon16 = document.getElementById('icon16')
let icon17 = document.getElementById('icon17')
let icon18 = document.getElementById('icon18')
let icon19 = document.getElementById('icon19')
let icon20 = document.getElementById('icon20')

let icon1Match = document.getElementById('icon1Match')
let icon2Match = document.getElementById('icon2Match')
let icon3Match = document.getElementById('icon3Match')
let icon4Match = document.getElementById('icon4Match')
let icon5Match = document.getElementById('icon5Match')
let icon6Match = document.getElementById('icon6Match')
let icon8Match = document.getElementById('icon8Match')
let icon10Match = document.getElementById('icon10Match')

let icon11Match = document.getElementById('icon11Match')
let icon12Match = document.getElementById('icon12Match')
let icon13Match = document.getElementById('icon13Match')
let icon14Match = document.getElementById('icon14Match')
let icon15Match = document.getElementById('icon15Match')
let icon16Match = document.getElementById('icon16Match')
let icon17Match = document.getElementById('icon17Match')
let icon18Match = document.getElementById('icon18Match')
let icon19Match = document.getElementById('icon19Match')
let icon20Match = document.getElementById('icon20Match')

let icon1IMG = document.getElementById('icon1IMG')
let icon2IMG = document.getElementById('icon2IMG')
let icon3IMG = document.getElementById('icon3IMG')
let icon4IMG = document.getElementById('icon4IMG')
let icon5IMG = document.getElementById('icon5IMG')
let icon6IMG = document.getElementById('icon6IMG')
let icon8IMG = document.getElementById('icon8IMG')
let icon10IMG = document.getElementById('icon10IMG')

let icon11IMG = document.getElementById('icon11IMG')
let icon12IMG = document.getElementById('icon12IMG')
let icon13IMG = document.getElementById('icon13IMG')
let icon14IMG = document.getElementById('icon14IMG')
let icon15IMG = document.getElementById('icon15IMG')
let icon16IMG = document.getElementById('icon16IMG')
let icon17IMG = document.getElementById('icon17IMG')
let icon18IMG = document.getElementById('icon18IMG')
let icon19IMG = document.getElementById('icon19IMG')
let icon20IMG = document.getElementById('icon20IMG')

let icon1MatchIMG = document.getElementById('icon1MatchIMG')
let icon2MatchIMG = document.getElementById('icon2MatchIMG')
let icon3MatchIMG = document.getElementById('icon3MatchIMG')
let icon4MatchIMG = document.getElementById('icon4MatchIMG')
let icon5MatchIMG = document.getElementById('icon5MatchIMG')
let icon6MatchIMG = document.getElementById('icon6MatchIMG')
let icon8MatchIMG = document.getElementById('icon8MatchIMG')
let icon10MatchIMG = document.getElementById('icon10MatchIMG')
let icon11MatchIMG = document.getElementById('icon11MatchIMG')
let icon12MatchIMG = document.getElementById('icon12MatchIMG')
let icon13MatchIMG = document.getElementById('icon13MatchIMG')
let icon14MatchIMG = document.getElementById('icon14MatchIMG')
let icon15MatchIMG = document.getElementById('icon15MatchIMG')
let icon16MatchIMG = document.getElementById('icon16MatchIMG')
let icon17MatchIMG = document.getElementById('icon17MatchIMG')
let icon18MatchIMG = document.getElementById('icon18MatchIMG')
let icon19MatchIMG = document.getElementById('icon19MatchIMG')
let icon20MatchIMG = document.getElementById('icon20MatchIMG')

function CheckWin() {
  if (Win == 0) {
    winner.innerHTML = '<h1>YOU WON !!!! :)</h1>'
    clearInterval(interval)
  }
}
function RepeatLevel() {
  window.location.reload()
}
function GoBackHome() {
  window.location.href = 'PageOne.html'
}
function ShowMeHints() {
  let icon1Exist = true
  let icon2Exist = true
  let icon3Exist = true
  let icon4Exist = true
  let icon5Exist = true
  let icon6Exist = true
  let icon8Exist = true
  let icon10Exist = true
  let icon11Exist = true
  let icon12Exist = true
  let icon13Exist = true
  let icon14Exist = true
  let icon15Exist = true
  let icon16Exist = true
  let icon17Exist = true
  let icon18Exist = true
  let icon19Exist = true
  let icon20Exist = true

  let icon1MacthExist = true
  let icon2MacthExist = true
  let icon3MacthExist = true
  let icon4MacthExist = true
  let icon5MacthExist = true
  let icon6MacthExist = true
  let icon8MacthExist = true
  let icon10MacthExist = true
  let icon11MacthExist = true
  let icon12MacthExist = true
  let icon13MacthExist = true
  let icon14MacthExist = true
  let icon15MacthExist = true
  let icon16MacthExist = true
  let icon17MacthExist = true
  let icon18MacthExist = true
  let icon19MacthExist = true
  let icon20MacthExist = true

  setTimeout(function ShowHints() {
    if (icon1IMG.innerHTML === '') {
      icon1IMG.innerHTML = '<img src="../Icons/level2Icon1.png">'
      icon1Exist = false
    }
    if (icon2IMG.innerHTML === '') {
      icon2Exist = false
      icon2IMG.innerHTML = '<img src="../Icons/level2Icon2.png">'
    }
    if (icon3IMG.innerHTML === '') {
      icon3IMG.innerHTML = '<img src="../Icons/level2Icon3.png">'
      icon3Exist = false
    }

    if (icon4IMG.innerHTML === '') {
      icon4IMG.innerHTML = '<img src="../Icons/level2Icon4.png">'
      icon4Exist = false
    }
    if (icon5IMG.innerHTML === '') {
      icon5IMG.innerHTML = '<img src="../Icons/level2Icon5.png">'
      icon5Exist = false
    }
    if (icon6IMG.innerHTML === '') {
      icon6IMG.innerHTML = '<img src="../Icons/level2Icon6.png">'
      icon6Exist = false
    }

    if (icon8IMG.innerHTML === '') {
      icon8IMG.innerHTML = '<img src="../Icons/level2Icon7.png">'
      icon8Exist = false
    }
    if (icon10IMG.innerHTML === '') {
      icon10IMG.innerHTML = '<img src="../Icons/level2Icon8.png">'
      icon10Exist = false
    }
    if (icon11IMG.innerHTML === '') {
      icon11IMG.innerHTML = '<img src="../Icons/level2Icon9.png">'
      icon11Exist = false
    }
    if (icon12IMG.innerHTML === '') {
      icon12IMG.innerHTML = '<img src="../Icons/level2Icon10.png">'
      icon12Exist = false
    }
    if (icon13IMG.innerHTML === '') {
      icon13IMG.innerHTML = '<img src="../Icons/level2Icon11.png">'
      icon13Exist = false
    }
    if (icon14IMG.innerHTML === '') {
      icon14IMG.innerHTML = '<img src="../Icons/level2Icon12.png">'
      icon14Exist = false
    }
    if (icon15IMG.innerHTML === '') {
      icon15IMG.innerHTML = '<img src="../Icons/level2Icon13.png">'
      icon15Exist = false
    }
    if (icon16IMG.innerHTML === '') {
      icon16IMG.innerHTML = '<img src="../Icons/level2Icon14.png">'
      icon16Exist = false
    }
    if (icon17IMG.innerHTML === '') {
      icon17IMG.innerHTML = '<img src="../Icons/level2Icon15.png">'
      icon17Exist = false
    }
    if (icon18IMG.innerHTML === '') {
      icon18IMG.innerHTML = '<img src="../Icons/level2Icon16.png">'
      icon18Exist = false
    }
    if (icon19IMG.innerHTML === '') {
      icon19IMG.innerHTML = '<img src="../Icons/level2Icon17.png">'
      icon19Exist = false
    }
    if (icon20IMG.innerHTML === '') {
      icon20IMG.innerHTML = '<img src="../Icons/level2Icon18.png">'
      icon20Exist = false
    }

    if (icon1MatchIMG.innerHTML === '') {
      icon1MatchIMG.innerHTML = '<img src="../Icons/level2Icon1.png">'
      icon1MacthExist = false
    }
    if (icon2MatchIMG.innerHTML === '') {
      icon2MatchIMG.innerHTML = '<img src="../Icons/level2Icon2.png">'
      icon2MacthExist = false
    }

    if (icon3MatchIMG.innerHTML === '') {
      icon3MatchIMG.innerHTML = '<img src="../Icons/level2Icon3.png">'
      icon3MacthExist = false
    }
    if (icon4MatchIMG.innerHTML === '') {
      icon4MatchIMG.innerHTML = '<img src="../Icons/level2Icon4.png">'
      icon4MacthExist = false
    }
    if (icon5MatchIMG.innerHTML === '') {
      icon5MatchIMG.innerHTML = '<img src="../Icons/level2Icon5.png">'
      icon5MacthExist = false
    }
    if (icon6MatchIMG.innerHTML === '') {
      icon6MatchIMG.innerHTML = '<img src="../Icons/level2Icon6.png">'
      icon6MacthExist = false
    }
    if (icon8MatchIMG.innerHTML === '') {
      icon8MatchIMG.innerHTML = '<img src="../Icons/level2Icon7.png">'
      icon8MacthExist = false
    }
    if (icon10MatchIMG.innerHTML === '') {
      icon10MatchIMG.innerHTML = '<img src="../Icons/level2Icon8.png">'
      icon10MacthExist = false
    }
    if (icon11MatchIMG.innerHTML === '') {
      icon11MatchIMG.innerHTML = '<img src="../Icons/level2Icon9.png">'
      icon11MacthExist = false
    }
    if (icon12MatchIMG.innerHTML === '') {
      icon12MatchIMG.innerHTML = '<img src="../Icons/level2Icon10.png">'
      icon12MacthExist = false
    }
    if (icon13MatchIMG.innerHTML === '') {
      icon13MatchIMG.innerHTML = '<img src="../Icons/level2Icon11.png">'
      icon13MacthExist = false
    }
    if (icon14MatchIMG.innerHTML === '') {
      icon14MatchIMG.innerHTML = '<img src="../Icons/level2Icon12.png">'
      icon14MacthExist = false
    }

    if (icon15MatchIMG.innerHTML === '') {
      icon15MatchIMG.innerHTML = '<img src="../Icons/level2Icon13.png">'
      icon15MacthExist = false
    }
    if (icon16MatchIMG.innerHTML === '') {
      icon16MatchIMG.innerHTML = '<img src="../Icons/level2Icon14.png">'
      icon16MacthExist = false
    }
    if (icon17MatchIMG.innerHTML === '') {
      icon17MatchIMG.innerHTML = '<img src="../Icons/level2Icon15.png">'
      icon17MacthExist = false
    }
    if (icon18MatchIMG.innerHTML === '') {
      icon18MatchIMG.innerHTML = '<img src="../Icons/level2Icon16.png">'
      icon18MacthExist = false
    }
    if (icon19MatchIMG.innerHTML === '') {
      icon19MatchIMG.innerHTML = '<img src="../Icons/level2Icon17.png">'
      icon19MacthExist = false
    }
    if (icon20MatchIMG.innerHTML === '') {
      icon20MatchIMG.innerHTML = '<img src="../Icons/level2Icon18.png">'
      icon20MacthExist = false
    }
  }, 100)
  setTimeout(function deleteHints() {
    if (!icon1Exist) {
      icon1IMG.innerHTML = ''
    }
    if (!icon2Exist) {
      icon2IMG.innerHTML = ''
    }
    if (!icon3Exist) {
      icon3IMG.innerHTML = ''
    }
    if (!icon4Exist) {
      icon4IMG.innerHTML = ''
    }
    if (!icon5Exist) {
      icon5IMG.innerHTML = ''
    }
    if (!icon6Exist) {
      icon6IMG.innerHTML = ''
    }
    if (!icon8Exist) {
      icon8IMG.innerHTML = ''
    }
    if (!icon10Exist) {
      icon10IMG.innerHTML = ''
    }

    if (!icon11Exist) {
      icon11IMG.innerHTML = ''
    }

    if (!icon12Exist) {
      icon12IMG.innerHTML = ''
    }
    if (!icon13Exist) {
      icon13IMG.innerHTML = ''
    }
    if (!icon14Exist) {
      icon14IMG.innerHTML = ''
    }
    if (!icon15Exist) {
      icon15IMG.innerHTML = ''
    }
    if (!icon16Exist) {
      icon16IMG.innerHTML = ''
    }
    if (!icon17Exist) {
      icon17IMG.innerHTML = ''
    }
    if (!icon18Exist) {
      icon18IMG.innerHTML = ''
    }
    if (!icon19Exist) {
      icon19IMG.innerHTML = ''
    }
    if (!icon20Exist) {
      icon20IMG.innerHTML = ''
    }

    if (!icon1MacthExist) {
      icon1MatchIMG.innerHTML = ''
    }

    if (!icon2MacthExist) {
      icon2MatchIMG.innerHTML = ''
    }
    if (!icon3MacthExist) {
      icon3MatchIMG.innerHTML = ''
    }
    if (!icon4MacthExist) {
      icon4MatchIMG.innerHTML = ''
    }

    if (!icon5MacthExist) {
      icon5MatchIMG.innerHTML = ''
    }
    if (!icon6MacthExist) {
      icon6MatchIMG.innerHTML = ''
    }
    if (!icon8MacthExist) {
      icon8MatchIMG.innerHTML = ''
    }
    if (!icon10MacthExist) {
      icon10MatchIMG.innerHTML = ''
    }

    if (!icon11MacthExist) {
      icon11MatchIMG.innerHTML = ''
    }

    if (!icon12MacthExist) {
      icon12MatchIMG.innerHTML = ''
    }
    if (!icon13MacthExist) {
      icon13MatchIMG.innerHTML = ''
    }
    if (!icon14MacthExist) {
      icon14MatchIMG.innerHTML = ''
    }
    if (!icon15MacthExist) {
      icon15MatchIMG.innerHTML = ''
    }
    if (!icon16MacthExist) {
      icon16MatchIMG.innerHTML = ''
    }
    if (!icon17MacthExist) {
      icon17MatchIMG.innerHTML = ''
    }
    if (!icon18MacthExist) {
      icon18MatchIMG.innerHTML = ''
    }
    if (!icon19MacthExist) {
      icon19MatchIMG.innerHTML = ''
    }
    if (!icon20MacthExist) {
      icon20MatchIMG.innerHTML = ''
    }
  }, 500)
}

function getTimer() {
  let timer = localStorage.getItem('timer')
  console.log(timer)
  time = timer
  interval = setInterval(function () {
    document.getElementById('timerDiv').innerHTML =
      '<h5>' + time + ' Seconds</h5>'
    if (Win == 0) {
      document.getElementById('MainDiv').innerHTML = ''
      clearInterval(interval)
    } else if (time == 0) {
      clearInterval(interval)
      document.getElementById('MainDiv').innerHTML =
        '<h1>Time!! Better luck next time :) </h1>'
    }
    time--
  }, 1000)
}
getTimer()
icon1.addEventListener('click', () => {
  icon1IMG.innerHTML = '<img src="../Icons/level2Icon1.png">'
  let icon1Interval = 0
  icon1Interval = setInterval(() => {
    if (icon1MatchIMG.innerHTML == '<img src="../Icons/level2Icon1.png">') {
      icon1IMG.innerHTML = '<img src="../Icons/level2Icon1.png">'
      clearInterval(icon1Interval)
      Win--
      CheckWin()
    } else {
      icon1IMG.innerHTML = ''
      clearInterval(icon1Interval)
    }
  }, 2000)
})
icon2.addEventListener('click', () => {
  icon2IMG.innerHTML = '<img src="../Icons/level2Icon2.png">'
  let icon2Interval = 0
  icon2Interval = setInterval(() => {
    if (icon2MatchIMG.innerHTML == '<img src="../Icons/level2Icon2.png">') {
      icon2IMG.innerHTML = '<img src="../Icons/level2Icon2.png">'
      clearInterval(icon2Interval)
      Win--
      CheckWin()
    } else {
      icon2IMG.innerHTML = ''
      clearInterval(icon2Interval)
    }
  }, 2000)
})
icon3.addEventListener('click', () => {
  icon3IMG.innerHTML = '<img src="../Icons/level2Icon3.png">'
  let icon3Interval = 0

  icon3Interval = setInterval(() => {
    if (icon3MatchIMG.innerHTML == '<img src="../Icons/level2Icon3.png">') {
      icon3IMG.innerHTML = '<img src="../Icons/level2Icon3.png">'
      clearInterval(icon3Interval)
      Win--
      CheckWin()
    } else {
      icon3IMG.innerHTML = ''
      clearInterval(icon3Interval)
    }
  }, 2000)
})
icon4.addEventListener('click', () => {
  icon4IMG.innerHTML = '<img src="../Icons/level2Icon4.png">'
  let icon4Interval = 0

  icon4Interval = setInterval(() => {
    if (icon4MatchIMG.innerHTML == '<img src="../Icons/level2Icon4.png">') {
      icon4IMG.innerHTML = '<img src="../Icons/level2Icon4.png">'
      clearInterval(icon4Interval)
      Win--
      CheckWin()
    } else {
      icon4IMG.innerHTML = ''
      clearInterval(icon4Interval)
    }
  }, 2000)
})
icon5.addEventListener('click', () => {
  icon5IMG.innerHTML = '<img src="../Icons/level2Icon5.png">'
  let icon5Interval = 0

  icon5Interval = setInterval(() => {
    if (icon5MatchIMG.innerHTML == '<img src="../Icons/level2Icon5.png">') {
      icon5IMG.innerHTML = '<img src="../Icons/level2Icon5.png">'
      clearInterval(icon5Interval)
      Win--
      CheckWin()
    } else {
      icon5IMG.innerHTML = ''
      clearInterval(icon5Interval)
    }
  }, 2000)
})
icon6.addEventListener('click', () => {
  icon6IMG.innerHTML = '<img src="../Icons/level2Icon6.png">'
  let icon6Interval = 0

  icon6Interval = setInterval(() => {
    if (icon6MatchIMG.innerHTML == '<img src="../Icons/level2Icon6.png">') {
      icon6IMG.innerHTML = '<img src="../Icons/level2Icon6.png">'
      clearInterval(icon6Interval)
      Win--
      CheckWin()
    } else {
      icon6IMG.innerHTML = ''
      clearInterval(icon6Interval)
    }
  }, 2000)
})
icon8.addEventListener('click', () => {
  icon8IMG.innerHTML = '<img src="../Icons/level2Icon7.png">'
  let icon8Interval = 0

  icon8Interval = setInterval(() => {
    if (icon8MatchIMG.innerHTML == '<img src="../Icons/level2Icon7.png">') {
      icon8IMG.innerHTML = '<img src="../Icons/level2Icon7.png">'
      clearInterval(icon8Interval)
      Win--
      CheckWin()
    } else {
      icon8IMG.innerHTML = ''
      clearInterval(icon8Interval)
    }
  }, 2000)
})
icon10.addEventListener('click', () => {
  icon10IMG.innerHTML = '<img src="../Icons/level2Icon8.png">'
  let icon10Interval = 0

  icon10Interval = setInterval(() => {
    if (icon10MatchIMG.innerHTML == '<img src="../Icons/level2Icon8.png">') {
      icon10IMG.innerHTML = '<img src="../Icons/level2Icon8.png">'
      clearInterval(icon10Interval)
      Win--
      CheckWin()
    } else {
      icon10IMG.innerHTML = ''
      clearInterval(icon10Interval)
    }
  }, 2000)
})
icon11.addEventListener('click', () => {
  icon11IMG.innerHTML = '<img src="../Icons/level2Icon9.png">'
  let icon11Interval = 0

  icon11Interval = setInterval(() => {
    if (icon11MatchIMG.innerHTML == '<img src="../Icons/level2Icon9.png">') {
      icon11IMG.innerHTML = '<img src="../Icons/level2Icon9.png">'
      clearInterval(icon11Interval)
      Win--
      CheckWin()
    } else {
      icon11IMG.innerHTML = ''
      clearInterval(icon11Interval)
    }
  }, 2000)
})
icon12.addEventListener('click', () => {
  icon12IMG.innerHTML = '<img src="../Icons/level2Icon10.png">'
  let icon12Interval = 0

  icon12Interval = setInterval(() => {
    if (icon12MatchIMG.innerHTML == '<img src="../Icons/level2Icon10.png">') {
      icon12IMG.innerHTML = '<img src="../Icons/level2Icon10.png">'
      clearInterval(icon12Interval)
      Win--
      CheckWin()
    } else {
      icon12IMG.innerHTML = ''
      clearInterval(icon12Interval)
    }
  }, 2000)
})
icon13.addEventListener('click', () => {
  icon13IMG.innerHTML = '<img src="../Icons/level2Icon11.png">'
  let icon13Interval = 0

  icon13Interval = setInterval(() => {
    if (icon13MatchIMG.innerHTML == '<img src="../Icons/level2Icon11.png">') {
      icon13IMG.innerHTML = '<img src="../Icons/level2Icon11.png">'
      clearInterval(icon13Interval)
      Win--
      CheckWin()
    } else {
      icon13IMG.innerHTML = ''
      clearInterval(icon13Interval)
    }
  }, 2000)
})
icon14.addEventListener('click', () => {
  icon14IMG.innerHTML = '<img src="../Icons/level2Icon12.png">'
  let icon14Interval = 0

  icon14Interval = setInterval(() => {
    if (icon14MatchIMG.innerHTML == '<img src="../Icons/level2Icon12.png">') {
      icon14IMG.innerHTML = '<img src="../Icons/level2Icon12.png">'
      clearInterval(icon14Interval)
      Win--
      CheckWin()
    } else {
      icon14IMG.innerHTML = ''
      clearInterval(icon14Interval)
    }
  }, 2000)
})
icon15.addEventListener('click', () => {
  icon15IMG.innerHTML = '<img src="../Icons/level2Icon13.png">'
  let icon15Interval = 0

  icon15Interval = setInterval(() => {
    if (icon15MatchIMG.innerHTML == '<img src="../Icons/level2Icon13.png">') {
      icon15IMG.innerHTML = '<img src="../Icons/level2Icon13.png">'
      clearInterval(icon15Interval)
      Win--
      CheckWin()
    } else {
      icon15IMG.innerHTML = ''
      clearInterval(icon15Interval)
    }
  }, 2000)
})
icon16.addEventListener('click', () => {
  icon16IMG.innerHTML = '<img src="../Icons/level2Icon14.png">'
  let icon16Interval = 0

  icon16Interval = setInterval(() => {
    if (icon16MatchIMG.innerHTML == '<img src="../Icons/level2Icon14.png">') {
      icon16IMG.innerHTML = '<img src="../Icons/level2Icon14.png">'
      clearInterval(icon16Interval)
      Win--
      CheckWin()
    } else {
      icon16IMG.innerHTML = ''
      clearInterval(icon16Interval)
    }
  }, 2000)
})
icon17.addEventListener('click', () => {
  icon17IMG.innerHTML = '<img src="../Icons/level2Icon15.png">'
  let icon17Interval = 0

  icon17Interval = setInterval(() => {
    if (icon17MatchIMG.innerHTML == '<img src="../Icons/level2Icon15.png">') {
      icon17IMG.innerHTML = '<img src="../Icons/level2Icon15.png">'
      clearInterval(icon17Interval)
      Win--
      CheckWin()
    } else {
      icon17IMG.innerHTML = ''
      clearInterval(icon17Interval)
    }
  }, 2000)
})
icon18.addEventListener('click', () => {
  icon18IMG.innerHTML = '<img src="../Icons/level2Icon16.png">'
  let icon18Interval = 0

  icon18Interval = setInterval(() => {
    if (icon18MatchIMG.innerHTML == '<img src="../Icons/level2Icon16.png">') {
      icon18IMG.innerHTML = '<img src="../Icons/level2Icon16.png">'
      clearInterval(icon18Interval)
      Win--
      CheckWin()
    } else {
      icon18IMG.innerHTML = ''
      clearInterval(icon18Interval)
    }
  }, 2000)
})
icon19.addEventListener('click', () => {
  icon19IMG.innerHTML = '<img src="../Icons/level2Icon17.png">'
  let icon19Interval = 0

  icon19Interval = setInterval(() => {
    if (icon19MatchIMG.innerHTML == '<img src="../Icons/level2Icon17.png">') {
      icon19IMG.innerHTML = '<img src="../Icons/level2Icon17.png">'
      clearInterval(icon19Interval)
      Win--
      CheckWin()
    } else {
      icon19IMG.innerHTML = ''
      clearInterval(icon19Interval)
    }
  }, 2000)
})
icon20.addEventListener('click', () => {
  icon20IMG.innerHTML = '<img src="../Icons/level2Icon18.png">'
  let icon20Interval = 0

  icon20Interval = setInterval(() => {
    if (icon20MatchIMG.innerHTML == '<img src="../Icons/level2Icon18.png">') {
      icon20IMG.innerHTML = '<img src="../Icons/level2Icon18.png">'
      clearInterval(icon20Interval)
      Win--
      CheckWin()
    } else {
      icon20IMG.innerHTML = ''
      clearInterval(icon20Interval)
    }
  }, 2000)
})
icon1Match.addEventListener('click', () => {
  icon1MatchIMG.innerHTML = '<img src="../Icons/level2Icon1.png">'
  let icon1MtachInterval = 0

  icon1MtachInterval = setInterval(() => {
    if (icon1IMG.innerHTML == '<img src="../Icons/level2Icon1.png">') {
      icon1MatchIMG.innerHTML = '<img src="../Icons/level2Icon1.png">'
      clearInterval(icon1MtachInterval)
      Win--
      CheckWin()
    } else {
      icon1MatchIMG.innerHTML = ''
      clearInterval(icon1MtachInterval)
    }
  }, 2000)
})
icon2Match.addEventListener('click', () => {
  icon2MatchIMG.innerHTML = '<img src="../Icons/level2Icon2.png">'
  let icon2MtachInterval = 0
  icon2MtachInterval = setInterval(() => {
    if (icon2IMG.innerHTML == '<img src="../Icons/level2Icon2.png">') {
      icon2MatchIMG.innerHTML = '<img src="../Icons/level2Icon2.png">'
      clearInterval(icon2MtachInterval)
      Win--
      CheckWin()
    } else {
      icon2MatchIMG.innerHTML = ''
      clearInterval(icon2MtachInterval)
    }
  }, 2000)
})
icon3Match.addEventListener('click', () => {
  icon3MatchIMG.innerHTML = '<img src="../Icons/level2Icon3.png">'
  let icon3MtachInterval = 0

  icon3MtachInterval = setInterval(() => {
    if (icon3IMG.innerHTML == '<img src="../Icons/level2Icon3.png">') {
      icon3MatchIMG.innerHTML = '<img src="../Icons/level2Icon3.png">'
      clearInterval(icon3MtachInterval)
      Win--
      CheckWin()
    } else {
      icon3MatchIMG.innerHTML = ''
      clearInterval(icon3MtachInterval)
    }
  }, 2000)
})
icon4Match.addEventListener('click', () => {
  icon4MatchIMG.innerHTML = '<img src="../Icons/level2Icon4.png">'
  let icon4MtachInterval = 0
  icon4MtachInterval = setInterval(() => {
    if (icon4IMG.innerHTML == '<img src="../Icons/level2Icon4.png">') {
      icon4MatchIMG.innerHTML = '<img src="../Icons/level2Icon4.png">'
      clearInterval(icon4MtachInterval)
      Win--
      CheckWin()
    } else {
      icon4MatchIMG.innerHTML = ''
      clearInterval(icon4MtachInterval)
    }
  }, 2000)
})
icon5Match.addEventListener('click', () => {
  icon5MatchIMG.innerHTML = '<img src="../Icons/level2Icon5.png">'
  let icon5MtachInterval = 0

  icon5MtachInterval = setInterval(() => {
    if (icon5IMG.innerHTML == '<img src="../Icons/level2Icon5.png">') {
      icon5MatchIMG.innerHTML = '<img src="../Icons/level2Icon5.png">'
      clearInterval(icon5MtachInterval)
      Win--
      CheckWin()
    } else {
      icon5MatchIMG.innerHTML = ''
      clearInterval(icon5MtachInterval)
    }
  }, 2000)
})
icon6Match.addEventListener('click', () => {
  icon6MatchIMG.innerHTML = '<img src="../Icons/level2Icon6.png">'
  let icon6MtachInterval = 0
  icon6MtachInterval = setInterval(() => {
    if (icon6IMG.innerHTML == '<img src="../Icons/level2Icon6.png">') {
      icon6MatchIMG.innerHTML = '<img src="../Icons/level2Icon6.png">'
      clearInterval(icon6MtachInterval)
      Win--
      CheckWin()
    } else {
      icon6MatchIMG.innerHTML = ''
      clearInterval(icon6MtachInterval)
    }
  }, 2000)
})
icon8Match.addEventListener('click', () => {
  icon8MatchIMG.innerHTML = '<img src="../Icons/level2Icon7.png">'
  let icon8MtachInterval = 0
  icon8MtachInterval = setInterval(() => {
    if (icon8IMG.innerHTML == '<img src="../Icons/level2Icon7.png">') {
      icon8MatchIMG.innerHTML = '<img src="../Icons/level2Icon7.png">'
      clearInterval(icon8MtachInterval)
      Win--
      CheckWin()
    } else {
      icon8MatchIMG.innerHTML = ''
      clearInterval(icon8MtachInterval)
    }
  }, 2000)
})
icon10Match.addEventListener('click', () => {
  icon10MatchIMG.innerHTML = '<img src="../Icons/level2Icon8.png">'
  let icon10MtachInterval = 0

  icon10MtachInterval = setInterval(() => {
    if (icon10IMG.innerHTML == '<img src="../Icons/level2Icon8.png">') {
      icon10MatchIMG.innerHTML = '<img src="../Icons/level2Icon8.png">'
      clearInterval(icon10MtachInterval)
      Win--
      CheckWin()
    } else {
      icon10MatchIMG.innerHTML = ''
      clearInterval(icon10MtachInterval)
    }
  }, 2000)
})
icon11Match.addEventListener('click', () => {
  icon11MatchIMG.innerHTML = '<img src="../Icons/level2Icon9.png">'
  let icon11MtachInterval = 0

  icon11MtachInterval = setInterval(() => {
    if (icon11IMG.innerHTML == '<img src="../Icons/level2Icon9.png">') {
      icon11MatchIMG.innerHTML = '<img src="../Icons/level2Icon9.png">'
      clearInterval(icon11MtachInterval)
      Win--
      CheckWin()
    } else {
      icon11MatchIMG.innerHTML = ''
      clearInterval(icon11MtachInterval)
    }
  }, 2000)
})

icon12Match.addEventListener('click', () => {
  icon12MatchIMG.innerHTML = '<img src="../Icons/level2Icon10.png">'
  let icon12MtachInterval = 0

  icon12MtachInterval = setInterval(() => {
    if (icon12IMG.innerHTML == '<img src="../Icons/level2Icon10.png">') {
      icon12MatchIMG.innerHTML = '<img src="../Icons/level2Icon10.png">'
      clearInterval(icon12MtachInterval)
      Win--
      CheckWin()
    } else {
      icon12MatchIMG.innerHTML = ''
      clearInterval(icon12MtachInterval)
    }
  }, 2000)
})
icon13Match.addEventListener('click', () => {
  icon13MatchIMG.innerHTML = '<img src="../Icons/level2Icon11.png">'
  let icon13MtachInterval = 0

  icon13MtachInterval = setInterval(() => {
    if (icon13IMG.innerHTML == '<img src="../Icons/level2Icon11.png">') {
      icon13MatchIMG.innerHTML = '<img src="../Icons/level2Icon11.png">'
      clearInterval(icon13MtachInterval)
      Win--
      CheckWin()
    } else {
      icon13MatchIMG.innerHTML = ''
      clearInterval(icon13MtachInterval)
    }
  }, 2000)
})

icon14Match.addEventListener('click', () => {
  icon14MatchIMG.innerHTML = '<img src="../Icons/level2Icon12.png">'
  let icon14MtachInterval = 0

  icon14MtachInterval = setInterval(() => {
    if (icon14IMG.innerHTML == '<img src="../Icons/level2Icon12.png">') {
      icon14MatchIMG.innerHTML = '<img src="../Icons/level2Icon12.png">'
      clearInterval(icon14MtachInterval)
      Win--
      CheckWin()
    } else {
      icon14MatchIMG.innerHTML = ''
      clearInterval(icon14MtachInterval)
    }
  }, 2000)
})
icon15Match.addEventListener('click', () => {
  icon15MatchIMG.innerHTML = '<img src="../Icons/level2Icon13.png">'
  let icon15MtachInterval = 0

  icon15MtachInterval = setInterval(() => {
    if (icon15IMG.innerHTML == '<img src="../Icons/level2Icon13.png">') {
      icon15MatchIMG.innerHTML = '<img src="../Icons/level2Icon13.png">'
      clearInterval(icon15MtachInterval)
      Win--
      CheckWin()
    } else {
      icon15MatchIMG.innerHTML = ''
      clearInterval(icon15MtachInterval)
    }
  }, 2000)
})
icon16Match.addEventListener('click', () => {
  icon16MatchIMG.innerHTML = '<img src="../Icons/level2Icon14.png">'
  let icon16MtachInterval = 0

  icon16MtachInterval = setInterval(() => {
    if (icon16IMG.innerHTML == '<img src="../Icons/level2Icon14.png">') {
      icon16MatchIMG.innerHTML = '<img src="../Icons/level2Icon14.png">'
      clearInterval(icon16MtachInterval)
      Win--
      CheckWin()
    } else {
      icon16MatchIMG.innerHTML = ''
      clearInterval(icon16MtachInterval)
    }
  }, 2000)
})
icon17Match.addEventListener('click', () => {
  icon17MatchIMG.innerHTML = '<img src="../Icons/level2Icon15.png">'
  let icon17MtachInterval = 0

  icon17MtachInterval = setInterval(() => {
    if (icon17IMG.innerHTML == '<img src="../Icons/level2Icon15.png">') {
      icon17MatchIMG.innerHTML = '<img src="../Icons/level2Icon15.png">'
      clearInterval(icon17MtachInterval)
      Win--
      CheckWin()
    } else {
      icon17MatchIMG.innerHTML = ''
      clearInterval(icon17MtachInterval)
    }
  }, 2000)
})
icon18Match.addEventListener('click', () => {
  icon18MatchIMG.innerHTML = '<img src="../Icons/level2Icon16.png">'
  let icon18MtachInterval = 0

  icon18MtachInterval = setInterval(() => {
    if (icon18IMG.innerHTML == '<img src="../Icons/level2Icon16.png">') {
      icon18MatchIMG.innerHTML = '<img src="../Icons/level2Icon16.png">'
      clearInterval(icon18MtachInterval)
      Win--
      CheckWin()
    } else {
      icon18MatchIMG.innerHTML = ''
      clearInterval(icon18MtachInterval)
    }
  }, 2000)
})
icon19Match.addEventListener('click', () => {
  icon19MatchIMG.innerHTML = '<img src="../Icons/level2Icon17.png">'
  let icon19MtachInterval = 0

  icon19MtachInterval = setInterval(() => {
    if (icon19IMG.innerHTML == '<img src="../Icons/level2Icon17.png">') {
      icon19MatchIMG.innerHTML = '<img src="../Icons/level2Icon17.png">'
      clearInterval(icon19MtachInterval)
      Win--
      CheckWin()
    } else {
      icon19MatchIMG.innerHTML = ''
      clearInterval(icon19MtachInterval)
    }
  }, 2000)
})
icon20Match.addEventListener('click', () => {
  icon20MatchIMG.innerHTML = '<img src="../Icons/level2Icon18.png">'
  let icon20MtachInterval = 0

  icon20MtachInterval = setInterval(() => {
    if (icon20IMG.innerHTML == '<img src="../Icons/level2Icon18.png">') {
      icon20MatchIMG.innerHTML = '<img src="../Icons/level2Icon18.png">'
      clearInterval(icon20MtachInterval)
      Win--
      CheckWin()
    } else {
      icon20MatchIMG.innerHTML = ''
      clearInterval(icon20MtachInterval)
    }
  }, 2000)
})
