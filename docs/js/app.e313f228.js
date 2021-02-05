(function(e){function t(t){for(var a,l,s=t[0],i=t[1],c=t[2],p=0,f=[];p<s.length;p++)l=s[p],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&f.push(r[l][0]),r[l]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);u&&u(t);while(f.length)f.shift()();return n.push.apply(n,c||[]),o()}function o(){for(var e,t=0;t<n.length;t++){for(var o=n[t],a=!0,s=1;s<o.length;s++){var i=o[s];0!==r[i]&&(a=!1)}a&&(n.splice(t--,1),e=l(l.s=o[0]))}return e}var a={},r={app:0},n=[];function l(t){if(a[t])return a[t].exports;var o=a[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,l),o.l=!0,o.exports}l.m=e,l.c=a,l.d=function(e,t,o){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(l.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(o,a,function(t){return e[t]}.bind(null,a));return o},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=i;n.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var a=o("2b0e"),r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-app",[o("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[o("div",{staticClass:"d-flex align-center"},[o("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",transition:"scale-transition",width:"40"}}),o("v-img",{staticClass:"shrink mt-1 hidden-sm-and-down",attrs:{alt:"Vuetify Name",contain:"","min-width":"100",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png",width:"100"}})],1),o("v-spacer"),o("v-btn",{attrs:{href:"https://github.com/vuetifyjs/vuetify/releases/latest",target:"_blank",text:""}},[o("span",{staticClass:"mr-2"},[e._v("Latest Release")]),o("v-icon",[e._v("mdi-open-in-new")])],1)],1),o("v-main",[o("Workflow")],1)],1)},n=[],l=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-container",{attrs:{fluid:""}},[o("WorkflowSelect",{attrs:{workflows:e.workflows,workflow:e.workflow},on:{"update:workflow":function(t){e.workflow=t}}}),o("WorkflowForm",{attrs:{workflow:e.workflow}})],1)},s=[],i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-select",{attrs:{items:e.compWorkflows,label:"Select a workflow",loading:e.loading},model:{value:e.select,callback:function(t){e.select=t},expression:"select"}})},c=[],u=(o("4160"),o("b0c0"),o("159b"),{name:"WorkflowSelect",props:{workflows:Array,workflow:Object},data:function(){return{select:null,loading:!1}},computed:{compWorkflows:function(){if(this.workflows){console.log(this.workflows);var e=[];return this.workflows.forEach((function(t){return e.push({text:t.metadata.name,value:t})})),console.log("compWorkflows:"),console.log(e),e}return[]}},mounted:function(){},methods:{},watch:{select:function(e,t){t&&console.log("previous selection: "+t.metadata.name),console.log("current selection: "+e.metadata.name),this.$emit("update:workflow",e)}}}),p=u,f=o("2877"),m=o("6544"),d=o.n(m),w=o("b974"),v=Object(f["a"])(p,i,c,!1,null,null,null),h=v.exports;d()(v,{VSelect:w["a"]});var g=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-form",{model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[e.workflow?o("v-card",{attrs:{loading:e.loading}},[o("v-card-title",[e._v(" "+e._s(e.workflow.metadata.name)+" ")]),e.workflow.spec.arguments?o("v-card-text",[o("v-simple-table",{scopedSlots:e._u([{key:"default",fn:function(){return[o("tbody",e._l(e.workflow.metadata.labels,(function(t,a){return o("tr",{key:t.name},[o("td",{staticClass:"overline"},[e._v(e._s(a))]),o("td",[e._v(e._s(t))])])})),0)]},proxy:!0}],null,!1,2975957472)}),e._v(" Please provide the required parameters. "),e._l(e.workflow.spec.arguments.parameters,(function(t,a){return o("v-row",{key:a},[o("v-col",[o(e.components[e.parseComponent(t).component],e._b({tag:"component",model:{value:e.formArr[a],callback:function(t){e.$set(e.formArr,a,t)},expression:"formArr[index]"}},"component",e.parseComponent(t).props,!1))],1)],1)}))],2):o("v-card-text",[e._v(" The selected workflow does not require any parameters. ")]),o("v-card-actions",[o("v-btn",{attrs:{color:"success"},on:{click:e.submit}},[e._v(" Submit ")])],1)],1):e._e()],1)},k=[],b=o("8654"),y=o("2b5d"),x={name:"WorkflowForm",props:{workflow:Object},data:function(){return{components:{"v-text-field":b["a"],"v-combobox":y["a"]},include:!1,valid:!1,loading:!1,parameters:{},formArr:[]}},mounted:function(){console.log(this.workflow)},methods:{submit:function(){var e=this;this.loading=!0,console.log(this.formArr),console.log(this.makeWorkflow(this.workflow,this.formArr)),setTimeout((function(){return e.loading=!1}),2e3)},makeWorkflow:function(e,t){var o=JSON.parse(JSON.stringify(e));if(o.kind="Workflow",o.metadata.generateName=o.metadata.name+"-",delete o.metadata.name,t.length>0)for(var a=0;a<t.length;a++)o.spec.arguments.parameters[a].value=t[a];return o},logFormArr:function(){console.log(this.formArr)},parseComponent:function(e){try{var t=JSON.parse(e.value);return t}catch(o){return console.warn("component definition not provided, defaulting to '<v-text-field>'"),{component:"v-text-field",props:{label:e.name,placeholder:e.value}}}}}},_=x,V=o("8336"),O=o("b0af"),j=o("99d9"),S=o("62ad"),A=o("4bd4"),W=o("0fd9"),C=o("1f4f"),T=Object(f["a"])(_,g,k,!1,null,null,null),N=T.exports;d()(T,{VBtn:V["a"],VCard:O["a"],VCardActions:j["a"],VCardText:j["b"],VCardTitle:j["c"],VCol:S["a"],VForm:A["a"],VRow:W["a"],VSimpleTable:C["a"]});var P=o("f64a"),$={name:"Workflow",components:{WorkflowSelect:h,WorkflowForm:N},data:function(){return{workflow:null,workflows:P}},mounted:function(){},methods:{}},J=$,E=o("a523"),F=Object(f["a"])(J,l,s,!1,null,null,null),M=F.exports;d()(F,{VContainer:E["a"]});var B={name:"App",components:{Workflow:M},data:function(){return{}}},q=B,I=o("7496"),L=o("40dc"),R=o("132d"),H=o("adda"),z=o("f6c4"),D=o("2fa4"),G=Object(f["a"])(q,r,n,!1,null,null,null),K=G.exports;d()(G,{VApp:I["a"],VAppBar:L["a"],VBtn:V["a"],VIcon:R["a"],VImg:H["a"],VMain:z["a"],VSpacer:D["a"]});var Q=o("f309");a["a"].use(Q["a"]);var U=new Q["a"]({});a["a"].config.productionTip=!1,new a["a"]({vuetify:U,render:function(e){return e(K)}}).$mount("#app")},f64a:function(e){e.exports=JSON.parse('[{"apiVersion":"argoproj.io/v1alpha1","kind":"WorkflowTemplate","metadata":{"name":"hello-world","labels":{"description":"An example hello world workflow","version":"v0.1.0"}},"spec":{"entrypoint":"whalesay-template","serviceAccountName":"argo","arguments":{"parameters":[{"name":"textfield","value":"{\\"component\\": \\"v-text-field\\", \\"props\\":{\\"label\\": \\"message\\", \\"placeholder\\":\\"hello world\\", \\"clearable\\": true}}"},{"name":"combobox","value":"{\\"component\\": \\"v-combobox\\", \\"props\\":{\\"items\\": [\\"Hello\\", \\"goodbye\\"], \\"label\\": \\"select\\"}}"},{"name":"basic","value":"no component"}]},"templates":[{"name":"whalesay-template","inputs":{"parameters":[{"name":"message"}]},"container":{"image":"docker/whalesay","command":["cowsay"],"args":["{{inputs.parameters.message}}"]}}]}},{"apiVersion":"argoproj.io/v1alpha1","kind":"WorkflowTemplate","metadata":{"name":"hello-world-2","labels":{"description":"An example hello world workflow"}},"spec":{"entrypoint":"whalesay-template","serviceAccountName":"argo","arguments":{"parameters":[{"name":"textfield","value":"{\\"component\\": \\"v-text-field\\", \\"props\\":{\\"label\\": \\"message\\", \\"placeholder\\":\\"hello world\\", \\"clearable\\": true}}"}]},"templates":[{"name":"whalesay-template","inputs":{"parameters":[{"name":"message"}]},"container":{"image":"docker/whalesay","command":["cowsay"],"args":["{{inputs.parameters.message}}"]}}]}}]')}});
//# sourceMappingURL=app.e313f228.js.map