<template>
  <v-container fluid>
    <WorkflowSelect :workflows="workflows" :workflow.sync="workflow"/>
    <WorkflowForm :workflow="workflow"/>
    <vue-json-pretty :data="workflow" @click="handleClick"> </vue-json-pretty>
  </v-container> 
</template>

<script>
  import WorkflowSelect from '@/components/WorkflowSelect'
  import WorkflowForm from '@/components/WorkflowForm'
  import VueJsonPretty from 'vue-json-pretty';
  import 'vue-json-pretty/lib/styles.css';
  import examples from '@/workflowTemplates/examples.json'
  export default {
    name: 'Workflow',
    components: {
      WorkflowSelect,
      WorkflowForm,
      VueJsonPretty,
    },
    data: () => ({
      workflow: null,
      workflows: examples
    }),

    mounted: function () {
    },
    methods: {
    },
  }
</script>
