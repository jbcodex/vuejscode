<template>
  <div class="content">
    <UserList :nomes="nomes"/>
    <UserDetails />
  </div>
</template>

<script>
import UserList from '@/components/UserList.vue'
import UserDetails from '@/components/UserDetails.vue'
  export default {
    components:{UserList, UserDetails},
    data(){
      return{
        nomes:[
          {id:1, nome:'Jarbas', idade:43},
          {id:2, nome:'Renata', idade:44},
          {id:3, nome:'Midian', idade:63},
          {id:4, nome:'Matheus', idade:20},
          {id:5, nome:'Carol', idade:26}
        ]
      }
    }
  }
</script>

<style scoped>
  .content{
    display: flex;
    justify-content: center;
    align-items: center; 
  }

 
</style>
