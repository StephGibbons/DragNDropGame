
const circleorange = document.getElementById('circleorange');

const orangeBlock = document.querySelector('.ColorOrange');

var score = 0;


//Circle Listeners


//orange
    circleorange.addEventListener('dragstart', dragStart);
    circleorange.addEventListener('dragend', dragEnd);



//Colorblock Listeners

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




