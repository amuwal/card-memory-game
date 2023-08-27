<script>
import CardGrid from '../components/CardGrid.vue';
import Header from '../components/Header.vue';
export default {
    components: {
        CardGrid,
        Header
    }
}
</script>

<template>
    <div class="home">
        <Header />
        <CardGrid />
    </div>
</template>

<style>
.home {
    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: repeat(3, 1fr);
}
</style>