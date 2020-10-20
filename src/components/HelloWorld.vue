<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="getData">按钮1</button>
    <button @click="getListData">按钮2</button>
  </div>
</template>

<script>
import { getDataTest, getDataList } from '../info/info'

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  methods: {
    getData() {
      getDataTest()
    },
    getListData() {
      getDataList()
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
