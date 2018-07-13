<template>
    <el-container>
        <el-header><Nav></Nav></el-header>
        <el-main>
           <div class='main_contain'>
               <div class='contain_left'>
                <img src="../assets/login_one.png" class='login_img'>
               </div>
               <div class='contain_right' id='login'>
                    <h3>欢迎来到**</h3>
                    <div class='name'>
                       <el-input v-model="name" placeholder="用户名/邮箱/手机号" prefix-icon="el-icon-ant-yonghutouxiang" id="user">
                       </el-input>
                    </div>
                    <div class='password'>
                        <el-input v-model="password" placeholder="用户密码" type="password" prefix-icon="el-icon-ant-07" id="password"></el-input>
                        <i class="i_password"></i>
                    </div>
                    <router-link to='/' class="register a">还没账号?<span class="spa">去注册</span></router-link>
                    <router-link to='/' class="forget a">忘记密码?</router-link>
                     <div class="ident_code">
                        <div class="code">
                          <input type="text" placeholder="请输入验证码" class="input_code" v-model="ident_code">
                          <input type="button" @click="create_code" class="check_code" v-model="check_code">
                        </div>
                    </div>
                    <div class="alert">
                        <p class="alert_p" id="warn">验证码错误</p>
                    </div>
                    <div class='submit'>
                        <el-button type="success" round id="login_button" :disabled="disabled">登录</el-button>
                    </div>
               </div>
               <div class="clearfix">
               </div>
           </div>
        </el-main>
    </el-container>
</template>
<script>
import Nav from "./Navigation";
import "../assets/icon/iconfont.css";
export default {
  data() {
    return {
      name: "",
      password: "",
      ident_code:"",
      check_code:"",
      disabled: false,
    };
  },
  components: {
    Nav
  },
  methods:{
      create_code(){
      this.code = '';
      this.ident_code = '';
      this.check_code = '';
      const codeLength = 4;
      let random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');
      for(let i = 0; i < codeLength; i++){
        let index = Math.floor(Math.random()*36);
        this.code += random[index];
      }
        this.check_code = this.code;
      }
  },
  computed: {
    address() {
    const { name, password } = this
    return {
      name,
      password
    }
  }
  },
  watch:{
       address: {
        handler: function(val) {
            if(val.name==''||val.password==''){
                this.disabled = true;
            }else{
            this.disabled = false; 
        }     
    },
         deep:true
  },
  ident_code:{
        handler: function(val){
          let check = this.check_code;
          if(val == check){
            let warn = document.getElementById('warn');
            warn.innerHTML = '验证码正确'
          }
        }
      },
      deep:true
  },
  mounted() {
    this.init_wid();
    let login = document.getElementById('login_button');   
    window.addEventListener("resize", () => {
    let width = document.documentElement.clientWidth;
    this.juj_wid(width);
    });
  },
  created() {
    this.create_code();
  }
};
</script>
<style scoped lang="scss">
* {
  margin: 0px;
  padding: 0px;
  border-width: 0px;
  font-family: PingFangSC-Light, Helvetica Neue, Helvetica, Microsoft YaHei,
    \\5fae\8f6f\96c5\9ed1, Arial, SimHei;
}
.contain_left {
  margin-top: 6.25rem;
  margin-left: 11.25rem;
  margin-bottom: 1rem;
  height: 30rem;
  background-color: #eee;
  width: 28.125rem;
  float: left;
  box-shadow: 0px 0px 3px #888888;
}
.contain_right {
  margin-top: 6.25rem;
  height: 30rem;
  width: 28.125rem;
  margin-bottom: 1rem;
  float: left;
  background-color: #ffffff;
  box-shadow: 0px 0px 3px 1px #888888;
}
.contain_right > h3 {
  margin-top: 2rem;
  text-align: center;
  font-weight: 100;
  font-size: 1.75rem;
}
.login_img {
  margin: 15% 15%;
  width: 70%;
  height: 70%;
}
.clearfix {
  clear: both;
}
.name,.password {
  margin: 1rem 1rem;
  display: inline-block;
  margin-left: 20%;
  width: 19.375rem;
}
.submit {
  margin: 2rem 5.6rem;
}
.submit > button {
  padding: 0.8rem 8.9rem;
}
.a {
    text-decoration: none; 
}
.spa,.forget {
    color: #209e85;
}
.forget {
    float: right;
    margin-right: 3.3rem;
}
.register {
    color: #999;
    margin-left: 5.8rem;
}
.input_code {
  margin: 0 4rem 0 5.6rem;
  outline: none;
  border: 1px solid #dcdfe6;
  height: 2.5rem;
  border-radius: 4px;
  
  letter-spacing: .5rem;
}
.check_code {
 border: 1px solid #dcdfe6;
 background-color: rgba($color: #000000, $alpha: .4);
 padding: 0rem .8rem;
 border-radius: 4px;
 height: 2.5rem;
}   
.alert {
  margin: 1rem 0rem 0 5.6rem;
}  
.alert_p {
  color: red;
  letter-spacing: .5rem;
}  
</style>
