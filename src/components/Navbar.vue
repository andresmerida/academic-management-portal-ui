<script>
import {RouterLink} from "vue-router";
import  logoURL from "@/img/Logo_umss.png"

export default {
  components: {RouterLink},
  data: () => ({
    logoURL:logoURL,
    items: [
      { title: 'FAC. CIENCIAS ECONOMICAS', carrera:['Ingeniería Comercial', 'Ingeniería Financiera' ] },
      { title: 'FAC. MEDICINA' , carrera:['Licenciatura en Medicina', 'Licenciatura en Fisioterapia y kinesiología' ] },
      { title: 'FAC. ARQUITECTURA Y CIENCIAS DEL HA' , carrera:['Licenciatura en Diseño', 'Licenciatura en Arquitectura' ] },
      { title: 'FAC. CIENCIAS Y TECNOLOGIA' , carrera:['Ingenieria de Sistemas', 'Ingenieria Informatica' ] },
    ],
    users:[
      {rol:'admin'},
      {rol:'estudiante'},
      {rol:'docente'}
    ]
  }),
}
</script>

<template>

  <v-app-bar :elevation="6" nav height="100">
        <v-app-bar-title class="ml-2" >
          <v-img
              :src="logoURL"
              max-height="65"
              contain

          ></v-img>
        </v-app-bar-title>

        <v-btn flat to="/" variant="plain">
          <span>INICIO</span>
        </v-btn>

        <v-menu
            open-on-hover
        >
          <template v-slot:activator="{ props }">
            <v-btn
                v-bind="props"
                class="ml-2"
                to="/facultades"
                variant="plain"
            >
              FACULTADES
            </v-btn>
          </template>
          <v-list>
            <v-list-item
                v-for="(item, index) in items"
                :key="index"
            >
              <v-list-item-title>
                <spin class="font-weight-bold">{{ item.title }}</spin>

                <v-list-item-media v-for="(carrera, i) in item.carrera" :key="i">
                  <v-btn variant="plain" to='/'>
                  {{ carrera }}
                  </v-btn>
                </v-list-item-media>


              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-btn flat to="/admision" class="ml-2" variant="plain">
          <span>ADMISIÓN</span>
        </v-btn>
        <v-btn flat to="/cronograma" class="ml-2" variant="plain">
          <span>CRONOGRAMA</span>
        </v-btn>
        <v-btn flat href="https://web.dicyt.umss.edu.bo/" class="ml-2" variant="plain">
          <span>INVESTIGACIÓN</span>
        </v-btn>



        <v-btn flat href="http://bibliotecas.umss.edu.bo/site/php/index.php" class="ml-2" variant="plain">
          <span>BIBLIOTECA</span>
        </v-btn>
        <v-btn flat href="https://www.umss.edu.bo/tiempo-universitario/" class="ml-2" variant="plain">
          <span>NOTICIAS</span>
        </v-btn>

        <v-spacer></v-spacer>
        <v-menu
            open-on-hover
        >
          <template v-slot:activator="{ props }">
            <v-icon>mdi-account</v-icon>
            <v-btn
                color="grey"
                v-bind="props"
                class="ml-2"
            >
              USUARIO
            </v-btn>
          </template>
          <v-list>
            <v-list-item
                v-for="(user, index) in users"
                :key="index"
            >
              <v-list-item-title>
                <v-btn variant="plain" :to="'/'+ user.rol">{{ user.rol }}</v-btn>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
  </v-app-bar>


</template>

<style scoped>

</style>