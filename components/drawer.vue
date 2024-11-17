<template>
    <v-navigation-drawer app>
      <v-list>
        <v-list-item>
            <v-list-item-title class="title">MyCash</v-list-item-title>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item link>
            <v-icon>mdi-home</v-icon>
            <v-list-item-title>Accueil</v-list-item-title>
        </v-list-item>
        <v-list-item link>
            <v-icon>mdi-account</v-icon>
            <v-list-item-title>Comptes</v-list-item-title>
        </v-list-item>
        <v-list-item link>
            <v-icon>mdi-cash</v-icon>
            <v-list-item-title>Transactions</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </template>

<style scoped>
.title {
  font-weight: bold;
}
</style>