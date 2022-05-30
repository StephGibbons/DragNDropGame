var score = 0;

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

//shoppingcart
shoppingCart.addEventListener('dragover', dragOver);
shoppingCart.addEventListener('dragenter', dragEnter);
shoppingCart.addEventListener('dragleave', dragLeave); 
shoppingCart.addEventListener('drop', dragDrop);




//Drag Functions
function dragStart(e){
    this.className += ' hold';
    setTimeout(() => (this.className = 'invisible'), 0);
    e.dataTransfer.setData("id", e.target.id);
}

function dragEnd() {
    
}

function dragOver(e) {
    e.preventDefault();
    this.classList.add('grow');
}

function dragEnter(e) {
    e.preventDefault();

}

//dropfunctions
function dragLeave() {
    this.className = 'shoppingCart';
}

function dragDrop(e) {
    if (mouseOver = "shoppingCart") {
        var elementId = e.dataTransfer.getData("id");
        if (elementId === "") {
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

