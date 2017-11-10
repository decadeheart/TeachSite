
<template>
  <div class="form-horizontal">
    <div class="form-group">
      <div class="col-sm-6">
        <label>日期</label>
        <input
          type="date"
          class="form-control"
          v-model="plan.date"
          placeholder="Date"
        />
      </div>
      <div class="col-sm-6">
        <label>时间</label>
        <input
          type="number"
          class="form-control"
          v-model="plan.totalTime"
          placeholder="Hours"
        />
      </div>
    </div>
    <div class="form-group">
      <div class="col-sm-12">
        <label>备注</label>
        <input
          type="text"
          class="form-control"
          v-model="plan.comment"
          placeholder="Comment"
        />
      </div>
    </div>
    <button class="btn btn-primary" @click="save()">保存</button>
    <router-link to="/time-entries" class="btn btn-danger">取消</router-link>
    <hr>
  </div>
</template>

<script>
  export default {
        name : 'LogTime',
        data() {
            return {
              plan:{
                date : '',
                totalTime : '',
                comment : ''
              }
            }
        },
        methods:{
          save() {
            this.$http.post('http://119.29.208.124:8888/create',{
              date : this.plan.date,
              totalTime : this.plan.totalTime,
              comment : this.plan.comment
            }).then(function(ret){
              console.log(ret);
              let plan = this.plan
              console.log(plan);
              location.href="/#/time-entries"
            })
          }
        }
    }
</script>
