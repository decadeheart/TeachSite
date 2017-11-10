<template>
  <div>
    <div class="panel panel-default">
    <!-- Default panel contents -->
    <div class="panel-heading">管理书籍</div>

    <!-- Table -->
    <table class="table">
      <thead>
        <tr>
          <th>书籍</th>
          <th>作者</th>
          <th>简介</th>
          <th>更新</th>
          <th>删除</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="book in books">
          <td>{{book.name}}</td>
          <td>{{book.teacher}}</td>
          <td>{{book.introduction}}</td>
          <td><button type="button" class="btn btn-warning">更新</button></td>
          <td><button type="button" class="btn btn-danger" @click="deleteBook(book)">删除</button></td>
        </tr>
      </tbody>
    </table>
    </div>
  </div>
</template>
<script>
export default {
  name:'BookTable',
  data(){
    return {
      books:[]
    }
  },
  created(){
    document.title="书籍列表"
    this.$http.get('http://119.29.208.124:8888/book-list')
      .then(function(ret) {
        this.books = ret.data;
        console.log(ret.data)
      })
      .then(function(err) {
        console.log(err);
      })
  },
  methods:{
    deleteBook(book){
      let index = this.books.indexOf(book)
      let _id = this.books[index]._id
      if (window.confirm('确认删除?')) {
        this.$http.delete('http://119.29.208.124:8888/deleteBook/' + _id)
          .then(function(ret) {
            console.log(ret);
          })
          .then(function(err) {
            console.log(err)
          });
        this.books.splice(index, 1)
      }
    }
  }
}

</script>
