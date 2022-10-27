let rangeTracker = [1, 2]
let totalPointsTracker = [0]

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

document.getElementById('continueBtn').onclick = function() {
  let username = document.getElementById("newUsername").value
  if (username != '') {
    document.querySelector('.usernameCon').style.display = 'none'
    document.querySelector('.userInfo').style.display = 'flex'
    document.querySelector('.gameCon').style.display = 'flex'
    document.getElementById("username").innerHTML = `Hello ${username}, this is stage ${totalPointsTracker[0] + 1}`
    document.getElementById("totalPoints").innerHTML = `Total Points: ${totalPointsTracker[0]}`
    document.getElementById("title").innerHTML = `Guess a number between ${rangeTracker[0]} and ${rangeTracker[1]}`
  }
}

const randomInt = randomIntFromInterval(rangeTracker[0], rangeTracker[1])

document.getElementById('guessBtn').onclick = function() {
  let userGuess = document.getElementById("userGuess").value
  if (userGuess != '') {
    if (userGuess == randomInt) {
      document.getElementById("status").innerHTML = `Correct!`
      document.getElementById("status").style.color = 'forestgreen'
      const previousMaxRange = rangeTracker[1]
      rangeTracker[1] = previousMaxRange + 1
      const previousTotalPoints = totalPointsTracker[0]
      totalPointsTracker[0] = previousTotalPoints + 1
      success()
    } else {
      document.getElementById("userGuess").value = ''
      document.getElementById("status").innerHTML = `Incorrect, guess again!`
      document.getElementById("status").style.color = 'red'
    }
  } else if (userGuess == '') {
    document.getElementById("status").innerHTML = `Please guess a number!`
    document.getElementById("status").style.color = 'red'
  }
}

function success() {
  let username = document.getElementById("newUsername").value
  document.getElementById("userGuess").value = ''
  document.getElementById("username").innerHTML = `Hello ${username}, this is stage ${totalPointsTracker[0] + 1}`
  document.getElementById("totalPoints").innerHTML = `Total Points: ${totalPointsTracker[0]}`
  document.getElementById("title").innerHTML = `Guess a number between ${rangeTracker[0]} and ${rangeTracker[1]}`
}