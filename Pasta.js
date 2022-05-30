var score = 0;

var min;
var sec;
var ms;
var count;
var malt;
var salt;
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
  garlict: function(){
    if(document.getElementById("garlict").firstChild.nodeValue != "garlict"){
      document.getElementById("garlict").firstChild.nodeValue = "garlict";
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
 document.getElementById("garlict").firstChild.nodeValue = "Regarlict";
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

//redPepper
redPepper.addEventListener('dragstart', dragStart);
redPepper.addEventListener('dragend', dragEnd);
//bacon
bacon.addEventListener('dragstart', dragStart);
bacon.addEventListener('dragend', dragEnd);
//eggs
eggs.addEventListener('dragStart', dragStart);
eggs.addEventListener('dragend', dragEnd);
//greenPepper
greenPepper.addEventListener('dragstart', dragStart);
greenPepper.addEventListener('dragend', dragEnd);
//blackPepper
blackPepper.addEventListener('dragstart', dragStart);
blackPepper.addEventListener('dragend', dragEnd);
//tomato
tomato.addEventListener('dragstart', dragStart);
tomato.addEventListener('dragend', dragEnd);
//butter
butter.addEventListener('dragstart', dragStart);
butter.addEventListener('dragend', dragEnd);
//parm
parm.addEventListener('dragstart', dragStart);
parm.addEventListener('dragend', dragEnd);
//heavyCream
heavyCream.addEventListener('dragstart', dragStart);
heavyCream.addEventListener('dragend', dragEnd);
//basil
basil.addEventListener('dragstart', dragStart);
basil.addEventListener('dragend', dragEnd);
//honey
honey.addEventListener('dragstart', dragStart);
honey.addEventListener('dragend', dragEnd);
//spaghetti
spaghetti.addEventListener('dragstart', dragStart);
spaghetti.addEventListener('dragend', dragEnd);
//cucumber
cucumber.addEventListener('dragstart', dragStart);
cucumber.addEventListener('dragend', dragEnd);
//oil
oil.addEventListener('dragstart', dragStart);
oil.addEventListener('dragend', dragEnd);
//rotini
rotini.addEventListener('dragstart', dragStart);
rotini.addEventListener('dragend', dragEnd);

//orange
shoppingCart.addEventListener('dragover', dragOver);
shoppingCart.addEventListener('dragenter', dragEnter);
shoppingCart.addEventListener('dragleave', dragLeaveOrange); 
shoppingCart.addEventListener('drop', dragDropOrange);




//Drag Functions
function dragStart(e){
    this.className += ' hold';
    setTimeout(() => (this.className = 'invisible'), 0);
    e.dataTransfer.setData("id", e.target.id);
}

function dragEnd() {
    this.className = 'food';
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
    this.className = 'shoppingCart';
}

function dragDropOrange(e) {
    if (mouseOver = "shoppingCart") {
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




