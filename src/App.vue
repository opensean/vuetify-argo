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
      <v-container fluid>
        <workflow-editor></workflow-editor>
      </v-container>
      <workflow :workflows="examples" :workflowSubmit.sync="workflowSubmit" :workflowSelect.sync="workflowSelect"></workflow>
      <v-container fluid>
        <v-row v-if="workflowSelect">
          <v-col>
            <v-card
              height="100%">
                <v-card-title>
                Input JSON
                </v-card-title>
                <v-card-text>
                  <vue-json-pretty :data="workflowSelect"> </vue-json-pretty>
                </v-card-text>
            </v-card>
          </v-col>
          <v-col>
            <v-card
              height="100%"
              v-if="workflowSubmit">
                <v-card-title>
                Output JSON
                <v-chip class="ml-2">
                  {{ lastUpdate }}
                </v-chip>
                </v-card-title>
                <v-card-text>
                  <vue-json-pretty :data="workflowSubmit"> </vue-json-pretty>
                </v-card-text>
            </v-card>
            <v-card
              height="100%"
              v-else>
                <v-card-title>
                Click submit to view output
                </v-card-title>
                <v-card-text>
                </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Workflow from './components/Workflow';
import examples from '@/workflowTemplates/examples.json';
import VueJsonPretty from 'vue-json-pretty';
import 'vue-json-pretty/lib/styles.css';
import WorkflowEditor from './components/WorkflowEditor';

export default {
  name: 'App',

  components: {
    Workflow,
    VueJsonPretty,
    WorkflowEditor
  },

  data: () => ({
    examples: examples,
    workflowSelect: null,
    workflowSubmit: null,
    lastUpdate: null,
  }),

  methods: {
    timeStamp () {
      // https://stackoverflow.com/questions/10211145/getting-current-date-and-time-in-javascript
      var currentdate = new Date(); 
      var datetime = "Updated: " + currentdate.getDate() + "/"
                      + (currentdate.getMonth()+1)  + "/" 
                      + currentdate.getFullYear() + " @ "  
                      + currentdate.getHours() + ":"  
                      + currentdate.getMinutes() + ":" 
                      + currentdate.getSeconds();
      return datetime;
    }
  },

  watch: {
    workflowSelect: function(){
      this.workflowSubmit = null;
    },
    workflowSubmit: function(){
      this.lastUpdate = this.timeStamp();
    }
  }
};
</script>
