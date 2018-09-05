import Taro, { Component } from '@tarojs/taro'
import QrCodeHome from './pages/QrCodeHome/QrCodeHome'
// import QrCodeInput from './pages/QrCodeInput/QrCodeInput'
// import QrCodeConfirm from './pages/QrCodeConfirm/QrCodeConfirm'

import './app.less'

class App extends Component {
  config = {
    pages: [
      'pages/QrCodeHome/QrCodeHome.jsx',
      // 'pages/QrCodeInput/QrCodeInput',
      // 'pages/QrCodeConfirm/QrCodeConfirm'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#f9f9f9',
      navigationBarTitleText: 'TODO List',
      navigationBarTextStyle: 'black',
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentCatchError () {}

  render () {
    return (
      <QrCodeHome />
    )
  }
  
}

Taro.render(<App />, document.getElementById('app'))
