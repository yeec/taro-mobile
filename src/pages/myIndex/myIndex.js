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
import $TaroData from '../../utils/raroData/index.js'
export default class MyIndex extends Component {
  config = {
    navigationBarTitleText: '我的',
  }
  constructor(props) {
    super(props)
    this.state = {
      customerName: "",
      acNo: "",
      balance: "",

    }
  }
  componentDidMount() {
    let prdId = "上送字段";
    $TaroData("account/underbarrelAccountNo", {
      //默认固定上送报文 
      reqHead: {
        //场景编码
        sceneCode: "FA04",
        //步骤编码(根据相应步骤填写字段（1,2,3,4）)
        stepCode: "1",
        //交易类型 1：查询类交易 2：账务类交易 3：管理类交易 4: 授权类交易 原生需映射，HTML异步请求需赋值
        tradeType: "1",
        //交易标识 1-主，2-副
        flag: "1",
        //服务接口版本号 1.0.0
        serviceVersion: "1.0.0"
      },
      data: {
        prdId: prdId
      }
    }, true, false).then((res) => {
      console.log(res)
      this.setState({
        customerName: res.rspBody.customerName,
        acNo: res.rspBody.returnList[0].acNo,
        balance: res.rspBody.returnList[0].balance
      });
    })
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
  onClick() {
    console.log("1234444");
  }
  render() {

    return ( <
      View className = "account" >
      <
      View className = "account-logo" > < /View>  <
      View className = "account-info"
      onClick = {
        this.onClick
      } >
      <
      View className = "name" > < View className = "title" > {
        this.state.customerName
      } <
      /View>  <
      View className = "type" > 储蓄卡 < /View > < /View > <
      View className = "cardNu" > {
        this.state.acNo
      } < /View> <
      View className = "balance" > < View className = "title" > 可用余额 < /View><View className="num">{this.state.balance} <Text className="danwei">元</Text > < /View></View >
      <
      /View> <
      View className = "account-jiantou" > < View className = "jiantou" >> < /View></View >
      <
      /View>


    )
  }
}