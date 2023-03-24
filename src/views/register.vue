<template>
  <card class="input">
    <h1>注册</h1>
    <el-input class="b" v-model="username" placeholder="用户名" size="large" />

    <el-input class="b" v-model="password" placeholder="密码" size="large" />
    <el-input
      class="b"
      v-model="confirmedPassword"
      placeholder="确认密码"
      size="large"
    />
    <div class="error-message">{{ error_message }}</div>
    <el-button class="bx" type="primary" @click="register">注册</el-button>
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
    let confirmedPassword = ref("");
    let error_message = ref("");

    const register = () => {
      error_message.value = "";
      store.dispatch("register", {
        username: username.value,
        password: password.value,
        confirmedPassword: confirmedPassword.value,
        success(resp) {
          if (resp.error_message === "success") {
            router.push({ name: "login" });
             error_message.value="注册成功"
          } else {
            error_message.value = resp.error_message;
          }
        },
        error(resp){
            error_message.value = resp.error_message;
        }
      });
    };

    return {
      username,
      password,
      error_message,
      confirmedPassword,
      register,
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