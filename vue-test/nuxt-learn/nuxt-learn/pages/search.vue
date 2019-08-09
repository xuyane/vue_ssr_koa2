import axios from 'axios';
<template>
  <div class="page">
    page is search
    <ul>
      <li v-for="(item,idx) in list" :key="id">{{item}}</li>
      <!-- <li v-for="(item,idx) in $store.state.city.list" :key="id">{{item}}</li> -->
    </ul>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  layout:'search',
  data(){
    return {
      list:[]
    }
  },
  // async mounted(){
  //   // let self = this;
  //   // let {status,data:{list}} = await axios.get('/city/list')
  //   // if(status == 200){
  //   //   self.list = list
  //   // }
  // }
  async asyncData(){
    let {status,data:{list}} = await axios.get('http://localhost:3000/city/list')
    if(status === 200){
      return {
        list
      }
    }
  }
}
</script>
<style lang="css">

</style>

