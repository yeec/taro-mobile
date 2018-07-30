import Taro, { Component } from '@tarojs/taro'
import Index from './pages/component/index'
import './app.scss'

class App extends Component {
  config = {
    pages: [
      'pages/component/index',
      'pages/component/pages/view/view',
      'pages/component/pages/scroll-view/scroll-view',
      'pages/component/pages/icon/icon',
      'pages/component/pages/progress/progress',
      'pages/component/pages/image/image',
      'pages/component/pages/audio/audio',
      'pages/component/pages/video/video',
      'pages/component/pages/swiper/swiper',
      'pages/component/pages/form/form',
      'pages/component/pages/input/input',
      'pages/component/pages/checkbox/checkbox',
      'pages/component/pages/radio/radio',
      'pages/component/pages/button/button',
      'pages/component/pages/text/text',
      'pages/component/pages/label/label',
      'pages/component/pages/picker/picker',
      'pages/component/pages/slider/slider',
      'pages/component/pages/switch/switch',
      'pages/component/pages/textarea/textarea',
      'pages/component/pages/canvas/canvas',
      'pages/component/pages/map/map',
      'pages/component/pages/navigator/navigator',
      'pages/component/pages/redirectPage/redirectPage',
      'pages/component/pages/navigatePage/navigatePage',
      'pages/about/about',
      'pages/component/pages/camera/camera',
      'pages/myIndex/myIndex'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'TODO List',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      backgroundColor: '#fff',
      color: "#a9b7b7",
      selectedColor: "#11cd6e",
      borderStyle: "white",
      list: [
        {
          pagePath: 'pages/component/index',
          text: '组件',
          iconPath: 'asset/component/view.png',
          selectedIconPath: 'asset/component/view-red.png'
        },
        {
          pagePath: 'pages/about/about',
          text: '首页',
          iconPath: 'asset/bar/sybar02@2x.png',
          selectedIconPath: 'asset/bar/sybar01@2x.png'
        },
        {
          pagePath: 'pages/component/pages/view/view',
          text: '理财',
          iconPath: 'asset/bar/lcbar02@2x.png',
          selectedIconPath: 'asset/bar/lcbar01@2x.png'
        },
        {
          pagePath: 'pages/component/pages/redirectPage/redirectPage',
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

  componentWillMount () {

  }


  componentDidMount () {

  }

  componentDidShow () {
  }

  componentDidHide () {}

  componentCatchError () {}

  render () {
    return <Index />
  }
}

Taro.render(<App />, document.getElementById('app'))
