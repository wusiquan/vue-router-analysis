/*
https://github.com/vuejs/vue-router/issues/811 看下这个人写的demo

他的评论是这样的
实测在进入 keepAlive: true 的组件后再进入 keepAlive: false 的组件时, keepAlive: true 的组件会重新渲染，组件生命周期会再执行一遍
*/
import Vue from "vue/dist/vue.esm";
import VueRouter from "vue-router";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const layout = {
  template: `<div class="bb">
      layout
      <keep-alive>
        <div v-if="$route.meta.keepAlive">
          <router-view></router-view>
        </div>
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </div>`,

  mounted() {
    console.log('layout mounted, route: ', this.$route)
  }
}
const Home = {
  data() {
      return {
        msg: 'Home route'
      }
    },
    mounted() {
      // 一开始访问 / 执行
      // 跳到 /a 又执行了
    	console.log('home-mounted')
    },
    template: `<div>
      {{msg}}<br>
      <router-link to="/a">To A</router-link>
      <router-link to="/b">To B</router-link>
    </div>`
}

const A = {
  data() {
      return {
        msg: 'this is A',
        count: 0
      }
    },
    template: `<div>
  		{{msg}}<br>{{count}}<button @click="addCount">add</button><br>
      <router-link to="/">To Home</router-link>
      <router-link to="/b">To B</router-link>
  </div>`,
    methods: {
      addCount() {
        this.count++;
      }
    }
}

const B = {
  data() {
      return {
        msg: 'this is B'
      }
    },
    template: `<div>
  		{{msg}}<br>
      <router-link to="/">To Home</router-link>
      <router-link to="/a">To A</router-link>
  </div>`
}

const router = new VueRouter({
  mode: 'hash',
  routes: [
  {
  	path: '/',
    component: layout,
    children: [{
      path: '',
      component: Home,
      meta: {
        keepAlive: true
      }
    }]
  },
  {
    path: '/a',
    component: A
  }, 
  {
    path: '/b',
    component: B,
    meta: {
      keepAlive: true
    }
  }]
});

new Vue({
  el: '#app',
  router
})
