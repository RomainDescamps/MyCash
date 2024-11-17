<template>
  <v-app>
    <drawer />
    <v-app-bar app>
      <v-toolbar-title>MyCash</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container>
        <slot />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import drawer from '~/components/drawer.vue';

export default {
  name: 'default',
  components: {
    drawer
  }
};
</script>