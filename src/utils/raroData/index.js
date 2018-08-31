// 引入必要资源
import Taro, {
  Component
} from '@tarojs/taro'
import API from "./../constants/api";
import $native from "./../native/";
/**--------------------------------------------------------------------=====
 * 声明全局TaroData 
 **/
const TaroData = window.Taro;
/**--------------------------------------------------------------------=====
 * 连接模式设置--开始  
 * 优先级为 1.mock  2.remote 3.连接客户端,mock与remote均为false时，为连接客户端模式
 * 1.mock 模拟模式 
 * 2.remote 直连模式
 * 3.客户端模式 （mock与remote均为false时，为连接客户端）
 **/

const mock = false; // 1.mock 模拟模式

const remote = true; // 2.remote 直连模式

const RemoteUrl = "http://111.198.98.66:36962/mbank/"; // 2.remote 直连模式（地址）


/**--------------------------------------------------------------------=====
 * 客户端桥接 
 **/
const status = function (response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  throw new fetchError(API.AJAX_NET_ERROR, response.statusText);
};

const json = function (response) {
  return response.json();
};

const jsonForClient = function (respone) {
  return JSON.parse(respone);
};
//
const successOrNotWithHandle = function (transId, success, failed) {
  return function (json) {
    const res = json;
    let returnCode = res.rspHead.returnCode;
    // 超时处理
    let returnMsg = res.rspHead.returnMsg;

    //如果是登录交易报此类错误跳转至登录页面
    if (
      returnCode === API.SESSION_TIMEOUT ||
      returnCode === API.NOT_LOGIN ||
      returnCode === API.MESSAGE_KEY_INVALID
    ) {
      let flag = API.WITHOUTLOGIN.indexOf(transId);
      //包含
      if (flag > -1) {} else {
        //不包含
        if (returnCode !== API.NOT_LOGIN) {
          returnMsg = "登录超时，请重新登录";
        }
        //退出
        $native.callClientForBank(API.NATIVE_CODE_LOGOUT, {});

        let alertDict = {
          title: "信息提示",
          msg: returnMsg,
          cancel_text: "取消",
          cancel: () => {
            $native.callClientForBank(API.NATIVE_CODE_TO_GOBACK, {});
          },
          success_text: "重新登录",
          success: () => {
            $native.callClientForBank(API.NATIVE_CODE_TO_LOGIN, {});
          }
        };
        Common.showAppDialogAlert(alertDict);
        return;
      }
    }

    if (!res.errmsg && !res.jsonError && !res._RejMessage) {
      if (success && typeof success === "function") {
        success(res);
      } else {
        return res;
      }
    } else {
      let error = res.errmsg ?
        res.errmsg :
        res.jsonError ?
        res.jsonError :
        res._RejMessage ?
        res._RejMessage :
        "error";
      error = Array.isArray(error) ? error : [error];
      const errMsg = error
        .map(err => (err._exceptionMessage ? err._exceptionMessage : err))
        .join(",");
      let errorType = API.AJAX_BUSINESS_ERROR;
      if (
        res.errtype === API.AJAX_ERROR_FORCE_OUT ||
        error[0]._exceptionMessageCode === API.AJAX_ERROR_LOG_TIMEOUT ||
        error[0]._exceptionMessageCode === API.AJAX_ERROR_FORCE_OUT
      ) {
        errorType = API.AJAX_LOGIN_TIMEOUT_ERROR;
      }
      if (
        res.errtype === API.AJAX_SYS_MAINTAIN ||
        error[0]._exceptionMessageCode === API.AJAX_SYS_MAINTAIN
      ) {
        errorType = API.AJAX_SYS_MAINTAIN;
      }
      if (
        res.errtype === API.AJAX_SMS_WRONG ||
        res.errtype === API.AJAX_SMS_NOT_GET ||
        res.errtype === API.AJAX_SMS_FORMAT_ERROR ||
        res.errtype === API.AJAX_SMS_ERROR ||
        res.errtype === API.AJAX_SMS_TIME_OUT ||
        error[0]._exceptionMessageCode === API.AJAX_SMS_WRONG ||
        error[0]._exceptionMessageCode === API.AJAX_SMS_NOT_GET ||
        error[0]._exceptionMessageCode === API.AJAX_SMS_ERROR ||
        error[0]._exceptionMessageCode === API.AJAX_SMS_TIME_OUT ||
        error[0]._exceptionMessageCode === API.AJAX_SMS_FORMAT_ERROR
      ) {
        errorType = res.errtype || error[0]._exceptionMessageCode;
      }
      if (failed && typeof failed === "function") {
        failed(fetchError(errorType, errMsg));
      } else {
        throw new fetchError(errorType, errMsg);
      }
    }
  };
};

