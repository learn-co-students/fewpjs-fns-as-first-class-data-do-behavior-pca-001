/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(timeString) {
  let hourStr = timeString.split(":")[0]
  let hour = parseInt(hourStr)
  let msg = ""

  if (hour < 12) {

    msg = "Good Morning"
  }
  else if (hour < 17) {
    msg = "Good Afternoon"
  }
  else {
    msg = "Good Evening"
  }

 return msg
}
/* Write your implementation of displayMessage() */

function displayMessage(msg) {
  document.getElementById("greeting").innerText = msg
}