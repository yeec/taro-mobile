import Taro, { Component } from '@tarojs/taro'
import Index from './pages/myIndex/myIndex'

import './app.less'

class App extends Component {
  config = {
    pages: [
      'pages/myIndex/myIndex'
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
          pagePath: 'pages/myIndex/myIndex',
          text: '理财',
          iconPath: 'asset/bar/lcbar02@2x.png',
          selectedIconPath: 'asset/bar/lcbar01@2x.png'
        },
        {
          pagePath: 'pages/myIndex/myIndex',
          text: '生活',
          iconPath: 'asset/bar/shbar02@2x.png',
          selectedIconPath: 'asset/bar/shbar01@2x.png'
        },
        {
          pagePath: 'pages/myIndex/myIndex',
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
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
