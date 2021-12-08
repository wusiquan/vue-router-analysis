<template>
  <div class="home">{{ title }}</div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      title: "home.vue"
    }
  },

  created() {
    console.log('home created')
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  color: red;
}
</style>
