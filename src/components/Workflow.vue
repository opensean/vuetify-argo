<template>
  <v-container fluid>
    <WorkflowSelect :workflows="workflows" :workflowSelect.sync="workflow"/>
    <WorkflowForm :workflow="workflow" :workflowSubmit.sync="submitted"/>
  </v-container> 
</template>

<script>
  import WorkflowSelect from '@/components/WorkflowSelect'
  import WorkflowForm from '@/components/WorkflowForm'

  export default {
    name: 'Workflow',
    props: {
      workflows: Array,
      workflowSelect: Object,
      workflowSubmit: Object,
    },
    components: {
      WorkflowSelect,
      WorkflowForm,
    },
    data: () => ({
      workflow: null,
      submitted: null,
    }),

    mounted: function () {
    },
    methods: {
    },
    watch: {
      workflow: function(newVal){
        this.$emit('update:workflowSelect', newVal);
      },
      submitted: function(newVal){
        this.$emit('update:workflowSubmit', newVal);
      }
    }
  }
</script>
