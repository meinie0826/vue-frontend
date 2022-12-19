<template>
  <card>
    <div>
      <el-form :inline="true" class="demo-form-inline">
        <el-form-item size="large" class="title">
          <el-input v-model="titlename" placeholder="标题" />
        </el-form-item>
      </el-form>
      <div class="submit">
        <el-button size="large" type="success" @click="change"
          >切换编辑</el-button
        >
        <el-button size="large" type="success" @click="add">提交</el-button>
      </div>
    </div>

    <v-md-editor
      mode="editable"
      v-model="text"
      height="600px"
      v-if="md == 'editable'"
    >
    </v-md-editor>
    <v-md-editor mode="preview" v-model="text" height="600px" v-else>
    </v-md-editor>
  </card>
</template>

<script>
import Card from "@/views/Card";
import { ref } from "vue";
import $ from "jquery";

export default {
  components: { Card },
  setup() {
    const md = ref("editable");
    const titlename = ref("");
    const text = ref("");

    const change = () => {
      if (md.value == "editable") md.value = "preview";
      else md.value = "editable";
    };

    const add = () => {
      $.ajax({
        url: "http://43.142.175.34:8888/user/account/add",
        type: "post",
        data: {
          author: "mzy",
          title: titlename.value,
          content: text.value,
          time: showTime(),
        },
        success(resp) {
          console.log(resp);
        },
        error(resp) {
          console.log(resp);
        },
      });
    };

    const showTime=()=> {
      var date = new Date();
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var day = date.getDate();
      var hour = date.getHours();
      var minute = date.getMinutes();
      var second = date.getSeconds();
      month=month<=9?"0"+month:month;
      day=day<=9?"0"+day:day;
      hour=hour<=9?"0"+hour:hour;
      minute=minute<=9?"0"+minute:minute;
      second=second<=9?"0"+second:second;
      return year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
    }

    return {
      titlename,
      text,
      change,
      md,
      add,
      showTime
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