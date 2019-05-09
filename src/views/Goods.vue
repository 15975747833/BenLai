
<template>
	<div class="goods" v-if="goods">
		<img :src="goods.proImg">
		<h1>{{goods.proName}}</h1>
		<p class="price"><span>{{goods.proPrice.toFixed(2)}}</span><del>{{goods.jxPrice.toFixed(2)}}</del></p>
		<el-button type="danger" @click ='add2cart'>加入购物车</el-button>

	</div>
</template>
<script>
	export default{
		// props:['id'],
		data(){
			return {
				// goods:{} //为null才是什么都没有。
				goods:null
			}
		},
		mounted(){
			//上面如果路由传参id 接收，可以直接用 this.id 了。
			let {id} = this.$route.params;

			this.$axios.get('https://m.jiuxian.com/m_v1/goods/detailPromo/'+id).then(({data})=>{
				console.log('data:',data)
			});
			let goods = sessionStorage.getItem('goods');
			goods = goods? JSON.parse(goods) : {};
			this.goods=goods;
			console.log('goods:',goods);
		},
		methods:{
			add2cart(){
				// this.$store.commit('add2cart');
				let {proId,proName,proPrice,proImg} =this.goods;
				let has = this.$store.state.goodslist.filter(goods=>goods.proId==proId)[0];
				if(has){
					// 如果存在+1；
					this.$store.commit('changeQty',{proId,qty:has.qty+1})
				}else{
					// 如果不存在添加上去。
					this.$store.commit('add2cart',{
						proId,
						proName,
						proPrice,
						proImg,
						qty:1
					})
				}


			}
		}
	}
</script>

