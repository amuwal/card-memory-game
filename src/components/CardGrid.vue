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
      
      document.querySelector(".cards").classList.remove("hard");
      document.querySelector(".cards").classList.remove("medium");
      if (n === 12) {
        document.querySelector(".cards").classList.add("hard");
      } else if (n === 8) {
        document.querySelector(".cards").classList.add("medium");
      }
      this.restartGame();
    },
  },
};
</script>

<template>
  <div class="settings">
    <button
      :class="difficulty === 4 ? 'active' : ''"
      @click="changeDifficulty(4)"
    >
      Easy
    </button>
    <button
      :class="difficulty === 8 ? 'active' : ''"
      @click="changeDifficulty(8)"
    >
      Medium
    </button>
    <button
      :class="difficulty === 12 ? 'active' : ''"
      @click="changeDifficulty(12)"
    >
      Hard
    </button>
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
  width: 700px;
  max-width: 95vw;
  padding: 10px;
  justify-self: center;
  justify-content: center;
  justify-items: center;
  grid-row: 2;
  grid-column: 1 / span 2;
}

.cards.hard {
  grid-template-columns: repeat(6, 1fr);
}

.cards.medium {
  width: 600px;
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
  background-color: #34ca93;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1.2rem;
  cursor: pointer;
  border-radius: 5px;
  text-shadow: 2px 2px rgb(243, 87, 217);
}

button:hover {
  background-color: #27ab88;
}

.active {
  background-color: #7221ff;
  color: rgb(255, 255, 255);
}

.active:hover {
  background-color: #1215d8;
}
</style>
