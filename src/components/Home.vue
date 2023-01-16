<template>
  <div class="common-layout">
    <el-container>
      <el-header class="header">
        <el-row :gutter="8">
          <el-col :xs="1" :sm="1" :md="1" :lg="1" :xl="1">
            <h1>
              <a href=""
                ><img
                  style="width: 50px; height: 50px;"
                  src="../assets/mylogo.png"
                  alt=""
              /></a></h1
          ></el-col>
          <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6"
            ><ul class="header-left">
              <li>
                <router-link class="r-link" to="Main" tag="button"
                  >首页</router-link
                >
              </li>
              <li>
                <router-link class="r-link" to="Editor" tag="button"
                  >关于</router-link
                >
              </li>
              <li>
                <router-link class="r-link" to="Editor" tag="button"
                  >编辑</router-link
                >
              </li>
              <li>
                <router-link class="r-link" to="Editor" tag="button"
                  >收藏</router-link
                >
              </li>
            </ul></el-col
          >
          <el-col :xs="9" :sm="9" :md="9" :lg="9" :xl="9">
            <h1 class="Eason">Eason🧑🏻</h1>
          </el-col>
          <el-col :xs="5" :sm="5" :md="5" :lg="5" :xl="5"></el-col>
          <el-col :xs="3" :sm="3" :md="3" :lg="3" :xl="3"
            ><ul class="header-right">
              <li>
                <el-icon size="25" style="margin-right: 3px"
                  ><Search
                /></el-icon>
              </li>
              <li><router-link class="r-link" to="Editor" tag="button"
                  >登录</router-link
                ></li>
            </ul></el-col
          >
        </el-row>
      </el-header>
      <el-main><router-view></router-view></el-main>
      <el-footer height="100px"><MyFooter/></el-footer>
    </el-container>
  </div>
</template>

<script>
import MyFooter from './Myfooter.vue'
export default {
    components:{
        MyFooter
    }
};
</script>

<style scoped>
.common-layout{
  width: 100%;
  height: 100%;
  background-image : url('@/assets/壁纸1.jpg');
  background-attachment:fixed
}
.header .el-row .el-col {
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
}
.Eason {
  margin: 0 auto; 
  padding-left: 68px;
  font-size: 43px;
  font-family: "Courier New", Courier, monospace;
}
.header-left {
  display: flex;
  list-style: none;
}
.header-left li {
  margin-left: 15px;
  cursor: pointer;
}
.header-right {
  display: flex;
  list-style: none;
}
.header-right li {
  margin-left: 15px;
  cursor: pointer;
}
.r-link {
  text-decoration: none;
  font-size: 20px;
  color: black;
}
.r-link:hover {
  color: white;
  border-bottom: solid 1px white;
}

/* footer */
.footer{
    position: absolute;
    bottom: 0px;
}
</style>