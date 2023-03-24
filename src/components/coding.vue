<template>
  <card>
    <div>
      <el-form :inline="true" class="demo-form-inline">
        <el-form-item size="large" class="title">
          <el-input v-model="inputdata" placeholder="输入" />
        </el-form-item>
      </el-form>
      <el-select v-model="value" class="m-2"  placeholder="C++" size="large">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <el-form :inline="true" class="demo-form-inline">
        <el-form-item size="large" class="title">
          <el-input v-model="answer" placeholder="结果" />
        </el-form-item>
      </el-form>
      <div class="submit">
        <el-button size="large" type="" @click="com">运行</el-button>
      </div>
    </div>

    <v-md-editor
      mode="editable"
      v-model="code"
      height="600px"
      v-if="md == 'editable'"
    >
    </v-md-editor>
    <v-md-editor mode="preview" v-model="code" height="600px" v-else>
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
    const inputdata = ref("");
    const answer = ref("");
    const code = ref("");
    const lang = ref("");

    const com = () => {
      $.ajax({
        url: "http://43.142.175.34:8888/user/updatecode",
        type: "get",
        data: {
          lang: value.value,
          code: code.value,
          inputdata: inputdata.value,
        },
        success(resp) {
          console.log(resp);
        },
        error(resp) {
          console.log(resp);
        },
      });

      $.ajax({
        url: "http://43.142.175.34:8888/user/getanswer",
        type: "get",
        success(resp) {
          answer.value = resp;
          console.log(resp);
        },
        error(resp) {
          console.log(resp);
        },
      });
    };

    const value = ref('')

    const options = [
      {
        value: 'cpp',
        label: 'C++',
      },
      {
        value: 'java',
        label: 'java',
      },
      {
        value: 'js',
        label: 'javascript',
      },
      {
        value: 'go',
        label: 'golang',
      },
      {
        value: 'py',
        label: 'python',
      },
    ]
    
    return {
      inputdata,
      code,
      answer,
      md,
      com,
      lang,
      options,
      value
    };
  },
  created(){
    this.value=this.options[0].value;
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