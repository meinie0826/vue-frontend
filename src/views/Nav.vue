<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    background-color="black"
    text-color="white"
    active-text-color="#ffd04b"
    :ellipsis="false"
  >
    <el-menu-item index="1">
      <router-link :to="{ name: 'home' }"> 首页 </router-link>
    </el-menu-item>
    <el-menu-item index="2">
      <router-link :to="{ name: 'write' }"> 编辑器 </router-link>
    </el-menu-item>
    <el-menu-item index="3">
      <router-link :to="{ name: 'coding' }"> Coding </router-link>
    </el-menu-item>

    <div class="f" />
    <el-sub-menu index="4" v-if="$store.state.user.is_login">
      <template #title>{{ $store.state.user.username }}</template>
      <el-menu-item index="4-1">设置</el-menu-item>
      <el-menu-item index="4-2">个人主页</el-menu-item>
    </el-sub-menu>
    <div class="g" v-else>
      <el-menu-item index="5">
        <router-link :to="{ name: 'login' }"> 登录 </router-link>
      </el-menu-item>
      <el-menu-item index="6">
        <router-link :to="{ name: 'register' }"> 注册 </router-link>
      </el-menu-item>
    </div>
  </el-menu>
</template>

<script>
import { useRoute } from "vue-router";
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "nav",
  setup() {
    const store = useStore();
    const route = useRoute();
    let route_name = computed(() => route.name);

    const logout = () => {
      store.dispatch("logout");
    };

    return {
      route_name,
      logout,
    };
  },
  data() {
    return {
      activeIndex: "1",
    };
  },
  methods: {},
};
</script>

<style scoped>
.f {
  flex-grow: 1;
}
.g {
  display: flex;
}
.router-link-active {
  text-decoration: none;
  color: white;
  width: 100%;
}
a {
  text-decoration: none;
  color: white;
}
</style>