<template>
  <div class="products mx-5 ">
    <h1 class="font-weight-light my-6">Products</h1>
      <v-tabs class="font-weight-light mx-5">
        <v-tab v-for="item in items" :key="item">
          {{ item }}
        </v-tab>
      </v-tabs>
      <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
          <v-btn to="../Deploy"  color="blue" fab dark small absolute right  v-bind="attrs"  v-on="on">
            <v-icon>mdi-plus</v-icon>
          </v-btn> 
      </template>
      
     <v-list >
        <v-list-item v-for="(item, i) in links" :key="i">
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
       </v-list-item>
      </v-list>
     </v-menu>
    <v-container class="my-5 mx-3">
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
       {text:'Deploy New Server' , icon:'mdi-plus'},
       {text:'Add Domain' , icon:'mdi-earth'} ,       
       {text:'Add Firewall Group' ,icon:'mdi-domain'}  ,    
       {text: ' Add LoadBalancers' ,icon:'mdi-share-variant'},
       {text:'Add ObjectStorage' , icon:'mdi-delete'},
       {text:'Add Reserved IP' , icon:'mdi-ip'},
       {text:'View More Options' , icon:'mdi-dots-horizontal'},

      ],
         
         
  }),
}
</script>

<style>

.v-tab {
text-transform: none !important;
}
</style>