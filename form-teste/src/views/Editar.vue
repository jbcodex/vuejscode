<template>
  <v-app id="app">
    <v-container class="content">
     <FormEdit>
     
     </FormEdit>
    </v-container>
  </v-app>
</template> 
<script>
import FormEdit from '@/components/FormEdit.vue'
export default {
  components:{
    FormEdit, 
  },
  data(){
      return{
        userEdit:null
      }
  },
  methods:{
    alt(){
      alert('Oi')
    }
  }
  
  
}
</script>

