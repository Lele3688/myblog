<template>
  <el-row :gutter="0">
    <el-col :xs="2" :sm="2" :md="2" :lg="2" :xl="2"></el-col>
    <el-col :xs="20" :sm="20" :md="20" :lg="20" :xl="20">
      <v-md-editor
        v-model="content"
        disabled-menus="[]"
        @upload-image="handleUploadImage"
        placeholder="我是陈伟林的爹"
        height="600px"
      ></v-md-editor
    ></el-col>
    <el-col :xs="2" :sm="2" :md="2" :lg="2" :xl="2">
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      content: "",
    };
  },
  methods: {
    handleUploadImage(event, insertImage, files) {
      this.$axios.post().then((res) => {
        insertImage({});
      });
    },
  },
};
</script>

<style>
</style>