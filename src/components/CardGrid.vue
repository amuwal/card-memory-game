<script>
import Card from "./Card.vue";
import { getCards } from "../../utils";

export default {
  data() {
    return {
      cards: getCards(8),
      activeCardOne: null,
      activeCardTwo: null,
      activeCardOneName: "",
      foundCards: new Set(),
      difficulty: 8,
      allMatched: false,
    };
  },
  components: {
    Card,
  },
  methods: {
    handleCardClick(card) {
      if (this.activeCardOne === null) {
        this.activeCardOne = card.id;
        this.activeCardOneName = card.name;
      } else {
        if (this.activeCardOne === card.id) {
          this.activeCardOne = null;
          return;
        }

        this.activeCardTwo = card.id;

        setTimeout(() => {
          if (card.name === this.activeCardOneName) {
            this.foundCards.add(card.name);
            this.allMatched = this.foundCards.size === this.difficulty;
          }
          this.activeCardOne = null;
          this.activeCardTwo = null;
          this.activeCardOneName = "";
          console.log(...this.foundCards);
        }, 1000);
      }
    },

    restartGame() {
      this.cards = getCards(this.difficulty);
      this.foundCards = new Set();
      this.activeCardOne = null;
      this.activeCardTwo = null;
      this.activeCardOneName = "";
      this.allMatched = false;
    },
    changeDifficulty(n) {
      this.difficulty = n;
      this.cards = getCards(n);
    },
  },
};
</script>

<template>
  <div class="settings">
    <button @click="changeDifficulty(4)">Easy</button>
    <button @click="changeDifficulty(8)">Medium</button>
    <button @click="changeDifficulty(12)">Hard</button>
  </div>

  <div v-if="allMatched" class="game-over-message">
    <div>Wow your memory sure is sharp</div>
    <button @click="restartGame">Restart</button>
  </div>
  <div v-else class="cards">
    <Card
      v-for="(card, index) in cards"
      :activeCardTwo="activeCardTwo"
      :activeCardOne="activeCardOne"
      :card="card"
      :foundCards="foundCards"
      :key="index"
      @card-click="handleCardClick"
    />
  </div>
</template>

<style>
.cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border: 3px solid salmon;
  border-radius: 10px;
  padding: 20px;
  justify-content: center;
  justify-items: center;
}

.game-over-message {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #42b883; /* Green background color */
  padding: 20px;
  text-align: center;
  border-radius: 15px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5); /* Slight shadow */
}

.game-over-message button {
  padding: 10px 5px;
}

.settings {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  padding: 10px;
}

button {
  background-color: #35495e; /* Dark blue button background */
  color: white; /* White button text color */
  border: none;
  padding: 10px 20px;
  font-size: 1.2rem;
  cursor: pointer;
  border-radius: 5px;
}

button:hover {
  background-color: #2b3a4d; /* Darker blue on hover */
}
</style>
