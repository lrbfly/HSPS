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
                        <ul class="Mitems">
                            <li class="border_4r border-tlr" :class="check_index==0? 'active' : '' " ref="sys"   @click.stop="check_sys(0)" data-index='0'>
                                <div>
                                    <img :src="icon_ing" />
                                    <p class="zh">HIS系统</p>
                                </div>
                                
                            </li>
                            <li class="border_tb" :class="check_index==1? 'active' : '' "  @click.stop="check_sys(1)" >
                                <div>
                                <img :src="icon_suecss" />
                                <p class="zh">医疗器械管理系统</p>
                                </div>
                            </li>
                            <li class=" border_4r border-trr" :class="check_index==2? 'active' : '' "  @click.stop="check_sys(2)" >
                                <div>
                                <img :src="icon_ing" />
                                <p class="zh">处方管理系统</p>
                                </div>
                            </li>
                            <li class=" border_4r border_t0r border-blr" :class="check_index==3? 'active' : '' " @click.stop="check_sys(3)" >
                                <div>
                                <img :src="icon_error" />
                                <p class="zh">药品管理局</p>
                                </div>
                            </li>
                            <li class="border_b" @click.stop="check_sys(4)" :class="check_index==4? 'active' : '' " >
                                <div>
                                <img :src="icon_ing" />
                                <p class="zh">处方管理系统</p>
                                </div>
                            </li>
                            <li class=" border_4r border_t0r border-brr" :class="check_index==5? 'active' : '' " @click.stop="check_sys(5)">
                                <div>
                                <img :src="icon_unstart" />
                                <p class="zh">医疗器械管理系统</p>
                                </div>
                            </li>
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

            icon_inged : require('../images/debug/icon_inged.png'),
            icon_suecss : require('../images/debug/icon_suecss.png'),
            icon_unstart : require('../images/debug/icon_unstart.png'),
            icon_ing : require('../images/debug/icon_ing.png'),
            icon_error : require('../images/debug/icon_error.png'),


            isHide:0,//隐藏显示
            is_check:-1,//选择菜单
            check_index:-1,//选择调试
        }
    },
    methods:{
        check_sys:function(index){
            console.log(index)
            this.check_index = index
            this.$router.push("/DebugEdite");
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
            .echartsItem{width: 1414px;
                .Mitems{width: 100%;display: flex;flex-wrap: wrap; justify-content: space-between;
                    >li{width: 33.33%;height: 330px;display: flex;
                        cursor: pointer;
                        align-items:center;justify-content: space-between;
                        >div{margin: auto;}
                        img{width: 35px;height: 20px;display: block;margin: auto;}
                        .zh{
                            font-size: 25px;
                            color: #171D31;
                            letter-spacing: 0;
                            text-align: center;
                            margin-top: 25px;
                        }

                    }
                    .border_4r{border: 1px solid #4A5865;}
                    .border_t0r{border-top: none;}
                    .border_tb{border-top: 1px solid #4A5865;border-bottom: 1px solid #4A5865;}
                    .border_b{border-bottom: 1px solid #4A5865;}
                    .border-tlr{border-top-left-radius: 4;}
                    .border-trr{border-top-right-radius: 4;}
                    .border-blr{border-bottom-left-radius: 4;}
                    .border-brr{border-bottom-right-radius: 4;}
                    >li.active{background-image: linear-gradient(225deg, #E9EBEF 0%, #BAB8C3 100%);
                                box-shadow: 0 12px 19px 0 rgba(89,89,89,0.50);
                                border-radius: 5px;border: none;}
                }
                .Eitems{height: 700px;width: 100%;}
            }
            .incomeMenu{width: 260px;}
        }
     }
</style>