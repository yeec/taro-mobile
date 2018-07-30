import './navigator.scss'

import Taro from '@tarojs/taro'
import { View, Navigator, Text } from '@tarojs/components'

import Header from '../../../../components/head/head'

export default class PageSwitch extends Taro.Component {

  config = {
    navigationBarTitleText: 'Navigator组件'
  }

  constructor() {
    super(...arguments)
  }

  state = {}

  render() {
    return (
      <View className='components-page'>
        <View className='components-page__header'>
          <Header title='Navigator'></Header>
        </View>
        <View className='components-page__body'>
          <View className='components-page__body-example example'>
            <View className='example-body'>
              {
                Taro.getEnv() == Taro.ENV_TYPE.WEAPP ? <View className='example-body__navigators'>
                  <Navigator
                    url='/pages/component/pages/navigatePage/navigatePage'
                    className='example-body__navigators-item'>
                    <View className='example-body__navigator'>跳转到新页面</View>
                  </Navigator>
                  <Navigator
                    url='/pages/component/pages/redirectPage/redirectPage'
                    className='example-body__navigators-item'
                    open-type='redirect'>
                    <View >在当前页打开</View>
                  </Navigator>
                </View> : <Text>暂未支持，请使用Taro API</Text>
              }

            </View>
          </View>
        </View>
      </View>
    )
  }
}
