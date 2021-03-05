<template>
  <div class="deploy">
    <h1 class="font-weight-light">Deploy New Instance</h1> 
       
  <!--Choose Server-->
  <h2 class="my-5">Choose Server</h2>
    <v-container class="my-5">
     <v-layout row wrap>
       <v-flex xs12 sm6 md4 lg3 v-for="item in server" :key="item.text">
         <v-card class="text-center ma-3">
           <v-responsive class="pt-4">
             <v-list-item-avatar size="150">
                 <img :src="item.avatar">
             </v-list-item-avatar>
           </v-responsive>  
           <v-card-text>
             <div  class="black--text"><b>{{item.text}}</b></div>
           </v-card-text> 
         </v-card>
       </v-flex>
     </v-layout>
    </v-container>

<!--Server Location-->
  <h2 class="my-5">Server Location</h2>
   <v-container class="my-5">
     <v-tabs class="font-weight-light">
        <v-tab v-for="item in items" :key="item">
          {{item}}
        </v-tab>
      </v-tabs>
     <v-layout row wrap>
       <v-flex  xs12 sm6 md4 lg3 v-for="item in flag" :key="item.name">
        <v-card  class="ma-3">
         <v-list-item >
          
           <v-list-item-avatar tile >
            <img :src="item.avatar">
           </v-list-item-avatar>
           
          <v-list-item-content>
           <v-list-item-title>
            <b>{{item.name}}</b> 
           </v-list-item-title>
          <v-list-item-subtitle>
            <b>{{item.sub}}</b>
          </v-list-item-subtitle>
          </v-list-item-content>
         </v-list-item>
        </v-card>
       </v-flex>
      </v-layout>
   </v-container>

<!--Server Type-->
  <h2 class="my-5">Server Type</h2>
   <v-container class="my-5">
    <v-tabs class="font-weight-light">
     <v-tab v-for="item in links" :key="item">
      {{item}}
     </v-tab>
    </v-tabs>
    <v-layout row wrap>
       <v-flex  xs12 sm6 md4 lg3 v-for="item in type" :key="item.name">
        <v-card  class="ma-4">
         <v-list-item >
          <v-responsive class="pt-4">
           <v-avatar tile >
            <img :src="item.avatar">
           </v-avatar>
          </v-responsive> 
          <v-list-item-content>
           <v-list-item-title>
            <b>{{item.name}}</b> 
           </v-list-item-title>
          <v-list-item-subtitle>
            <b>{{item.sub}}</b>
          </v-list-item-subtitle>
          </v-list-item-content>
         </v-list-item>
        </v-card>
       </v-flex>
      </v-layout>
   </v-container>



  </div> 
</template>

<script>
export default {
    data : () =>({
      //Choose Server
        server:[
         {text :'Cloud Compute', avatar:'/1.png'},
         {text :'High Frequency', avatar:'/2.png'},
         {text :'Bare Metal', avatar:'/3.png'},
         {text :'Dedicated Cloud', avatar:'/4.png'},
        ],      
      //Server Location 
        tab: null,
        items: [
          'AllLocations', 'America', 'Europe', 'Australia', 'Asia',
        ],        
        flag :[
         {name :'Amsterdam', sub:'Netherlands', avatar:'/5.png'},
         {name :'Paris', sub:'France',avatar:'/6.png'},
         {name :'Frankfurt', sub:'Germany', avatar:'/7.png'},
         {name :'London', sub:'United states', avatar:'/8.png'},
         {name :'Atlanta', sub:'United states', avatar:'/9.png'},
         {name :'New York(NJ)', sub:'United states', avatar:'/9.png'},
         {name :'Chicago', sub:'United states', avatar:'/9.png'},
         {name :'Dallas', sub:'United states', avatar:'/9.png'},
         {name :'LosAngeles', sub:'United states', avatar:'/9.png'},
         {name :'Miami', sub:'United states',avatar:'/9.png'},
         {name :'Seattle', sub:'United states',avatar:'/9.png'},
         {name :'Sillicon Valley', sub:'United states',avatar:'/9.png'},
         {name :'Toronto', sub:'Canada' ,avatar:'/.png'},
         {name :'Tokyo',  sub:'Japan',avatar:'/.png'},
         {name :'Singapore',  sub:'Singapore',avatar:'/.png'},
         {name :'Sydney', sub:'Australia', avatar:'/.png'},
        ],
      //ServerType
        links: [
          '64 bit OS', '32 bit OS', 'Application', 'Upload ISO',
          'ISO library','Backup', 'Snapshot', 
        ],
         type:[
         {name :'CentOS', avatar:'/10.png'},
         {name :'CoreOS', avatar:'/11.png'},
         {name :'Debian', avatar:'/12.png'},
         {name :'Fedora', avatar:'/13.png'},
         {name :'FreeBSD', avatar:'/14.png'},
         {name :'OpenBSD', avatar:'/15.png'},
         {name :'Ubuntu', avatar:'/16.png'},
         {name :'Windows', avatar:'/17.png'},
        ],

    })
}
</script>