<script setup>
import { ref } from 'vue';

const emit = defineEmits(['send-text']);


const inputText = ref('');

const sendText = () => {
  emit('send-text', inputText.value);
  inputText.value = '';
};


</script>

<template>
  <div>
    <h2>Child Component</h2>
    <input v-model="inputText" type="text" placeholder="Enter text here" />
    <button @click="sendText">Send Text</button>
  </div>
</template>