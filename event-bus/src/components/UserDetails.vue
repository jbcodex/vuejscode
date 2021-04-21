<template>
  <div class="container">
      <p v-if="!nomes">Select a user</p>
      <div v-else>
            <p>Id:{{nomes.id}}</p>
            <p>Nome:{{nomes.nome}}</p>
            <p>Idade:{{nomes.idade}}</p>
      </div>
  </div>
</template>

<script>
  import bus from '@/bus'
  export default {
      data(){
          return{
              nomes:null
          }
      },
      created(){
          bus.sendUserDone(x =>{
              this.nomes = x
          })  
      }
  }
</script>
<style scoped>

</style>