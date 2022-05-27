var score = 0;

var min;
var sec
var ms
var count
var malt
var salt
var msalt;

const redPepper = document.getElementById('redPepper');
const bacon = document.getElementById('bacon');
const eggs = document.getElementById('eggs');
const greenPepper = document.getElementById('greenPepper');
const blackPepper = document.getElementById('blackPepper');
const garlic = document.getElementById('garlic');
const tomato = document.getElementById('tomato');
const butter = document.getElementById('butter');
const parm = document.getElementById('parm');
const heavyCream = document.getElementById('heavyCream');
const basil = document.getElementById('basil');
const honey = document.getElementById('honey');
const spaghetti = document.getElementById('spaghetti');
const cucumber = document.getElementById('cucumber');
const oil = document.getElementById('oil');
const rotini = document.getElementById('rotini');

const shoppingCart = document.getElementById('shoppingCart');


var stopwatch = {
  start: function(){
    if(document.getElementById("start").firstChild.nodeValue != "Start"){
      document.getElementById("start").firstChild.nodeValue = "Start";
    }
    ms = 0;
    sec = 0;
    min = 0;
    count = setInterval(function(){
      if(ms == 100){
        ms = 0;
        if(sec == 60){
          sec = 0;
          min++;
        }
        else{
          sec++;
        }
      }
      else{
        ms++;
      }
      
      malt = stopwatch.pad(min);
      salt = stopwatch.pad(sec);
      msalt = stopwatch.pad(ms);
      
      stopwatch.update(malt + ":" + salt + ":" + msalt);
    }, 10);
    },
  stop: function(){
    clearInterval(count);
 document.getElementById("start").firstChild.nodeValue = "Restart";
  },
  
  update: function(txt){
     var temp = document.getElementById("timer");
  temp.firstChild.nodeValue = txt;
  },
  
  pad: function(time){
    var temp;
    if(time < 10){
      temp = "0" + time;
    }
    else{
      temp = time;
    }
    return temp;
  }
}



//old code

//orange
orangeBlock.addEventListener('dragover', dragOver);
orangeBlock.addEventListener('dragenter', dragEnter);
orangeBlock.addEventListener('dragleave', dragLeaveOrange);
orangeBlock.addEventListener('drop', dragDropOrange);




//Drag Functions
function dragStart(e) {
    this.className += ' hold';
    setTimeout(() => (this.className = 'invisible'), 0);
    e.dataTransfer.setData("id", e.target.id);
    //winningMessageElement.classList.remove('show');
}

function dragEnd() {
    this.className = 'circle';
}

function dragOver(e) {
    e.preventDefault();
    this.classList.add('grow');
}

function dragEnter(e) {
    e.preventDefault();

}

//orange
function dragLeaveOrange() {
    this.className = 'ColorOrange';
}

function dragDropOrange(e) {
    if (mouseOver = "orangeBlock") {
        var elementId = e.dataTransfer.getData("id");
        if (elementId === "circleorange") {
            this.className = 'ColorOrange';
            this.append(circleorange);
            score++;
            console.log(score);

            if (score === 6) {
                alert("You won the game, congratulations!");
                console.log(score);
            }

        }
    }
}




