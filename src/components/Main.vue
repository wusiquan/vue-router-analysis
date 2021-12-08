<template>
  <div class="main">
    这是main.vue
    <div>
      <router-link to="/home">去/home鸭</router-link>
    </div>
    <div>
      <router-link to="/coursecenter/phase-manage">去coursecenter/phase-manage鸭</router-link>
    </div>
    <div>
      <router-link to="/taskmanage">去taskmanage鸭</router-link>
    </div>
    <div style="margin-top: 20px;">以下是main.vue里的router-view</div>
    
    <!-- <keep-alive>  v-if="$route.meta.keepAlive" -->
    <keep-alive :include="cachePages">
      <router-view></router-view>
    </keep-alive>
    <!-- <router-view v-if="!$route.meta.keepAlive"></router-view> -->
  </div>
</template>

<script>
// import KeepAliveWrapper from './KeepaliveWrapper'

export default {
  name: 'mainmain',

  // components: {
  //   KeepAliveWrapper
  // },

  data() {
    return {
      cachePages: [ 'phase-manage' ]
    }
  },

  created() {
    console.log('main created', this.$route)
  },

  updated() {
    console.log(this.$route.meta.keepAlive)
    console.log('main update')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  color: green;
}
</style>
