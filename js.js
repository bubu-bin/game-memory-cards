var intervalDisplay = setInterval(timerFunc,1000)

CARDS = [
  {name: "penguin",
   img:"C:/Users/gadzi/Desktop/Icons ready to go/SVG/RPS/Penguin.svg"},
   {name: "penguin",
    img:"C:/Users/gadzi/Desktop/Icons ready to go/SVG/RPS/Penguin.svg"},
  {name: "funia",
  img:"C:/Users/gadzi/Desktop/Icons ready to go/SVG/RPS/Kot funia.svg"},
  {name: "funia",
  img:"C:/Users/gadzi/Desktop/Icons ready to go/SVG/RPS/Kot funia.svg"},
  {name: "coolpi",
   img:"C:/Users/gadzi/Desktop/Icons ready to go/SVG/RPS/Cool Pi.svg"},
   {name: "coolpi",
    img:"C:/Users/gadzi/Desktop/Icons ready to go/SVG/RPS/Cool Pi.svg"},
  {name: "hardy",
  img:"C:/Users/gadzi/Desktop/Icons ready to go/SVG/RPS/Rzulwik.svg"},
  {name: "hardy",
  img:"C:/Users/gadzi/Desktop/Icons ready to go/SVG/RPS/Rzulwik.svg"},
  {name: "coco",
   img:"C:/Users/gadzi/Desktop/Icons ready to go/SVG/RPS/johny coco.svg"},
   {name: "coco",
    img:"C:/Users/gadzi/Desktop/Icons ready to go/SVG/RPS/johny coco.svg"},
  {name: "PC",
  img:"C:/Users/gadzi/Desktop/Icons ready to go/SVG/RPS/PC_Icon.svg"},
  {name: "PC",
  img:"C:/Users/gadzi/Desktop/Icons ready to go/SVG/RPS/PC_Icon.svg"}
];

// ATTEMPT 3


const cards = document.querySelectorAll('.card');
var digitRabbit = document.querySelector('#digit-rabbit')
let countDigitRabbit = 0;
//  Shuffling the object of CARDS

const shuffling = (arr) => {
  let temp;
    let exchangeNr;
  for (let i = arr.length - 1; i >= 0; i--) {
    let randomIndex = Math.floor(Math.random() * (i + 1));
    temp = arr[i]
    arr[i] = arr[randomIndex];
    arr[randomIndex] = temp;
  }
    return arr
}

var displayShuffled = shuffling(CARDS)
let cardsChosenArr = [];
let cardsChosenID = [];

function deleteCards() {
  for (var i = 0; i < cardsChosenID.length; i++) {
    cards[cardsChosenID[i]].innerHTML = "";
  }
}

function flipBack() {
  for (var i = 0; i < cardsChosenID.length; i++) {
    cards[cardsChosenID[i]].classList.toggle('flip')
  }
}

function flipCard() {
  this.classList.toggle('flip')
  var cardBackObj = this.querySelector('.card-back')
  var cardBackObjId = cardBackObj.getAttribute("data-id");
  var cardBackObjName = cardBackObj.getAttribute('data-name');
  cardsChosenArr.push(cardBackObjName);
  cardsChosenID.push(cardBackObjId);

  var matchingCards = () => {
    if (cardsChosenArr[0] === cardsChosenArr[1]) {
      deleteCards()
    } else {
      flipBack()
    }
    countDigitRabbit ++;
    digitRabbit.textContent = countDigitRabbit;
    cardsChosenArr = [];
    cardsChosenID = [];
    console.log(cardsChosenArr);
  }

  if (cardsChosenArr.length === 2) {
    setTimeout(matchingCards, 500)


  }

}

var i = -1;

cards.forEach(card => {

  //Before initialization

  i++;

  let cardBack = document.createElement('div')
  cardBack.className = "card-back"
  cardBack.setAttribute("data-id", i)
  cardBack.setAttribute("data-name", CARDS[i].name)
  var cardImgBack = document.createElement('img')

  cardImgBack.setAttribute('src', CARDS[i].img)

  cardBack.appendChild(cardImgBack)

  card.appendChild(cardBack);

  card.addEventListener('click', flipCard)



})






























//  ATTEMPT 2


const gridTable = document.getElementById('grid-table');
// createTable();







// console.log(displayShuffled);
  function createTable() {


//CREATING GRIDBOARD
    for (var i = 0; i < CARDS.length  ; i++) {

      // card front
      let cardFront = document.createElement('div')
      cardFront.className = "card-front"

      //adding image
      var cardImgFront = document.createElement('img')
      cardImgFront.src = "C:/Users/gadzi/Desktop/Icons ready to go/SVG/Karta_Color.svg"
      cardFront.appendChild(cardImgFront);

      // card back
      let cardBack = document.createElement('div')
      cardBack.className = "card-back"
      cardBack.setAttribute("data-id", i)
      //adding image-random
      var cardImgBack = document.createElement('img')
      // cardimgback.src

      // Creating Inner
      let inner = document.createElement('div')

      inner.appendChild(cardFront)
      inner.appendChild(cardBack)

      //Creating card div HOLDER
      let cards = document.createElement("div")
      cards.appendChild(inner).classList = "cards-inner"

      gridTable.appendChild(cards).classList = "cards";

      inner.addEventListener('click', () =>{
        var cardID = cardBack.getAttribute('data-id')
        cardsChosenArr.push(CARDS[cardID].name);

        //Some zjebane proby

        cardsChosenID.push(cardID);
        cardImgBack.setAttribute('src', CARDS[cardID].img)

        cardBack.appendChild(cardImgBack)


        inner.classList.add('cards-inner-active')

        var innerActive = document.querySelector('.cards-inner-active')
        console.log(innerActive);
        if (innerActive) {
          console.log(2);
          innerActive.classList.remove('.cards-inner-active')
        }
      })




    }

}





function  randomImage(object) {

  const randomIndexImage = Math.floor(Math.random() * object.length)

}




// Shuffling

// let arrToShuffle = [1,2,3,4,5,6,7,8,9];
//
//
//


// console.log(shuffling(arrToShuffle));







// ATTEMPT  1



var counter = 0;
function  timerFunc() {
  counter ++;
  const hourglassTimer = document.querySelector('#timer');
  hourglassTimer.textContent = counter;
}
//
// var cards = document.querySelectorAll('.cards-inner');
// var moves = document.querySelector('#digit-rabbit')
// var movesCounter = 0;
//
// cards.forEach(card =>{
//   card.addEventListener('click', ()=>{
//
//     movesCounter ++;
//     moves.textContent = movesCounter;
//
//     card.classList.add('cards-inner-active');
//
// var numOfCardsInnerActive = 0;
//
//     var intervalCard = setTimeout(cardVis,750)
//
//     function cardVis() {
//
//     const nameOfTheCard = card.dataset.selection;
//     const objNameOfTheCard = CARDS.find(obj => obj.name === nameOfTheCard);
//
//     console.log(objNameOfTheCard);
//
//
//       for (var i = 0; i < cards.length; i++) {
//         if (cards[i].classList.contains("cards-inner-active")) {
//           numOfCardsInnerActive++;
//
//           if (numOfCardsInnerActive === 2) {
//             for (var i = 0; i < cards.length; i++) {
//
//               cards[i].classList.remove('cards-inner-active')
//
//             }
//           }
//         }
//       }
//
//       return;
//     }
//
//   })
// })
