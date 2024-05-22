<template>
  <div>
    <button @click="decrement">-</button>
    <span>{{ count }}</span>
    <button @click="increment">+</button>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { useCounterStore } from '@/stores/index.js';

export default defineComponent({
  setup() {
    const counterStore = useCounterStore();

    function increment() {
      counterStore.increment();
    }

    function decrement() {
      counterStore.count--;
    }

    return {
      count: counterStore.count,
      increment,
      decrement
    };
  }
});
</script>
