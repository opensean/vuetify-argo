<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <workflow :workflows="examples" :rawWorkflow.sync="rawWorkflow"></workflow>
      <v-container fluid>
        <v-card
          v-if="rawWorkflow">
            <v-card-title>
            Raw JSON
            </v-card-title>
            <v-card-text>
              <vue-json-pretty :data="rawWorkflow"> </vue-json-pretty>
            </v-card-text>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Workflow from './components/Workflow';
import examples from '@/workflowTemplates/examples.json'
import VueJsonPretty from 'vue-json-pretty';
import 'vue-json-pretty/lib/styles.css';

export default {
  name: 'App',

  components: {
    Workflow,
    VueJsonPretty
  },

  data: () => ({
    examples: examples,
    rawWorkflow: null,
  }),
};
</script>
