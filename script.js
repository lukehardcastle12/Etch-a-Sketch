//User inputs how many squares wide the grid should be
function getSize(){
    let size = (parseInt(prompt('How many sqaures wide should the grid be? (Maximum 100): '))**2);
    if(size > 10000){
        alert('Number is too large');
        return 'ERROR';
    }else if (size <= 10000){
            return size;
    }else{
        alert('That is not a number');
        return 'ERROR';
    }
}
draw();
//generates the correct amount of divs to fit content
function draw(){
    let size = getSize();
    while (size === 'ERROR') size = getSize();
  
    
    //calculates the pixel width and height of the display based on the user input
    let contentSize = Math.sqrt(size) * 16;

    const content = document.querySelector('#content');
    //sets the content div to the correct size and renders the squares
    content.setAttribute('style', 'max-height:' +  contentSize +'px;' + 'max-width:' + contentSize + 'px;');
        for(i=1;i<=size;i++){
        const divSquare = document.createElement('div');
        divSquare.setAttribute('class', 'square');
        content.appendChild(divSquare);
        divSquare.addEventListener('mouseover', function(e){
            e.target.style.background = 'grey';
        });  
    }
}
//when reset is clicked resets the background of all squares
const resize = document.querySelector('#resize');
resize.addEventListener('click', () => reDraw());

const reset = document.querySelector('#reset');
reset.addEventListener('click', () => clear());

function clear(){
    const allSquares = document.getElementById('content').children;
    for(i=0;i<allSquares.length;i++){
        allSquares[i].style.background = '';
    }
}
//removes background of all squares
function reDraw(){
    const allSquares = document.getElementById('content');
    while (allSquares.firstChild){
        allSquares.removeChild(allSquares.lastChild);
    }
    draw();
}