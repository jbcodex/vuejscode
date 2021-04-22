<template>
  <v-app>
    <div class="content">
        <nav>
        <router-link :to="{path:'/'}" class="mt-1 mr-1" exact> 
          <v-btn class="blue white--text">
            <v-icon small left>mdi-home</v-icon>Home</v-btn>
        </router-link>

        <router-link :to="{path:'/sobre'}" class="mt-1 mr-1 ml-1">
          <v-btn class="blue white--text">
            <v-icon small left>mdi-information</v-icon>Sobre</v-btn>
        </router-link>

        <router-link :to="{path:'/contatos'}" class="mt-1 mr-1 ml-1">
          <v-btn class="blue white--text">
            <v-icon small left>mdi-email</v-icon>Contato</v-btn>
        </router-link>

       
        </nav>
     
       <router-view></router-view>
     </div>
  </v-app>
</template>

<script>


export default {
 

};
</script>
<style scoped>
nav{
  display: flex;
 
}
.content{
  margin: 10px 20px;
}


</style>