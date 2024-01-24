<script>
import imgUmss from '@/img/umss.jpg'
import imgFcyt from '@/img/fcyt3.jpg'
import imgGestion from '@/img/img_gestion.png'
export default {
  data () {
    return {
      items: [
        {
          src: imgGestion,
        },
        {
          src: imgUmss,
        },
        {
          src: imgFcyt,
        },
      ],
      title_items:[
          {
            title:'Gestión de Cursos y Asignatura',text:'Proporciona información detallada sobre cada curso, incluyendo descripciones, requisitos y materiales asociados.',
            icon:'mdi mdi-book-multiple'
          },
          {
            title:'Registro y Consulta de Calificaciones',text:'Permite a los estudientes acceder a sus calificiaciones de forma rapida y sencilla. Facilita a los  docentes el proceso de ingreso y actualizacion de notas.',
            icon:'mdi mdi-file-document-outline'
          },
          {
            title:'Gestión de Usuario y Comunicación', text: 'Permite la creación y gestión de perfiles para docentes, estudiantes y personal administrativo. Proporciona un sistemade notificaciones para informar sobre eventos, plazos y novedades.',
            icon:'mdi mdi-account-group'
          },
      ],

    }
  },
}
</script>

<template>
  <v-main>
    <v-container>
      <v-carousel hide-delimiter-background show-arrows="hover">
        <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            :src="item.src"

        ></v-carousel-item>
      </v-carousel>
      <div  class="my-15">
        <v-row align="center" justify="center">
          <v-col
              v-for="(title_item, i) in title_items"
              :key="i"
              cols="auto"
          >
            <v-card
                class="mx-1"
                max-width="380"
                min-height="260"
                variant="elevated"
            >
              <v-card-item>
                <div>
                  <div class="text-center mt-2">
                    <v-icon :icon=title_item.icon size="x-large" color="#1867c0"></v-icon>
                  </div>
                  <div class="text-subtitle-1 mb-1 font-weight-bold text-center mt-5">
                    {{ title_item.title }}
                  </div>
                  <div class="mx-5 text-justify">{{ title_item.text }}</div>
                </div>
              </v-card-item>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </v-container>

  </v-main>
</template>
