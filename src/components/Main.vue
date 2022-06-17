<template>
	<div class="col-md-10 container">
		<table class="table table-hover">
			<TableHeader />
			<tbody>
				<TableItem
					v-for="item in $store.getters.renderList"
					:key="item.id"
					:item="item"
				/>
				<TableFooter />
			</tbody>
		</table>
	</div>
</template>

<script>
	import TableHeader from "./TableHeader.vue";
	import TableItem from "./TableItem.vue";
	import TableFooter from "./TableFooter.vue";

	export default {
		name: "Main",
		components: {
			TableHeader,
			TableItem,
			TableFooter,
		},
	};
</script>

<style lang="less" scoped>
	.container {
		margin-top: 50px;
		display: flex;
		justify-content: center;
	}
</style>
