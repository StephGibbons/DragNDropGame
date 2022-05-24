var score = 0;

const timer = document.getElementById("timer");
let timerInterval;

startTimer = () => {
  // Firs twe start by clearing the existing timer, in case of a restart
  clearInterval(timerInterval);
  // Then we clear the variables
  let second = 0,
    minute = 0,
    hour = 0;

  // Next we set a interval every 1000 ms
  timerInterval = setInterval(function () {
    // Toggle the odd class every interval
timer.classList.toggle('odd');

    // We set the timer text to include a two digit representation
    timer.innerHTML =
      (hour ? hour + ":" : "") +
      (minute < 10 ? "0" + minute : minute) +
      ":" +
      (second < 10 ? "0" + second : second);

    // Next we add a new second since one second is passed
    second++;

    // We check if the second equals 60 "one minute"
    if (second == 60) {
      // If so, we add a minute and reset our seconds to 0
      minute++;
      second = 0;
    }

    // If we hit 60 minutes "one hour" we reset the minutes and plus an hour
    if (minute == 60) {
      hour++;
      minute = 0;
    }
  }, 1000);
};










//old code

//orange
    orangeBlock.addEventListener('dragover', dragOver);
    orangeBlock.addEventListener('dragenter', dragEnter);
    orangeBlock.addEventListener('dragleave', dragLeaveOrange);
    orangeBlock.addEventListener('drop', dragDropOrange);


//Drag Functions
function dragStart(e){
    this.className += ' hold';
    setTimeout(()=>(this.className = 'invisible'),0);
    e.dataTransfer.setData("id", e.target.id);
    //winningMessageElement.classList.remove('show');
}

function dragEnd(){
    this.className = 'circle';
} 

function dragOver(e){
    e.preventDefault();
    this.classList.add('grow');
}

function dragEnter(e){
    e.preventDefault();

}

//orange
function dragLeaveOrange(){
    this.className = 'ColorOrange';
}

function dragDropOrange(e){
    if(mouseOver = "orangeBlock"){
        var elementId = e.dataTransfer.getData("id");
        if(elementId === "circleorange"){
    this.className = 'ColorOrange';
    this.append(circleorange);
    score++; 
    console.log(score); 

    if (score===6){
        alert("You won the game, congratulations!");
        console.log(score);
    }

        }
    }
}




