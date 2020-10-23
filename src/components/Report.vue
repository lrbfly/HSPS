<template>
  <div class="bodyBg">
      <div class="center">
            <div class="select_spto">
                <el-select v-model="value">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <Menu></Menu>
            <div class="mid">
                <div class="information">
                    <p class="en">BASIC INFORMATION</p>
                    <p class="zh">基本信息</p>
                </div>
                <div class="incomeInfo">
                    <div class="echartsItem">
                        <ul class="Mitems">
                            <li>
                                <p class="zh">总收入趋势</p>
                                <p class="en">TOTAL REVENUE TREND</p>
                            </li>
                            <li>
                                <p class="zh">医院申报趋势</p>
                                <p class="en">TOTAL REVENUE TREND</p>
                            </li>
                            <li>
                                <p class="zh">各项收入分布</p>
                                <p class="en">TOTAL REVENUE TREND</p>
                            </li>
                            <li>
                                <p class="zh">年度药占比</p>
                                <p class="en">TOTAL REVENUE TREND</p>
                            </li>
                        </ul>
                        <ul class="Eitems">
                            <li id="income_echart0"></li>
                            <li id="income_echart1"></li>
                            <li id="income_echart2"></li>
                            <li id="income_echart3"></li>
                        </ul>
                    </div>
                    <div class="incomeMenu">
                        <ul class="Mitems">
                            <li>基本信息</li>
                            <li>收入及申报情况</li>
                            <li>就诊人次</li>
                            <li>接诊人次及诊疗项目</li>
                            <li>药品销售额</li>
                            <li>报告及问题情况</li>
                        </ul>
                    </div>
                </div>
            </div>
      </div>
  </div>
</template>

<script>
import Menu from './Menu'
export default {
     components: {
         Menu
    },
    data(){
        return {
            logo : require('../images/login/title.png'),
            isHide:0,//隐藏显示
            is_check:-1,//选择菜单
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
}
</script>

<style lang="scss" scoped>

    .bodyBg{background: #e2e4e9;width: 100%;height: 100%;padding: 20px 40px;
            padding-right: 0;
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
                padding-left: 80px;
                background: url(../images/report/hospital.png) no-repeat 8px 8px;
                text-align: left;
            .en{
                opacity: 0.85;
                font-family: Bebas;
                font-size: 70px;
                letter-spacing: 0;
                line-height: 116px;
                -webkit-background-clip:text;
                -webkit-text-fill-color:transparent;
                background-image: linear-gradient(to right,#184A4C ,#171D31);
            }
            .zh{
                opacity: 0.85;
                font-size: 32px;
                letter-spacing: 0;
                line-height: 34.57px;
                margin-left: -72px;
                -webkit-background-clip:text;
                -webkit-text-fill-color:transparent;
                background-image: linear-gradient(to right,#184A4C ,#171D31);
                margin-bottom: 40px;
            }
        }
        .incomeInfo{justify-content: space-between;display: flex;
            .echartsItem{width: 1433px;padding: 40px 46px;
                        opacity: 0.44;
                        background: #FFFFFF;
                        box-shadow: inset 0 0 9px 0 rgba(0,0,0,0.50);
                        border-radius: 5px;
                        border-radius: 5px;
                .Mitems{height: 76px;width: 100%;display: flex;justify-content: space-between;
                    >li{width: 332px;text-align: left; padding: 20px;
                        background-image: linear-gradient(225deg, #E9EBEF 0%, #BAB8C3 100%);border-radius: 5px;border-radius: 5px;
                        border: 0.74px solid #184A4C;
                        .zh{
                            font-size: 23.62px;
                            color: #FFFFFF;
                            letter-spacing: 0;
                            line-height: 24px;
                            margin-bottom: 8px;
                            -webkit-background-clip:text;
                            -webkit-text-fill-color:transparent;
                            background-image: linear-gradient(to right,#184A4C ,#171D31);
                        }
                        .en{
                            opacity: 0.3;
                            font-family: Bebas;
                            font-size: 12px;
                            color: #FFFFFF;
                            letter-spacing: 1px;
                            line-height: 11.81px;
                            -webkit-background-clip:text;
                            -webkit-text-fill-color:transparent;
                            background-image: linear-gradient(to right,#184A4C ,#171D31);
                        }

                    }
                }
                .Eitems{height: 700px;width: 100%;}
            }
            .incomeMenu{width: 260px;}
        }
     }
</style>