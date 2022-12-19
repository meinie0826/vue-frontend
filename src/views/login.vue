<template>
  <card class="input">
    <h1>登录</h1>

    <el-input class="b" v-model="username" placeholder="用户名" size="large" />

    <el-input class="b" v-model="password" placeholder="密码" size="large" />
    <div class="error-message">{{ error_message }}</div>
    <el-button class="bx" type="primary" @click.prevent="login">登录</el-button>
  </card>
</template>

<script>
import card from "@/views/Card.vue";
import { useStore } from "vuex";
import { ref } from "vue";
import router from "@/router/index";

export default {
  components: {
    card,
  },
  setup() {
    const store = useStore();
    let username = ref("");
    let password = ref("");
    let error_message = ref("");

    const login = () => {
      error_message.value = "";
      store.dispatch("login", {
        username: username.value,
        password: password.value,
        success() {
          store.dispatch("getinfo", {
            success() {
              router.push({ name: "home" });
              console.log(store.state.user);
            },
          });
        },
        error() {
          error_message.value = "用户名或密码错误";
        },
      });
    };

    return {
      username,
      password,
      error_message,
      login,
    };
  },
};
</script>


<style scoped>
h1 {
  text-align: center;
}
.input {
  display: flex;
  justify-content: center;
  margin: 30px 25%;
  height: 400px;
}
.b {
  display: flex;
  justify-content: center;
  width: 250px;
  margin-top: 15px;
}
.bx {
  width: 100%;
  margin-top: 20px;
  height: 50px;
  font-size: 20px;
}
div.error-message {
  color: red;
}
</style>