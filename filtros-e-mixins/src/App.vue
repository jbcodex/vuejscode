<template>
	<div id="app">
		<h1 v-destaque:font.cColor.cColor3>Filtros & Mixins</h1>
		<hr>
		<p v-bg:bgc>{{cpf | cpf | inverter}}</p>
	</div>
</template>

<script>
export default {
	directives:{
		bg:{
			bind(el, binding, vnode){
				if(binding.arg ==='bgc')
				setTimeout(() =>{
					el.style.color = 'white'
					el.style.backgroundColor = 'blue'
					el.style.color = '#fff'	
					el.style.padding = '10px'
				}, 2000)
			}
		}
	},
	filters:{
		cpf(valor){
			const arr = valor.split('')
			arr.splice(3, 0, '.')
			arr.splice(7, 0, '.')
			arr.splice(11, 0, '-')
			return arr.join('')
		}
	},
	data(){
		return{
			cpf:'08325232757'
		}
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	
	margin-top: 60px;
	font-size: 1.3rem;
}
</style>
