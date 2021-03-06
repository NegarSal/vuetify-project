<template>
  <nav>
<!--Navigation-drawer-->
    <v-navigation-drawer app v-model="drawer" class="indigo" >
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
                <v-img :src="item.avatar"   width="50" height="50" ></v-img>         
              </v-list-item>  
              <v-card  class="text-center indigo white--text"  >
                <h4>{{item.text}}</h4>
              </v-card>       
            </v-card>   
          </v-list-item>
        </v-list>
      </v-layout>
    </v-navigation-drawer>
<!---Navigation-drawer--->
<!---Toolbar--->
    <v-app-bar app >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar>
<!----------Toolbar title-------------->
            <v-toolbar-title >
                 <span class="text-uppercase blue--text">News:</span>
                 <span class="font-weight-light">Simplified Kubernetes Support</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
<!------- User toolbar---------->
            <v-toolbar-items class="hidden-sm-and-down"> 
               <v-btn  class="white" flat><v-icon left flat>mdi-email</v-icon>
               <v-icon left flat> mdi-account-circle</v-icon>
               <v-btn class="white" flat>Taner Temel</v-btn>
               <v-icon flat>mdi-menu-down</v-icon></v-btn>
            </v-toolbar-items>

        </v-toolbar>
    </v-app-bar>

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