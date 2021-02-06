<template>
  <v-form v-model="valid">
    <v-card
      v-if="workflow"
      :loading="loading"
      >
      <v-card-title>
        {{ workflow.metadata.name }}
      </v-card-title>
      <v-card-text v-if="workflow.spec.arguments">
            <v-simple-table>
                <template v-slot:default>
                  <tbody>
                    <tr
                      v-for="(item, key) in workflow.metadata.labels"
                      :key="item.name"
                    >
                      <td class="overline">{{ key }}</td>
                      <td>{{ item }}</td>
                    </tr>
                  </tbody>
                </template>
            </v-simple-table>
        Please provide the required parameters.

        <v-row 
          v-for="(item, index) in workflow.spec.arguments.parameters" :key="index">
          <v-col
          >
            <component :is="components[parseComponent(item).component]" v-bind="parseComponent(item).props" v-model="formArr[index]"></component>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-text v-else>
      The selected workflow does not require any parameters.
      </v-card-text>
      
      <v-card-actions>
        <v-btn
          color="success"
          @click="submit"
          >
          Submit
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-form>
</template>

<script>
  import { VTextField, VCombobox} from 'vuetify/lib'
  export default {
    name: 'WorkflowForm',
    props: {
      workflow: Object,
    },
    //components: { VTextField},
    data: () => ({	
      components: {"v-text-field": VTextField,
                   "v-combobox": VCombobox},
      include: false,
      valid: false,
      loading: false,
      parameters: {},
      //formArr: []
    }),

    computed: {

      formArr: function () {
        if(this.workflow) {
          let temp = []
          this.workflow.spec.arguments.parameters.forEach((item) => {
              temp.push(this.parseComponent(item).props["placeholder"]);
          });
          console.log(temp)
          return temp;
        }
        else {
          return [];
        }
      }
    },
    mounted: function () {
      console.log(this.workflow);
    },
    methods: {
      submit () {
        this.loading = true;
        console.log(this.formArr);
        console.log(this.makeWorkflow(this.workflow, this.formArr));
        setTimeout(() => (this.loading = false), 2000)
      },
      makeWorkflow (workflow, parameters) {
          let w =  JSON.parse(JSON.stringify(workflow));
          w.kind = "Workflow";
          w.metadata.generateName = w.metadata.name + "-";
          delete w.metadata.name;
          if (parameters.length > 0) {
              for (let i = 0; i < parameters.length; i++) {
                if (parameters[i]) {
                  w.spec.arguments.parameters[i].value = parameters[i];
                }
                else {

                  w.spec.arguments.parameters[i].value = "";
                }
              }
          }
          return w;
      },
      parseComponent (item) {
        try {
          let tmp = JSON.parse(item.value);
          return tmp;
        }
        catch {
          console.warn("component definition not provided, defaulting to '<v-text-field>'");
          return {"component": 'v-text-field',
                  "props": {"label": item.name, 
                            "placeholder": item.value}};
        }
      },
    },
  }
</script>
