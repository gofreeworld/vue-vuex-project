<template>
	<div>
		<p>
			<button @click="onAddNum">+</button>
			<button @click="onSubtractNum">-</button>
		</p>
		<p>{{num}}</p>
	</div>
</template>

<script>
	export default {
		methods: {
			onAddNum() {
				// 更改 Vuex 的 store 中的状态(state)的唯一方法是提交 mutation。
				// 触发 increment事件
				this.$store.commit('increment')
			},
			onSubtractNum() {
				// 更改 Vuex 的 store 中的状态(state)的唯一方法是提交 mutation。
				// 触发 decrement事件
				this.$store.commit('decrement')
			}
		},
		computed: {
			num: function() {
				return this.$store.state.count
			}
		}
	}
</script>

<style>

</style>