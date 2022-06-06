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
const parsley = document.getElementById('parsley');
const honey = document.getElementById('honey');
const spaghetti = document.getElementById('spaghetti');
const cucumber = document.getElementById('cucumber');
const oil = document.getElementById('oil');
const rotini = document.getElementById('rotini');

const shoppingCart = document.getElementById('shoppingCart');

var score = 0;



//redPepper
redPepper.addEventListener('dragstart', dragStart);
redPepper.addEventListener('dragend', dragEnd);
//bacon
bacon.addEventListener('dragstart', dragStart);
bacon.addEventListener('dragend', dragEnd);
//eggs
eggs.addEventListener('dragstart', dragStart);
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
//parsley
parsley.addEventListener('dragstart', dragStart);
parsley.addEventListener('dragend', dragEnd);
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
//garlic
garlic.addEventListener('dragstart', dragStart);
garlic.addEventListener('dragend', dragEnd);


//shoppingcart
shoppingCart.addEventListener('dragover', dragOver);
shoppingCart.addEventListener('dragenter', dragEnter);
shoppingCart.addEventListener('dragleave', dragLeave); 
shoppingCart.addEventListener('drop', dragDrop);



//Drag Functions
function dragStart(e){
  console.log("start");
  this.className += ' hold';
  setTimeout(()=>(this.className = 'invisible'),0);
  e.dataTransfer.setData("id", e.target.id);
}

function dragEnd(){
  this.className = 'food';
} 

function dragOver(e){
  e.preventDefault();
  this.classList.add('glow');

}

function dragEnter(e){
  e.preventDefault();
}

//dropfunctions
function dragLeave() {
    this.className = 'shoppingCart';
}

function dragDrop(e){
  if(mouseOver = "shoppingCart"){
      var elementId = e.dataTransfer.getData("id");
  
      if(elementId === "blackPepper"){
        this.elementId = 'shoppingCart';
        this.append(blackPepper);
        this.classList.remove('glow') 
        score++; 
        
            if (score===8){
            alert("some message");
            stopwatch.stop();
            console.log(score);
            }
        }
        if(elementId === "garlic"){
          this.elementId = 'shoppingCart';
          this.append(garlic);
          this.classList.remove('glow') 
          score++; 
          
              if (score===8){
              alert("some message");
              stopwatch.stop();
              console.log(score);
              }
          }

          if(elementId === "parm"){
            this.elementId = 'shoppingCart';
            this.append(parm);
            this.classList.remove('glow') 
            score++; 
                  
                  if (score===8){
                      alert("some message");
                      stopwatch.stop();
                      console.log(score);
                  }
            }

            if(elementId === "spaghetti"){
              this.elementId = 'shoppingCart';
              this.append(spaghetti);
              this.classList.remove('glow') 
              score++; 
                    
                    if (score===8){
                        alert("some message");
                        stopwatch.stop();
                        console.log(score);
                    }
              }

              if(elementId === "oil"){
                this.elementId = 'shoppingCart';
                this.append(oil);
                this.classList.remove('glow') 
                score++; 
                      
                      if (score===8){
                          alert("some message");
                          stopwatch.stop();
                          console.log(score);
                      }
                }

                if(elementId === "parsley"){
                  this.elementId = 'shoppingCart';
                  this.append(parsley);
                  this.classList.remove('glow') 
                  score++; 
                        
                        if (score===8){
                            alert("some message");
                            stopwatch.stop();
                            console.log(score);
                        }
                  }

                  if(elementId === "eggs"){
                    this.elementId = 'shoppingCart';
                    this.append(eggs);
                    this.classList.remove('glow') 
                    score++; 
                          
                          if (score===8){
                              alert("some message");
                              stopwatch.stop();
                              console.log(score);
                          }
                    }

                    if(elementId === "bacon"){
                      this.elementId = 'shoppingCart';
                      this.append(bacon);
                      this.classList.remove('glow') 
                      score++; 
                            
                            if (score===8){
                                alert("some message");
                                stopwatch.stop();
                                console.log(score);
                            }
                      }
        }
      }

      //Timer code
      var min,sec,ms,count, malt, salt, msalt;

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