<template>
  <div class="bodyBg">
      <div class="center">
            <div class="select_spto">
                <el-select v-model="value">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
            </div>
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
                <!--第一动画-->
                <div :class="isHide=='0'? '' : 'Hide'">
                    <div class="Waiting">
                        <p>WAITING FOR</p> 
                        <p>ACQUISITION TO START</p>
                    </div>
                    <img :src="index_anmtion0" class="anmtion0">
                </div>
                <!--第二动画-->
                <div :class="isHide=='1'? '' : 'Hide'">
                    <div class="loading">
                        <p>LOADINGDATA</p> 
                    </div>
                    <img :src="index_anmtion1" class="anmtion1">
                    <img :src="hand" class="hand">
                </div>

                <div class="startup">
                    <p>点击启动</p>
                    <p>请保持网络通畅</p>
                    <div class="startloading">
                        <div class="loadingBg">
                            <span>45%</span>
                        </div>
                    </div>
                </div>
            </div>
      </div>
  </div>
</template>

<script>
import 'element-ui/lib/theme-chalk/index.css';
export default {
    data() {
      return {
        isHide:1,
        is_check:-1,
        logo : require('../images/login/title.png'),
        index_anmtion0 : require('../images/index/index_anmtion0.png'),
        index_anmtion1 : require('../images/index/index_anmtion1.png'),
        index_anmtion2 : require('../images/index/index_anmtion2.png'),
        index_anmtion3 : require('../images/index/index_anmtion3.png'),
        hand:require('../images/index/hand.png'),
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

    methods: {
        check_menu:function(e){
            console.log(e.target.dataset.index)
            this.is_check = e.target.dataset.index
        },
        sayBye(e){
        //let msg=e.target.getAttribute('data-msg');
        let msg=e.target.dataset;
        console.log(msg)
    }
    }

}
</script>

<style lang="scss" scoped>

    .bodyBg{background: #e2e4e9;width: 100%;height: 100%;padding: 20px 40px;
        .select_spto{width: 468px;height: 58px;
            .el-select{display: block;position: relative;
                >>>.el-input__inner{
                        background: rgba(255,255,255,0);
                        border: 1px solid #727583;
                        color: #171D31;
                        font-size: 20px;
                }
            }
            .el-select >>>.el-select__caret{color: #727583;}
            .el-select::after{
                content: '选择医院';
                position: absolute;
                top: -10px;left: 18px;
                font-size: 12px;
                color: #171D31;
                letter-spacing: 0.3px;background: #e2e4e9;
            }
        }
        .center{
            position: relative;
            .menu{
                width: 238px;
                height: 375px;
                background-image: linear-gradient(#184A4C, #171D31);
                position: absolute;
                top: -15px;
                right: 0;
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
            .mid{
                width: 1040px;margin: auto;
                .Waiting{
                    opacity: 0.6;
                    font-family: Bebas;
                    font-size: 116px;
                    color: #FFFFFF;
                    letter-spacing: 0;
                    text-align: center;
                    text-shadow: 0 2px 4px #C1BFC9;
                    line-height: 153px;
                }
                
                .startup{width: 352px;margin: auto;position: relative;position: absolute;
                        bottom: -180px;
                        left: 40%;
                    >p:first-child{width: 160px;margin: auto;font-size: 30px;color: #3B3B3B;text-align: left;background: url(../images/index/startBg.png) no-repeat 100% 50%;background-size: 30px 29px;cursor: pointer;}
                    >p:nth-child(2){font-size: 12px;
                                    color: #646D7C;
                                    letter-spacing: 2.4px;
                                    text-align: center;
                                    margin: 12px 0 28px 0;
                                    }
                    .startloading{
                        width: 100%; height: 14px;background: #fff;border-radius: 20px;position: relative;  
                    }
                    .startloading::before{content: '100%';font-size: 14px;color: #A9A9A9;position: absolute;top: -16px;right: -32px;}
                    .loadingBg{
                                position: absolute;top: 0;left: 0;background-image: linear-gradient(1deg, #2F4F45 25%, #51B895 49%, #A6FBD1 81%, #708C83 100%);
                                background-image: linear-gradient(180deg, #747E8B 29%, #444C57 0%, #404853 63%, #23272D 100%);
                                box-shadow: 0 0 5px 0 rgba(0,0,0,0.50), inset 0 1px 3px 0 rgba(45,71,67,0.50);
                                width: 10%;
                                height: 14px;
                                border-radius: 20px 0 0 20px;
                            >span{position: absolute;top: -16px;right: -20px;font-size: 14px;color: #3B3B3B;}
                        }
                }
                .loading{
                    opacity: 0.6;
                    font-family: Bebas;
                    font-size: 116px;
                    color: #FFFFFF;
                    letter-spacing: 0;
                    text-align: center;
                    text-shadow: 0 2px 4px #C1BFC9;
                    line-height: 360px;
                }
                
            }
        }
        .hand{width: 820px;margin: auto;}

        .anmtion0{
                    display: block;position: relative;top: -160px;margin: auto;
                    animation:anmtion0 1.8s cubic-bezier(0,0,1,1) infinite alternate;
                    -moz-animation:anmtion0 1.8s  cubic-bezier(0,0,1,1) infinite alternate; /* Firefox */
                    -webkit-animation:anmtion0 1.8s  cubic-bezier(0,0,1,1) infinite alternate; /* Safari and Chrome */
                    -o-animation:anmtion0 1.8s  cubic-bezier(0,0,1,1) infinite alternate; /* Opera */
                
                }
        .anmtion1{
            display: block;position: absolute;top: 62px;width: 410px;left: 34%;
            animation:anmtion1 1.8s cubic-bezier(0,0,1,1)  ;
            -moz-animation:anmtion1 1.8s  cubic-bezier(0,0,1,1)  ; /* Firefox */
            -webkit-animation:anmtion1 1.8s  cubic-bezier(0,0,1,1)  ; /* Safari and Chrome */
            -o-animation:anmtion1 1.8s  cubic-bezier(0,0,1,1) ; /* Opera */
        
        }
        

        @keyframes anmtion0
            {
                from {opacity: 0;}
                to {opacity:1;}
            }

            @-moz-keyframes anmtion0 /* Firefox */
            {
                from {opacity: 0;}
                to {opacity:1;}
            }

            @-webkit-keyframes anmtion0 /* Safari and Chrome */
            {
                from {opacity: 0;}
                to {opacity:1;}
            }

            @-o-keyframes anmtion1 /* Opera */
            {
                from {opacity: 0;}
                to {opacity:1;}
            }
            @keyframes anmtion1
            {
                from {opacity: 0;top:-200px}
                to {opacity:1;top:62px}
            }

            @-moz-keyframes anmtion1 /* Firefox */
            {
                from {opacity: 0;top:-200px}
                to {opacity:1;top:62px}
            }

            @-webkit-keyframes anmtion1 /* Safari and Chrome */
            {
                from {opacity: 0;top:-200px}
                to {opacity:1;top:62px}
            }

            @-o-keyframes anmtion1 /* Opera */
            {
                from {opacity: 0;top:-200px}
                to {opacity:1;top:62px}
            }
    }
</style>