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
                <!--启动动画-->
                <div :class="isHide=='1'? '' : 'Hide'">
                    <div class="loading">
                        <p>LOADINGDATA</p> 
                    </div>
                    <!-- <img :src="index_anmtion1" class="anmtion1" :class=" loadingNum>99 ? 'startAnmtion1' : '' "> -->
                    <img :src="index_anmtion1" class="anmtion1">
                    <img :src="index_anmtion2" class="anmtion2">
                    <img :src="index_anmtion3" class="anmtion3">
                    <img :src="index_anmtion4" class="anmtion4">
                    <img :src="hand" class="hand">
                </div>
                <!--启动成功动画-->
                <div class="success" :class="isHide==3 && is_error==1? '' : 'Hide'">   
                    <img :src="success_bg" class="success_bg">
                    <img :src="success_bg1" class="success_bg1" :class="isHide=='3' && is_error=='1'? 'successAnmtion' : ''">
                    <img :src="success_bg2" class="success_bg2">
                </div>
                <!--启动失败动画-->
                <div class="error" :class="isHide==3 && is_error==0? '' : 'Hide'">   
                    <img :src="success_bg1" class="success_bg1" :class="isHide=='3' && is_error=='0'? 'errorAnmtion' : ''">
                </div>
                <!--建模分析动画 2-->
                <div class="anasing" :class="isHide=='2' && is_error=='0'? '' : 'Hide'">
                    <img :src="txt3bg" class="txt3bg">
                    <img :src="anasingABg" class="anasingABg anasingAnmtion">
                    <img :src="anasingBBg" class="anasingBBg anasingBnmtion">
                </div>
                <!--建模分析动画 4-->
                <div class="creating" :class="isHide=='4' && is_error=='0'? '' : 'Hide'">
                    <img :src="creatPerBg" class="creatPerBg">
                    <img :src="creatPerBg1" class="creatPerBg1 creatingAnmtion" >
                    <!-- <img :src="creatPerBg2" class="creatPerBg2"> -->
                </div>
            </div>
      </div>
      <div class="startup">
            <p>
                <span @click="startup(3)">{{isHide==0? '点击启动' : isHide==1? '数据装在中' : isHide==2? '建模分析中' : isHide==3 && is_error==1? '启动成功' : isHide==3 && is_error==0? '启动失败' : '正在生成报告'}} </span> 
                <span @click="creating()"></span>
            </p>
            <p>请保持网络通畅</p>
            <div class="startloading">
                <div class="loadingBg" :class=" loadingNum>99 ? 'radiusFull' : '' " :style=" 'width:'+ loadingNum +'%;' ">
                    <span :class=" loadingNum>99 ? 'Hide' : '' ">{{loadingNum}}%</span>
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
        isHide:0,//隐藏显示
        is_check:-1,//选择菜单
        logo : require('../images/login/title.png'),
        index_anmtion0 : require('../images/index/index_anmtion0.png'),
        index_anmtion1 : require('../images/index/index_anmtion1.png'),
        index_anmtion2 : require('../images/index/index_anmtion2.png'),
        index_anmtion3 : require('../images/index/index_anmtion3.png'),
        index_anmtion4 : require('../images/index/index_anmtion4.png'),

        success_bg : require('../images/index/success_bg.png'),
        success_bg1 : require('../images/index/success_bg1.png'),
        success_bg2 : require('../images/index/success_bg2.png'),

        anasingBBg : require('../images/index/anasingBBg.png'),
        anasingABg : require('../images/index/anasingABg.png'),
        txt3bg : require('../images/index/txt3bg.png'),
        
        creatPerBg : require('../images/index/creatPerBg.png'),
        creatPerBg1 : require('../images/index/creatPerBg1.png'),
        creatPerBg2 : require('../images/index/creatPerBg2.png'),

        hand:require('../images/index/hand.png'),
        startTime:null, //动画开始时间
        lastTime:null, //每次动画 结束时间
        loadingNum:0,//动画进度
        animation_num:1,//动画顺序
        is_error:0,//是否成功

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

            switch(e.target.dataset.index){
                case '0':
                    //点击调试
                     if(this.loadingNum>1){
                            return false;
                        }
                    this.anmtion(2);
                    break;
                case '1':
                    //点击启动
                    if(this.loadingNum>1){
                            return false;
                        }
                        this.isHide = 1;
                        this.startTime = new Date();
                        this.anmtion(3);
                    break;
                case '3':
                    //成果
                    
                    break;
            }
            this.is_checkindex = e.target.dataset.index
        },
        //点击启动
        startup(index){
            if(this.loadingNum>1){
                return false;
            }
            this.isHide = 1;
            this.startTime = new Date();
            this.anmtion(index);
        },

        //生成报告
        creating(){
            //creatingAnmtion
            if(this.loadingNum>1){
                return false;
            }
            this.isHide = 4;
            this.startTime = new Date();
            this.anmtion(4);
        },

        anmtion:function (index) {  
            let elapsed;//总共 执行了 多少秒
            let jgTitme; //间隔时间
            let nowTime = new Date();
            let lastTime; //执行完成时间

            elapsed = nowTime - this.startTime;
            let dom ;
            let that = this;

            if(index==2){
                //调式 建模分析
                this.isHide=2;
            }else if(index==3){
                //启动
                if(this.animation_num==1){
                    for(let i=1;i<5;i++){
                        dom = document.getElementsByClassName("anmtion"+i);
                        dom[0].className = "anmtion"+i+" startAnmtion"+i;
                        
                        if(i==4){
                            this.animation_num=i;
                            
                            document.getElementsByClassName("anmtion"+this.animation_num)[0].addEventListener('animationend',()=>{ 
                                
                                for(let k=1;k<5;k++){
                                    document.getElementsByClassName("anmtion"+k)[0].className = "anmtion"+k;
                                    setTimeout(function() {
                                        document.getElementsByClassName("anmtion"+k)[0].className = "anmtion"+k+" startAnmtion"+k;
                                    }, 1)
                                    
                                }
                            }, false)
                        }
                    }
                }
            }
            
            

                    

            if(this.lastTime){
                if(nowTime-this.lastTime>Math.random(9)*100+50){
                    this.loadingNum++;
                    this.lastTime = new Date();
                }
            }else{
                this.loadingNum++;
                this.lastTime = new Date();
            }
            if (this.loadingNum <100) { 
                window.requestAnimationFrame(this.anmtion);
            }else{
                this.isHide = 3;
                ;Math.random()*10>9?this.is_error = 1:this.is_error = 0;
                console.log(this.isHide)
                // for(let g=1;g<5;g++){
                //     document.getElementsByClassName("anmtion"+g)[0].className = "anmtion"+g;
                // }
            }
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
                .success{position: relative;
                    .success_bg1,.success_bg2{position: absolute;top: 0;left: 0;}
                }
                .error{position: relative;}
                .anasing{position: relative;
                    .anasingABg,.anasingBBg{position: absolute;top: -90px;left: 0;display: block;width: 100%;}
                }
                .creating{position: relative;
                .creatPerBg{
                            display: block;
                            width: 100%;
                            position: relative;
                            top: 120px;
                        }
                    .creatPerBg1,.creatPerBg2{position: absolute;top: -80px;left: 404px;}
                }
            }
        }
        .hand{width: 820px;margin: auto;}
        .startup{
                    width: 352px;margin: auto;position: relative;position: absolute;
                        bottom: 40px;
                        left: 40%;
                    >p:first-child{cursor: pointer;display: flex;font-size: 30px;color: #3B3B3B;text-align: center;justify-content: center;
                        >span:last-child{width: 33px;height: 40px; background: url(../images/index/startBg.png) no-repeat 100% 128%;background-size: 33px 34px;display: inline-block;}
                    }
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
                    .loadingBg.radiusFull{border-radius: 20px;}
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
        .anmtion0{
                    display: block;position: relative;top: -160px;margin: auto;
                    animation:anmtion0 1.8s cubic-bezier(0,0,1,1) infinite alternate;
                    -moz-animation:anmtion0 1.8s  cubic-bezier(0,0,1,1) infinite alternate; /* Firefox */
                    -webkit-animation:anmtion0 1.8s  cubic-bezier(0,0,1,1) infinite alternate; /* Safari and Chrome */
                    -o-animation:anmtion0 1.8s  cubic-bezier(0,0,1,1) infinite alternate; /* Opera */
                
                }
        .anmtion1{
            display: none;position: absolute;top: -1000px;width: 410px;left: 34%;
        
        }
        .anmtion2{
            display: none;position: absolute;top: -1000px;width: 300px;left: 43%;
        
        }
        .anmtion3,.anmtion4{
            display: none;position: absolute;top: -400px;width: 300px;left: 43%;
        
        }
        .startAnmtion1{
            display: block;
            animation:anmtion1 1.8s cubic-bezier(0,0,1,1)  1;
            -moz-animation:anmtion1 1.8s  cubic-bezier(0,0,1,1)  1; /* Firefox */
            -webkit-animation:anmtion1 1.8s  cubic-bezier(0,0,1,1)  1; /* Safari and Chrome */
            -o-animation:anmtion1 1.8s  cubic-bezier(0,0,1,1)  1; /* Opera */
        }
        .startAnmtion2{
            display: block;
            animation:anmtion2 1.4s cubic-bezier(0,0,1,1) 1.8s 1;
            -moz-animation:anmtion2 1.4s  cubic-bezier(0,0,1,1) 1.8s 1; /* Firefox */
            -webkit-animation:anmtion2 1.4s  cubic-bezier(0,0,1,1) 1.8s 1; /* Safari and Chrome */
            -o-animation:anmtion2 1.4s  cubic-bezier(0,0,1,1) 1.8s 1; /* Opera */
        
        }
        .startAnmtion3{
            display: block;
            animation:anmtion3 1.8s cubic-bezier(0,0,1,1) 3.2s 1;
            -moz-animation:anmtion3 1.8s  cubic-bezier(0,0,1,1) 3.2s 1; /* Firefox */
            -webkit-animation:anmtion3 1.8s  cubic-bezier(0,0,1,1) 3.2s 1; /* Safari and Chrome */
            -o-animation:anmtion3 1.8s  cubic-bezier(0,0,1,1) 3.2s 1; /* Opera */
        
        }
        .startAnmtion4{
            display: block;
            animation:anmtion3 1.8s cubic-bezier(0,0,1,1) 5s 1;
            -moz-animation:anmtion3 1.8s  cubic-bezier(0,0,1,1) 5s 1; /* Firefox */
            -webkit-animation:anmtion3 1.8s  cubic-bezier(0,0,1,1) 5s 1; /* Safari and Chrome */
            -o-animation:anmtion3 1.8s  cubic-bezier(0,0,1,1) 5s 1; /* Opera */
        
        }
        .successAnmtion,.errorAnmtion{animation:successAnmtion .4s linear infinite alternate;}
        .anasingAnmtion{animation: anasingAnmtion 3s linear infinite;}
        .anasingBnmtion{animation: anasingBnmtion 3s linear infinite;}
        .creatingAnmtion{animation: creatingAnmtion 3s linear infinite;}

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
                0% {opacity: 0;top:-200px}
                20%{opacity: 1;}
                60% {opacity: 1;top:62px}
                80% {opacity: 1;top:62px}
                100% {opacity: 0;top:62px}
            }

            @-moz-keyframes anmtion1 /* Firefox */
            {
                0% {opacity: 0;top:-200px}
                20%{opacity: 1;}
                60% {opacity: 1;top:62px}
                80% {opacity: 1;top:62px}
                100% {opacity: 0;top:62px}
            }

            @-webkit-keyframes anmtion1 /* Safari and Chrome */
            {
                0% {opacity: 0;top:-200px}
                20%{opacity: 1;}
                60% {opacity: 1;top:62px}
                80% {opacity: 1;top:62px}
                100% {opacity: 0;top:62px}
            }

            @-o-keyframes anmtion1 /* Opera */
            {
                0% {opacity: 0;top:-200px}
                20%{opacity: 1;}
                60% {opacity: 1;top:62px}
                80% {opacity: 1;top:62px}
                100% {opacity: 0;top:62px}
            }
            /**动画2 */
            @keyframes anmtion2
            {
                0% {opacity: 0;top:-200px}
                20%{opacity: 1;}
                60% {opacity: 1;top:-50px}
                80% {opacity: 1;top:-50px}
                100% {opacity: 0;top:-50px}
            }

            @-moz-keyframes anmtion2 /* Firefox */
            {
                0% {opacity: 0;top:-200px}
                20%{opacity: 1;}
                60% {opacity: 1;top:-50px}
                80% {opacity: 1;top:-50px}
                100% {opacity: 0;top:-50px}
            }

            @-webkit-keyframes anmtion2 /* Safari and Chrome */
            {
                0% {opacity: 0;top:-200px}
                20%{opacity: 1;}
                60% {opacity: 1;top:-50px}
                80% {opacity: 1;top:-50px}
                100% {opacity: 0;top:-50px}
            }

            @-o-keyframes anmtion2 /* Opera */
            {
                0% {opacity: 0;top:-200px}
                20%{opacity: 1;}
                60% {opacity: 1;top:-50px}
                80% {opacity: 1;top:-50px}
                100% {opacity: 0;top:-50px}
            }

            /**动画3 */
            @keyframes anmtion3
            {
                0% {opacity: 0;top:-200px}
                20%{opacity: 1;}
                60% {opacity: 1;top:200px}
                80% {opacity: 1;top:200px}
                100% {opacity: 0;top:200px}
            }

            @-moz-keyframes anmtion3 /* Firefox */
            {
                0% {opacity: 0;top:-200px}
                20%{opacity: 1;}
                60% {opacity: 1;top:200px}
                80% {opacity: 1;top:200px}
                100% {opacity: 0;top:200px}
            }

            @-webkit-keyframes anmtion3 /* Safari and Chrome */
            {
                0% {opacity: 0;top:-200px}
                20%{opacity: 1;}
                60% {opacity: 1;top:200px}
                80% {opacity: 1;top:200px}
                100% {opacity: 0;top:200px}
            }

            @-o-keyframes anmtion3 /* Opera */
            {
                0% {opacity: 0;top:-200px}
                20%{opacity: 1;}
                60% {opacity: 1;top:200px}
                80% {opacity: 1;top:200px}
                100% {opacity: 0;top:200px}
            }

            /**启动成功动画 */
             @keyframes successAnmtion
            {
                0% {opacity: 0;}
                100% {opacity: 1;}
            }

            @-moz-keyframes anmtion2 /* Firefox */
            {
                0% {opacity: 0;}
                100% {opacity: 1;}
            }

            @-webkit-keyframes anmtion2 /* Safari and Chrome */
            {
                0% {opacity: 0;}
                100% {opacity: 1;}
            }

            @-o-keyframes anmtion2 /* Opera */
            {
                0% {opacity: 0;}
                100% {opacity: 1;}
            }

            /**建模 A 动画 */
             @keyframes anasingAnmtion
            {
                0% {opacity: 1;}
                50% {opacity: 0;}
                100% {opacity: 1;}
            }

            @-moz-keyframes anasingAnmtion /* Firefox */
            {
                0% {opacity: 1;}
                50% {opacity: 0;}
                100% {opacity: 1;}
            }

            @-webkit-keyframes anasingAnmtion /* Safari and Chrome */
            {
                0% {opacity: 1;}
                50% {opacity: 0;}
                100% {opacity: 1;}
            }

            @-o-keyframes anasingAnmtion /* Opera */
            {
                0% {opacity: 0;}
                50% {opacity: 1;}
                100% {opacity: 0;}
            }
            /**建模 B 动画 */
             @keyframes anasingBnmtion
            {
                0% {opacity: 0;}
                50% {opacity: 1;}
                100% {opacity: 0;}
            }
            @-moz-keyframes anasingBnmtion /* Firefox */
            {
                0% {opacity: 0;}
                50% {opacity: 1;}
                100% {opacity: 0;}
            }

            @-webkit-keyframes anasingBnmtion /* Safari and Chrome */
            {
                0% {opacity: 0;}
                50% {opacity: 1;}
                100% {opacity: 0;}
            }

            @-o-keyframes anasingBnmtion /* Opera */
            {
                0% {opacity: 0;}
                30% {opacity: 1;}
                40% {opacity: 0;}
                100% {opacity: 0;}
            }
            /**生成报告 */
            
            @keyframes creatingAnmtion
            {
                0% {opacity: 0;}
                50% {opacity: 1;}
                100% {opacity: 0;}
            }
            @-moz-keyframes creatingAnmtion /* Firefox */
            {
                0% {opacity: 0;}
                50% {opacity: 1;}
                100% {opacity: 0;}
            }

            @-webkit-keyframes creatingAnmtion /* Safari and Chrome */
            {
                0% {opacity: 0;}
                50% {opacity: 1;}
                100% {opacity: 0;}
            }

            @-o-keyframes creatingAnmtion /* Opera */
            {
                0% {opacity: 0;}
                30% {opacity: 1;}
                40% {opacity: 0;}
                100% {opacity: 0;}
            }
    }
</style>