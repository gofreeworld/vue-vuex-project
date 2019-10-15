import Vue from 'vue'
import Vuex from 'vuex'
import 'es6-promise/auto'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(Vuex);

// 创建一个 仓库(store) 对象实例
const store = new Vuex.Store({
	// 状态(state) 对象
	state: {
		count: 0
	},
	// 更改或改变(mutations) 对象，mutations对象类似于事件注册。
	mutations: {
		// 自定义 事件increment，当触发 事件increment 时，就会自动执行回调函数 increment()
		increment: state => state.count++,
		// 自定义 事件decrement
		decrement: state => state.count--
	}
});

// 创建一个 vue 对象实例
new Vue({
	// 把 store 对象提供给 “store” 选项，这可以把 store 的实例注入所有的子组件
	store,
	render: h => h(App),
}).$mount('#app')