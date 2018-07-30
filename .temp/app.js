import { View, Tabbar, TabbarContainer, TabbarPanel } from '@tarojs/components';
import TaroRouter from '@tarojs/router';
import Taro from '@tarojs/taro-h5';
import { Component } from "@tarojs/taro-h5";
import Nerv from "nervjs";

import './app.scss';

class App extends Component {

  componentWillMount() {}

  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentCatchError() {}

  render() {
    const __tabs = {
      backgroundColor: '#fff',
      color: "#a9b7b7",
      selectedColor: "#11cd6e",
      borderStyle: "white",
      list: [{
        pagePath: 'pages/component/index',
        text: '组件',
        "iconPath": require("./asset/component/view.png"),
        "selectedIconPath": require("./asset/component/view-red.png")
      }, {
        pagePath: 'pages/about/about',
        text: '首页',
        "iconPath": require("./asset/bar/sybar02@2x.png"),
        "selectedIconPath": require("./asset/bar/sybar01@2x.png")
      }, {
        pagePath: 'pages/component/pages/view/view',
        text: '理财',
        "iconPath": require("./asset/bar/lcbar02@2x.png"),
        "selectedIconPath": require("./asset/bar/lcbar01@2x.png")
      }, {
        pagePath: 'pages/component/pages/redirectPage/redirectPage',
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
                    <Tabbar conf={__tabs} homePage="pages/component/index" router={Taro} />
                  </TabbarContainer>;
  }
}

Taro.initNativeApi(Taro);
TaroRouter.initRouter([['/pages/component/index', () => import('./pages/component/index')], ['/pages/component/pages/view/view', () => import('./pages/component/pages/view/view')], ['/pages/component/pages/scroll-view/scroll-view', () => import('./pages/component/pages/scroll-view/scroll-view')], ['/pages/component/pages/icon/icon', () => import('./pages/component/pages/icon/icon')], ['/pages/component/pages/progress/progress', () => import('./pages/component/pages/progress/progress')], ['/pages/component/pages/image/image', () => import('./pages/component/pages/image/image')], ['/pages/component/pages/audio/audio', () => import('./pages/component/pages/audio/audio')], ['/pages/component/pages/video/video', () => import('./pages/component/pages/video/video')], ['/pages/component/pages/swiper/swiper', () => import('./pages/component/pages/swiper/swiper')], ['/pages/component/pages/form/form', () => import('./pages/component/pages/form/form')], ['/pages/component/pages/input/input', () => import('./pages/component/pages/input/input')], ['/pages/component/pages/checkbox/checkbox', () => import('./pages/component/pages/checkbox/checkbox')], ['/pages/component/pages/radio/radio', () => import('./pages/component/pages/radio/radio')], ['/pages/component/pages/button/button', () => import('./pages/component/pages/button/button')], ['/pages/component/pages/text/text', () => import('./pages/component/pages/text/text')], ['/pages/component/pages/label/label', () => import('./pages/component/pages/label/label')], ['/pages/component/pages/picker/picker', () => import('./pages/component/pages/picker/picker')], ['/pages/component/pages/slider/slider', () => import('./pages/component/pages/slider/slider')], ['/pages/component/pages/switch/switch', () => import('./pages/component/pages/switch/switch')], ['/pages/component/pages/textarea/textarea', () => import('./pages/component/pages/textarea/textarea')], ['/pages/component/pages/canvas/canvas', () => import('./pages/component/pages/canvas/canvas')], ['/pages/component/pages/map/map', () => import('./pages/component/pages/map/map')], ['/pages/component/pages/navigator/navigator', () => import('./pages/component/pages/navigator/navigator')], ['/pages/component/pages/redirectPage/redirectPage', () => import('./pages/component/pages/redirectPage/redirectPage')], ['/pages/component/pages/navigatePage/navigatePage', () => import('./pages/component/pages/navigatePage/navigatePage')], ['/pages/about/about', () => import('./pages/about/about')], ['/pages/component/pages/camera/camera', () => import('./pages/component/pages/camera/camera')], ['/pages/myIndex/myIndex', () => import('./pages/myIndex/myIndex')]], Taro);
Nerv.render(<App />, document.getElementById('app'));