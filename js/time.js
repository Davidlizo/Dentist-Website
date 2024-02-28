var datetime = new Date().getDate();
console.log(datetime); // it will represent date in the console of developers tool
document.getElementById("time").textContent = datetime; //it will print on html pag
function refreshTime() {
    const timeDisplay = document.getElementById("time");
    const dateString = new Date().toLocaleString();
    const formattedString = dateString.replace(", ", " - ");
    timeDisplay.textContent = formattedString;
  }
setInterval(refreshTime, 1000);