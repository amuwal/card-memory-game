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
    };
  },
  components: {
    Card,
  },
  methods: {
    handleCardClick(card) {
      console.log({ ...card });
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
          }
          this.activeCardOne = null;
          this.activeCardTwo = null;
          this.activeCardOneName = "";
          console.log(...this.foundCards)
        }, 1000);
      }
    },

    restartGame() {
      //Todo
    },
  },
};
</script>

<template>
  <div class="cards">
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
</style>
