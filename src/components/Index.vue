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
                <div class="Waiting">
                    <p>WAITING FOR</p> 
                    <p>ACQUISITION TO START</p>
                </div>
                <img :src="index_anmtion0">
            </div>
      </div>
  </div>
</template>

<script>
import 'element-ui/lib/theme-chalk/index.css';
export default {
    data() {
      return {
        is_check:-1,
        logo : require('../images/login/title.png'),
        index_anmtion0 : require('../images/index/index_anmtion0.png'),
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
                width: 1028px;margin: auto;
                .Waiting{
                    opacity: 0.6;
                    font-family: Bebas;
                    font-size: 116px;
                    color: #FFFFFF;
                    letter-spacing: 0;
                    text-align: center;
                    text-shadow: 0 2px 4px #C1BFC9;
                }
            }
        }
    }
</style>