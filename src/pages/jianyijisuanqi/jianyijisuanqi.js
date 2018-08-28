import Taro, {
    Component
  } from '@tarojs/taro'
  import {
    View,
    Text,
    Input,
    Button,
    Image
  } from '@tarojs/components'
  
  import './jianyijisuanqi.less'
  // const http = require('../../utils/http.js')//引入http.js文件utils/js/http.js')//引入
  
  export default class Jianyijisuanqi extends Component {
    config = {
      navigationBarTitleText: '简易计算器☞',
  
    }
    constructor(props) {
      super(props)
      this.state = {
        motto: '',
        defaultSize: 'default',
        disabled: false,
        iconType:'info_circle',
        idb:"back",
        idc:"clear",
        idt:"toggle",
        idadd:"＋",
        id9:"9",
        id8:"8",
        id7:"7",
        idj:"－",
        id6:"6",
        id5:"5",
        id4:"4",
        idx:"×",
        id3:"3",
        id2:"2",
        id1:"1",
        iddiv:"÷",
        id0:"0",
        idd:".",
        ide:"＝",
        screenData:"0",
        operaSymbo:{"＋":"+","－":"-","×":"*","÷":"/",".":"."},
        lastIsOperaSymbo:false,
        iconType:'waiting_circle',
        iconColor:'white',
        arr:[],
        logs:[]
      }
    }
    componentDidMount() {
        
    }
    onClickBtn= (event) => {
        console.log(event);
        var id = event.target.id;
        if(id == this.state.idb){  //退格←
          var data = this.state.screenData;
          if(data == "0"){
              return;
          }
          data = data.substring(0,data.length-1);
          if(data == "" || data == "－"){
              data = 0;
          }
          this.setState({screenData:data});
          this.state.arr.pop();
        }else if(id == this.state.idc){  //清屏C
          this.setState({screenData:"0"});
          this.state.arr.length = 0;
        }else if(id == this.state.idt){  //正负号+/-
          var data = this.state.screenData;
          if(data == "0"){
              return;
          }
          var firstWord = data.charAt(0);
          if(data == "－"){
            data = data.substr(1);
            this.state.arr.shift();
          }else{
            data = "－" + data;
            this.state.arr.unshift("－");
          }
          this.setState({screenData:data});
        }else if(id == this.state.ide){  //等于＝
          var data = this.state.screenData;
          if(data == "0"){
              return;
          }
          //eval是js中window的一个方法，而微信页面的脚本逻辑在是在JsCore中运行，JsCore是一个没有窗口对象的环境，所以不能再脚本中使用window，也无法在脚本中操作组件                 
          //var result = eval(newData);           
          
          var lastWord = data.charAt(data.length);
          if(isNaN(lastWord)){
            return;
          }
    
          var num = "";
    
          var lastOperator = "";
          var arr = this.state.arr;
          var optarr = [];
          for(var i in arr){
            if(isNaN(arr[i]) == false || arr[i] == this.state.idd || arr[i] == this.state.idt){
              num += arr[i];
            }else{
              lastOperator = arr[i];
              optarr.push(num);
              optarr.push(arr[i]);
              num = "";
            }
          }
          optarr.push(Number(num));
          var result = Number(optarr[0])*1.0;
          console.log(result);
          for(var i=1; i<optarr.length; i++){
            if(isNaN(optarr[i])){
                if(optarr[1] == this.state.idadd){
                    result += Number(optarr[i + 1]);
                }else if(optarr[1] == this.state.idj){
                    result -= Number(optarr[i + 1]);
                }else if(optarr[1] == this.state.idx){
                    result *= Number(optarr[i + 1]);
                }else if(optarr[1] == this.state.iddiv){
                    result /= Number(optarr[i + 1]);
                }
            }
          }
          //存储历史记录
          this.state.logs.push(data + result);
          Taro.setStorageSync("calclogs",this.state.logs);
    
          this.state.arr.length = 0;
          this.state.arr.push(result);
    
          this.setState({screenData:result+""});
        }else{
          if(this.state.operaSymbo[id]){ //如果是符号+-*/
            if(this.state.lastIsOperaSymbo || this.state.screenData == "0"){
              return;
            }
          }
    
          var sd = this.state.screenData;
          var data;
          if(sd == 0){
            data = id;
          }else{
            data = sd + id;
          }
          this.setState({screenData:data});
          this.state.arr.push(id);
    
          if(this.state.operaSymbo[id]){
            this.setState({lastIsOperaSymbo:true});
          }else{
            this.setState({lastIsOperaSymbo:false});
          }
        }
      }
    componentDidShow() {
      console.log('hello show')
    }
  
    componentDidHide() {
      console.log('hello hide')
    }
  
    componentWillUnmount() {
      console.log('hello unmount')
    }
    onToLogs(){
        Taro.navigateTo({
            url: '/pages/jianyijisuanqilog/jianyijisuanqilog'
          })
    }
    render() {
  
      return (
        <View className="container">
            <View className="usermotto">
                <View className="content">
                    <View className="layout-top">
                        <View className="screen">
                            {this.state.screenData}
                        </View>
                    </View>
                    <View className="layout-bottom">
                        <View className="btnGroup">
                            <View className="item orange" onClick={this.onClickBtn} id={this.state.idc}>С</View>
                            <View className="item orange" onClick={this.onClickBtn} id={this.state.idb}>←</View>
                            <View className="item orange iconBtn" onClick={this.onToLogs}>
                                <icon type={this.state.iconType} color={this.state.iconColor} className="icon" size="25"/>
                            </View>
                            <View className="item orange" onClick={this.onClickBtn} id={this.state.idadd}>＋</View>
                        </View>
                        <View className="btnGroup">
                            <View className="item blue" onClick={this.onClickBtn} id={this.state.id9}>9</View>
                            <View className="item blue" onClick={this.onClickBtn} id={this.state.id8}>8</View>
                            <View className="item blue" onClick={this.onClickBtn} id={this.state.id7}>7</View>
                            <View className="item orange" onClick={this.onClickBtn} id={this.state.idj}>－</View>
                        </View>
                        <View className="btnGroup">
                            <View className="item blue" onClick={this.onClickBtn} id={this.state.id6}>6</View>
                            <View className="item blue" onClick={this.onClickBtn} id={this.state.id5}>5</View>
                            <View className="item blue" onClick={this.onClickBtn} id={this.state.id4}>4</View>
                            <View className="item orange" onClick={this.onClickBtn} id={this.state.idx}>×</View>
                        </View>
                        <View className="btnGroup">
                            <View className="item blue" onClick={this.onClickBtn} id={this.state.id3}>3</View>
                            <View className="item blue" onClick={this.onClickBtn} id={this.state.id2}>2</View>
                            <View className="item blue" onClick={this.onClickBtn} id={this.state.id1}>1</View>
                            <View className="item orange" onClick={this.onClickBtn} id={this.state.iddiv}>÷</View>
                        </View>
                        <View className="btnGroup">
                            <View className="item blue zero" onClick={this.onClickBtn} id={this.state.id0}>0</View>
                            <View className="item blue" onClick={this.onClickBtn} id={this.state.idd}>.</View>
                            <View className="item orange" onClick={this.onClickBtn} id={this.state.ide}>＝</View>
                        </View>
                    </View>
                </View>
            </View>
      </View>
      )
    }
  }