<script setup lang="ts">
import { ref } from 'vue'

const selectedOption = ref('')
const options = ['Option 1', 'Option 2', 'Option 3']
</script>

<template>
  <main>
    <v-container>
      <v-form>
        <v-select
          style="width: 300px; height: 40px"
          label="Select"
          v-model="selectedOption"
          :items="options"
        ></v-select>
      </v-form>
      <p>Selected: {{ selectedOption }}</p>
    </v-container>
  </main>
</template>
