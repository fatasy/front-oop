<script setup lang="ts">
import { ref } from 'vue';

const selectedOption = ref('')
const isActive = ref(true)
const options  = [
        { code: 'en-US', name: 'English' },
        { code: 'de-DE', name: 'German' },
      ]
</script>

<template>
  <v-dialog max-width="500" v-model="isActive">
    <template v-slot:default="{ isActive }">
      <v-card title="Dialog">
        <v-select
          style="width: 300px; height: 40px"
          label="Select"
          id="select"
          v-model="selectedOption"
          itemTitle="name"
          itemValue="code"
          :items="options"
        ></v-select>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn text="Close Dialog" @click="isActive.value = false"></v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
