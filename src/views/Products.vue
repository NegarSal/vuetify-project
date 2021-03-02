<template>
  <div class="products ">
    <h1 class="font-weight-light my-6">Products</h1>
      <v-tabs fixed-tabs class="font-weight-light">
        <v-tab v-for="item in items" :key="item">
          {{ item }}
        </v-tab>
      </v-tabs>
      <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-fab-transition>
        <v-btn color="blue" fab dark small absolute right
          v-bind="attrs"  v-on="on">
        <v-icon>mdi-plus</v-icon>
        </v-btn></v-fab-transition>        
      </template>
     <v-list>
        <v-list-item   v-for="link in links" :key="link.text">
          <v-icon>{{ link.icon }}</v-icon>
          <v-list-item-title>{{link.text}}</v-list-item-title>
      </v-list-item>
      </v-list>
    </v-menu>
    <v-container class="my-5">
      <v-card  class="pa-6 my-5" style="border-left: 3px solid blue">
        <v-layout  row wrap>
          <v-flex xs12 md6>
           <div class="caption blue--text">
            Read How-To Articles and FAQs VultrDocs
           </div>
          </v-flex>
        </v-layout>
      </v-card>
      <v-card class="pa-6 my-5" style="border-left: 3px solid green">
        <v-layout row wrap>
          <v-flex xs12 md6>
           <div class="caption green--text">
            Good News-Your account can earn some additional free credit! Click here to view available promos 
           </div>
          </v-flex>
        </v-layout>
      </v-card>
    </v-container> 
  </div>
</template>

<script>

export default {
  products:[
  ],
    data: () => ({
     tab: null,
        items: [
          'Instances', 'Snapshots', 'ISOs', 'Scripts', 'DNS',
          'BlockStorage', 'Objects', 'Firewall', 'Network', 'LoadBalancers',
        ],
 links: [
       {icon: 'md-phone' ,text:'Deploy New Server'},
       {icon:'' ,text:'Add Domain'} ,       
       {icon:'' ,text:'Add Firewall Group'}  ,    
       {icon:'',text: ' Add LoadBalancers'},
       {icon:'' ,text:'Add ObjectStorage'},
       {icon:'',text:'Add Reserved IP'},
       {icon:'',text:'View More Options'},

      ],
         
         
  }),
}
</script>

<style>

.v-tab {
text-transform: none !important;
}
</style>