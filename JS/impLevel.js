let winner = document.getElementById('winner')
let timerDiv = document.getElementById('timerDiv')
let Win = 64

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

let icon21 = document.getElementById('icon21')
let icon22 = document.getElementById('icon22')
let icon23 = document.getElementById('icon23')
let icon24 = document.getElementById('icon24')
let icon25 = document.getElementById('icon25')
let icon26 = document.getElementById('icon26')
let icon27 = document.getElementById('icon27')
let icon28 = document.getElementById('icon28')
let icon29 = document.getElementById('icon29')
let icon30 = document.getElementById('icon30')
let icon31 = document.getElementById('icon31')
let icon32 = document.getElementById('icon32')
let icon33 = document.getElementById('icon33')
let icon34 = document.getElementById('icon34')

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

let icon21Match = document.getElementById('icon21Match')
let icon22Match = document.getElementById('icon22Match')
let icon23Match = document.getElementById('icon23Match')
let icon24Match = document.getElementById('icon24Match')
let icon25Match = document.getElementById('icon25Match')
let icon26Match = document.getElementById('icon26Match')
let icon27Match = document.getElementById('icon27Match')
let icon28Match = document.getElementById('icon28Match')
let icon29Match = document.getElementById('icon29Match')
let icon30Match = document.getElementById('icon30Match')
let icon31Match = document.getElementById('icon31Match')
let icon32Match = document.getElementById('icon32Match')
let icon33Match = document.getElementById('icon33Match')
let icon34Match = document.getElementById('icon34Match')

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

let icon21IMG = document.getElementById('icon21IMG')
let icon22IMG = document.getElementById('icon22IMG')
let icon23IMG = document.getElementById('icon23IMG')
let icon24IMG = document.getElementById('icon24IMG')
let icon25IMG = document.getElementById('icon25IMG')
let icon26IMG = document.getElementById('icon26IMG')
let icon27IMG = document.getElementById('icon27IMG')
let icon28IMG = document.getElementById('icon28IMG')
let icon29IMG = document.getElementById('icon29IMG')
let icon30IMG = document.getElementById('icon30IMG')
let icon31IMG = document.getElementById('icon31IMG')
let icon32IMG = document.getElementById('icon32IMG')
let icon33IMG = document.getElementById('icon33IMG')
let icon34IMG = document.getElementById('icon34IMG')

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

let icon21MatchIMG = document.getElementById('icon21MatchIMG')
let icon22MatchIMG = document.getElementById('icon22MatchIMG')
let icon23MatchIMG = document.getElementById('icon23MatchIMG')
let icon24MatchIMG = document.getElementById('icon24MatchIMG')
let icon25MatchIMG = document.getElementById('icon25MatchIMG')
let icon26MatchIMG = document.getElementById('icon26MatchIMG')
let icon27MatchIMG = document.getElementById('icon27MatchIMG')
let icon28MatchIMG = document.getElementById('icon28MatchIMG')
let icon29MatchIMG = document.getElementById('icon29MatchIMG')
let icon30MatchIMG = document.getElementById('icon30MatchIMG')
let icon31MatchIMG = document.getElementById('icon31MatchIMG')
let icon32MatchIMG = document.getElementById('icon32MatchIMG')
let icon33MatchIMG = document.getElementById('icon33MatchIMG')
let icon34MatchIMG = document.getElementById('icon34MatchIMG')

