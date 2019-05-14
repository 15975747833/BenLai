<template>
  <div>
    <dl v-for="child in tableData" :key="child.index">
      <dt>
        <p style="padding:10px;background:#d0e3ea;text-align: center;">
          <strong>商品类别：</strong>
          {{child[0].category}}
        </p>
      </dt>
      <dd>
        <div
          v-for="item in child"
          :key="item._id"
          style="margin:10px;padding:10px;border:1px solid #eee;display:inline-block;"
        >
          <img :src="item.imageUrl" alt="本来生活" style="width:100px;">
          <p style="text-align: center;margin:5px 0">{{item.type}}</p>
        </div>
      </dd>
    </dl>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: []
    };
  },
  created() {
    // 发起ajax请求，返回promise对象
    this.$axios
      .get("/api/goodslist", {
        params: {
          hotsale: true
        }
      })
      .then(({ data }) => {
        // 把data中的typetitle种类保存下来,得到种类为typetitle的数据 过滤出data中含有typetitle的数据
        let peon = de_duplication(data);
        function de_duplication(arr) {
          let obj = {};
          let peon = arr.reduce((cur, next) => {
            obj[next.category]
              ? ""
              : (obj[next.category] = true && cur.push(next));
            return cur;
          }, []);
          return peon.map(item => item.category);
        }

        for (let i = 0; i < peon.length; i++) {
          let aa = [];
          aa = data.filter(item => item.category == peon[i]);
          this.tableData.push(aa);
        }
        console.log("this.tableData=", this.tableData);
      });
  },
  methods: {}
};
</script>
<style>
.my-goodslist {
  padding-top: 30px;
}
</style>
