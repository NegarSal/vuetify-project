<template>
  <div class="deploy">
    <h1 class="font-weight-light">Deploy New Instance</h1> 
       
  <!--Choose Server-->
  <h2 class="my-5">Choose Server</h2>
    <v-container class="my-5">
     <v-layout row wrap>
       <v-flex xs12 sm6 md4 lg3 v-for="item in server" :key="item.text" @click="messages++">
         <v-card class="text-center ma-3" >
            <v-badge  :content="messages" :value="messages" color="blue" overlap>
        <v-icon large right>
         mdi-checkbox-marked
        </v-icon>
      </v-badge>
           <v-responsive class="pt-4">
             <v-list-item-avatar size="130">
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
   
<!--Server Size-->
  <h2 class="my-5">Server Size</h2>
   <v-container class="my-5">
     <v-layout row wrap class="my-5">
        <v-flex xs12 sm6 md4 lg3 v-for="size in sizes" :key="size.title" >
          <v-card  class="text-xs-center ma-3">
            <v-card-text align="center" justify="center">
              <div class=" black--text"><b>{{size.title}}</b></div>
              <div class=" blue--text"><h1>{{size.p1}}</h1></div>
              <div class="subheading grey--text my-2">{{size.p2}}</div>
               <v-divider class="blue my-5" width="40"></v-divider>
              <div class="subheading grey--text"><b>{{size.cpu}}</b></div>
              <div class="subheading grey--text">{{size.m}}</div>
              <div class="subheading grey--text">{{size.bw}}</div>
            </v-card-text>
          </v-card>
        </v-flex>  
      </v-layout>
   </v-container>

<!--Additional Features-->
  <h2 class="my-5">Additional Features</h2>
   <v-container fluid>
    <v-checkbox label="Enable IPv6" >
      <template v-slot:prepend >
        <v-icon v-on="on" left>
          mdi-help-circle-outline
        </v-icon>   
      </template>
    </v-checkbox>
    <v-checkbox>
      <template v-slot:label>
        <div>Enable<strong class="primary--text">Auto Backups</strong></div>
      </template>
    </v-checkbox>
    <v-checkbox>
      <template v-slot:label>
        <div>Enable<strong class="primary--text">DDOS Protection</strong></div>
      </template>
      <template v-slot:prepend >
        <v-icon v-on="on">
          mdi-help-circle-outline
        </v-icon>   
      </template>
    </v-checkbox>
    <v-checkbox label="Enable Private Networking">
      <template v-slot:prepend >
        <v-icon v-on="on">
          mdi-help-circle-outline
        </v-icon>   
      </template>
    </v-checkbox>
   </v-container>

<!--Startup Script-->
  <h2 class="my-5">Startup Script <a>( Manage )</a> </h2>
   <v-container class="my-5">
     <v-layout row wrap>
       <v-flex  xs12 sm6 md4 lg3>
        <v-card width="250">
         <v-list-item class="my-5">
            <v-btn class="my-4 mx-2"  fab black color="white" >
             <v-icon dark>mdi-plus</v-icon>
            </v-btn> 
          <v-list-item-content class="mx-5">
            <v-list-item-title>
             <b>Add New</b> 
            </v-list-item-title>
           </v-list-item-content>
         </v-list-item>
        </v-card>
       </v-flex>
     </v-layout>
   </v-container>
   
<!--SSH Keys-->
  <h2 class="my-5">SSH Keys <a>( Manage )</a> </h2>
   <v-container class="my-5">
    <v-row >
     <v-col cols="12" sm="3">
       <v-card width="300">
         <v-list-item class="my-5" >
           <v-btn class="my-4 mx-2"  fab color="blue" >
            <v-icon> mdi-key-variant</v-icon>
           </v-btn>
            <v-list-item-content class="mx-5">
           <v-list-item-title>Blenheim</v-list-item-title>
           </v-list-item-content>
         </v-list-item>
       </v-card>
     </v-col>
     <v-col cols="12" sm="3">
       <v-card width="300">
         <v-list-item class="my-5" >
           <v-btn class="my-4 mx-2"  fab black color="white">
            <v-icon dark> mdi-plus</v-icon>
           </v-btn>
         <v-list-item-content class="mx-5">
         <v-list-item-title>Add New</v-list-item-title>
        </v-list-item-content>
        </v-list-item>
       </v-card>
      </v-col>
    </v-row> 
    </v-container>

<!--Server Hostname&Label-->
  <h2 class="my-5">Server Hostname&Label</h2>
   <v-container class="my-5">
     <v-form>
      <v-container>
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field label="Enter Server Hostname" single-line outlined></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field label="Enter Server Label" single-line outlined></v-text-field>
          </v-col>
        </v-row>
      </v-container>
     </v-form>
   </v-container>

<!--Footer-->

   <v-btn color="primary" dark right>
          Deploy Now
        </v-btn>

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
         {name :'Toronto', sub:'Canada' ,avatar:'/18.png'},
         {name :'Tokyo',  sub:'Japan',avatar:'/19.png'},
         {name :'Singapore',  sub:'Singapore',avatar:'/21.png'},
         {name :'Sydney', sub:'Australia', avatar:'/20.png'},
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
        //ServerSize
        sizes:[
        {title: '25 GB SSD',p1:'$5/mo',p2:'$0.007/h',cpu:'1 CPU',m:'1024MB Memory',bw:'1000GB Bandwidth'},
        {title: '55 GB SSD',p1:'$10/mo',p2:'$0.015/h',cpu:'1 CPU',m:'2048MB Memory',bw:'2000GB Bandwidth'},
        {title: '80 GB SSD' ,p1:'$20/mo',p2:'$0.03/h',cpu:'2 CPU',m:'4096MB Memory',bw:'3000GB Bandwidth'},
        {title: '160 GB SSD',p1:'$40/mo',p2:'$0.06/h',cpu:'4 CPU',m:'8192MB Memory',bw:'4000GB Bandwidth'},
        {title: '320 GB SSD',p1:'$80/mo',p2:'$0.119/h',cpu:'6 CPU',m:'1024MB Memory',bw:'5000GB Bandwidth'},
        {title: '640  GB SSD',p1:'$160/mo',p2:'$0.238/h',cpu:'8 CPU',m:'1024MB Memory',bw:'6000GB Bandwidth'}
      ],
      //Footer
      messages: 0,
        show: false,
    })
}
</script>