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

import './myIndex.less'
// const http = require('../../utils/http.js')//引入http.js文件utils/js/http.js')//引入

export default class MyIndex extends Component {
  config = {
    navigationBarTitleText: '我的',

  }
  constructor(props) {
    super(props)
    this.state = {
      customerName:"",
      acNo:"",
      balance:"",

    }
  }
  componentDidMount() {
    console.log('hello mount')
    var reqHead = {
      //默认固定上送报文
      //！！！！！！！！！本地远程连接前置使用！！！！！！！！！
      //场景编码
      sceneCode: "0001",
      //步骤编码(根据相应步骤填写字段（1,2,3,4）)
      stepCode: "1",
      //交易类型 1：查询类交易 2：账务类交易 3：管理类交易 4: 授权类交易 原生需映射，HTML异步请求需赋值
      tradeType: "1",
      //交易标识 1-主，2-副
      flag: "1",
      serviceVersion: "1.0.0",
      cstNo: "1003947710",
      cstId: " c7e0dd85-036c-4c46-aa33-1b79dfae77cd",
      userName: "陈平萍",
      certType: "10100",
      certNo: "510704199102183528",
      mobile: "13795659175",
    };
    var reqBody = {
      // reuestFlag: "0",
      // //境内外标志 0-境内 1-境外 2-全部
      // foreignFlag: "2",
      // //卡号
      // accountNo: "510704199102183528"

    };
    var reqParams = {};
    reqParams.reqHead = reqHead;
    reqParams.reqBody = reqBody;

    var paramsTemp = JSON.stringify(reqParams);
    // Taro.showLoading({
    //   title: '加载中'
    // });
    Taro.request({
      url: "http://111.198.98.66:36962/mbank/account/underbarrelAccountNo",
      data: paramsTemp,
      header: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      method: "POST"
    }).then(res => {
      // Taro.hideLoading()
      this.setState({
        customerName:res.data.rspBody.customerName,
        acNo:res.data.rspBody.returnList[0].acNo,
        balance:res.data.rspBody.returnList[0].balance
      });
      console.log("返回结果=" + JSON.stringify(res.data.rspBody.returnList[0].balance));
    }).catch(function (err) {
      // Taro.hideLoading()
      console.log("返回结果=" + JSON.stringify(err));
    })
    // http.post(
    //   "http://111.198.98.66:36962/mbank/account/underbarrelAccountNo",
    //   paramsTemp, 
    //   function (res){
    //     debugger;
    //     console.log("返回结果=" + JSON.stringify(res.data));
    //   }, 
    //   function (e) {
    //     console.log("返回error结果=" + JSON.stringify(e));
    //   });
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

  render() {

    return (
      <View className="account">
          <View className="account-logo"></View>
          <View className="account-info">
            <View className="name"><View className="title">{this.state.customerName}</View> <View className="type">储蓄卡</View></View>
            <View className="cardNu">{this.state.acNo} </View>
            <View className="balance"><View className="title">可用余额</View><View className="num">{this.state.balance} <Text className="danwei">元</Text></View></View>
          </View>
          <View className="account-jiantou"><View className="jiantou">></View></View>
      </View>
    
      
    )
  }
}