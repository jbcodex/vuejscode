<template>
    <div>
        <v-form class="panel" ref="formEdit">
         <div class="titleForm">
           
            <router-link to="/"><v-icon small left>mdi-arrow-left-thick</v-icon></router-link>
          <h2>Editar contato</h2>
        
         </div>
          <v-text-field
            
            placeholder="No mínimo 5 caracteres"
            append-icon="mdi-account-circle-outline"
            label="Nome"
            :rules="nameRules"
            @keyup="allow"
          ></v-text-field>

          <v-text-field
           
            placeholder="Insira um e-mail válido"
            append-icon="mdi-email-outline"
            label="E-mail"
            :rules="emailRules"
            @keyup="allow"
          ></v-text-field>

          <v-text-field
           
            placeholder="1 / 99 - Somente números"
            append-icon="mdi-emoticon-outline"
            label="Idade"
            maxlength="2"
            :rules="ageRules"
            @keyup="allow"
          ></v-text-field>

        <v-btn x-large class="mt-1" :class="allowButton ? 'blue white--text':'disable-events grey--text'">
        <v-icon left> mdi-check-circle</v-icon>
        Editar contato</v-btn
      >
        </v-form>
    </div>
</template>
<script>
import bus from '../bus'
export default {
  data(){
    return{
      userEdit:null,
      allowButton: false,
      nameRules: [
          v => (!!v && v.length > 4) || "Obrigatório mínimo 5 caracteres",
      ],
      emailRules: [
          v => (!!v) || "Email obrigatório",
          v =>
          /^(([^<=>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
              v
          ) || "E-mail inválido!",
      ],
      ageRules: [v => (!!v) || "Idade obrigatória!"],
      
    }
  },
   methods:{
     allow(){
         if (this.name.length >= 5 && this.validEmail(this.email) && this.age >= 1){
                    this.allowButton = true;
                }

          if (this.age == 0 || this.name == "" || this.name.length < 5 || !this.validEmail(this.email)){
              this.allowButton = false;
          }
     },
     validEmail(mail) {
            var re = /^(([^<=>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(mail);
        },
     saveContact(){

     },
     created(){
       alert('Event Bus invocado')
        bus.userEditDone(x => {
          this.userEdit = x
          
        })
      }
  }
}

</script>

<style scoped>
 .disable-events {
     pointer-events: none;
 
  } 

  .titleForm{
    display: flex;
  }

   
</style>