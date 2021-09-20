var intervalDisplay = setInterval(timerFunc,1000)

CARDS = [
  {name: "penguin"},
  {name: "funia"},
];


var counter = 0;
function  timerFunc() {
  counter ++;
  const hourglassTimer = document.querySelector('#timer');
  hourglassTimer.textContent = counter;
}

var cards = document.querySelectorAll('.cards-inner');
var moves = document.querySelector('#digit-rabbit')
var movesCounter = 0;

cards.forEach(card =>{
  card.addEventListener('click', ()=>{

    movesCounter ++;
    moves.textContent = movesCounter;

    card.classList.add('cards-inner-active');

var numOfCardsInnerActive = 0;

    var intervalCard = setTimeout(cardVis,750)

    function cardVis() {

    const nameOfTheCard = card.dataset.selection;
    const objNameOfTheCard = CARDS.find(obj => obj.name === nameOfTheCard);

    console.log(objNameOfTheCard);


      for (var i = 0; i < cards.length; i++) {
        if (cards[i].classList.contains("cards-inner-active")) {
          numOfCardsInnerActive++;

          if (numOfCardsInnerActive === 2) {
            for (var i = 0; i < cards.length; i++) {
            
              cards[i].classList.remove('cards-inner-active')

            }
          }
        }
      }

      return;
    }

  })
})
