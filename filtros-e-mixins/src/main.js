import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
Vue.directive('destaque',{
	bind(el, binding, vnode){
		el.style.backgroundColor = 'red'
			if(binding.arg === 'font')
				setTimeout(()=>{
					el.style.fontSize = '1.5rem'
				},1000)
			if(binding.modifiers['cColor'])
			setTimeout(() =>{
				el.style.color = 'white'
				el.style.backgroundColor = 'purple'
				el.style.padding = '10px'	
			}, 3000)
			if(binding.modifiers['cColor3'])
			setTimeout(() =>{
				el.style.color = 'black'
				el.style.backgroundColor = 'yellow'
				el.style.padding = '10px'	
			}, 4000)
	}
})
Vue.filter('inverter', function(val){
	return val.split('').reverse().join('')
})

new Vue({
	render: h => h(App)
}).$mount('#app')
