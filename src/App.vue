<template>
 <v-app class="grey lighten-4">
   <Navbar/>
    <v-content class="mx-4 mb-4">
      <router-view>
        <Deploy/>
      </router-view>
    </v-content>
  </v-app>
</template>
<script>

import Navbar from '@/components/Navbar'
import Deploy from '@/components/Deploy'

export default {
  name: 'App',
  components: { 
    Navbar,
    Deploy
  },
    data: () => ({
    //
  }),
};
</script>
