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
  methods: {
    handleCardClick(e) {
      this.$emit("card-click", this.card);
    },
  },
};
</script>

<template>
  <div
    @click="handleCardClick"
    class="card"
    :class="isFlipped ? 'flipped' : ''"
  >
    <div class="card-inner">
      <div class="card-content" v-if="this.isFound">
        <img src="../../public/images/tick.png" alt="Completed" />
      </div>
      <div class="card-content card-front" v-if="!this.isFound">
        <img
          v-if="!isFlipped"
          :src="`/images/${card.frontImage}`"
          :alt="card.frontImage"
        />
        <!-- <div>{{ this.card.name }}</div> -->
      </div>
      <div class="card-content card-back" v-if="!this.isFound">
        <img
          v-if="isFlipped"
          :src="`/images/${card.backImage}`"
          :alt="card.backImage"
        />
      </div>
    </div>
  </div>
</template>

<style>
.card {
  height: 200px;
  perspective: 1000px;
  width: 150px;
  cursor: pointer;
}

.card.flipped .card-inner{
    transform: rotateY(180deg);
}

.card.flipped .card-content  {
    transform: rotateY(180deg);
}

.card-inner {
  height: 100%;
  width: 100%;
  transform-style: preserve-3d;
  transition: transform 0.5s ease-out;
}

.card-content {
  height: 100%;
  width: 100%;
  border: 2px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  backface-visibility: hidden;
  position: absolute;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transform-style: preserve-3d;
  transition: transform 0.5s ease-out;
}

.card img {
  max-height: 90%;
  max-width: 90%;
  object-fit: contain;
}
</style>
