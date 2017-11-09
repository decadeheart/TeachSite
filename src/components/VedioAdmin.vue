
<template>
  <div class="panel panel-default">
    <div class="panel-heading">
      录入视频
    </div>
    <div class="panel-body">
      <div class="form-horizontal">
        <div class="form-group">
          <div class="col-sm-12">
            <label>视频名称</label>
            <input
              type="text"
              class="form-control"
              v-model="vedio.name"
              placeholder="name"
            />
          </div>
          <div class="col-sm-12">
            <label>编写老师</label>
            <input
              type="text"
              class="form-control"
              v-model="vedio.teacher"
              placeholder="teacher"
            />
          </div>
          <div class="col-sm-12">
            <label>视频简介</label>
            <input
              type="text"
              class="form-control"
              v-model="vedio.introduction"
              placeholder="introduction"
            />
          </div>
          <div class="col-sm-12">
            <label>购买链接</label>
            <input
              type="text"
              class="form-control"
              v-model="vedio.shopUrl"
              placeholder="shopUrl"
            />
          </div>
          <div class="col-sm-12">
            <label>图片链接</label>
            <input
              type="text"
              class="form-control"
              v-model="vedio.pictureUrl"
              placeholder="pictureUrl"
            />
          </div>
        </div>
        <button class="btn btn-primary" @click="save()">录入</button>
        <router-link to="/time-entries" class="btn btn-danger">取消</router-link>
        <hr>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
        name : 'vedioAdmin',
        data() {
            return {
              vedio:{
                name : '',
                teacher : '',
                introduction : '',
                shopUrl : '',
                pictureUrl : '',
              }
            }
        },
        methods:{
          save() {
            this.$http.post('http://localhost:8888/createVedio',{
              name : this.vedio.name,
              teacher : this.vedio.teacher,
              shopUrl : this.vedio.shopUrl,
              pictureUrl : this.vedio.pictureUrl,
              introduction : this.vedio.introduction
            }).then(function(ret){
              console.log(ret);
              let vedio = this.vedio
              console.log(vedio);
              location.href="/#/vedios"
            })
          }
        }
    }
</script>
