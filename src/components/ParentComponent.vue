<script setup>
import ChildComponent from './ChildComponent.vue';
import { ref } from 'vue';

const receivedText = ref('');

const handleText = (text) => {
  receivedText.value = text;
};

</script>

<template>
  <div>
    <h1>Parent Component</h1>
    <ChildComponent @send-text="handleText" />
    <p>Received text: {{ receivedText }}</p>
  </div>
</template>