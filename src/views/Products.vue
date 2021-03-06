<template>
  <div class="products mx-5 ">
    <h1 class="font-weight-light my-6">Products</h1>
<!--Tabs-->   
    <v-tabs class="font-weight-light mx-5">
      <v-tab v-for="item in items" :key="item">
        {{ item }}
      </v-tab>
<!--Blue btn-->
      <v-menu open-on-hover bottom offset-y >
      <template v-slot:activator="{ on, attrs }">
        <v-btn to="../Deploy" v-bind="attrs" v-on="on"  class=" mx-1" absolute right fab dark color="blue"  >  
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
    </v-tabs>
<!--alert-->
    <v-alert dismissible color="blue solid" border="left" elevation="2" colored-border class=" caption blue--text my-9">
     <b> Read How</b>-To Articles and FAQs <u>Vultr Docs</u>
    </v-alert>
    <v-alert dismissible color="green solid" border="left" elevation="2" colored-border class=" caption green--text my-9">
     <b>Good News</b>-Your account can earn some additional free credit! <u>Click here to view available promos</u> 
    </v-alert>
  
  </div>
</template>

<script>
export default {
  data: () => ({
    //Tabs
      tab: null,
      items: [
        'Instances', 'Snapshots', 'ISOs', 'Scripts', 'DNS',
        'BlockStorage', 'Objects', 'Firewall', 'Network', 'LoadBalancers',
          ],
    //Blue btn
      links: [
        {text:'Deploy New Server' , icon:'mdi-plus'},
        {text:'Add Domain' , icon:'mdi-earth'} ,       
        {text:'Add Firewall Group' ,icon:'mdi-domain'}  ,    
        {text:'Add LoadBalancers' ,icon:'mdi-share-variant'},
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