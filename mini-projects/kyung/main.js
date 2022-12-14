//Computer & User 
const comScissors = document.querySelector('#c-s');
const comRock = document.querySelector('#c-r');
const comPaper = document.querySelector('#c-p');

const userScissors = document.querySelector('#u-s');
const userRock = document.querySelector('#u-r');
const userPaper = document.querySelector('#u-p');

//User Btn Option
const userBtnBox = document.querySelector('.userBtnOption');
const rockBtn = document.querySelector('#u-r-btn');
const scissorsBtn = document.querySelector('#u-s-btn');
const paperBtn = document.querySelector('#u-p-btn');

//select btn event listener
userBtnBox.addEventListener('click', (e) => {
    computerSelectedImg.style.background = ''
    computerSelectedText.style.background = ''
   //만약 이벤트 발생시 rock/scissors/paper btn이 눌리면
    if (e.target === rockBtn) {
        rockBtn.classList.add('click')
        scissorsBtn.classList.remove('click')
        paperBtn.classList.remove('click')
    } else if (e.target === scissorsBtn) {
        rockBtn.classList.remove('click')
        scissorsBtn.classList.add('click')
        paperBtn.classList.remove('click')
    } else if (e.target === paperBtn) {
        rockBtn.classList.remove('click')
        scissorsBtn.classList.remove('click')
        paperBtn.classList.add('click')
    } else {
        return false;
    }
    selectImg() // - user
    setTimeout(() => {
        getRandomComputerImg()
        updateScore()
        //updateLocalStorage() - 추가
    }, 200) // 0.2초 
})

//경우 - User Choice
const chooseRock = document.querySelector('#chooseRock');
const chooseScissors = document.querySelector('#chooseScissors');
const choosePaper = document.querySelector('#choosePaper');

const computerOptions = ['comRock', 'comPaper', 'comScissors'];
const defaultValue = document.querySelector('#defaultValue');

//Selected Img
const userSelectedImg = document.querySelector('#userSelectedImg')
const computerSelectedImg = document.querySelector('#computerSelectedImg')

const bgImg = [
    "url(image/RockImg.png) no-repeat center",
    "url(image/ScissorsImg.png) no-repeat center",
    "url(image/PaperImg.png) no-repeat center"
]
const selectedText = ["Rock", "Scissors", "Paper"]

// Choice
let computerChoice = 0; //컴퓨터 결과
let userChoice = 0;
let start = false;

// Score
let computerScore = () => {
    
}
let userScore = () => {

}

// Win Result
let winResult = () => {

}

//get random computer Img
const getRandomComputerImg = () => {
    const randomNum = Math.floor(Math.random() * 3)
    computerSelectedImg.style.background = bgImg[randomNum]
    computerSelectedText.innerText = selectedText[randomNum]
}

//selecting Img - User
const selectImg = () => {
    if (rockBtn.classList.contains('click') && !scissorsBtn.classList.contains('click') && !paperBtn.classList.contains('click')) {
        userSelectedImg.style.background = bgImg[0];
        userSelectedText.innerText = selectedText[0];
    } else if (!rockBtn.classList.contains('click') && scissorsBtn.classList.contains('click') && !paperBtn.classList.contains('click')) {
        userSelectedImg.styled.background = bgImg[1];
        userSelectedText.innerText = selectedText[1];
    } else if (!rockBtn.classList.contains('click') && !scissorsBtn.classList.contains('click') && paperBtn.classList.contains('click')) {
        userSelectedImg.style.background = bgImg[2];
        userSelectedText.innerText = selectedText[2];
    } else {
        return;
    }
}


const updateScore = () => {
    const computerScore = document.querySelector('#computerScore');
    const userScore = document.querySelector('#userScore');
}

const compare = (computerChoice, userChoice) => {
    const winner = document.querySelector('.winner');
    //무승부일 경우
    if (computerChoice == userChoice) {
        winner.textContent = "무승부입니다!"
        return;
    }
    //사용자가 주먹을 낼 경우
    if (userChoice == 'rock') {
        if (computerChoice == 'scissors') {
            winner.textContent = "이겼습니다!"
            userScore++;
            updateScore();
            return;
        } else {
            winner.textContent = "졌습니다!"
            computerScore++;
            updateScore();
            return;
        }
    }
    //사용자가 가위를 낼 경우 
    if (userChoice == 'scissors') {
        if (computerChoice == 'paper') {
            winner.textContent = "이겼습니다!"
            userScore++;
            updateScore();
            return;
        } else {
            winner.textContent = "졌습니다!"
            computerScore++;
            updateScore();
            return;
        }
    }
}
