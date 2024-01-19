<script>
export default {
  data(){
    return{
      variants:['elevated', 'flat', 'tonal', 'outlined']
    }
  }
}
</script>

<template>
  <v-main>
    <v-container >
    <p class="font-weight-regular text-center text-white text-h4 text-uppercase">
      Admision
    </p>
      <v-container>
        <v-row align="center" justify="center">
          <v-col
              v-for="(variant, i) in variants"
              :key="i"
              cols="auto"
          >
            <v-card
                class="mx-1"
                max-width="344"
                :variant="variant"
            >
              <v-card-item>
                <div>
                  <div class="text-overline mb-1">
                    {{ variant }}
                  </div>
                  <div class="text-h6 mb-1">
                    Headline
                  </div>
                  <div class="text-caption">Greyhound divisely hello coldly fonwderfully</div>
                </div>
              </v-card-item>

              <v-card-actions>
                <v-btn>
                  Button
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

    </v-container>
  </v-main>
</template>

<style scoped>

</style>