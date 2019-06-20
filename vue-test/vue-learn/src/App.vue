<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="<span style='color:red'>Welcome to Your Vue.js App<span>"/>
    <ev></ev>
    <com :age="age" @patch="msg">
      <h1 slot="a">我要加东西1</h1>
      <h1 slot="b">我要加东西2</h1>
    </com>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import './components/n';
import ev from './components/events.vue';
import com from './components/com.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    ev,
    com
  },
  data(){
    return {
      age:18111
    }
  },
  methods:{
    msg:function(ag){
      window.console.log(ag);
      this.age++;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
