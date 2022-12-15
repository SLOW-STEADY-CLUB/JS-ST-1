//Computer options
const computerOptions = ['comRock', 'comPaper', 'comScissors'];

// computerOptions.forEach(option => {
//     option.addEventListener("click", function() {
//         const computerRandom = Math.floor(Math.random() * 3);
//         const computerChoice = computerOptions[computerRandom];
//     })
//     setTimeout(() => {
//         compare(this.textContent, computerChoice);

//         //update Image
//         userHand = `/kyung/image/${this.textContent}.png`
//         computerHand = `/kyung/${computerChoice}.png`
//     }, 2000)
// });

//User Btn Option
const userBtnBox = document.querySelector('.userBtnOption');
const userImg = document.querySelector('.chosenImg');
const rockBtn = document.querySelector('#u-r-btn');
const scissorsBtn = document.querySelector('#u-s-btn');
const paperBtn = document.querySelector('#u-p-btn');

// function createImg() {
//     const item = document.createElement("div");
//             item.setAttribute("class", "userImg_rock");
//             console.log('1')
//             return(item)
// }
// function onClick() {
//     const item = createImg()
//     userImg.append(item)
// }
// rockBtn.addEventListener("click", () => {
//     console.log('2')
//     onClick()
// })

const item = document.createElement("div");
  item.setAttribute("class", "item");

userBtnBox.addEventListener('click', (e) => {
    // computerSelectedImg.style.background = ''
    // computerSelectedText.style.background = ''
   //만약 이벤트 발생시 rock/scissors/paper btn이 눌리면
   console.log(e.target.id)
   const userImg = document.querySelector('.userImg')
    if (e.target.id === 'u-r-btn') {
        userImg.classList.add('rock')
        userImg.classList.remove('userImg')
       getRandomComputerImg();
    } else if (e.target.id === 'u-s-btn') {
        userImg.classList.add('scissors')
        userImg.classList.remove('userImg')
        getRandomComputerImg();
    } else if (e.target.id === 'u-p-btn') {
        userImg.classList.add('paper')
        userImg.classList.remove('userImg')
        getRandomComputerImg();
    } else {
        return false;
       
    }
    selectImg() // - user
    // setTimeout(() => {
    //     getRandomComputerImg()
    //     // updateScore()
    //     //updateLocalStorage() - 추가
    // }, 200) // 0.2초 
})

//경우 - User Choice
const chooseRock = document.querySelector('#chooseRock');
const chooseScissors = document.querySelector('#chooseScissors');
const choosePaper = document.querySelector('#choosePaper');

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

// 이미지 
//get random computer Img
const getRandomComputerImg = () => {
    const comImg = document.querySelector('.comImg')
    const randomNum = Math.floor(Math.random() * 3)
    comImg.style.background = bgImg[randomNum]
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

// 스코어 비교
// const updateScore = () => {
//     const computerScore = document.querySelector('#computerScore');
//     const userScore = document.querySelector('#userScore');
//     userScore.textContent = uScore;
//     computerScore.textContent = cScore
// }

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
            winner.textContent = "사용자가 이겼습니다!"
            uScore++;
            updateScore();
            return;
        } else {
            winner.textContent = "사용자가 졌습니다!"
            cScore++;
            updateScore();
            return;
        }
    }
    //사용자가 가위를 낼 경우 
    if (userChoice == 'scissors') {
        if (computerChoice == 'paper') {
            winner.textContent = "컴퓨터가 이겼습니다!"
            uScore++;
            updateScore();
            return;
        } else {
            winner.textContent = "컴퓨터가 졌습니다!"
            cScore++;
            updateScore();
            return;
        }
    }
}