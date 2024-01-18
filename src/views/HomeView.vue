<script>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <v-main>
    <v-container>


      <v-carousel show-arrows="show-arrows">
        <v-carousel-item
            src="https://scontent.flpb1-1.fna.fbcdn.net/v/t39.30808-6/415241903_398335696088338_5420489845999840984_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=5-J_AerTSOIAX_g32Bm&_nc_ht=scontent.flpb1-1.fna&oh=00_AfCdj6Y-p1pL5seliLL32MjoKF-OntmBduLiCxbiFES0lg&oe=65AE2DB6"
            cover
        >
          <v-card
              class="mx-10 my-10"
              max-width="344"
              elevation="16"
          >
            <v-card-item>
              <v-card-title>
                Universidad
              </v-card-title>
              <v-card-subtitle>
                Card subtitle secondary text
              </v-card-subtitle>
            </v-card-item>

            <v-card-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </v-card-text>
          </v-card>
        </v-carousel-item>

        <v-carousel-item
            src="https://scontent.flpb1-2.fna.fbcdn.net/v/t1.6435-9/48397648_2029828620429900_7187556958730190848_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=300f58&_nc_ohc=57U7ZN5v89oAX_gcn_d&_nc_ht=scontent.flpb1-2.fna&oh=00_AfANb555PBsmhzrC3uN5VTtPXsnpO1NwvubwORvqyWvYrQ&oe=65CFD759"
            cover
        >
          <v-card
              class="mx-10 my-10"
              max-width="344"
              elevation="16"
          >
            <v-card-item>
              <v-card-title>
                Facultad de Ciencias y Tecnología
              </v-card-title>
              <v-card-subtitle>
                Card subtitle secondary text
              </v-card-subtitle>
            </v-card-item>

            <v-card-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </v-card-text>
          </v-card>
        </v-carousel-item>

        <v-carousel-item
            src="https://aygun.com.bo/wp-content/uploads/2022/08/universidad_aygun-1024x585.jpg"
            cover
        >
          <v-card
              class="mx-10 my-10"
              max-width="344"
              elevation="16"
          >
            <v-card-item>
              <v-card-title>
                Rectorado UMSS
              </v-card-title>
              <v-card-subtitle>
                Card subtitle secondary text
              </v-card-subtitle>
            </v-card-item>

            <v-card-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </v-card-text>
          </v-card>
        </v-carousel-item>
      </v-carousel>

      <div>
        <v-row align="center" justify="center">
          <v-card
              class="mx-auto"
              max-width="344"
          >
            <v-card-item>
              <div>
                <div class="text-overline mb-1">
                  test1
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
          <v-card
              class="mx-auto"
              max-width="344"
          >
            <v-card-item>
              <div>
                <div class="text-overline mb-1">
                  test2
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
          <v-card
              class="mx-auto"
              max-width="344"
          >
            <v-card-item>
              <div>
                <div class="text-overline mb-1">
                  test3
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
        </v-row>
      </div>
    </v-container>

  </v-main>
</template>
