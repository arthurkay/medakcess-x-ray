<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="MedAkcess Logo"
          class="shrink mr-2"
          contain
          src="./assets/logo.png"
          transition="scale-transition"
          width="40"
        />

        <h3 class="ar-4">MedAkcess</h3>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        @click.stop = "dialog = true"
        text
      >
        <span class="mr-2">Playground</span>
        <v-icon>mdi-cloud-outline</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-dialog
      v-model="dialog"
      max-width="290">
      <v-card>
        <v-card-title>
          <span class="mr-2">Playground</span>
        </v-card-title>
        <v-card-subtitle>
          Coming Soon
        </v-card-subtitle>
        <v-card-text>
          Playground is an option that will allow end users to test and play with the development AI models built by MedAkcess
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
          class="info"
          text
          @click="dialog = false">
          Close
          </v-btn>
        </v-card-actions>
      </v-card>
      </v-dialog>
      <HomePage />
    </v-main>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
import HomePage from './components/HomePage'

export default {
  name: 'App',

  components: {
    HomePage,
  },

  data: () => ({
      dialog: false,
  }),
};
</script>
