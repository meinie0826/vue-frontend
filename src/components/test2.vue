<template>
  <card>
    <div>
      <el-form :inline="true" class="demo-form-inline">
        <el-form-item size="large" class="title">
          <el-input v-model="titlename" placeholder="结果" />
        </el-form-item>
      </el-form>
      <div class="submit">
        <el-button size="large" type="success" @click="save">保存</el-button>
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



export default {
  components: { Card },
  setup() {
    const md = ref("editable");
    const titlename = ref("");
    const text = ref("");

    const save = () => {
        let str = new File([text], {type: 'text/plain;charset=utf-8'});
        saveAs(str, 'test.py');

    };

    return {
      titlename,
      text,
      md,
      save,
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