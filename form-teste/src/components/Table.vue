<template>
    <v-simple-table class="mt-2 tb">
      <template v-slot:default>
          <thead>
            <tr class="light-gray darken-1">
              <th class="black--text">Id</th>
              <th class="black--text">Nome</th>
              <th class="black--text">E-mail</th>
              <th class="black--text">Idade</th>
              <th class="black--text">Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="data in dataArray" :key="data.id">
              <td>{{data.idF}}</td>
              <td>{{data.nameF}}</td>
              <td>{{data.emailF}}</td>
              <td>{{data.ageF}}</td>
              <td>
                 <router-link to="/Editar"><v-icon small @click="setUserData(data)">mdi-pencil</v-icon></router-link>
                  
              </td>
            </tr>
          </tbody>
      </template>
    </v-simple-table>
</template>

<script>
import bus from '../bus'
export default {
  computed:{
      dataArray(){
        return this.$store.state.dataArray
      }
  },

  methods:{
    setUserData(data){
       bus.userEdit(data)
    }
  }
}
</script>
<style>
 .tb{
   width:420px; 
   height:330px;
   
 }

</style>

