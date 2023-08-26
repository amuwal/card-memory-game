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
        console.log("hanldling click in cardgrid")
      if (this.activeCardOne === null) {
        this.activeCardOne = card.id;
        this.activeCardOneName = card.name;
      } else {
        this.activeCardOne = null;
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
