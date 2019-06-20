<template>
  <div class="a">
    page a {{$store.state.money.money}}
    <button type="button" @click="add">增加</button>
    <button type="button" @click="reduce">减少</button>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  methods: mapActions("money", ["add", 'reduce'])
};
</script>

