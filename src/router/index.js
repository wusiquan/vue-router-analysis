import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../components/Main.vue";
import Home from "../components/Home.vue";
import PhaseManage from "../components/PhaseManage.vue";
import TaskManage from "../components/TaskManage.vue";

Vue.use(VueRouter);

const routerConfig = {
  routes: [
    {
      path: "/coursecenter",
      icon: "ios-book",
      name: "coursecenter",
      meta: {
        title: "课程中心"
      },
      component: Main,
      children: [
        {
          path: "phase-manage",
          icon: "ios-list-box-outline",
          meta: {
            title: "阶段与任务管理",
            keepAlive: true
          },
          name: "phase-manage",
          component: PhaseManage
        }
      ]
    },
    {
      path: "/",
      name: "otherRouter",
      redirect: '/home',
      component: Main,
      children: [
        {
          path: "/home",
          meta: {
            title: "首页"
          },
          name: "home_index",
          component: Home
        },
        {
          path: "/taskmanage",
          meta: {
            title: "任务管理"
          },
          name: "task_manage",
          component: TaskManage
        }
      ]
    }
  ]
};

export const router = new VueRouter(routerConfig);
