<script>
export default {
  props: {
    card: Object,
    activeCardOne: Number | null,
    activeCardTwo: Number | null,
    foundCards: Set,
  },
  computed: {
    isFlipped() {
      return (
        this.card.id === this.activeCardOne ||
        this.card.id === this.activeCardTwo
      );
    },
    isFound() {
      return this.foundCards.has(this.card.name);
    },
  },
};
</script>

<template>
  <div>Card</div>
  <div class="card">
    <div class="card-inner">
      <div v-if="this.isFound">
        <img src="../../public/images/tick.png" alt="Completed" />
      </div>
      <div v-if="!this.isFound">
        <img
          v-show="!isFlipped"
          :src="`../../public/images/${card.frontImage}`"
          :alt="card.frontImage"
        />
      </div>
      <div v-if="!this.isFound">
        <img
          v-show="isFlipped"
          :src="`../../public/images/${card.backImage}`"
          :alt="card.backImage"
        />
      </div>
    </div>
  </div>
</template>

<style></style>
