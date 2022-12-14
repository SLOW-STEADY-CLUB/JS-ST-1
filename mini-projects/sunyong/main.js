const containar = document.querySelector(".image-containar") 
const startButton = document.querySelector(".start-button") 
const gameText = document.querySelector(".game-text") 
const playTime = document.querySelector(".play-time")

const tileCount = 16;

let tiles = [];
const dragged = {
    el : null,
    class : null,
    index :null,
}

let isPlaying = false;
let timeInterval = null;
let time = 0;


// function
function checkStatus() {
    const currentList = [...containar.children]
    const unMatchedList = currentList.filter((child, index) => Number(child.getAttribute("data-index")) !== index)
    if(unMatchedList.length === 0) {
        gameText.style.display = "block";
        isPlaying = false;
        clearInterval(timeInterval);
    }
}

// 2초후 섞이게 하기
function setGame() {
    isPlaying =true;
    time=0;
    containar.innerHTML = "";  //containar 빈칸 만들기
    gameText.style.display = "none";
    clearInterval(timeInterval);

    tiles = createImageTiles();
    tiles.forEach(tile => containar.appendChild (tile))
    setTimeout(()=> {
        containar.innerHTML = "";  //containar 빈칸 만들기
        shuffle(tiles).forEach(tile => containar.appendChild (tile))
        timeInterval = setInterval(()=> {
            playTime.innerText = time;
            time++;
        }, 1000) 
    }, 2000)
}

//li 태그를 만들어서 반목문을 돌리고 containar에 추가하기
function createImageTiles() {
    const tempArray = []
    Array(tileCount).fill().forEach( (_, i)=> {
        const li = document.createElement("li");
        li.setAttribute('data-index', i);
        li.setAttribute('draggable', 'true');
        li.classList.add(`list${i}`);
        tempArray.push(li)
    })
    return tempArray;
}

// 섞는 함수
function shuffle(array) {
    let index = array.length - 1;
    while(index > 0) {
        const randomIndex = Math.floor(Math.random()*(index+1));
        [array[index], array[randomIndex]] = [array[randomIndex], array[index]]
        index--;
    }
    return array;
}


// events
containar.addEventListener('dragstart', (e)=> {
    if(!isPlaying) return;
    const obj = e.target
    dragged.el = obj;
    dragged.class = obj.className;
    dragged.index = [...obj.parentNode.children].indexOf(e.target);
})
containar.addEventListener('dragover', (e)=> {
    e.preventDefault();
})
containar.addEventListener('drop', (e)=> {
    if(!isPlaying) return;
    const obj = e.target;

    if(obj.className !== dragged.class) {
        let originPlace;
        let isLast = false;
    
        if(dragged.el.nextSibling) {
            originPlace = dragged.el.nextSibling
        } else {
            originPlace = dragged.el.previousSibling
            isLast = true;
        }
        const droppedIndex = [...obj.parentNode.children].indexOf(obj);
        dragged.index > droppedIndex ? obj.before(dragged.el) : obj.after(dragged.el)
        isLast ? originPlace.after(obj) : originPlace.before(obj)
    }
    checkStatus();
})

startButton.addEventListener('click', () => {
    setGame()
})