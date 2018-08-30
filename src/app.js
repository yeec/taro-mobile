import Taro, { Component } from '@tarojs/taro'
import Index from './pages/myIndex/myIndex'
import Jianyijisuanqi from './pages/jianyijisuanqi/jianyijisuanqi'
import Jianyijisuanqilog from './pages/jianyijisuanqilog/jianyijisuanqilog'
import ComponentTel from './pages/component/component'

import './app.less'

class App extends Component {
  config = {
    pages: [
      'pages/myIndex/myIndex',
      'pages/jianyijisuanqi/jianyijisuanqi',
      'pages/jianyijisuanqilog/jianyijisuanqilog',
      'pages/component/component',
      'pages/qrCode/qrCodeHome/qrCodeHome'
      
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#f9f9f9',
      navigationBarTitleText: 'TODO List',
      navigationBarTextStyle: 'black',
    },
    tabBar: {
      backgroundColor: '#f9f9f9',
      color: "#a9b7b7",
      selectedColor: "#11cd6e",
      borderStyle: "white",
      list: [
        {
          pagePath: 'pages/myIndex/myIndex',
          text: '首页',
          iconPath: 'asset/bar/sybar02@2x.png',
          selectedIconPath: 'asset/bar/sybar01@2x.png'
        },
        {
          pagePath: 'pages/jianyijisuanqi/jianyijisuanqi',
          text: '理财',
          iconPath: 'asset/bar/lcbar02@2x.png',
          selectedIconPath: 'asset/bar/lcbar01@2x.png'
        },
        {
          pagePath: 'pages/component/component',
          text: '生活',
          iconPath: 'asset/bar/shbar02@2x.png',
          selectedIconPath: 'asset/bar/shbar01@2x.png'
        },
        {
          pagePath: 'pages/qrCode/qrCodeHome/qrCodeHome',
          text: '我的',
          iconPath: 'asset/bar/wdbar02@2x.png',
          selectedIconPath: 'asset/bar/wdbar01@2x.png'
        }
      ]
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentCatchError () {}

  render () {
    return (
      <Index />,
      <Jianyijisuanqi/>,
      <Jianyijisuanqilog/>,
      <ComponentTel/>
    )
  }
  
}

Taro.render(<App />, document.getElementById('app'))
