<template>
  <div class="bodyBg">
      <div class="center">
            <ul class="menu">
                <li class="logo">
                    <img :src="logo">
                    <p>打击骗保机器人</p>
                </li>
                <li class="debug" :class="is_check == '0' ? 'active' : '' ">
                    <div></div>
                    <span @click="check_menu($event)" data-index='0'>调试</span>
                </li>
                <li class="start" :class="is_check == '1' ? 'active' : '' ">
                    <div></div>
                    <span @click="check_menu($event)" data-index='1'>启动</span>
                </li>
                <li class="successful" :class="is_check == '2' ? 'active' : '' ">
                    <div></div>
                    <span @click="check_menu($event)" data-index='2'>成果</span>
                </li>
            </ul>
            <div class="mid">
                <div class="information">
                    <p class="en">ACQUISITION AND DEBUGGING</p>
                    <p class="zh">采集准备调试</p>
                </div>
                <div class="incomeInfo">
                    <div class="echartsItem">
                        <div class="title">HIS系统</div>
                        <ul class="Mitems">
                            <li >
                                <span>数据库类型</span>
                                <el-select v-model="value" >
                                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                                </el-select>
                            </li>
                            <li >
                                <span>用户名</span>
                                <el-input class="" v-model="id" autoconplete= off></el-input>
                            </li>
                            <li >
                                <span>服务器IP</span>
                                <el-input class="" v-model="id" autoconplete= off></el-input>
                            </li>
                            <li >
                                <span>密码</span>
                                <el-input class="" v-model="id" autoconplete= off></el-input>
                            </li>
                            <li >
                                <span>端口</span>
                               <el-input class="" v-model="id" autoconplete= off></el-input>
                            </li>

                            <li class="hr">
                                <div></div>
                            </li>
                            <li >
                                <span>数据库实例/服务名</span>
                                <el-select v-model="value">
                                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                                    </el-option>
                                </el-select>
                            </li>
                            <li >
                                <span>采集起始年月</span>
                                <el-input class="" v-model="id" autoconplete= off></el-input>
                            </li>
                            <li >
                                <span>数据库</span>
                                <el-input class="" v-model="id" autoconplete= off></el-input>
                            </li>
                            <li >
                                <span>采集终止年月</span>
                                <el-input class="" v-model="id" autoconplete= off></el-input>
                            </li>
                        </ul>
                    </div>
                    <div class="incomeMenu">
                        <ul class="Mitems">
                            <li>测试</li>
                            <li>确定</li>
                            <li>返回</li>
                        </ul>
                    </div>
                </div>
            </div>
      </div>
  </div>
</template>

<script>
import { Button, Select, Form, FormItem } from "element-ui";

export default {
    data(){
        return {
            logo : require('../images/login/title.png'),
            id:0,
            isHide:0,//隐藏显示
            is_check:-1,//选择菜单
            check_index:-1,//选择调试
            options: [{
                value: 0,
                label: '医院0'
                }, {
                value: 1,
                label: '医院1',
                disabled: true
                }, {
                value: 2,
                label: '医院2'
                }],
            value: '医院0'
            }
    },
    methods:{
        check_sys:function(index){
            console.log(index)
            this.check_index = index
        }
    }
}
</script>

