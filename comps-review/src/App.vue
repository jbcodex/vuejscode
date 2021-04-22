<template>
  <div class="container">
    <p>Comp PAI</p>
    <p>{{nome}}</p>
    <button @click="setName">Set name</button>
    <User 
    :user = "nome" 
    @userChange = "nome = $event"
    :reiniciarFn="reiniciarNome"/>
  </div>
</template>

<script>
import User from "@/components/User.vue";
export default {
  components: {
    User,
  },
  data(){
    return{
      nome:'Jarbolha'
    }
  },
  methods:{
    setName(){
      this.nome = 'Maria'
    },
     reiniciarNome(){
      this.nome = "Renata"
    }
  }
};
</script>

<style>
.container {
  width: 150px;
  text-align: center;
  background-color: rgb(30, 189, 210);
  padding: 10px;
  border-radius: 5px;
   font-family: Arial, Helvetica, sans-serif;
}
</style>>
   
