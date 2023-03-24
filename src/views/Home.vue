<template>
  <card>
    <div class="title"><h1>文章</h1></div>
    <div class="add">
      <el-button type="primary" size="large" @click="Add" style="font-size: 20px;">
        <router-link :to="{name:'write'}">
          写文章
        </router-link>
      </el-button>
    </div>
    
    <div class="table">
      <el-table
        :data="arit"
        class="table"
        style="width: 100%"
        slot-scope="scope"
      >
        <el-table-column prop="id" label="id" />
        <el-table-column label="标题">
          <template #default="scope">
            <router-link :to="{name:'w3', params: { id: scope.$index } }">
              {{ scope.row.title }}
            </router-link>
          </template>
        </el-table-column>

        <el-table-column prop="author" label="作者" />
        <el-table-column prop="time" label="上传时间" />
      </el-table>
    </div>
  </card>
  <router-view />
    <div
      style="position:fixed;text-align:center;bottom:25px;margin:0 auto;width:100%;"
    >
      <a
        target="_blank"
        
        href="https://beian.miit.gov.cn/"
      >
      冀ICP备2022022564号-1
      </a>

    </div>
</template>

<script>
import $ from "jquery";
import { ref } from "vue";
import Card from "./Card.vue";
import { useStore } from 'vuex'

export default {
  components: { Card },
  setup() {
    const store=useStore();
    const arit = ref([]);
    $.ajax({
      url: "http://43.142.175.34:8888/user/aritical/getaritical",
      type: "get",
      success(resp) {
        console.log(resp);
        arit.value = resp;
      },
      error(resp) {
        console.log(resp);
      },
    });

    const Add=()=>{

    }
    return {
      arit,Add,store
    };
  },
};
</script>

<style scoped>
.title {
  display: flex;
  justify-content: center;
}
.table {
  margin: 0px auto;
  width: 80%;
}
.tablec {
  width: 100%;
}
.router-link-active {
  text-decoration: none;
  color: black;
  width: 100%;
}
a {
  text-decoration: none;
  color: black;
}
.add{
  display: flex;
  justify-content: right;
  margin-bottom: 10px ;
  margin-right: 150px;

}
</style>