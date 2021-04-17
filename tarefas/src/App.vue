<template>
	<div id="app">
		<h1>Tarefas</h1>
		<NewTask @newTask="add"/>
		<TaskGrid :tasks="tasks" @delTask="delTask" />
	</div>
</template>

<script>
import NewTask from './components/NewTask.vue'
import TaskGrid from './components/TaskGrid.vue'
export default {
	components:{TaskGrid, NewTask},

	data(){
		return{
			tasks:[
				
			]
		}
	},
	methods:{
		add(task){
			const checkName = t => t.name === task.name
			const realName = this.tasks.filter(checkName).length == 0
			if(realName){
				this.tasks.push({
					name: task.name,
					pending: true || 0
				})
			}
		},
		delTask(i){
			this.tasks.splice(i, 1)
		}
		
	}
}
</script>

<style>
	body {
		font-family: 'Lato', sans-serif;
		background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
		color: #FFF;
	}

	#app {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	#app h1 {
		margin-bottom: 5px;
		font-weight: 300;
		font-size: 3rem;
	}
</style>
