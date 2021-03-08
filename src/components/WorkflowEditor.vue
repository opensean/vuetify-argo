<template>
  <v-card>
    <cytoscape
      ref="cyRef"
      :config="config"
      :preConfig="preConfig"
      :afterCreated="afterCreated"
      v-on:mousedown="addNode"
      v-on:cxttapstart="updateNode"
    >
      <cy-element
        v-for="def in elements"
        :key="`${def.data.id}`"
        :definition="def"
        v-on:mousedown="deleteNode($event, def.data.id)"
      />
    </cytoscape>
    <v-card-title>
      test
    </v-card-title>
    <v-card-text >
    </v-card-text>
    <v-card-actions>
      <v-btn
        color="success"
        >
        Submit
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  import jquery from 'jquery'
  import contextMenus from 'cytoscape-cxtmenu'
  export default {
    name: 'WorkflowEditor',
    props: {
      workflow: Object,
    },
    data: () => ({	
      config: {
        style: [
          {
            selector: "node",
            style: { "background-color": "#666", label: "data(id)" }
          },
          {
            selector: "edge",
            style: {
              width: 3,
              "line-color": "#ccc",
              "target-arrow-color": "#ccc",
              "target-arrow-shape": "triangle"
            }
          }
        ],
        layout: { name: "grid", rows: 1 }
      },
      elements: [
          {
            data: { id: "a" },
            position: { x: 589, y: 182 },
            group: "nodes"
          },
          {
            data: { id: "b" },
            position: { x: 689, y: 282 },
            group: "nodes"
          },
          {
            data: { id: "c" },
            position: { x: 489, y: 282 },
            group: "nodes"
          },
          {
            data: { id: "ab", source: "a", target: "b" },
            group: "edges"
          }
      ],
    }),
    computed: {
    },
    mounted: function () {
      console.log("mounted");
    },
    methods: {
      addNode(event) {
        console.log(event.target, this.$refs.cyRef.instance);
        if (event.target === this.$refs.cyRef.instance)
          console.log("adding node", event.target);
      },
      deleteNode(id) {
        console.log("node clicked", id);
      },
      updateNode(event) {
        console.log("right click node", event);
      },
      preConfig(cytoscape) {
        console.log("calling pre-config", cytoscape);
        contextMenus(cytoscape, jquery);
      },
      afterCreated (cy) {
        // demo your core ext
        cy.contextMenus({
          menuItems: [
            {
              id: 'remove',
              content: 'remove',
              tooltipText: 'remove',
              image: {src: 'remove.svg', width: 12, height: 12, x: 6, y: 4},
              selector: 'node, edge',
              onClickFunction: function (event) {
                var target = event.target || event.cyTarget
                target.remove()
              },
              hasTrailingDivider: true
            },
            {
              id: 'hide',
              content: 'hide',
              tooltipText: 'hide',
              selector: '*',
              onClickFunction: function (event) {
                var target = event.target || event.cyTarget
                target.hide()
              },
              disabled: false
            }
          ]
        })
      }
    }
  }
</script>
