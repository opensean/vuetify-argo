<template>
  <v-container fluid>
    <WorkflowSelect :workflows="workflows" :workflow.sync="workflow"/>
    <WorkflowForm :workflow="workflow"/>
  </v-container> 
</template>

<script>
  import WorkflowSelect from '@/components/WorkflowSelect'
  import WorkflowForm from '@/components/WorkflowForm'

  export default {
    name: 'Workflow',
    props: {
      workflows: Array,
      rawWorkflow: Object,
    },
    components: {
      WorkflowSelect,
      WorkflowForm,
    },
    data: () => ({
      workflow: null,
    }),

    mounted: function () {
    },
    methods: {
    },
    watch: {
      workflow: function(newVal){
        this.$emit('update:rawWorkflow', newVal);
      }
    }
  }
</script>
