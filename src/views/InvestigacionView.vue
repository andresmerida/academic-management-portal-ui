<template>
  <v-main>
    <v-container >
      <v-row dense>
        <v-col
            v-for="n in 4"
            :key="n"
            cols="12"
        >
          <v-card
              :title="`Investigación ${n}`"
              :subtitle="`Subtitle for Content ${n}`"
              text="Lorem ipsum dolor sit amet consectetur, adipisicing elit.?"
          ></v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<style>
/*@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}*/
</style>
<script setup>
</script>