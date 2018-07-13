<template>
      <el-container>
  <el-header>
      <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <el-button type="text"><router-link to='/login' class='login'>登录</router-link></el-button>
          <span class="register">|</span>
          <el-button type="text">注册</el-button>
        </div>
        </el-col>
    </el-row>
  </el-header>
  <el-main> 
    <div class="text-center">
      <img src="../assets/antLogo.png" class="antLogo">
    </div>
    <div class="block">
    <el-carousel height="200px" arrow="never" :autoplay=true  type="card">
      <el-carousel-item v-for="item in imgArray" :key="item.pic">
        <img class="carousel_img" :src="item.src">
      <div class="text-desc">
          <div class="text-content">
            <p>一句一句听，听懂为止</p>
            <p>听不懂，刮开刮刮卡</p>
            <p>写不出，提示来帮忙</p>
            <p>没有听不出的文章</p>
          </div>
      </div>
      </el-carousel-item>
    </el-carousel>
    <div class="main_bottom">
        <div class="bottom_one span">
           <div class="one_background">
              <img src="../assets/bottom_one.png" class="img_one">
           </div>
            <a>
              <h4>单词测试</h4>
            </a>
            <p>不知道自己的词汇量</p>
            <p>还怎么学英语</p>
            <p>赶快来试一试</p>
        </div> 
         <div class="bottom_one span">
           <div class="one_background">
              <img src="../assets/bottom_one.png" class="img_one">
           </div>
            <a>
              <h4>单词测试</h4>
            </a>
            <p>不知道自己的词汇量</p>
            <p>还怎么学英语</p>
            <p>赶快来试一试</p>
        </div> 
         <div class="bottom_one span">
           <div class="one_background">
              <img src="../assets/bottom_one.png" class="img_one">
           </div>
            <a>
              <h4>单词测试</h4>
            </a>
            <p>不知道自己的词汇量</p>
            <p>还怎么学英语</p>
            <p>赶快来试一试</p>
        </div> 
    </div>
  </div>
  </el-main>  
  <el-footer>
   <div class="main_footer" id="footer">
      <div class="footer_item">
      <div class="item_one">
        <h4>如何使用</h4>
        <ul class="item_ul">
          <li>
            帮助
          </li>
          <li>
            关于我们
          </li>
          <li>
            加入我们
          </li>
          <li>
            关注我们
          </li>
        </ul>
      </div>
      <div class="item_one">
        <h4>如何使用</h4>
         <ul class="item_ul">
          <li>
            帮助
          </li>
          <li>
            关于我们
          </li>
          <li>
            加入我们
          </li>
          <li>
            关注我们
          </li>
        </ul>
      </div>
      <div class="item_one">
        <h4>如何使用</h4>
         <ul class="item_ul">
          <li>
            帮助
          </li>
          <li>
            关于我们
          </li>
          <li>
            加入我们
          </li>
          <li>
            关注我们
          </li>
        </ul>
      </div>
    </div>
    <div class="copyright">
        <div class="right_one right">
          Copyright © 2009-2018 版权所有：****教育科技有限公司
        </div>
        <div class="right_two right">
          苏ICP备233233号-2 公安备案号：233233233233233
        </div>
    </div>
   </div>
  </el-footer>
</el-container>
</template>
<script>
export default {
    name: 'HelloWorld',
    data() {
    return {
      imgArray: [
        { pic: "01", src: require("../assets/Listen.png") },
        { pic: "02", src: require("../assets/Oral.png") },
        { pic: "03", src: require("../assets/Test.png") },
        { pic: "04", src: require("../assets/Word.png") }
      ]
    };
  },
  mounted (){
    this.init_home();
   window.addEventListener('resize',function(){
      var width = document.body.clientWidth;
      if(width < 1000){
        document.getElementById('footer').style.display = 'none';
      } 
   })
   
  }
}
</script>

<style scoped lang="scss">
* {
  font-family: PingFangSC-Light, "Helvetica Neue", Helvetica, "Microsoft YaHei",
    微软雅黑, Arial, SimHei !important;
    margin: 0px;
    padding: 0px;
    text-decoration: none;
    list-style: none;
}
.el-row {
  margin-bottom: 40px;
  &:last-child {
    margin-bottom: 0;
  }
}
.bg-purple-dark {
  background: #ffffff;
}
.block{
  min-width: 5rem;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.grid-content {
  text-align: right;
  margin: 0.5rem 3rem 0 0;
}
.el-button {
  display: inline-block;
  color: #333;
  font-size: 14px;
}
.register {
  margin-top: 0.5rem;
  color: #333;
}
.carousel_img {
  width: 100%;
  height: 100%;
  border-radius: 10px;
}
.text-center {
  text-align: center;
}
.antLogo {
  padding: 0 0 0.8rem 0;
  width: 10%;
  height: 10%;
  background-color: #ffffff;
}
.text-desc {
  position: absolute;
  margin: auto;
  top:2.5rem;
  bottom: 0;
  height: 200px;
  left: 1rem;
  font-size: 0.1em;
  color: rgba($color: #000000, $alpha: 0.5);
}
.main_bottom {
  width: 100%;
  margin: 4rem 0 0 0;
  line-height: 2rem;
}
.span {
  width:31.62393162%;
  text-align: center;
  display: inline-block
}
.one_background {
  background:url(https://static.baydn.com/media/media_store/image/f5b2be41f407b458898c0137116117c1.png) no-repeat;
  background-size: contain;
  margin: 0 auto;
  position: relative;
  width: 100px;
  height: 100px;
}
.img_one {
  margin: 0 0 0 .6rem;
  width: 72%;
}
.main_footer {
  width: 95%;
  height: 20rem;
  background-color: #f4f4f4;
  margin-top: 5rem;
  margin-left: 2rem;
}
.item_one {
  line-height: 1.8rem;  
  width:8.75rem;
  text-align: center;
  display: inline-block;
  padding-top: 3rem;
  padding-left: 10rem;
}
.item_ul {
  font-size: 1em;  
}
.right {
  font-size: .875rem;
  text-align: center;
}
.right_one {
  padding-top: 3rem;
}
.login:visited {
  color: #333;
}
</style>

