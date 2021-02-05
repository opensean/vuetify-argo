<template>
  <v-select 
    v-model="select"
    :items="compWorkflows"
    label="Select a workflow"
    :loading="loading"
    >
  </v-select>
</template>

<script>
  export default {
    name: 'WorkflowSelect',
    props: {
      workflows: Array,
      workflow: Object,
    },
    data: () => ({
      select: null,
      loading: false,
    }),

    computed: {
      compWorkflows: function () {
        if(this.workflows){
          console.log(this.workflows);
          let temp = [];
          this.workflows.forEach(item => 
            temp.push({"text": item.metadata.name, 
                       "value": item})
          )
          console.log("compWorkflows:");
          console.log(temp);
          return temp;
        }
        else {
          return [];
        }
      }
    },
    mounted: function () {
    },
    methods: {
    },
    watch: {
      select: function(newVal, oldVal){
        if (oldVal) {
          console.log("previous selection: " + oldVal.metadata.name);
        }
        console.log("current selection: " + newVal.metadata.name);
        this.$emit('update:workflow', newVal);
      }
    }
  }
</script>
