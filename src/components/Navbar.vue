<template>
  <nav>
    <v-toolbar app>
    <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title >
        <span class=" blue--text "> NEWS:</span>
        <span class="font-weight-light"> Simplified Kubernetes Support</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat color="grey">
        <v-icon left>mdi-email</v-icon>
        <v-icon left>mdi-account</v-icon>
         <span>Taner Temel</span>
      </v-btn>
    </v-toolbar>
<!--navigation-drawer-->
     <v-navigation-drawer app v-model="drawer" permanent width="100%" mini-variant
          mini-variant-width="70" class="primary">
      <v-list>
        <v-list-item-title v-for="link in links" :key="link.text" router :to="link.route">
            <v-icon class="white--text">{{ link.icon }}</v-icon>
            <v-list-item-title>
              <v-list-tile-title class="white--text">
              {{link.text}}
              </v-list-tile-title>
            </v-list-item-title>
        </v-list-item-title>
      </v-list>
    </v-navigation-drawer>
  </nav>
  
</template>


<script>
export default{
    data: () =>({
        drawer: false,
        links:[
          {text:'' , avatar:'/Pro.png'},
          {text:'Products' , avatar:'/a.png'},
          {text:'Billing' , avatar:'/b.png'},
          {text:'Support' , avatar:'/c.png'},
          {text:'Affilliate' , avatar:'/d.png'},
          {text:'Account' , avatar:'/e.png'},
        ],
        
    })
}
</script>