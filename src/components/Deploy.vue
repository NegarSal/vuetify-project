<template>
  <div class="deploy">
    <h1 class="font-weight-light">Deploy New Instance</h1> 
       
  <!--Choose Server-->
  <h2 class="my-5">Choose Server</h2>
    <v-container class="my-5">
     <v-layout row wrap>
       <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
         <v-card class="text-center ma-3">
           <v-responsive class="pt-4">
             <v-avatar size="150">
                 <img :src="person.avatar">
             </v-avatar>
           </v-responsive>  
           <v-card-text>
             <div  class="black--text"><b>{{person.name}}</b></div>
           </v-card-text> 
         </v-card>
       </v-flex>
     </v-layout>
    </v-container>
  </div> 
</template>

<script>
export default {
    data : () =>({
        team:[
            {name :'Cloud Compute', avatar:'/1.png' },
            {name :'High Frequency', avatar:'/2.png'},
            {name :'Bare Metal', avatar:'/3.png'},
            {name :'Dedicated Cloud', avatar:'/4.png'},
        ]
    })
}
</script>