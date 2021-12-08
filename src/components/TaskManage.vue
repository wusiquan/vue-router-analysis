<template>
  <div class="task-manage">
    这是{{ title }}
    <!-- <div>
      <router-link to="/">去home鸭</router-link>
    </div>
    <div>
      <router-link to="/coursecenter/phase-manage">phase-manage鸭</router-link>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "task-manage",
  data() {
    return {
      title: 'task-manage.vue'
    };
  },

  activated() {
    console.log('task-manage activated')
  },

  deactivated() {
    console.log('task-manage deactivated')
  },

  created() {
    console.log('task-manage created')
    setTimeout(() => {
      this.title = 'hello'
    }, 2000)
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.task-manage {
  color: purple;
}
</style>
