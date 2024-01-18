<script>
import {RouterLink} from "vue-router";
import  logoURL from "@/img/Logo_umss.png"

export default {
  components: {RouterLink},
  data: () => ({
    logoURL:logoURL,
    items: [
      { title: 'FAC. CIENCIAS ARGRICOLAS' },
      { title: 'FAC. CIENCIAS ECONOMICAS' },
      { title: 'FAC. ODONTOLOGIA' },
      { title: 'FAC. ARQUITECTURA Y CIENCIAS DEL HA' },
      { title: 'FAC. CIENCIAS Y TECNOLOGIA' },
    ],
    users:[
      {rol:'ADMIN'},
      {rol:'ESTUDIANTE'},
      {rol:'DOCENTE'}
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

        <v-btn flat to="/">
          <span>INICIO</span>
        </v-btn>

        <v-menu
            open-on-hover
        >
          <template v-slot:activator="{ props }">
            <v-btn
                color="primary"
                v-bind="props"
                class="ml-2"
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
                {{ item.title }}

              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-btn flat to="/investigacion" class="ml-2">
          <span>INVESTIGACIÓN</span>
        </v-btn>

        <v-btn flat to="/admision" class="ml-2">
          <span>ADMISIÓN</span>
        </v-btn>

        <v-btn flat to="/bibloteca" class="ml-2">
          <span>BIBLIOTECA</span>
        </v-btn>
        <v-btn flat class="ml-2">
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
                {{ user.rol }}

              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

    <v-btn icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>
  </v-app-bar>


</template>

<style scoped>

</style>