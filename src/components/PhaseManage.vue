<template>
  <div class="main">
    这是phase-manage.vue
    <!-- <div>
      <router-link to="/">去main鸭</router-link>
    </div>
    <div>
      <router-link to="/taskmanage">去taskmanage鸭</router-link>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "phase-manage",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    }
  },

  created() {
    console.log('phase-manage created')
  },

  activated() {
    console.log('phase-manage activated')
  },

  deactivated() {
    console.log('phase-manage deactivated')
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  color: pink;
}
</style>
