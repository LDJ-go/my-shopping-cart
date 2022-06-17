<template>
	<tr>
		<th>
			<input
				type="checkbox"
				id="toggleAll"
				:checked="$store.getters.selectedAll"
				@change="handleToggleCheckboxAll($event)"
			/><label for="toggleAll">全选</label>
		</th>
		<th></th>
		<th></th>
		<th>总数：{{ $store.getters.totalCount }}</th>
		<th>总价：{{ $store.getters.totalPrice }}</th>
		<th></th>
	</tr>
</template>

<script>
	export default {
		name: "TableFooter",
		methods: {
			handleToggleCheckboxAll(e) {
				this.$store.commit("toggleSelectedAll", e.currentTarget.checked);
			},
		},
	};
</script>

<style scoped>
	label,
	input {
		cursor: pointer;
	}
</style>
