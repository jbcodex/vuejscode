<template>
  
        <div class="task" :class="stateClass" @click="alternar">
         <span @click="$emit('delTask', task)" class="close">x</span>
            <p>{{task.name}}</p>
        </div>

</template>

<script>

export default {
    props:{
        task:{
                type:Object, required: true
            }
    },

    computed:{
        stateClass(){
            return{
                pending: this.task.pending,
                done: !this.task.pending
            }
        }
    },
    
    methods:{
        alternar(){
            this.task.pending = !this.task.pending
        }
    }
}
</script>

<style>
    .task{
        position: relative;
    }
    .pending{
        width: 200px;
        height: 100px;
        background: rgb(248, 73, 73);
        display: flex;
        justify-content: center;
        align-items: center;
        border-right: 10px solid red;
        border-top-right-radius:12px;
        text-shadow: #0003 1px 1px 1px;
        font-size: 1.1rem;
        font-weight: 400;
        cursor: pointer;
        margin:5px;
    }

     .done{
        width: 200px;
        height: 100px;
        background: rgb(88, 248, 73);
        display: flex;
        justify-content: center;
        align-items: center;
        border-right: 10px solid rgb(4, 153, 11);
        border-top-right-radius:12px;
        font-size: 1.1rem;
        font-weight: 400;
        cursor: pointer;
        color: rgb(20, 63, 11);
        margin:5px;
        text-decoration: line-through;
    }

    .close{
        position: absolute;
        top:5px;
        right:10px;
        z-index: 1;
        
    }
</style>
