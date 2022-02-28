function createSquare(){
    const container =  document.querySelector('.container')
    container.innerHTML = ''
    let smallSquares = rangeText.value
    for(let i = 0; i < smallSquares; i++){
        for(let i = 0; i < smallSquares; i++){
            let square = document.createElement('div');
            square.className = 'littleSquare'
            container.style.gridTemplateColumns = `repeat(${smallSquares}, 1fr)`
            container.style.gridTemplateRows = `repeat(${smallSquares}, 1fr)`
            container.appendChild(square)
        }
    }
}

let rangeText = document.querySelector('input')
para = document.querySelector('p');
para.textContent = `${rangeText.value}x${rangeText.value}`
rangeText.oninput = function(){
    para.textContent = `${this.value}x${this.value}`
}
createSquare()
rangeText.onchange = function(){
    createSquare();
}

document.addEventListener('mousedown', (event)=>{
    if (event.target.matches('.littleSquare')) {
        event.target.style.backgroundColor = 'red'
    }
    document.addEventListener('mouseover', (event)=>{
        if ((event.target.matches('.littleSquare'))&& (event.buttons == 1 || event.buttons == 3) ){
            event.target.style.backgroundColor = 'red'
        }
    })
})

btn = document.querySelector('button')
btn.addEventListener('click',()=>{
    let btns = document.querySelectorAll('.littleSquare');
    btns.forEach((element)=> element.style.backgroundColor = 'violet')
})

