<template>
	<thead>
		<tr class="bg-secondary text-white">
			<th scope="col">
				<b-dropdown text="排序">
					<b-dropdown-item @click="handleSortBy('original')"
						>原序</b-dropdown-item
					>
					<b-dropdown-item @click="handleSortBy('asc')">升序</b-dropdown-item>
					<b-dropdown-item @click="handleSortBy('desc')">降序</b-dropdown-item>
				</b-dropdown>
			</th>
			<th scope="col">商品名称</th>
			<th scope="col">单价</th>
			<th scope="col">数量</th>
			<th scope="col">总价格</th>
			<th scope="col">操作</th>
		</tr>
	</thead>
</template>

<script>
	export default {
		name: "TableHeader",
		methods: {
			handleSortBy(sortBy) {
				this.$store.commit("toggleSortBy", sortBy);
			},
		},
	};
</script>

<style lang="less" scoped>
	th {
		height: 35px;
		line-height: 35px;
	}
</style>
