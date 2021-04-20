<template>
  <div>
    <v-form class="panel" ref="form">
      <h2>Cadastre-se para acessar</h2>
      <v-text-field
        v-model="name"
        placeholder="No mínimo 5 caracteres"
        append-icon="mdi-account-circle-outline"
        label="Nome"
        :rules="nameRules"
        @keyup="allow"
      ></v-text-field>

      <v-text-field
        v-model="email"
        placeholder="Insira um e-mail válido"
        append-icon="mdi-email-outline"
        label="E-mail"
        :rules="emailRules"
        @keyup="allow"
      ></v-text-field>

      <v-text-field
        v-model.number="age"
        placeholder="1 / 99 - Somente números"
        append-icon="mdi-emoticon-outline"
        label="Idade"
        maxlength="2"
        :rules="ageRules"
        @keyup="allow"
      ></v-text-field>

      <v-btn @click="saveContact"  x-large class="mt-1" :class="allowButton ? 'blue white--text':'disable-events grey--text'">
        <v-icon left> mdi-check-circle</v-icon>
        Salvar contato</v-btn
      >
    </v-form>
  </div>
</template>
<script>
import { mapMutations } from 'vuex';
import swal from "sweetalert";
export default {
    data() {
        return {
            id: 1,
            name: "",
            email: "",
            age: null,
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
        ...mapMutations(['addContact']),
        allow() {
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
            const dataForm ={idF:this.id, nameF:this.name, emailF:this.email, ageF:this.age}
            this.addContact(dataForm)
            swal("Feito!", "Usuário " + this.name + " inserido", "success");
            this.id+=1
            this.$refs.form.reset()
            this.allowButton = false
            
        }
    }
}
</script>

<style scoped>
.disable-events {
  pointer-events: none;
 
}
.swal-title {
  font-family: "Lato", sans-serif;
  font-size: 1.4rem;
}

.swal-button {
  font-family: "Lato", sans-serif;
  background-color: #87bfe4;
  font-size: 15px;
}

.swal-text {
  font-family: "Lato", sans-serif;
  color: #61534e;
}
.swal-modal {
  width: 350px;
  height: 300px;
}
.swal-footer {
  background-color: rgb(245, 248, 250);
  margin-top: 10px;
  border-top: 1px solid #e9eef1;
}
</style>