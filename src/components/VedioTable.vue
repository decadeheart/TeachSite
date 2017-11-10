<template>
  <div>
    <div class="panel panel-default">
    <!-- Default panel contents -->
    <div class="panel-heading">管理视频</div>

    <!-- Table -->
    <table class="table">
      <thead>
        <tr>
          <th>视频</th>
          <th>作者</th>
          <th>简介</th>
          <th>更新</th>
          <th>删除</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="vedio in vedios">
          <td>{{vedio.name}}</td>
          <td>{{vedio.teacher}}</td>
          <td>{{vedio.introduction}}</td>
          <td><button type="button" class="btn btn-warning">更新</button></td>
          <td><button type="button" class="btn btn-danger" @click="deletevedio(vedio)">删除</button></td>
        </tr>
      </tbody>
    </table>
    </div>
  </div>
</template>
<script>
export default {
  name:'vedioTable',
  data(){
    return {
      vedios:[]
    }
  },
  created(){
    document.title="视频列表"
    this.$http.get('http://119.29.208.124:8888/vedio-list')
      .then(function(ret) {
        this.vedios = ret.data;
        console.log(ret.data)
      })
      .then(function(err) {
        console.log(err);
      })
  },
  methods:{
    deletevedio(vedio){
      let index = this.vedios.indexOf(vedio)
      let _id = this.vedios[index]._id
      if (window.confirm('确认删除?')) {
        this.$http.delete('http://119.29.208.124:8888/deleteVedio/' + _id)
          .then(function(ret) {
            console.log(ret);
          })
          .then(function(err) {
            console.log(err)
          });
        this.vedios.splice(index, 1)
      }
    }
  }
}

</script>
