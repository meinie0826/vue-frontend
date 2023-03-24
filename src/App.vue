<template>
  <Nav></Nav>
  <router-view></router-view>
</template>

<script>
import Nav from "@/views/Nav.vue";
import $ from "jquery";

export default {
  components: {
    Nav
  },
/*   setup(){
    $.ajax({
      url: "http://localhost:8888/user/aritical/getaritical",
      type: "get",
      success(resp) {
        console.log(resp);
        console.log(resp[0].id);
      },
      error(resp) {
        console.log(resp);
      },
    });
  } */
  /* setup() {
    $.ajax({
      url: "http://localhost:8888/user/account/token",
      type: "post",
      data: {
        username: "mzy1",
        password: "mzy1",
      },
      success(resp) {
        console.log(resp);
      },
      error(resp) {
        console.log(resp);
      },
    });

    $.ajax({
      url: "http://127.0.0.1:8888/user/account/info/",
      type: "get",
      headers: {
        Authorization: "Bearer " + "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIxOTgyY2JhOTM5Y2Y0MGFhYTY4MjU4MjU1M2U3YzU2MSIsInN1YiI6IjEiLCJpc3MiOiJzZyIsImlhdCI6MTY2NzAyOTQxNCwiZXhwIjoxNjY4MjM5MDE0fQ.bTZmVCuS1pHmdjc8vnu9gUHcX0aCRurnq23NOS2Rw6s",
      },
      success(resp) {
        console.log(resp);
      },
      error(resp) {
        consolo.log(resp);
      },
    });

    $.ajax({
      url: "http://127.0.0.1:8888/user/account/register",
      type: "post",
      data:{
        username:"mzy3",
        password:"333",
        confirmedPassword:"3333",
      },
      success(resp) {
        console.log(resp);
      },
      error(resp) {
        consolo.log(resp);
      },
    });
  }, */
};
</script>


<style>
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
