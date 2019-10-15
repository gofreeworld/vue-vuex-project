<template>
	<div id="app">
		<VuexBase></VuexBase>
	</div>
</template>

<script>
	export default{
		components:{
			VuexBase: () => import('./components/VuexBase.vue')
		}
	}
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>