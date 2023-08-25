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
      //Todo
    },

    restartGame() {
      //Todo
    },
  },
};
</script>

<template>
  <div>
    CardGrid
    <Card
      v-for="(card, index) in cards"
      :activeCardTwo="activeCardTwo"
      :activeCardOne="activeCardOne"
      :card="card"
      :foundCards="foundCards"
      :key="index"
    />
  </div>
</template>
