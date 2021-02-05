<template>
  <v-container fluid>
    <WorkflowSelect :workflows="workflows" :workflow.sync="workflow"/>
    <WorkflowForm :workflow="workflow"/>
  </v-container> 
</template>

<script>
  import WorkflowSelect from '@/components/WorkflowSelect'
  import WorkflowForm from '@/components/WorkflowForm'
  import examples from '@/workflowTemplates/examples.json'
  export default {
    name: 'Workflow',
    components: {
      WorkflowSelect,
      WorkflowForm,
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
