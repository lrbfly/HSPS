<template>
    <ul class="menu">
        <li class="logo">
            <img :src="logo">
            <p>打击骗保机器人</p>
        </li>
        <li class="debug" :class="is_check == '0' ? 'active' : '' " @click="check_menu(0)" >
            <div></div>
            <span>调试</span>
        </li>
        <li class="start" :class="is_check == '1' ? 'active' : '' " @click="check_menu(1)" >
            <div></div>
            <span>启动</span>
        </li>
        <li class="successful" :class="is_check == '2' ? 'active' : '' " @click="check_menu(2)" >
            <div></div>
            <span>成果</span>
        </li>
    </ul>
</template>

<script>
export default {
    data(){
        return{
            is_check:-1,
            logo : require('../images/login/title.png'),
        }
    },
    methods: {
        check_menu:function(i){
            console.log(i);
            this.is_check =i
            if(i==0){
                this.$router.push("/Debug")
            }else if(i==1){
                this.$router.push("/index")
                this.$store.commit("SET_IS_CHECK",i) 
            }else{
                this.$router.push("/Report")
            }
            
        }
    }
}
</script>

<style lang="scss" scoped>
    .menu{
                width: 238px;
                height: 375px;
                background-image: linear-gradient(#184A4C, #171D31);
                position: absolute;
                top: -20px;
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
                    background-image: url(../images/debug/debug1.png);
                    background-repeat: no-repeat;
                        background-position: 10% 50%;
                        background-size: 60px 33px;
                }
                .start>span{
                    background-image: url(../images/debug/debug3.png);
                    background-repeat: no-repeat;
                        background-position: 10% 50%;
                        background-size: 60px 33px;
                }
                .successful>span{
                    background-image: url(../images/debug/debug4.png);
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
</style>