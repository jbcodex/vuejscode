<template>
    <div>
        <h2>Sobre nós</h2>
         <p>Página sobre a empresa</p>
           <v-btn class="primary" @click="back">Voltar</v-btn>
    </div>
</template>
<script>
export default {
    methods:{
        back(){
            // this.$router.push({path: '/'})
            // this.$router.replace('/')
            // this.$router.go(1)
            // this.$router.forward()
            this.$router.back()
        }
    }
}
</script>