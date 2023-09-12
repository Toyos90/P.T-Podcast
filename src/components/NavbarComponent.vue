<template>
  <v-app>
  <div>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Mi aplicación</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text>Inicio</v-btn>
      <v-btn text>Acerca de</v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">Menú</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Inicio</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <!-- Más elementos del menú aquí -->
      </v-list>
    </v-navigation-drawer>

    <!-- Aquí va el contenido de tu página -->
  </div>
</v-app>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const drawer = ref(false)

    return { drawer }
  },
}
</script>

<style scoped>

</style>