/**--------------------------------------------------------------------=====
 * 连接模式设置--开始  
 * 优先级为 1.TaroRemote 2.连接客户端,mock与remote均为false时，为连接客户端模式
 * 1.TaroRemote Taro直连模式
 * 2.TaroData   客户端桥接模式 
 **/


/**--------------------------------------------------------------------=====
 * remote 直连模式 
 * 1.reqHead    (报文头)
 * 2.data       (报文体)
 * 3.success    (成功回调)
 * 4.failed     (失败回调)
 **/
const TaroRemote = function (transId, {
  // reqHead,
  data,
  success,
  failed
}) {
  console.log("☺☺☺☺☺☺☺☺☺☺☺☺ 小程序通信方式开始 ☺☺☺☺☺☺☺☺☺☺☺☺");
  const url = `${transId}`;
  console.log(url)
  const reqBody = data;
  const reqHead = { //默认固定上送报文
    //！！！！！！！！！本地远程连接前置使用！！！！！！！！！
    //场景编码
    sceneCode: "0001",
    //步骤编码(根据相应步骤填写字段（1,2,3,4）)
    stepCode: "1",
    //交易类型 1：查询类交易 2：账务类交易 3：管理类交易 4: 授权类交易 原生需映射，HTML异步请求需赋值
    tradeType: "1",
    //交易标识 1-主，2-副
    flag: "1",
    serviceVersion: "1.0.0",
    cstNo: "1003947710",
    cstId: " c7e0dd85-036c-4c46-aa33-1b79dfae77cd",
    userName: "陈平萍",
    certType: "10100",
    certNo: "510704199102183528",
    mobile: "13795659175",
  }
  const body = {
    reqHead,
    reqBody
  };
  console.log(body);
  return Taro.request({
    url: RemoteUrl + url,
    data: JSON.stringify(body),
    header: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    method: "POST"
  }).then(res => {
    return res.data
  }).catch(function (err) {
    console.log("返回结果错误" + JSON.stringify(err));
  })
  
};

/**--------------------------------------------------------------------=====
 * 桥接客户端模式 
 * 1.reqHead    (报文头)
 * 2.data       (报文体)
 * 3.success    (成功回调)
 * 4.failed     (失败回调)
 **/
const prodFetch = function (
  transId, {
    reqHead,
    data,
    success,
    failed,
    loadingFlag,
    encrypted
  }
) {

  const body = {
    reqHead,
    data
  };
  console.log(transId);
  //排除不需要加密交易
  // let flag = transId;

  // if (flag > -1) {
  //   encrypted = true;
  // }
  const _promise = new Promise(function (resolve, reject) {
    $native.callClientForComm("request", {
      url: `${transId}`,
      transId,
      body,
      success: function (res) {
        resolve(res);
      },
      failed: function (res) {
        reject(res);
      },
      encrypted:true,
      loadingFlag
    });
  });
  return _promise
    .then(jsonForClient)
    .then(successOrNotWithHandle(transId, success, failed));
};
/**--------------------------------------------------------------------=====
 * 导出方法 
 **/
const $TaroData = function (
  transId, {
    reqHead = {},
    data = {},
    success,
    failed
  } = {},
  loadingFlag = true,
  encrypted = true
) {
  const params = {
    reqHead,
    data,
    success,
    failed,
    loadingFlag,
    encrypted
  };
  return mock ? TaroMock(transId, params) : remote ? TaroRemote(transId, params) : prodFetch(transId, params);
};

export default $TaroData;