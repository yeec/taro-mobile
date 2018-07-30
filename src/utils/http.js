/*习惯用ajax了，则把(wx.request)封装一下， 调用方式
1、先引入：const http = require('../../js/http.js')
2、使用方式：http.post或者http.get
3、params参数格式如：{ start: 1, count: 4}
*/
/*官方文档https://mp.weixin.qq.com/debug/wxadoc/dev/api/network-request.html*/
import Taro from '@tarojs/taro'
module.exports = {
  get(apiUrl, yes, error) {
    Taro.request({
      url: apiUrl,
      header: { 'Content-Type': 'json' },
      method: "GET",
      success: yes,
      fail: error
    }).then(res => {
      
    }).catch(function(err) {
                    t
    })
  },
  post(apiUrl, params, yes, error) {
    Taro.request({
      url: apiUrl,
      data: params,
      header: { 'Content-Type': 'application/json; charset=utf-8' },
      method: "POST",
      success: yes,
      fail: error
    }).then(res => {
      
    }).catch(function(err) {
                    t
    })
  }
}