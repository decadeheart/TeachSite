<template>
  <div>
    <router-link
      v-if="$route.path !== '/time-entries/log-time'"
      to="/time-entries/log-time"
      class="btn btn-primary">
      创建
    </router-link>

    <div v-if="$route.path === '/time-entries/log-time'">
      <h3>创建</h3>
    </div>

    <hr>

    <router-view></router-view>

    <div class="time-entries">
      <p v-if="!plans.length"><strong>还没有任何计划</strong></p>

      <div class="list-group">
        <a class="list-group-item" v-for="(plan,index) in plans">
          <div class="row">
            <div class="col-sm-2 user-details">
              <img src="https://avatars1.githubusercontent.com/u/10184444?v=3&s=460" class="avatar img-circle img-responsive" />
              <p class="text-center">
                <strong>
                  刘鑫
                </strong>
              </p>
            </div>

            <div class="col-sm-2 text-center time-block">
              <h3 class="list-group-item-text total-time">
                <i class="glyphicon glyphicon-time"></i>
                {{ plan.totalTime }}
              </h3>
              <p class="label label-primary text-center">
                <i class="glyphicon glyphicon-calendar"></i>
                {{ plan.date }}
              </p>
            </div>

            <div class="col-sm-7 comment-section">
              <p>{{ plan.comment }}</p>
            </div>

            <div class="col-sm-1">
              <button
                class="btn btn-xs btn-danger delete-button"
                @click="deleteTimeEntry(plan)">
              X
              </button>
            </div>

          </div>
        </a>

      </div>
    </div>
  </div>
</template>
<script>
    export default {
        name : 'TimeEntries',
        data(){
          return {
            plans:[]
          }
        },
        created(){
          this.$http.get('http://localhost:8888/time-entries')
            .then(function(ret) {
              this.plans = ret.data;
              console.log(ret.data)
            })
            .then(function(err) {
              console.log(err);
            })
        },
        methods:{
          deleteTimeEntry (plan) {
              // 删除
              let index = this.plans.indexOf(plan)
              let _id = this.plans[index]._id
              if (window.confirm('确认删除?')) {
                this.$http.delete('http://localhost:8888/delete/' + _id)
                  .then(function(ret) {
                    console.log(ret);
                  })
                  .then(function(err) {
                    console.log(err)
                  });
                this.plans.splice(index, 1)
              }
          }
        },
    }
</script>
<style>
.avatar {
    height: 75px;
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .user-details {
    background-color: #f5f5f5;
    border-right: 1px solid #ddd;
    margin: -10px 0;
  }
  .time-block {
    padding: 10px;
  }
  .comment-section {
    padding: 20px;
  }
</style>
