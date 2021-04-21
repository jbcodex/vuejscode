<template>
  <div class="container">
    <table>
      <thead>
          <td>Id</td>
          <td>Nome</td>
      </thead>
      <tbody>
        <tr v-for="n in nomes" :key="n.id" @click="sendUser(n)">
          <td>{{n.id}}</td>
          <td>{{n.nome}}</td>
        </tr>
      </tbody> 
    </table>
  </div>
</template>

<script>
  import bus from '@/bus'
  export default {
      props:{
        nomes:{
          type: Array
        }
      }, 
      methods:{
        sendUser(usr){
          bus.sendUser(usr)
         
        }
      }
  }
</script>
<style scoped>
 table{
    border-spacing: 0;
   
    padding:10px;
    font: 16px arial
  }
  td, tr{
    padding:5px;
    border-top: 1px solid #ccc;
   
  }
  tbody tr:hover{
    background: rgba(0, 0, 0, .1);
    cursor: pointer;
  }

    tbody tr{
   border-bottom:1px solid #ccc
  }

</style>
