<script setup lang="ts">
  import { ref } from 'vue';

  const counter = ref(0);

  function increment() {
    counter.value++;
  }

  function decrement() {
    counter.value--;
  }

  function reset() {
    counter.value = 0;
  }
</script>

<template>
  <h1 style="font-size: 150px">
    <img
      src="https://symfony.com/logos/symfony_black_03.png"
      alt="symfony_logo"
      width="100"
    />
    +
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnaWRkK0jxpxWXAMpT_EiY5eqPKEBfPwNdCAmbOeMclg&s=10"
      alt="symfony_logo"
      width="100"
    />
    Template
  </h1>

  <p>Contador de ejemplo: {{ counter }}</p>

  <button class="btn" @click="increment">Incrementar</button>
  <button class="btn" @click="decrement">Decrementar</button>
  <button class="btn" @click="reset">Reset</button>
</template>

<style scoped>
  .btn {
    background-color: rgb(69, 117, 250);
    color: white;
    border-radius: 10px;
    border: 0;
    padding: 10px 20px;
    margin: 0 0 5px 5px;
  }

  .btn:hover {
    background-color: rgb(54, 54, 253);
    cursor: pointer;
  }
</style>
