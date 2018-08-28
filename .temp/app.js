import { View, Tabbar, TabbarContainer, TabbarPanel } from '@tarojs/components';
import TaroRouter from '@tarojs/router';
import Taro from '@tarojs/taro-h5';
import { Component } from "@tarojs/taro-h5";
import Nerv from "nervjs";


import './app.less';

class App extends Component {

  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentCatchError() {}

  render() {
    const __tabs = {
      backgroundColor: '#f9f9f9',
      color: "#a9b7b7",
      selectedColor: "#11cd6e",
      borderStyle: "white",
      list: [{
        pagePath: 'pages/myIndex/myIndex',
        text: '首页',
        "iconPath": require("./asset/bar/sybar02@2x.png"),
        "selectedIconPath": require("./asset/bar/sybar01@2x.png")
      }, {
        pagePath: 'pages/jianyijisuanqi/jianyijisuanqi',
        text: '理财',
        "iconPath": require("./asset/bar/lcbar02@2x.png"),
        "selectedIconPath": require("./asset/bar/lcbar01@2x.png")
      }, {
        pagePath: 'pages/myIndex/myIndex',
        text: '生活',
        "iconPath": require("./asset/bar/shbar02@2x.png"),
        "selectedIconPath": require("./asset/bar/shbar01@2x.png")
      }, {
        pagePath: 'pages/myIndex/myIndex',
        text: '我的',
        "iconPath": require("./asset/bar/wdbar02@2x.png"),
        "selectedIconPath": require("./asset/bar/wdbar01@2x.png")
      }]
    };
    return <TabbarContainer>
                    <TabbarPanel>
                      <TaroRouter.Router />
                    </TabbarPanel>
                    <Tabbar conf={__tabs} homePage="pages/myIndex/myIndex" router={Taro} />
                  </TabbarContainer>;
  }

}

Taro.initNativeApi(Taro);
TaroRouter.initRouter([['/pages/myIndex/myIndex', () => import('./pages/myIndex/myIndex')], ['/pages/jianyijisuanqi/jianyijisuanqi', () => import('./pages/jianyijisuanqi/jianyijisuanqi')], ['/pages/jianyijisuanqilog/jianyijisuanqilog', () => import('./pages/jianyijisuanqilog/jianyijisuanqilog')]], Taro);
Nerv.render(<App />, document.getElementById('app'));