function CheckWin() {
  if (Win == 0) {
    clearInterval(interval)
    winner.innerHTML = '<h1>YOU WON WOOOW !</h1>'
  }
}
function RepeatLevel() {
  window.location.reload()
}
function GoBackHome() {
  window.location.href = 'index.html'
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

  let icon21Exist = true
  let icon22Exist = true
  let icon23Exist = true
  let icon24Exist = true
  let icon25Exist = true
  let icon26Exist = true
  let icon27Exist = true
  let icon28Exist = true
  let icon29Exist = true
  let icon30Exist = true
  let icon31Exist = true
  let icon32Exist = true
  let icon33Exist = true
  let icon34Exist = true

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

  let icon21MacthExist = true
  let icon22MacthExist = true
  let icon23MacthExist = true
  let icon24MacthExist = true
  let icon25MacthExist = true
  let icon26MacthExist = true
  let icon27MacthExist = true
  let icon28MacthExist = true
  let icon29MacthExist = true
  let icon30MacthExist = true
  let icon31MacthExist = true
  let icon32MacthExist = true
  let icon33MacthExist = true
  let icon34MacthExist = true

  setTimeout(function ShowHints() {
    if (icon1IMG.innerHTML === '') {
      icon1IMG.innerHTML = '<img src="../Icons/impLevelIcon1.png">'
      icon1Exist = false
    }
    if (icon2IMG.innerHTML === '') {
      icon2Exist = false
      icon2IMG.innerHTML = '<img src="../Icons/impLevelIcon2.png">'
    }
    if (icon3IMG.innerHTML === '') {
      icon3IMG.innerHTML = '<img src="../Icons/impLevelIcon3.png">'
      icon3Exist = false
    }

    if (icon4IMG.innerHTML === '') {
      icon4IMG.innerHTML = '<img src="../Icons/impLevelIcon4.png">'
      icon4Exist = false
    }
    if (icon5IMG.innerHTML === '') {
      icon5IMG.innerHTML = '<img src="../Icons/impLevelIcon5.png">'
      icon5Exist = false
    }
    if (icon6IMG.innerHTML === '') {
      icon6IMG.innerHTML = '<img src="../Icons/impLevelIcon6.png">'
      icon6Exist = false
    }

    if (icon8IMG.innerHTML === '') {
      icon8IMG.innerHTML = '<img src="../Icons/impLevelIcon7.png">'
      icon8Exist = false
    }
    if (icon10IMG.innerHTML === '') {
      icon10IMG.innerHTML = '<img src="../Icons/impLevelIcon8.png">'
      icon10Exist = false
    }
    if (icon11IMG.innerHTML === '') {
      icon11IMG.innerHTML = '<img src="../Icons/impLevelIcon9.png">'
      icon11Exist = false
    }
    if (icon12IMG.innerHTML === '') {
      icon12IMG.innerHTML = '<img src="../Icons/impLevelIcon10.png">'
      icon12Exist = false
    }
    if (icon13IMG.innerHTML === '') {
      icon13IMG.innerHTML = '<img src="../Icons/impLevelIcon11.png">'
      icon13Exist = false
    }
    if (icon14IMG.innerHTML === '') {
      icon14IMG.innerHTML = '<img src="../Icons/impLevelIcon12.png">'
      icon14Exist = false
    }
    if (icon15IMG.innerHTML === '') {
      icon15IMG.innerHTML = '<img src="../Icons/impLevelIcon13.png">'
      icon15Exist = false
    }
    if (icon16IMG.innerHTML === '') {
      icon16IMG.innerHTML = '<img src="../Icons/impLevelIcon14.png">'
      icon16Exist = false
    }
    if (icon17IMG.innerHTML === '') {
      icon17IMG.innerHTML = '<img src="../Icons/impLevelIcon15.png">'
      icon17Exist = false
    }
    if (icon18IMG.innerHTML === '') {
      icon18IMG.innerHTML = '<img src="../Icons/impLevelIcon16.png">'
      icon18Exist = false
    }
    if (icon19IMG.innerHTML === '') {
      icon19IMG.innerHTML = '<img src="../Icons/impLevelIcon17.png">'
      icon19Exist = false
    }
    if (icon20IMG.innerHTML === '') {
      icon20IMG.innerHTML = '<img src="../Icons/impLevelIcon18.png">'
      icon20Exist = false
    }

    if (icon21IMG.innerHTML === '') {
      icon21IMG.innerHTML = '<img src="../Icons/impLevelIcon19.png">'
      icon21Exist = false
    }

    if (icon22IMG.innerHTML === '') {
      icon22IMG.innerHTML = '<img src="../Icons/impLevelIcon20.png">'
      icon22Exist = false
    }
    if (icon23IMG.innerHTML === '') {
      icon23IMG.innerHTML = '<img src="../Icons/impLevelIcon21.png">'
      icon23Exist = false
    }

    if (icon24IMG.innerHTML === '') {
      icon24IMG.innerHTML = '<img src="../Icons/impLevelIcon22.png">'
      icon24Exist = false
    }
    if (icon25IMG.innerHTML === '') {
      icon25IMG.innerHTML = '<img src="../Icons/impLevelIcon23.png">'
      icon25Exist = false
    }
    if (icon26IMG.innerHTML === '') {
      icon26IMG.innerHTML = '<img src="../Icons/impLevelIcon24.png">'
      icon26Exist = false
    }
    if (icon27IMG.innerHTML === '') {
      icon27IMG.innerHTML = '<img src="../Icons/impLevelIcon25.png">'
      icon27Exist = false
    }
    if (icon28IMG.innerHTML === '') {
      icon28IMG.innerHTML = '<img src="../Icons/impLevelIcon26.png">'
      icon28Exist = false
    }
    if (icon29IMG.innerHTML === '') {
      icon29IMG.innerHTML = '<img src="../Icons/impLevelIcon27.png">'
      icon29Exist = false
    }
    if (icon30IMG.innerHTML === '') {
      icon30IMG.innerHTML = '<img src="../Icons/impLevelIcon28.png">'
      icon30Exist = false
    }
    if (icon31IMG.innerHTML === '') {
      icon31IMG.innerHTML = '<img src="../Icons/impLevelIcon29.png">'
      icon31Exist = false
    }
    if (icon32IMG.innerHTML === '') {
      icon32IMG.innerHTML = '<img src="../Icons/impLevelIcon30.png">'
      icon32Exist = false
    }
    if (icon33IMG.innerHTML === '') {
      icon33IMG.innerHTML = '<img src="../Icons/impLevelIcon31.png">'
      icon33Exist = false
    }
    if (icon34IMG.innerHTML === '') {
      icon34IMG.innerHTML = '<img src="../Icons/impLevelIcon32.png">'
      icon34Exist = false
    }

    if (icon1MatchIMG.innerHTML === '') {
      icon1MatchIMG.innerHTML = '<img src="../Icons/impLevelIcon1.png">'
      icon1MacthExist = false
    }
    if (icon2MatchIMG.innerHTML === '') {
      icon2MatchIMG.innerHTML = '<img src="../Icons/impLevelIcon2.png">'
      icon2MacthExist = false
    }

    if (icon3MatchIMG.innerHTML === '') {
      icon3MatchIMG.innerHTML = '<img src="../Icons/impLevelIcon3.png">'
      icon3MacthExist = false
    }
    if (icon4MatchIMG.innerHTML === '') {
      icon4MatchIMG.innerHTML = '<img src="../Icons/impLevelIcon4.png">'
      icon4MacthExist = false
    }
    if (icon5MatchIMG.innerHTML === '') {
      icon5MatchIMG.innerHTML = '<img src="../Icons/impLevelIcon5.png">'
      icon5MacthExist = false
    }
    if (icon6MatchIMG.innerHTML === '') {
      icon6MatchIMG.innerHTML = '<img src="../Icons/impLevelIcon6.png">'
      icon6MacthExist = false
    }
    if (icon8MatchIMG.innerHTML === '') {
      icon8MatchIMG.innerHTML = '<img src="../Icons/impLevelIcon7.png">'
      icon8MacthExist = false
    }
    if (icon10MatchIMG.innerHTML === '') {
      icon10MatchIMG.innerHTML = '<img src="../Icons/impLevelIcon8.png">'
      icon10MacthExist = false
    }
    if (icon11MatchIMG.innerHTML === '') {
      icon11MatchIMG.innerHTML = '<img src="../Icons/impLevelIcon9.png">'
      icon11MacthExist = false
    }
    if (icon12MatchIMG.innerHTML === '') {
      icon12MatchIMG.innerHTML = '<img src="../Icons/impLevelIcon10.png">'
      icon12MacthExist = false
    }
    if (icon13MatchIMG.innerHTML === '') {
      icon13MatchIMG.innerHTML = '<img src="../Icons/impLevelIcon11.png">'
      icon13MacthExist = false
    }
    if (icon14MatchIMG.innerHTML === '') {
      icon14MatchIMG.innerHTML = '<img src="../Icons/impLevelIcon12.png">'
      icon14MacthExist = false
    }

    if (icon15MatchIMG.innerHTML === '') {
      icon15MatchIMG.innerHTML = '<img src="../Icons/impLevelIcon13.png">'
      icon15MacthExist = false
    }
    if (icon16MatchIMG.innerHTML === '') {
      icon16MatchIMG.innerHTML = '<img src="../Icons/impLevelIcon14.png">'
      icon16MacthExist = false
    }
    if (icon17MatchIMG.innerHTML === '') {
      icon17MatchIMG.innerHTML = '<img src="../Icons/impLevelIcon15.png">'
      icon17MacthExist = false
    }
    if (icon18MatchIMG.innerHTML === '') {
      icon18MatchIMG.innerHTML = '<img src="../Icons/impLevelIcon16.png">'
      icon18MacthExist = false
    }
    if (icon19MatchIMG.innerHTML === '') {
      icon19MatchIMG.innerHTML = '<img src="../Icons/impLevelIcon17.png">'
      icon19MacthExist = false
    }
    if (icon20MatchIMG.innerHTML === '') {
      icon20MatchIMG.innerHTML = '<img src="../Icons/impLevelIcon18.png">'
      icon20MacthExist = false
    }
    if (icon21MatchIMG.innerHTML === '') {
      icon21MatchIMG.innerHTML = '<img src="../Icons/impLevelIcon19.png">'
      icon21MacthExist = false
    }
    if (icon22MatchIMG.innerHTML === '') {
      icon22MatchIMG.innerHTML = '<img src="../Icons/impLevelIcon20.png">'
      icon22MacthExist = false
    }

    if (icon23MatchIMG.innerHTML === '') {
      icon23MatchIMG.innerHTML = '<img src="../Icons/impLevelIcon21.png">'
      icon23MacthExist = false
    }
    if (icon24MatchIMG.innerHTML === '') {
      icon24MatchIMG.innerHTML = '<img src="../Icons/impLevelIcon22.png">'
      icon24MacthExist = false
    }
    if (icon25MatchIMG.innerHTML === '') {
      icon25MatchIMG.innerHTML = '<img src="../Icons/impLevelIcon23.png">'
      icon25MacthExist = false
    }
    if (icon26MatchIMG.innerHTML === '') {
      icon26MatchIMG.innerHTML = '<img src="../Icons/impLevelIcon24.png">'
      icon26MacthExist = false
    }
    if (icon27MatchIMG.innerHTML === '') {
      icon27MatchIMG.innerHTML = '<img src="../Icons/impLevelIcon25.png">'
      icon27MacthExist = false
    }

    if (icon28MatchIMG.innerHTML === '') {
      icon28MatchIMG.innerHTML = '<img src="../Icons/impLevelIcon26.png">'
      icon28MacthExist = false
    }
    if (icon29MatchIMG.innerHTML === '') {
      icon29MatchIMG.innerHTML = '<img src="../Icons/impLevelIcon27.png">'
      icon29MacthExist = false
    }
    if (icon30MatchIMG.innerHTML === '') {
      icon30MatchIMG.innerHTML = '<img src="../Icons/impLevelIcon28.png">'
      icon30MacthExist = false
    }
    if (icon31MatchIMG.innerHTML === '') {
      icon31MatchIMG.innerHTML = '<img src="../Icons/impLevelIcon29.png">'
      icon31MacthExist = false
    }
    if (icon32MatchIMG.innerHTML === '') {
      icon32MatchIMG.innerHTML = '<img src="../Icons/impLevelIcon30.png">'
      icon32MacthExist = false
    }
    if (icon33MatchIMG.innerHTML === '') {
      icon33MatchIMG.innerHTML = '<img src="../Icons/impLevelIcon31.png">'
      icon33MacthExist = false
    }
    if (icon34MatchIMG.innerHTML === '') {
      icon34MatchIMG.innerHTML = '<img src="../Icons/impLevelIcon32.png">'
      icon34MacthExist = false
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
    if (!icon21Exist) {
      icon21IMG.innerHTML = ''
    }

    if (!icon22Exist) {
      icon22IMG.innerHTML = ''
    }
    if (!icon23Exist) {
      icon23IMG.innerHTML = ''
    }
    if (!icon24Exist) {
      icon24IMG.innerHTML = ''
    }
    if (!icon25Exist) {
      icon25IMG.innerHTML = ''
    }
    if (!icon26Exist) {
      icon26IMG.innerHTML = ''
    }
    if (!icon27Exist) {
      icon27IMG.innerHTML = ''
    }
    if (!icon28Exist) {
      icon28IMG.innerHTML = ''
    }
    if (!icon29Exist) {
      icon29IMG.innerHTML = ''
    }
    if (!icon30Exist) {
      icon30IMG.innerHTML = ''
    }
    if (!icon31Exist) {
      icon31IMG.innerHTML = ''
    }
    if (!icon32Exist) {
      icon32IMG.innerHTML = ''
    }
    if (!icon33Exist) {
      icon33IMG.innerHTML = ''
    }
    if (!icon34Exist) {
      icon34IMG.innerHTML = ''
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
    if (!icon21MacthExist) {
      icon21MatchIMG.innerHTML = ''
    }

    if (!icon22MacthExist) {
      icon22MatchIMG.innerHTML = ''
    }
    if (!icon23MacthExist) {
      icon23MatchIMG.innerHTML = ''
    }
    if (!icon24MacthExist) {
      icon24MatchIMG.innerHTML = ''
    }
    if (!icon25MacthExist) {
      icon25MatchIMG.innerHTML = ''
    }
    if (!icon26MacthExist) {
      icon26MatchIMG.innerHTML = ''
    }
    if (!icon27MacthExist) {
      icon27MatchIMG.innerHTML = ''
    }
    if (!icon28MacthExist) {
      icon28MatchIMG.innerHTML = ''
    }
    if (!icon29MacthExist) {
      icon29MatchIMG.innerHTML = ''
    }
    if (!icon30MacthExist) {
      icon30MatchIMG.innerHTML = ''
    }
    if (!icon31MacthExist) {
      icon31MatchIMG.innerHTML = ''
    }
    if (!icon32MacthExist) {
      icon32MatchIMG.innerHTML = ''
    }
    if (!icon33MacthExist) {
      icon33MatchIMG.innerHTML = ''
    }
    if (!icon34MacthExist) {
      icon34MatchIMG.innerHTML = ''
    }
  }, 500)
}

function getTimer() {
  let timer = 140
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
  }, 500)
}
getTimer()
icon1.addEventListener('click', () => {
  icon1IMG.innerHTML = '<img src="../Icons/impLevelIcon1.png">'
  let icon1Interval = 0
  icon1Interval = setInterval(() => {
    if (icon1MatchIMG.innerHTML == '<img src="../Icons/impLevelIcon1.png">') {
      icon1IMG.innerHTML = '<img src="../Icons/impLevelIcon1.png">'
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
  icon2IMG.innerHTML = '<img src="../Icons/impLevelIcon2.png">'
  let icon2Interval = 0
  icon2Interval = setInterval(() => {
    if (icon2MatchIMG.innerHTML == '<img src="../Icons/impLevelIcon2.png">') {
      icon2IMG.innerHTML = '<img src="../Icons/impLevelIcon2.png">'
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
  icon3IMG.innerHTML = '<img src="../Icons/impLevelIcon3.png">'
  let icon3Interval = 0

  icon3Interval = setInterval(() => {
    if (icon3MatchIMG.innerHTML == '<img src="../Icons/impLevelIcon3.png">') {
      icon3IMG.innerHTML = '<img src="../Icons/impLevelIcon3.png">'
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
  icon4IMG.innerHTML = '<img src="../Icons/impLevelIcon4.png">'
  let icon4Interval = 0

  icon4Interval = setInterval(() => {
    if (icon4MatchIMG.innerHTML == '<img src="../Icons/impLevelIcon4.png">') {
      icon4IMG.innerHTML = '<img src="../Icons/impLevelIcon4.png">'
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
  icon5IMG.innerHTML = '<img src="../Icons/impLevelIcon5.png">'
  let icon5Interval = 0

  icon5Interval = setInterval(() => {
    if (icon5MatchIMG.innerHTML == '<img src="../Icons/impLevelIcon5.png">') {
      icon5IMG.innerHTML = '<img src="../Icons/impLevelIcon5.png">'
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
  icon6IMG.innerHTML = '<img src="../Icons/impLevelIcon6.png">'
  let icon6Interval = 0

  icon6Interval = setInterval(() => {
    if (icon6MatchIMG.innerHTML == '<img src="../Icons/impLevelIcon6.png">') {
      icon6IMG.innerHTML = '<img src="../Icons/impLevelIcon6.png">'
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
  icon8IMG.innerHTML = '<img src="../Icons/impLevelIcon7.png">'
  let icon8Interval = 0

  icon8Interval = setInterval(() => {
    if (icon8MatchIMG.innerHTML == '<img src="../Icons/impLevelIcon7.png">') {
      icon8IMG.innerHTML = '<img src="../Icons/impLevelIcon7.png">'
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
  icon10IMG.innerHTML = '<img src="../Icons/impLevelIcon8.png">'
  let icon10Interval = 0

  icon10Interval = setInterval(() => {
    if (icon10MatchIMG.innerHTML == '<img src="../Icons/impLevelIcon8.png">') {
      icon10IMG.innerHTML = '<img src="../Icons/impLevelIcon8.png">'
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
  icon11IMG.innerHTML = '<img src="../Icons/impLevelIcon9.png">'
  let icon11Interval = 0

  icon11Interval = setInterval(() => {
    if (icon11MatchIMG.innerHTML == '<img src="../Icons/impLevelIcon9.png">') {
      icon11IMG.innerHTML = '<img src="../Icons/impLevelIcon9.png">'
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
  icon12IMG.innerHTML = '<img src="../Icons/impLevelIcon10.png">'
  let icon12Interval = 0

  icon12Interval = setInterval(() => {
    if (icon12MatchIMG.innerHTML == '<img src="../Icons/impLevelIcon10.png">') {
      icon12IMG.innerHTML = '<img src="../Icons/impLevelIcon10.png">'
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
  icon13IMG.innerHTML = '<img src="../Icons/impLevelIcon11.png">'
  let icon13Interval = 0

  icon13Interval = setInterval(() => {
    if (icon13MatchIMG.innerHTML == '<img src="../Icons/impLevelIcon11.png">') {
      icon13IMG.innerHTML = '<img src="../Icons/impLevelIcon11.png">'
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
  icon14IMG.innerHTML = '<img src="../Icons/impLevelIcon12.png">'
  let icon14Interval = 0

  icon14Interval = setInterval(() => {
    if (icon14MatchIMG.innerHTML == '<img src="../Icons/impLevelIcon12.png">') {
      icon14IMG.innerHTML = '<img src="../Icons/impLevelIcon12.png">'
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
  icon15IMG.innerHTML = '<img src="../Icons/impLevelIcon13.png">'
  let icon15Interval = 0

  icon15Interval = setInterval(() => {
    if (icon15MatchIMG.innerHTML == '<img src="../Icons/impLevelIcon13.png">') {
      icon15IMG.innerHTML = '<img src="../Icons/impLevelIcon13.png">'
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
  icon16IMG.innerHTML = '<img src="../Icons/impLevelIcon14.png">'
  let icon16Interval = 0

  icon16Interval = setInterval(() => {
    if (icon16MatchIMG.innerHTML == '<img src="../Icons/impLevelIcon14.png">') {
      icon16IMG.innerHTML = '<img src="../Icons/impLevelIcon14.png">'
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
  icon17IMG.innerHTML = '<img src="../Icons/impLevelIcon15.png">'
  let icon17Interval = 0

  icon17Interval = setInterval(() => {
    if (icon17MatchIMG.innerHTML == '<img src="../Icons/impLevelIcon15.png">') {
      icon17IMG.innerHTML = '<img src="../Icons/impLevelIcon15.png">'
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
  icon18IMG.innerHTML = '<img src="../Icons/impLevelIcon16.png">'
  let icon18Interval = 0

  icon18Interval = setInterval(() => {
    if (icon18MatchIMG.innerHTML == '<img src="../Icons/impLevelIcon16.png">') {
      icon18IMG.innerHTML = '<img src="../Icons/impLevelIcon16.png">'
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
  icon19IMG.innerHTML = '<img src="../Icons/impLevelIcon17.png">'
  let icon19Interval = 0

  icon19Interval = setInterval(() => {
    if (icon19MatchIMG.innerHTML == '<img src="../Icons/impLevelIcon17.png">') {
      icon19IMG.innerHTML = '<img src="../Icons/impLevelIcon17.png">'
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
  icon20IMG.innerHTML = '<img src="../Icons/impLevelIcon18.png">'
  let icon20Interval = 0

  icon20Interval = setInterval(() => {
    if (icon20MatchIMG.innerHTML == '<img src="../Icons/impLevelIcon18.png">') {
      icon20IMG.innerHTML = '<img src="../Icons/impLevelIcon18.png">'
      clearInterval(icon20Interval)
      Win--
      CheckWin()
    } else {
      icon20IMG.innerHTML = ''
      clearInterval(icon20Interval)
    }
  }, 2000)
})
icon21.addEventListener('click', () => {
  icon21IMG.innerHTML = '<img src="../Icons/impLevelIcon19.png">'
  let icon21Interval = 0

  icon21Interval = setInterval(() => {
    if (icon21MatchIMG.innerHTML == '<img src="../Icons/impLevelIcon19.png">') {
      icon21IMG.innerHTML = '<img src="../Icons/impLevelIcon19.png">'
      clearInterval(icon21Interval)
      Win--
      CheckWin()
    } else {
      icon21IMG.innerHTML = ''
      clearInterval(icon21Interval)
    }
  }, 2000)
})

icon22.addEventListener('click', () => {
  icon22IMG.innerHTML = '<img src="../Icons/impLevelIcon20.png">'
  let icon22Interval = 0

  icon22Interval = setInterval(() => {
    if (icon22MatchIMG.innerHTML == '<img src="../Icons/impLevelIcon20.png">') {
      icon22IMG.innerHTML = '<img src="../Icons/impLevelIcon20.png">'
      clearInterval(icon22Interval)
      Win--
      CheckWin()
    } else {
      icon22IMG.innerHTML = ''
      clearInterval(icon22Interval)
    }
  }, 2000)
})

icon23.addEventListener('click', () => {
  icon23IMG.innerHTML = '<img src="../Icons/impLevelIcon21.png">'
  let icon23Interval = 0

  icon23Interval = setInterval(() => {
    if (icon23MatchIMG.innerHTML == '<img src="../Icons/impLevelIcon21.png">') {
      icon23IMG.innerHTML = '<img src="../Icons/impLevelIcon21.png">'
      clearInterval(icon23Interval)
      Win--
      CheckWin()
    } else {
      icon23IMG.innerHTML = ''
      clearInterval(icon23Interval)
    }
  }, 2000)
})

icon24.addEventListener('click', () => {
  icon24IMG.innerHTML = '<img src="../Icons/impLevelIcon22.png">'
  let icon24Interval = 0

  icon24Interval = setInterval(() => {
    if (icon24MatchIMG.innerHTML == '<img src="../Icons/impLevelIcon22.png">') {
      icon24IMG.innerHTML = '<img src="../Icons/impLevelIcon22.png">'
      clearInterval(icon24Interval)
      Win--
      CheckWin()
    } else {
      icon24IMG.innerHTML = ''
      clearInterval(icon24Interval)
    }
  }, 2000)
})

icon25.addEventListener('click', () => {
  icon25IMG.innerHTML = '<img src="../Icons/impLevelIcon23.png">'
  let icon25Interval = 0

  icon25Interval = setInterval(() => {
    if (icon25MatchIMG.innerHTML == '<img src="../Icons/impLevelIcon23.png">') {
      icon25IMG.innerHTML = '<img src="../Icons/impLevelIcon23.png">'
      clearInterval(icon25Interval)
      Win--
      CheckWin()
    } else {
      icon25IMG.innerHTML = ''
      clearInterval(icon25Interval)
    }
  }, 2000)
})

icon26.addEventListener('click', () => {
  icon26IMG.innerHTML = '<img src="../Icons/impLevelIcon24.png">'
  let icon26Interval = 0

  icon26Interval = setInterval(() => {
    if (icon26MatchIMG.innerHTML == '<img src="../Icons/impLevelIcon24.png">') {
      icon26IMG.innerHTML = '<img src="../Icons/impLevelIcon24.png">'
      clearInterval(icon26Interval)
      Win--
      CheckWin()
    } else {
      icon26IMG.innerHTML = ''
      clearInterval(icon26Interval)
    }
  }, 2000)
})

icon27.addEventListener('click', () => {
  icon27IMG.innerHTML = '<img src="../Icons/impLevelIcon25.png">'
  let icon27Interval = 0

  icon27Interval = setInterval(() => {
    if (icon27MatchIMG.innerHTML == '<img src="../Icons/impLevelIcon25.png">') {
      icon27IMG.innerHTML = '<img src="../Icons/impLevelIcon25.png">'
      clearInterval(icon27Interval)
      Win--
      CheckWin()
    } else {
      icon27IMG.innerHTML = ''
      clearInterval(icon27Interval)
    }
  }, 2000)
})

icon28.addEventListener('click', () => {
  icon28IMG.innerHTML = '<img src="../Icons/impLevelIcon26.png">'
  let icon28Interval = 0

  icon28Interval = setInterval(() => {
    if (icon28MatchIMG.innerHTML == '<img src="../Icons/impLevelIcon26.png">') {
      icon28IMG.innerHTML = '<img src="../Icons/impLevelIcon26.png">'
      clearInterval(icon28Interval)
      Win--
      CheckWin()
    } else {
      icon28IMG.innerHTML = ''
      clearInterval(icon28Interval)
    }
  }, 2000)
})

icon29.addEventListener('click', () => {
  icon29IMG.innerHTML = '<img src="../Icons/impLevelIcon27.png">'
  let icon29Interval = 0

  icon29Interval = setInterval(() => {
    if (icon29MatchIMG.innerHTML == '<img src="../Icons/impLevelIcon27.png">') {
      icon29IMG.innerHTML = '<img src="../Icons/impLevelIcon27.png">'
      clearInterval(icon29Interval)
      Win--
      CheckWin()
    } else {
      icon29IMG.innerHTML = ''
      clearInterval(icon29Interval)
    }
  }, 2000)
})

icon30.addEventListener('click', () => {
  icon30IMG.innerHTML = '<img src="../Icons/impLevelIcon28.png">'
  let icon30Interval = 0

  icon30Interval = setInterval(() => {
    if (icon30MatchIMG.innerHTML == '<img src="../Icons/impLevelIcon28.png">') {
      icon30IMG.innerHTML = '<img src="../Icons/impLevelIcon28.png">'
      clearInterval(icon30Interval)
      Win--
      CheckWin()
    } else {
      icon30IMG.innerHTML = ''
      clearInterval(icon30Interval)
    }
  }, 2000)
})

icon31.addEventListener('click', () => {
  icon31IMG.innerHTML = '<img src="../Icons/impLevelIcon29.png">'
  let icon31Interval = 0

  icon31Interval = setInterval(() => {
    if (icon31MatchIMG.innerHTML == '<img src="../Icons/impLevelIcon29.png">') {
      icon31IMG.innerHTML = '<img src="../Icons/impLevelIcon29.png">'
      clearInterval(icon31Interval)
      Win--
      CheckWin()
    } else {
      icon31IMG.innerHTML = ''
      clearInterval(icon31Interval)
    }
  }, 2000)
})

icon32.addEventListener('click', () => {
  icon32IMG.innerHTML = '<img src="../Icons/impLevelIcon30.png">'
  let icon32Interval = 0

  icon32Interval = setInterval(() => {
    if (icon32MatchIMG.innerHTML == '<img src="../Icons/impLevelIcon30.png">') {
      icon32IMG.innerHTML = '<img src="../Icons/impLevelIcon30.png">'
      clearInterval(icon32Interval)
      Win--
      CheckWin()
    } else {
      icon32IMG.innerHTML = ''
      clearInterval(icon32Interval)
    }
  }, 2000)
})

icon33.addEventListener('click', () => {
  icon33IMG.innerHTML = '<img src="../Icons/impLevelIcon31.png">'
  let icon33Interval = 0

  icon33Interval = setInterval(() => {
    if (icon33MatchIMG.innerHTML == '<img src="../Icons/impLevelIcon31.png">') {
      icon33IMG.innerHTML = '<img src="../Icons/impLevelIcon31.png">'
      clearInterval(icon33Interval)
      Win--
      CheckWin()
    } else {
      icon33IMG.innerHTML = ''
      clearInterval(icon33Interval)
    }
  }, 2000)
})

icon34.addEventListener('click', () => {
  icon34IMG.innerHTML = '<img src="../Icons/impLevelIcon32.png">'
  let icon34Interval = 0

  icon34Interval = setInterval(() => {
    if (icon34MatchIMG.innerHTML == '<img src="../Icons/impLevelIcon32.png">') {
      icon34IMG.innerHTML = '<img src="../Icons/impLevelIcon32.png">'
      clearInterval(icon34Interval)
      Win--
      CheckWin()
    } else {
      icon34IMG.innerHTML = ''
      clearInterval(icon34Interval)
    }
  }, 2000)
})

icon1Match.addEventListener('click', () => {
  icon1MatchIMG.innerHTML = '<img src="../Icons/impLevelIcon1.png">'
  let icon1MtachInterval = 0

  icon1MtachInterval = setInterval(() => {
    if (icon1IMG.innerHTML == '<img src="../Icons/impLevelIcon1.png">') {
      icon1MatchIMG.innerHTML = '<img src="../Icons/impLevelIcon1.png">'
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
  icon2MatchIMG.innerHTML = '<img src="../Icons/impLevelIcon2.png">'
  let icon2MtachInterval = 0
  icon2MtachInterval = setInterval(() => {
    if (icon2IMG.innerHTML == '<img src="../Icons/impLevelIcon2.png">') {
      icon2MatchIMG.innerHTML = '<img src="../Icons/impLevelIcon2.png">'
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
  icon3MatchIMG.innerHTML = '<img src="../Icons/impLevelIcon3.png">'
  let icon3MtachInterval = 0

  icon3MtachInterval = setInterval(() => {
    if (icon3IMG.innerHTML == '<img src="../Icons/impLevelIcon3.png">') {
      icon3MatchIMG.innerHTML = '<img src="../Icons/impLevelIcon3.png">'
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
  icon4MatchIMG.innerHTML = '<img src="../Icons/impLevelIcon4.png">'
  let icon4MtachInterval = 0
  icon4MtachInterval = setInterval(() => {
    if (icon4IMG.innerHTML == '<img src="../Icons/impLevelIcon4.png">') {
      icon4MatchIMG.innerHTML = '<img src="../Icons/impLevelIcon4.png">'
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
  icon5MatchIMG.innerHTML = '<img src="../Icons/impLevelIcon5.png">'
  let icon5MtachInterval = 0

  icon5MtachInterval = setInterval(() => {
    if (icon5IMG.innerHTML == '<img src="../Icons/impLevelIcon5.png">') {
      icon5MatchIMG.innerHTML = '<img src="../Icons/impLevelIcon5.png">'
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
  icon6MatchIMG.innerHTML = '<img src="../Icons/impLevelIcon6.png">'
  let icon6MtachInterval = 0
  icon6MtachInterval = setInterval(() => {
    if (icon6IMG.innerHTML == '<img src="../Icons/impLevelIcon6.png">') {
      icon6MatchIMG.innerHTML = '<img src="../Icons/impLevelIcon6.png">'
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
  icon8MatchIMG.innerHTML = '<img src="../Icons/impLevelIcon7.png">'
  let icon8MtachInterval = 0
  icon8MtachInterval = setInterval(() => {
    if (icon8IMG.innerHTML == '<img src="../Icons/impLevelIcon7.png">') {
      icon8MatchIMG.innerHTML = '<img src="../Icons/impLevelIcon7.png">'
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
  icon10MatchIMG.innerHTML = '<img src="../Icons/impLevelIcon8.png">'
  let icon10MtachInterval = 0

  icon10MtachInterval = setInterval(() => {
    if (icon10IMG.innerHTML == '<img src="../Icons/impLevelIcon8.png">') {
      icon10MatchIMG.innerHTML = '<img src="../Icons/impLevelIcon8.png">'
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
  icon11MatchIMG.innerHTML = '<img src="../Icons/impLevelIcon9.png">'
  let icon11MtachInterval = 0

  icon11MtachInterval = setInterval(() => {
    if (icon11IMG.innerHTML == '<img src="../Icons/impLevelIcon9.png">') {
      icon11MatchIMG.innerHTML = '<img src="../Icons/impLevelIcon9.png">'
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
  icon12MatchIMG.innerHTML = '<img src="../Icons/impLevelIcon10.png">'
  let icon12MtachInterval = 0

  icon12MtachInterval = setInterval(() => {
    if (icon12IMG.innerHTML == '<img src="../Icons/impLevelIcon10.png">') {
      icon12MatchIMG.innerHTML = '<img src="../Icons/impLevelIcon10.png">'
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
  icon13MatchIMG.innerHTML = '<img src="../Icons/impLevelIcon11.png">'
  let icon13MtachInterval = 0

  icon13MtachInterval = setInterval(() => {
    if (icon13IMG.innerHTML == '<img src="../Icons/impLevelIcon11.png">') {
      icon13MatchIMG.innerHTML = '<img src="../Icons/impLevelIcon11.png">'
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
  icon14MatchIMG.innerHTML = '<img src="../Icons/impLevelIcon12.png">'
  let icon14MtachInterval = 0

  icon14MtachInterval = setInterval(() => {
    if (icon14IMG.innerHTML == '<img src="../Icons/impLevelIcon12.png">') {
      icon14MatchIMG.innerHTML = '<img src="../Icons/impLevelIcon12.png">'
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
  icon15MatchIMG.innerHTML = '<img src="../Icons/impLevelIcon13.png">'
  let icon15MtachInterval = 0

  icon15MtachInterval = setInterval(() => {
    if (icon15IMG.innerHTML == '<img src="../Icons/impLevelIcon13.png">') {
      icon15MatchIMG.innerHTML = '<img src="../Icons/impLevelIcon13.png">'
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
  icon16MatchIMG.innerHTML = '<img src="../Icons/impLevelIcon14.png">'
  let icon16MtachInterval = 0

  icon16MtachInterval = setInterval(() => {
    if (icon16IMG.innerHTML == '<img src="../Icons/impLevelIcon14.png">') {
      icon16MatchIMG.innerHTML = '<img src="../Icons/impLevelIcon14.png">'
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
  icon17MatchIMG.innerHTML = '<img src="../Icons/impLevelIcon15.png">'
  let icon17MtachInterval = 0

  icon17MtachInterval = setInterval(() => {
    if (icon17IMG.innerHTML == '<img src="../Icons/impLevelIcon15.png">') {
      icon17MatchIMG.innerHTML = '<img src="../Icons/impLevelIcon15.png">'
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
  icon18MatchIMG.innerHTML = '<img src="../Icons/impLevelIcon16.png">'
  let icon18MtachInterval = 0

  icon18MtachInterval = setInterval(() => {
    if (icon18IMG.innerHTML == '<img src="../Icons/impLevelIcon16.png">') {
      icon18MatchIMG.innerHTML = '<img src="../Icons/impLevelIcon16.png">'
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
  icon19MatchIMG.innerHTML = '<img src="../Icons/impLevelIcon17.png">'
  let icon19MtachInterval = 0

  icon19MtachInterval = setInterval(() => {
    if (icon19IMG.innerHTML == '<img src="../Icons/impLevelIcon17.png">') {
      icon19MatchIMG.innerHTML = '<img src="../Icons/impLevelIcon17.png">'
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
  icon20MatchIMG.innerHTML = '<img src="../Icons/impLevelIcon18.png">'
  let icon20MtachInterval = 0

  icon20MtachInterval = setInterval(() => {
    if (icon20IMG.innerHTML == '<img src="../Icons/impLevelIcon18.png">') {
      icon20MatchIMG.innerHTML = '<img src="../Icons/impLevelIcon18.png">'
      clearInterval(icon20MtachInterval)
      Win--
      CheckWin()
    } else {
      icon20MatchIMG.innerHTML = ''
      clearInterval(icon20MtachInterval)
    }
  }, 2000)
})

icon21Match.addEventListener('click', () => {
  icon21MatchIMG.innerHTML = '<img src="../Icons/impLevelIcon19.png">'
  let icon21MtachInterval = 0

  icon21MtachInterval = setInterval(() => {
    if (icon21IMG.innerHTML == '<img src="../Icons/impLevelIcon19.png">') {
      icon21MatchIMG.innerHTML = '<img src="../Icons/impLevelIcon19.png">'
      clearInterval(icon21MtachInterval)
      Win--
      CheckWin()
    } else {
      icon21MatchIMG.innerHTML = ''
      clearInterval(icon21MtachInterval)
    }
  }, 2000)
})

icon22Match.addEventListener('click', () => {
  icon22MatchIMG.innerHTML = '<img src="../Icons/impLevelIcon20.png">'
  let icon22MtachInterval = 0

  icon22MtachInterval = setInterval(() => {
    if (icon22IMG.innerHTML == '<img src="../Icons/impLevelIcon20.png">') {
      icon22MatchIMG.innerHTML = '<img src="../Icons/impLevelIcon20.png">'
      clearInterval(icon22MtachInterval)
      Win--
      CheckWin()
    } else {
      icon22MatchIMG.innerHTML = ''
      clearInterval(icon22MtachInterval)
    }
  }, 2000)
})
icon23Match.addEventListener('click', () => {
  icon23MatchIMG.innerHTML = '<img src="../Icons/impLevelIcon21.png">'
  let icon23MtachInterval = 0

  icon23MtachInterval = setInterval(() => {
    if (icon23IMG.innerHTML == '<img src="../Icons/impLevelIcon21.png">') {
      icon23MatchIMG.innerHTML = '<img src="../Icons/impLevelIcon21.png">'
      clearInterval(icon23MtachInterval)
      Win--
      CheckWin()
    } else {
      icon23MatchIMG.innerHTML = ''
      clearInterval(icon23MtachInterval)
    }
  }, 2000)
})
icon24Match.addEventListener('click', () => {
  icon24MatchIMG.innerHTML = '<img src="../Icons/impLevelIcon22.png">'
  let icon24MtachInterval = 0

  icon24MtachInterval = setInterval(() => {
    if (icon24IMG.innerHTML == '<img src="../Icons/impLevelIcon22.png">') {
      icon24MatchIMG.innerHTML = '<img src="../Icons/impLevelIcon22.png">'
      clearInterval(icon24MtachInterval)
      Win--
      CheckWin()
    } else {
      icon24MatchIMG.innerHTML = ''
      clearInterval(icon24MtachInterval)
    }
  }, 2000)
})
icon25Match.addEventListener('click', () => {
  icon25MatchIMG.innerHTML = '<img src="../Icons/impLevelIcon23.png">'
  let icon25MtachInterval = 0

  icon25MtachInterval = setInterval(() => {
    if (icon25IMG.innerHTML == '<img src="../Icons/impLevelIcon23.png">') {
      icon25MatchIMG.innerHTML = '<img src="../Icons/impLevelIcon23.png">'
      clearInterval(icon25MtachInterval)
      Win--
      CheckWin()
    } else {
      icon25MatchIMG.innerHTML = ''
      clearInterval(icon25MtachInterval)
    }
  }, 2000)
})
icon26Match.addEventListener('click', () => {
  icon26MatchIMG.innerHTML = '<img src="../Icons/impLevelIcon24.png">'
  let icon26MtachInterval = 0

  icon26MtachInterval = setInterval(() => {
    if (icon26IMG.innerHTML == '<img src="../Icons/impLevelIcon24.png">') {
      icon26MatchIMG.innerHTML = '<img src="../Icons/impLevelIcon24.png">'
      clearInterval(icon26MtachInterval)
      Win--
      CheckWin()
    } else {
      icon26MatchIMG.innerHTML = ''
      clearInterval(icon26MtachInterval)
    }
  }, 2000)
})
icon27Match.addEventListener('click', () => {
  icon27MatchIMG.innerHTML = '<img src="../Icons/impLevelIcon25.png">'
  let icon27MtachInterval = 0

  icon27MtachInterval = setInterval(() => {
    if (icon27IMG.innerHTML == '<img src="../Icons/impLevelIcon25.png">') {
      icon27MatchIMG.innerHTML = '<img src="../Icons/impLevelIcon25.png">'
      clearInterval(icon27MtachInterval)
      Win--
      CheckWin()
    } else {
      icon27MatchIMG.innerHTML = ''
      clearInterval(icon27MtachInterval)
    }
  }, 2000)
})
icon28Match.addEventListener('click', () => {
  icon28MatchIMG.innerHTML = '<img src="../Icons/impLevelIcon26.png">'
  let icon28MtachInterval = 0

  icon28MtachInterval = setInterval(() => {
    if (icon28IMG.innerHTML == '<img src="../Icons/impLevelIcon26.png">') {
      icon28MatchIMG.innerHTML = '<img src="../Icons/impLevelIcon26.png">'
      clearInterval(icon28MtachInterval)
      Win--
      CheckWin()
    } else {
      icon28MatchIMG.innerHTML = ''
      clearInterval(icon28MtachInterval)
    }
  }, 2000)
})
icon29Match.addEventListener('click', () => {
  icon29MatchIMG.innerHTML = '<img src="../Icons/impLevelIcon27.png">'
  let icon29MtachInterval = 0

  icon29MtachInterval = setInterval(() => {
    if (icon29IMG.innerHTML == '<img src="../Icons/impLevelIcon27.png">') {
      icon29MatchIMG.innerHTML = '<img src="../Icons/impLevelIcon27.png">'
      clearInterval(icon29MtachInterval)
      Win--
      CheckWin()
    } else {
      icon29MatchIMG.innerHTML = ''
      clearInterval(icon29MtachInterval)
    }
  }, 2000)
})
icon30Match.addEventListener('click', () => {
  icon30MatchIMG.innerHTML = '<img src="../Icons/impLevelIcon28.png">'
  let icon30MtachInterval = 0

  icon30MtachInterval = setInterval(() => {
    if (icon30IMG.innerHTML == '<img src="../Icons/impLevelIcon28.png">') {
      icon30MatchIMG.innerHTML = '<img src="../Icons/impLevelIcon28.png">'
      clearInterval(icon30MtachInterval)
      Win--
      CheckWin()
    } else {
      icon30MatchIMG.innerHTML = ''
      clearInterval(icon30MtachInterval)
    }
  }, 2000)
})
icon31Match.addEventListener('click', () => {
  icon31MatchIMG.innerHTML = '<img src="../Icons/impLevelIcon29.png">'
  let icon31MtachInterval = 0

  icon31MtachInterval = setInterval(() => {
    if (icon31IMG.innerHTML == '<img src="../Icons/impLevelIcon29.png">') {
      icon31MatchIMG.innerHTML = '<img src="../Icons/impLevelIcon29.png">'
      clearInterval(icon31MtachInterval)
      Win--
      CheckWin()
    } else {
      icon31MatchIMG.innerHTML = ''
      clearInterval(icon31MtachInterval)
    }
  }, 2000)
})
icon32Match.addEventListener('click', () => {
  icon32MatchIMG.innerHTML = '<img src="../Icons/impLevelIcon30.png">'
  let icon32MtachInterval = 0

  icon32MtachInterval = setInterval(() => {
    if (icon32IMG.innerHTML == '<img src="../Icons/impLevelIcon30.png">') {
      icon32MatchIMG.innerHTML = '<img src="../Icons/impLevelIcon30.png">'
      clearInterval(icon32MtachInterval)
      Win--
      CheckWin()
    } else {
      icon32MatchIMG.innerHTML = ''
      clearInterval(icon32MtachInterval)
    }
  }, 2000)
})
icon33Match.addEventListener('click', () => {
  icon33MatchIMG.innerHTML = '<img src="../Icons/impLevelIcon31.png">'
  let icon33MtachInterval = 0

  icon33MtachInterval = setInterval(() => {
    if (icon33IMG.innerHTML == '<img src="../Icons/impLevelIcon31.png">') {
      icon33MatchIMG.innerHTML = '<img src="../Icons/impLevelIcon31.png">'
      clearInterval(icon33MtachInterval)
      Win--
      CheckWin()
    } else {
      icon33MatchIMG.innerHTML = ''
      clearInterval(icon33MtachInterval)
    }
  }, 2000)
})
icon34Match.addEventListener('click', () => {
  icon34MatchIMG.innerHTML = '<img src="../Icons/impLevelIcon32.png">'
  let icon34MtachInterval = 0

  icon34MtachInterval = setInterval(() => {
    if (icon34IMG.innerHTML == '<img src="../Icons/impLevelIcon32.png">') {
      icon34MatchIMG.innerHTML = '<img src="../Icons/impLevelIcon32.png">'
      clearInterval(icon34MtachInterval)
      Win--
      CheckWin()
    } else {
      icon34MatchIMG.innerHTML = ''
      clearInterval(icon34MtachInterval)
    }
  }, 2000)
})