<style lang="scss" scoped>

    .bodyBg{background: #e2e4e9;width: 100%;height: 100%;padding: 20px 40px;
            padding-right: 0;
        .center{
            position: relative;
            .menu{
                width: 238px;
                height: 375px;
                background-image: linear-gradient(#184A4C, #171D31);
                position: absolute;
                top: -20px;
                right: 40px;
                >.logo img{
                    display: block;
                    width: 187px;
                    margin: auto;
                    margin-top: 40px;
                }
                >.logo>p{
                    font-size: 16px;
                    color: #FFFFFF;
                    letter-spacing: 10px;
                    text-align: center;
                    text-indent: 6px;
                    margin-bottom: 38px;
                }
                >.debug,.start,.successful{height: 72px;width: 100%;padding: 10px 0;border-top: 1px solid #57646f;position: relative;
                    >span{
                        position: absolute;
                        width: 187px;
                        height: 52px;
                        line-height: 52px;
                        margin: auto;
                        font-size: 28px;
                        color: #FFFFFF;
                        letter-spacing: 11.62px;
                        text-align: center;text-indent: 60px;
                        cursor: pointer;
                        display: block;
                        top: 10px;
                        left: 26px;
                    }
                }
                .debug>span{
                    background-image: url(../images/index/icon_debug.png);
                    background-repeat: no-repeat;
                        background-position: 10% 50%;
                        background-size: 60px 33px;
                }
                .start>span{
                    background-image: url(../images/index/icon_unStrat.png);
                    background-repeat: no-repeat;
                        background-position: 10% 50%;
                        background-size: 60px 33px;
                }
                .successful>span{
                    background-image: url(../images/index/icon_seccful.png);
                    background-repeat: no-repeat;
                        background-position: 10% 50%;
                        background-size: 60px 33px;
                }
                .active{
                    >div{
                        width: 187px;
                        height: 52px;
                        margin: auto;
                        opacity: 0.44;
                        background-color: rgba(255,255,255,0.22);
                        border-radius: 6px;
                        border-radius: 6px;
                    }
                }
            }
           
        }

    }
     .mid{padding: 30px 0 0 65px;
        .information{
                
                text-align: left;
            .en{
                opacity: 0.6;
                font-family: Bebas;
                font-size: 96px;
                color: #FFFFFF;
                letter-spacing: 0;
                text-shadow: 0 2px 3px #C1BFC9;
                position: relative;
                display: inline-block;
            }
            .en::after{content: "";width: 128px;height: 95px;background: url(../images/debug/iocn_Machineeye.png) no-repeat;position: absolute;bottom: 0;right: -72px;}
            .zh{
                font-size: 48px;
                color: #FFFFFF;
                letter-spacing: 0;
                line-height: 48px;
                margin-bottom: 40px;
            }
        }
        .incomeInfo{justify-content: space-between;display: flex;
            .echartsItem{width: 1443px;padding: 40px 46px;padding-bottom: 0;
                        background: #FFFFFF;
                        border-radius: 5px;
                        border-radius: 5px;
                .title{
                    text-align: left;
                    margin-bottom: 40px;
                    font-size: 36px;
                    -webkit-background-clip:text;
                    -webkit-text-fill-color:transparent;
                    background-image: linear-gradient(to right,#184A4C ,#171D31);
                    letter-spacing: 0;
                    line-height: 32px;
                }
                .Mitems{width: 100%;display: flex;flex-wrap: wrap; justify-content: space-between;
                    >li{width: 50%;height: 58px;cursor: pointer;margin-bottom: 56px;position: relative;
                        /deep/ .el-input__inner{
                            width: 625px;height: 58px;border: 1px solid #171D31;border-radius: 8px;
                        }
                    }
                    >li:nth-child(2n){
                        text-align: right;
                        span{position: absolute;top: -8px;left:72px;font-size: 12px;color: #171D31;letter-spacing: 0.3px;text-align: left;z-index: 9;background: #fff;}
                    }
                    >li:nth-child(2n+1){
                        text-align: left;
                        span{position: absolute;top: -8px;left: 20px;font-size: 12px;color: #171D31;letter-spacing: 0.3px;text-align: left;z-index: 9;background: #fff;}
                    }
                    >li.hr{
                        padding: 20px 0 0 54px;
                        >div{width: 625px;height: 1px;
                        border: 1px solid #979797;;}
                    }
                }

            }
            .incomeMenu{width: 260px;padding-top: 400px;
                li{width: 172px;height: 58px; border: 1px dashed #172335;color: #172335; border-radius: 8px;border-radius: 8px;cursor: pointer;font-size: 20px;line-height: 58px;margin-top: 36px;}
            }
        }
     }
</style>