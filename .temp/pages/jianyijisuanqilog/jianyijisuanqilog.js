import Taro from '@tarojs/taro-h5';
import { Component } from "@tarojs/taro-h5";
import Nerv from "nervjs";
import { View, Text, Input, Button, Image } from '@tarojs/components';

import './jianyijisuanqilog.less';
// const http = require('../../utils/http.js')//引入http.js文件utils/js/http.js')//引入

export default class Jianyijisuanqilog extends Component {
  config = {
    navigationBarTitleText: '简易计算器☞'

  };
  constructor(props) {
    super(props);
    this.state = {
      logs: []
    };
  }
  componentDidMount() {
    var logs = Taro.getStorageSync('calclogs');
    alert(logs);
    this.setState({ logs: logs });
  }
  componentDidShow() {
    console.log('hello show');
  }

  componentDidHide() {
    console.log('hello hide');
  }

  componentWillUnmount() {
    console.log('hello unmount');
  }

  render() {
    return <View className="content">
                <View className="item">{this.state.logs[0]}</View>
            </View>;
  }
}