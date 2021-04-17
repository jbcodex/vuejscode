<template>
    <div class="task-grid">
        <template>
            <Task v-for="(task, i) in tasks" :key="task.name" 
            @delTask="$emit('delTask', i)"
            :task="task">
                  
            </Task>
        </template>
    </div>
</template>

<script>
import Task from './Task.vue'
export default {
    components:{
        Task
    },
   props:{
        tasks:{
                type:Array, required: true
            }
   }
}
</script>

<style>
     .task-grid{
            display: flex;
            width:80%;
            justify-content: center;
            flex-wrap: wrap;
          
   
        }
</style>
