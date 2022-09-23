let url = "http://deckofcardsapi.com/api/deck"
let shuffle_draw_1 = "new/draw/?count=1"


// 1.
$.getJSON(`${url}/${shuffle_draw_1}`)
   .then(data => {
      // console.log(data)
      let { suit, value } = data.cards[0]
      console.log(`${value} of ${suit}`)
   })

// 2.
let firstCard = null
$.getJSON(`${url}/new/draw/`)
   .then(data => {
      firstCard = data.cards[0]
      let deckID = data.deck_id
      // console.log(data)
      return $.getJSON(`${url}/${deckID}/draw/`)
   })
   .then(data => {
      // console.log(data)
      let secondCard = data.cards[0];
      [firstCard, secondCard].forEach(function (card) {
         console.log(
            `${card.value} of ${card.suit}`
         )
      })
   })

// 3. 
let deckID = null
let $btn = $('button')
let $cardArea = $('#card-area')

$.getJSON(`${url}/new/shuffle/?deck_count=1`)
   .then(data => {
      deckID = data.deck_id
      $btn.show()
   })

$btn.on('click', function () {
   $.getJSON(`${url}/${deckID}/draw/`)
      .then(data => {
         console.log(data)
         let cardDrawn = data.cards[0].image
         $cardArea.append(
            $('<img>', {
               src: cardDrawn
            })
         )
         if (data.cards.remaining === 0) $btn.remove()
      })

})