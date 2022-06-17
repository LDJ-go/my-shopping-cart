<template>
	<div id="app">
		<h1>购物车</h1>
		<Main />
	</div>
</template>

<script>
	import Main from "./components/Main.vue";

	export default {
		name: "App",
		components: {
			Main,
		},
	};
</script>

<style lang="less">
	#app {
		text-align: center;
		color: #2c3e50;
		h1 {
			margin: 60px auto;
		}
	}
</style>
