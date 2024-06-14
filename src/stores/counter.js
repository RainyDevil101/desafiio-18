import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0);
  const getCount = computed(() => count.value);

  function increment() {
    count.value++;
  }

  function decrement() {
    count.value--;
  }

  return { count, getCount, increment, decrement };
});
