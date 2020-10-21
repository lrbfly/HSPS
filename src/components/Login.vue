<template>
  <div class="bodyBg">
    <div class="r_bg">
      <div class="login">
        <div class="title"></div>
        <p class="txt">
          <span>HEALTHCARE SECURITY FUND SUPERVISION</span>
          <span>打击骗保机器人</span>
        </p>
        <el-form ref="form">
          <el-form-item>
            <el-input class="id" :class="id_isfocus? 'active' : '' " v-model="id" @focus="id_focus()" index=0 ref="id" autoconplete= off></el-input>
          </el-form-item>
          <el-form-item>
            <el-input :type="is_see? 'text' : 'password' " class="key" :class="key_isfocus? 'active' : '' " v-model="key" @focus="key_focus()" index=1 ref="key" autoconplete= off></el-input>
            <img class="fill" :src="is_see ? see_img : see_img2 " @click="see()" >
          </el-form-item>
          <el-form-item>
            <el-button type="primary" class="submit" @click="submit()">LOG IN</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { Button, Select, Form, FormItem } from "element-ui";
export default {
    data(){
        return{
            id: "",
            key: "",
            id_isfocus:false,
            key_isfocus:false,
            is_see:false,
            see_img : require('../images/login/Fill.png'),
            see_img2 : require('../images/login/Fill2.png'),
        }
    },
    methods: {
      //id获取焦点
    id_focus: function () {
      if(this.$refs.id.$attrs){
        this.id_isfocus = true
      }
    },
    //key 获取焦点
    key_focus: function () {
      if(this.$refs.id.$attrs){
        this.key_isfocus = true
      }
    },
    //查看密码
    see:function(){
      this.is_see = !this.is_see;
    },
    // 提交登录
    submit:function(){
      this.$router.push("/index");
    }
  }
};
</script>

<style lang="scss" scoped>
.bodyBg {
  width: 100%;
  height: 100%;
  background-image: url(../images/login/BG.png);
  background-size: 100%;
  position: relative;
  .r_bg {
    width: 1336px;
    height: 768px;
    position: absolute;
    top: 106px;
    left: 188px;
    background-image: url(../images/login/R.png);
    background-size: 100%;
    .login {
      width: 458px;
      position: absolute;
      top: 165px;
      right: 0;
      .title {
        width: 100%;
        height: 140px;
        background-image: url(../images/login/title.png);
        background-size: 100%;
      }
      .txt {
        font-size: 13px;
        color: #ffffff;
        letter-spacing: -0.1px;
        line-height: 15px;
        padding-bottom: 60px;
        > span:first-child {
          padding-right: 40px;
          background-image: url(../images/login/icon_add.png);
          background-repeat: no-repeat;
          background-position: 96% 50%;
        }
      }
      .el-form-item{position: relative;}
      .el-input {
        width: 100%;
        padding: 0 8px;
        height: 72px;
        position: relative;
        margin-bottom: 46px;
        /deep/ .el-input__inner {
          width: 100%;
          height: 100%;
          font-size: 14px;
          color: #fff;
          background: rgba(12, 23, 49, 0.52);
          border-radius: 8px;
          border: 1px solid #0d5946;
          line-height: 72px;
          padding-left: 30px;
          outline:none;
          cursor: pointer;
        }
      }
       .fill{position: absolute;right: 30px; top: 26px;cursor: pointer;}
     
      .id::before {
        content: "ID";
      }
      .key::before {
        content: "KEY";
      }
      .id::before,.key::before {
        position: absolute;
        top: 4px;
        left: 40px;
        font-family: Bebas;
        line-height: 72px;
        font-size: 20px;
        letter-spacing: 0.5px;
        text-align: left;
        text-shadow: 0 0 3px rgba(171, 250, 168, 0.5);
        background-image: linear-gradient(#00ffa6, #d8d8d8);
        -webkit-background-clip: text;
        color: transparent;
        transition: top 400ms;
        -webkit-transition: top 400ms;
        }
      .id.active::before,.key.active::before{top: -36px;}
      .id.active::after{
      position: absolute;
          content: "";
          top: -1px;
          left: 28px;
          width: 38px;
          height: 4px;
          border-radius: 20px;
          background: #222D41;
          opacity: .6;
        }
      .key.active::after{
          position: absolute;
          content: "";
          top: -1px;
          left: 28px;
          width: 55px;
          height: 4px;
          border-radius: 20px;
          background: #222D41;
          opacity: .6;
        }
      .submit{
          width: 172px;height: 58px;border: 1px dashed #06ad8c;background: rgba(12,23,49,0.52);border-radius: 8px;border-radius: 8px;cursor: pointer;font-size: 20px;background-image: linear-gradient(#07965F , #01D9A9);
          -webkit-background-clip: text;
          color: transparent;letter-spacing: 0.5px;text-align: center;
          float: right;
          margin-right: 10px;outline: none;
        }
    }
  }
}
</style>