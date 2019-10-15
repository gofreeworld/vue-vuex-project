<template>
	<p></p>
</template>

<script>
	import { mapState } from 'vuex';

	// 导出一个组件选项对象 option
	export default {
		// ...
		computed: mapState({
			// 箭头函数可使代码更简练
			count: state => state.count,

			// 传字符串参数 'count' 等同于 `state => state.count`
			countAlias: 'count',

			// 为了能够使用 `this` 获取局部状态，必须使用常规函数
			countPlusLocalState(state) {
				return state.count + this.localCount
			}
		}),
	}
</script>

<style>

</style>