<template>
  <v-app>
    <v-app-bar app>
      <v-btn @click="toggleTheme">toggle theme</v-btn>
    </v-app-bar>
    <drawer />
    <v-main>
      <v-container>
        <slot />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import drawer from '~/components/drawer.vue';
import { useTheme } from 'vuetify'

const theme = useTheme()

const toggleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}

</script>