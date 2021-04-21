<template>
  <div id="app">
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Lato&family=Open+Sans&display=swap"
      rel="stylesheet"
    />
    <div class="container">
      <h2>Comp PAI</h2>
      <p>Nome: {{nome}}</p>
      <button @click="setName">Mudar nome</button>
      <hr />
      <div class="componentes">
        <User :user="nome" @change="nome = $event.novo" :restartFn="setNameFn"/> 
     
      </div>
    </div>
  </div>
</template>

<script>
import User from "@/components/User.vue";

export default {
  components: {
    User
  },
  data() {
    return{
       nome:'Jarbas'
    }
  },
  methods:{
    setName(){
      this.nome = "Renata"
    },
    setNameFn(){
      this.nome = "Paulo"
    }
  }
   
  ,
};
</script>

<style>
button {
  margin: 2px;
}
.container {
  text-align: center;
  width: 100%;
  padding: 10px;
  background-color: rgb(50, 54, 54);
  color: white;
  font-family: "Lato", sans-serif;
}

.componentes {
  display: flex;
  justify-content: center;
  color: #fff;
}
</style>
