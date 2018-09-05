import TaroRouter from '@tarojs/router';
import Taro from '@tarojs/taro-h5';
import { Component } from "@tarojs/taro-h5";
import Nerv from "nervjs";

// import QrCodeInput from './pages/QrCodeInput/QrCodeInput'
// import QrCodeConfirm from './pages/QrCodeConfirm/QrCodeConfirm'

import './app.less';

class App extends Component {

  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentCatchError() {}

  render() {
    return <TaroRouter.Router />;
  }

}

Taro.initNativeApi(Taro);
TaroRouter.initRouter([['/pages/QrCodeHome/QrCodeHome.jsx', () => import('./pages/QrCodeHome/QrCodeHome.jsx')]], Taro);
Nerv.render(<App />, document.getElementById('app'));