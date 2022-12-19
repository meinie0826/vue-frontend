<template>
  <card>
    <div>
      <el-form :inline="true" class="demo-form-inline">
        <el-form-item size="large" class="title">
          <el-input v-model="titlename" placeholder="标题" />
        </el-form-item>
      </el-form>
      <div class="submit">
        <el-button size="large" type="success" @click="change">切换编辑</el-button>
        <el-button size="large" type="primary" @click="modify">修改</el-button>
        
      </div>
    </div>

    <v-md-editor
      mode="preview"
      v-model="text"
      height="800px"
      v-if="md == 'preview'"
    >
    </v-md-editor>
    <v-md-editor mode="editable" v-model="text" height="600px" v-else>
    </v-md-editor>
  </card>
</template>

<script>
import Card from "@/views/Card";
import { ref } from "vue";
import $ from "jquery";
import { useRoute } from "vue-router";

export default {
  components: { Card },
  setup() {
    const md = ref("preview");
    const titlename = ref("");
    const id = ref("");
    const text = ref("");
    const time = ref("");
    const route = useRoute();
    $.ajax({
      url: "http://43.142.175.34:8888/user/aritical/getaritical",
      type: "get",
      success(resp) {
        console.log(resp);
        id.value= resp[route.params.id].id;
        time.value=resp[route.params.id].time;
        titlename.value = resp[route.params.id].title;
        text.value = resp[route.params.id].content;
      },
      error(resp) {
        console.log(resp);
      },
    });

    const change = () => {
      if (md.value == "editable") md.value = "preview";
      else md.value = "editable";
    };

    const modify = () => {
      $.ajax({
        url: "http://43.142.175.34:8888/user/account/modify",
        type: "post",
        data: {
          id: id.value,
          content: text.value,
          title: titlename.value,
          time:time.value,
        },
        success(resp) {
          console.log(resp);
        },
        error(resp) {
          console.log(resp);
        },
      });
    };

    return {
      titlename,
      text,
      route,
      md,
      change,
      modify,
      id,
      time,
    };
  },
};
</script>

<style scoped>
.title {
  width: 60%;
  float: left;
}
.submit {
  float: left;
}
</style>