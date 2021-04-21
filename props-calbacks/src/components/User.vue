<template>
    <div id="app">
        <div class="box">
            <p>Nome {{user}}</p>
             <button @click="set">Setar Nome</button>
             <button @click="mudarNome">Setar Nome <strong>Callback</strong></button>
             <button @click="restartFn">Function Setar</button>
        </div>
    </div>
</template> 
<script>
export default {
    props:{
        user:{
            type:String
        },
        restartFn:{
            type:Function
        }
    },
    methods:{
        set(){
            this.user = 'Matheus'
        },
        mudarNome(){
            // const antigo = this.user
            this.user = 'Marcos'
            this.$emit('change', {
                novo:this.user
                // antigo
            })
        }
    }
}
</script>
<style>
.box{
        text-align: center;
        width:500px;
        background-color: #ec485f;
        color: #fff;
         margin: 5px;
         padding: 5px;

}
</style>