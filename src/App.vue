<template>
  <div>
    <div class="App">Hello World</div>
    <div class="tabs">
      <router-link to="/Home">Go Home</router-link>
      <router-link to="/About">Go About</router-link>
    </div>
    <div>
      <p>{{getCounter}}</p>
      <button @click="add">+</button>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'App',
  data(){
    return {}
  },
  computed: {
    ...mapGetters(['getCounter'])
  },
  methods: {
    ...mapActions(['add'])
  }
}
</script>
<style lang="scss">
.hello {
  color: burlywood;
  font-size: 30px;
}
.tabs {
  a {
    margin: 0 10px;
  }
}
</style>


