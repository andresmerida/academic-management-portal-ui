<script>
export default {
  data () {
    return {
      desserts: [
        {
          name: '12345',
          calories: 'carrera 1',
        },
        {
          name: '12354',
          calories: 'carrera 2',
        },
        {
          name: '52364',
          calories: 'carrera 3',
        },
        {
          name: '96385',
          calories: 'carrera 4',
        },
        {
          name: '98756',
          calories: 'carrera 5',
        },
      ],
    }
  },
}
</script>

<template>
  <v-main>
    <v-container >
      <p class="font-weight-regular text-center text-white text-h4 text-uppercase">
        Facultades
      </p>
      <v-expansion-panels variant="accordion">
        <v-expansion-panel
            v-for="i in 4"
            :key="i"
            :title="'Facultad '+i"
        >
          <v-expansion-panel-text>
            <v-table>
              <thead>
              <tr>
                <th class="text-left">
                  Codigo
                </th>
                <th class="text-left">
                  Carreras
                </th>
              </tr>
              </thead>
              <tbody>
              <tr
                  v-for="item in desserts"
                  :key="item.name"
              >
                <td>{{ item.name }}</td>
                <td>{{ item.calories }}</td>
              </tr>
              </tbody>
            </v-table>
          </v-expansion-panel-text>

        </v-expansion-panel>
      </v-expansion-panels>
    </v-container >
  </v-main>
</template>

<style scoped>

</style>