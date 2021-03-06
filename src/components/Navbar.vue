<template>
  <nav>
<!--Nav drawer-->
    <v-navigation-drawer app v-model="drawer" permanent width="70px" class="primary" >  
      <v-layout column align-center>
        <v-flex class="mt-1">
          <v-avatar size="50">
            <img src="/pro.png" >
          </v-avatar>
        </v-flex>
      </v-layout>
      <v-layout column align-center >
        <v-list nav  >
          <v-list-item v-for="item in links" :key="item.text" :to="item.url"  >
            <v-card flat class=" indigo mt-1"  >   
              <v-list-item flat class=" my-3" >
                <v-img :src="item.avatar" width="50" height="50" ></v-img>         
              </v-list-item>  
              <v-card  class="text-center indigo white--text"  >
                <h4>{{item.text}}</h4>
              </v-card>       
            </v-card>   
          </v-list-item>
        </v-list>
      </v-layout>
    </v-navigation-drawer>

<!--Toolbar-->
    <v-toolbar app>
    <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title >
        <span class=" blue--text "> NEWS:</span>
        <span class="font-weight-light"> Simplified Kubernetes Support</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat color="white">
        <v-icon left>mdi-email</v-icon>
        <v-icon left>mdi-account</v-icon>
         <span>Taner Temel</span>
      </v-btn>
    </v-toolbar>
  </nav>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    drawer: false,
    links: [
      {text: 'Products',avatar: '/a.png', url: '/' },
      {text: 'Billing',avatar: '/b.png', url: '/billing' },
      {text: 'Support',avatar: '/c.png', url: '/support' },
      {text: 'Affiliate',avatar: '/d.png', url: '/affiliate' },
      {text: 'Account', avatar: '/e.png', url: '/account' }
    ],
  })
}
</script>
<style>
.v-toolbar {
text-transform: none !important;
} 
</style>