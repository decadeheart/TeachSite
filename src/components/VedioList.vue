<template>
  <div>
    <div class="col-sm-9">
      <div>
        <i class="glyphicon glyphicon-list-alt"></i>
        视频列表
        </div>
      <hr>
      <div class="time-entries">
        <p v-if="!vedios.length"><strong>还没有任何视频</strong></p>

        <div class="list-group">
          <a class="list-group-item" v-for="(vedio,index) in vedios" :href="vedio.shopUrl">
            <div class="row">
              <div class="col-sm-3 user-details">
                <img :src="vedio.pictureUrl" class="avatar img-responsive" />
              </div>

              <div class="col-sm-4 text-center">
                <h5 class="list-group-item-text total-time">
                  <i class="glyphicon glyphicon-film"></i>
                  {{ vedio.name }}
                </h5>
                <p class="label label-primary text-center">
                  <i class="glyphicon glyphicon-user"></i>
                  {{ vedio.teacher }}
                </p>
              </div>

              <div class="col-sm-5">
                <p>{{ vedio.introduction }}</p>
              </div>

            </div>
          </a>

        </div>
      </div>
    </div>
    <div class="col-sm-3">
        <sidebar></sidebar>
    </div>
  </div>
</template>
<script>
import Sidebar from "./Sidebar.vue"
    export default {
        components:{
          'sidebar': Sidebar,
        },
        name : 'vedioList',
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
    }
</script>
<style>
.avatar {
    width:100%;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .user-details {
    width:100%;
    background-color: #f5f5f5;
    border-top: 18px;
  }
</style>
