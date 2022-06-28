const mushroom = document.getElementById('mushroom');
const flour = document.getElementById('flour');
const eggs = document.getElementById('eggs');
const greenPepper = document.getElementById('greenPepper');
const prosciutto = document.getElementById('prosciutto');
const garlic = document.getElementById('garlic');
const dough = document.getElementById('dough');
const butter = document.getElementById('butter');
const mozza = document.getElementById('mozza');
const heavyCream = document.getElementById('heavyCream');
const basil = document.getElementById('basil');
const honey = document.getElementById('honey');
const spaghetti = document.getElementById('spaghetti');
const cucumber = document.getElementById('cucumber');
const pizzaSauce = document.getElementById('pizzaSauce');
const rotini = document.getElementById('rotini');

const shoppingCart = document.getElementById('shoppingCart');

var score = 0;



//mushroom
mushroom.addEventListener('dragstart', dragStart);
mushroom.addEventListener('dragend', dragEnd);
//flour
flour.addEventListener('dragstart', dragStart);
flour.addEventListener('dragend', dragEnd);
//eggs
eggs.addEventListener('dragstart', dragStart);
eggs.addEventListener('dragend', dragEnd);
//greenPepper
greenPepper.addEventListener('dragstart', dragStart);
greenPepper.addEventListener('dragend', dragEnd);
//prosciutto
prosciutto.addEventListener('dragstart', dragStart);
prosciutto.addEventListener('dragend', dragEnd);
//dough
dough.addEventListener('dragstart', dragStart);
dough.addEventListener('dragend', dragEnd);
//butter
butter.addEventListener('dragstart', dragStart);
butter.addEventListener('dragend', dragEnd);
//mozza
mozza.addEventListener('dragstart', dragStart);
mozza.addEventListener('dragend', dragEnd);
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
//pizzaSauce
pizzaSauce.addEventListener('dragstart', dragStart);
pizzaSauce.addEventListener('dragend', dragEnd);
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
  
      if(elementId === "dough"){
        this.elementId = 'shoppingCart';
        this.append(dough);
        this.classList.remove('glow') 
        score++; 
        
            if (score===6){
            alert("You win! Congratulations!");
            stopwatch.stop();
            console.log(score);
            }
        }
        if(elementId === "pizzaSauce"){
          this.elementId = 'shoppingCart';
          this.append(pizzaSauce);
          this.classList.remove('glow') 
          score++; 
          
              if (score===6){
              alert("You win! Congratulations!");
              stopwatch.stop();
              console.log(score);
              }
          }

          if(elementId === "mozza"){
            this.elementId = 'shoppingCart';
            this.append(mozza);
            this.classList.remove('glow') 
            score++; 
                  
                  if (score===6){
                      alert("You win! Congratulations!");
                      stopwatch.stop();
                      console.log(score);
                  }
            }


              if(elementId === "prosciutto"){
                this.elementId = 'shoppingCart';
                this.append(prosciutto);
                this.classList.remove('glow') 
                score++; 
                      
                      if (score===6){
                          alert("You win! Congratulations!");
                          stopwatch.stop();
                          console.log(score);
                      }
                }

                if(elementId === "basil"){
                  this.elementId = 'shoppingCart';
                  this.append(basil);
                  this.classList.remove('basil') 
                  score++; 
                        
                        if (score===6){
                            alert("You win! Congratulations!");
                            stopwatch.stop();
                            console.log(score);
                        }
                  }

                  if(elementId === "flour"){
                    this.elementId = 'shoppingCart';
                    this.append(flour);
                    this.classList.remove('glow') 
                    score++; 
                          
                          if (score===6){
                              alert("You win! Congratulations!");
                              stopwatch.stop();
                              console.log(score);
                          }
                    }
                    else{
                      this.classList.remove('glow');
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