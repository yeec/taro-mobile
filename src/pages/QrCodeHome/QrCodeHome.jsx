// 引入Taro
import Taro, { Component } from "@tarojs/taro";
// 引入组件
import { View, Text, Input, Button, Image } from "@tarojs/components";
// 引入API
import API from "../../utils/constants/api";
// 引入NATIVE
import $native from "../../utils/native";
// 引入样式
import "./QrCodeHome.less";

export default class QrCodeHome extends Component {
  // 定义小程序标题
  config = {
    navigationBarTitleText: "扫码付"
  };
  // 定义初始化STATE
  constructor(props) {
    super(props);
    this.state = {
      text: "111"
    };
  }
  // 初始化生命周期
  componentDidMount() {
    if (process.env.H5) {
      $native.callClientForUI(API.NATIVE_CODE_UPDATE_TITLE, {
        title: "扫码付",
        leftButton: {
          exist: "true",
          closeFlag: "false",
          success: this.goBackPage
        }
      });
    }
  }
  // 调用native二维码
  shaoEwm = () => {
    if (process.env.H5) {
      $native.callClientForUI(API.NATIVE_CODE_SCAN_QRCODE, {
        success: this.successCallBack
      });
    } else {
      Taro.scanCode({
        success: this.successCallBack
      });
    }
  };
  //扫描结果回调函数
  successCallBack = res => {
    console.log(res);
    this.setState({
      text: res.result
    });
  };
  render() {
    return (
      <View>
        <View className="qrCode">
          <View className="qrCode-title" />
          <View className="qrCode-shao">
            <View className="qrCode-shao-box">
              <View className="txm">
                <View />
                <p>2898 ****查看数字</p>
              </View>
              <View className="ewm">
                <View />
              </View>
              <View className="card">唐山银行信用卡(6764)</View>
            </View>
          </View>
          <View className="qrCode-tips">
            如付款失败，将尝试其他付款方式
          </View>
          <View className="qrCode-button">
            <View>
              <i className="fkm" />
              <p>付款码</p>
            </View>
            <View onClick={this.shaoEwm.bind()}>
              <i className="smf" />
              <p>扫码付</p>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
