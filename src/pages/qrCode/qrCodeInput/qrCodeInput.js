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
  
  import './qrCode.less'
  
  export default class QrCodeHome extends Component {
    config = {
      navigationBarTitleText: '扫码付',
  
    }
    constructor(props, context) {
        super(props, context);
        this.state = {
          List2: [], //下挂账户列表使用
          ListOut: [], //模态框下挂列表选择返回
          currentAccount2: [], //转出列表下挂账户信息
          name: "天天来重庆老火锅",
          money: "98.88",
          card: "唐山银行信用卡(6768)"
        };
        // 性能优化 （当数据重复时不做DOM渲染）
        // this.shouldComponentUpdate = Taro.shouldComponentUpdate(
        //   this
        // );
      }
    componentDidMount() {
        let that = this;
        // 设置native topbar 标题及返回
        // $native.callClientForUI(API.NATIVE_CODE_UPDATE_TITLE, {
        // title: "二维码收付款",
        // leftButton: {
        //     exist: "true",
        //     closeFlag: "false",
        //     success: this.goBackPage
        //     }
        // });
        var reqHead = {
            //场景编码
            sceneCode: "TF02",
            //步骤编码(根据相应步骤填写字段（1,2,3,4）)
            stepCode: "1",
            //交易类型 1：查询类交易 2：账务类交易 3：管理类交易 4: 授权类交易 原生需映射，HTML异步请求需赋值
            tradeType: "1",
            //交易标识 1-主，2-副
            flag: "2",
            //服务接口版本号 1.0.0
            serviceVersion: "1.0.0"
        };
        var reqBody = {

          };
        var reqParams = {};
        reqParams.reqHead = reqHead;
        reqParams.reqBody = reqBody;

    var paramsTemp = JSON.stringify(reqParams);
        Taro.request({
            url: "http://111.198.98.66:36962/mbank/account/underbarrelAccountNo",
            data: paramsTemp,
            header: {
              'Content-Type': 'application/json; charset=utf-8'
            },
            method: "POST"
          }).then(res => {
            // Taro.hideLoading()
            this.setState({
                List2: res.rspBody.returnList,
                customerName: res.rspBody.customerName
            });
            if (that.state.currentAccount2.length == 0) {
                res.rspBody.returnList.map(function(item, i) {
                    item.now = "0";
                    if (i === 0) {
                    item.now = "1";
                    that.setState({
                        currentAccount2: item
                        });
                    }
                });
            }
            console.log("返回结果=" + JSON.stringify(res.data.rspBody.returnList[0].balance));
          }).catch(function (err) {
            // Taro.hideLoading()
            console.log("返回结果=" + JSON.stringify(err));
          });
    }
  
    //taro 扫二维码
    shaoTaroEr = () =>{
        Taro.scanCode({
            success: (res) => {
                console.log(res.result);
                Taro.navigateTo({
                    url: '/pages/jianyijisuanqilog/jianyijisuanqilog'
                  })
            }
          })
    }

    
      // 扫二维码
    shaoEwm = () => {
        // $native.callClientForUI(API.NATIVE_CODE_SCAN_QRCODE, {//scanQRCode
        // success: this.successCallBack
        // });
        
        // Common.setUrl("qrcode-input.html");
      };
      //扫描结果回调函数
      successCallBack = res => {
        let resSuccess =JSON.parse(res).success;
        // alert(resSuccess.name);
        this.setState({
          name: resSuccess.name,
          money: resSuccess.money
        });
        let info = {
          name: this.state.name,
          money: this.state.money,
          // card: this.state.card
        };
       // Common.addSessionData(API.SESSION_INVEST_SMF_MESSAGE, JSON.stringify(info));
       // Common.setUrl("qrcode-input/index.html");
      };
      //下挂账户列表显示modal框
      showAccountListBox2() {
        let that = this;
        this.setState({
          pickerVisible: true
        });
        let allaccount = that.state.List2.map(function(item, i) {
          item.cusName = that.state.customerName;
          return JSON.stringify(item);
        });
        // Modal.transferPaymentAccount(
        //   {
        //     items: allaccount,
        //     titleText: "选择账户",
        //     close: Common.closeModal
        //   },
        //   function(key) {
        //     let accountListNew2 = that.state.List2.map(function(item, i) {
        //       item.now = "0";
        //       if (i === key) {
        //         item.now = "1";
        //         that.setState({
        //           currentAccount2: item
        //         });
        //       }
        //       return item;
        //     });
    
        //     that.setState({
        //       ListOut: accountListNew2
        //     });
        //     Common.closeModal();
        //   }
        // );
    }
  
    render() {
        let CurrentAccount2 = this.state.currentAccount2;
        return (
        <View>
            <View className="mbank-QrCode">
            <View className="mbank-QrCode-title"  />
            <View className="mbank-QrCode-shao">
                <View className="mbank-QrCode-shao-box">
                <View className="txm">
                    <View />
                    <p>2898 ****888查看数字</p>
                </View>
                <View className="ewm">
                    <View />
                </View>
                {/* <MbankTransferOutItem
                    cardnum={CurrentAccount2.acNo}
                    name={this.state.customerName}
                    money={CurrentAccount2.availBal}
                    showdetail={this.showAccountListBox2.bind(this)}
                /> */}
                </View>
            </View>
            <View className="mbank-QrCode-tips">
                如付款失败，将尝试其他付款方式
            </View>
            {/* <WhiteSpace size="lg" />
            <WhiteSpace size="lg" /> */}
            <View className="mbank-QrCode-button">
                <View>
                <i className="fkm" />
                <p>付款码</p>
                </View>
                <View onClick={this.shaoTaroEr}>
                <i className="smf" />
                <p>扫码付</p>
                </View>
            </View>
            </View>
        </View>
        )
    }
  }