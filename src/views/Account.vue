<template>
 <div class="add mx-5 my-6" >
   <h1 class="blue--text mx-5 my-6" >log in:</h1>
     <v-card class="overflow-hidden mx-auto my-6" color="blue" dark max-width="450"  >
       <v-toolbar flat color="indigo dark">
         <v-icon>mdi-account</v-icon>
           <v-toolbar-title class="font-weight-light">
             log in
           </v-toolbar-title>
            <v-spacer></v-spacer>
           <v-btn color="blue darken-3" fab small @click="isEditing = !isEditing">
             <v-icon v-if="isEditing">
              mdi-close
             </v-icon>
             <v-icon v-else>
              mdi-pencil
             </v-icon>
           </v-btn>
       </v-toolbar>
     <v-card-text>
      <v-text-field :disabled="!isEditing" color="white" label="User Name" ></v-text-field>
      <v-text-field :disabled="!isEditing" color="white" label="Password"></v-text-field>
     </v-card-text>
  <v-divider></v-divider>
     <v-card-actions>
  <v-spacer></v-spacer>
      <v-btn :disabled="!isEditing" color="blue" @click="save">
        Save
      </v-btn>
     </v-card-actions>
      <v-snackbar  v-model="hasSaved" :timeout="2000" absolute bottom left>
        Your new contact has been added
      </v-snackbar>
     </v-card>
 </div>   
</template>

<script>
  export default {
    data: () => ({
      hasSaved: false,
        isEditing: null,
        model: null,
    }),
    methods: {
      save () {
        this.isEditing = !this.isEditing
        this.hasSaved = true
      },
    },
  }
</script>

<style>
.add{
  border: 2px solid blue;
}
</style>
