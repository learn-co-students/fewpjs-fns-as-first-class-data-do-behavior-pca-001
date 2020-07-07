/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
const greet = (stringTime) => {
  const number = parseInt(stringTime.split(":")[0]);
  let ans = "";
  if(number > 0 && number < 12){
    ans = 'Morning';
  }else if(number >= 12 && number < 19){
    ans = 'Afternoon';
  } else {
    ans = 'Evening';
  }
  return 'Good ' + ans;
}
/* Write your implementation of displayMessage() */
const displayMessage = (string) => document.getElementById("greeting").innerText = string;
