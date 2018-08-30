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
  
  import './jianyijisuanqilog.less'
  // const http = require('../../utils/http.js')//引入http.js文件utils/js/http.js')//引入
  
  export default class Jianyijisuanqilog extends Component {
    config = {
      navigationBarTitleText: '简易计算器☞',
  
    }
    constructor(props) {
      super(props)
      this.state = {
        logs:[]
      }
    }
    componentDidMount() {
      var logs =Taro.getStorageSync('calclogs');
      this.setState({logs:logs});
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
        return(
            <View className="content">
                <View className="item">{this.state.logs[0]}</View>
            </View>
        )
    }
  }