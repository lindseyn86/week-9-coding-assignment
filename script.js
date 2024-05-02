// Function to create a deck of cards
function createDeck() {
    const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
    const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
    const deck = [];
  
    for (let suit of suits) {
      for (let value of values) {
        deck.push(`${value} of ${suit}`);
      }
    }
  
    return deck;
  }
  
  // shuffling the deck
    function shuffle(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
  }
  
  // dealing the cards
  function deal(deck) {
    const player1Hand = deck.slice(0, 26);
    const player2Hand = deck.slice(26);
    return [player1Hand, player2Hand];
  }
  
  // comparing the cards to see who won the round
  function compare(card1, card2) {
    const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
    const value1 = values.indexOf(card1.split(' ')[0]);
    const value2 = values.indexOf(card2.split(' ')[0]);
    return value1 - value2;
  }
  
  // begin playing the game
  function playGame() {
    const deck = createDeck();
    shuffle(deck);
    const [player1Hand, player2Hand] = deal(deck);
    let player1Score = 0;
    let player2Score = 0;
  
    for (let i = 0; i < 26; i++) {
      const player1Card = player1Hand[i];
      const player2Card = player2Hand[i];
      const result = compare(player1Card, player2Card);
  
      if (result > 0) {
        player1Score++;
      } else if (result < 0) {
        player2Score++;
      }
    }
  // logging the scores
    console.log('Player 1 score:', player1Score);
    console.log('Player 2 score:', player2Score);

  //saying who won the game
  
    if (player1Score > player2Score) {
      console.log('Player 1 wins!');
    } else if (player1Score < player2Score) {
      console.log('Player 2 wins!');
    } else {
      console.log('It is a tie!');
    }
  }
  
  // Run the game
  playGame();
