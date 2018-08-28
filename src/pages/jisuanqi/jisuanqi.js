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
  
  import './jisuanqi.less'
  // const http = require('../../utils/http.js')//引入http.js文件utils/js/http.js')//引入
  
  export default class Jisuanqi extends Component {
    config = {
      navigationBarTitleText: '计算器',
  
    }
    constructor(props) {
      super(props)
      this.state = {
        value: null, // 上次计算后的结果，null表示没有上次计算的结果
        displayValue: '0', // 显示数值
        operator: null, // 上次计算符号，null表示没有未完成的计算
        waitingForOperand: false // 前一按键是否为计算符号
      }
    }
    componentDidMount() {

    }
    onLoad = options=> {
        this.calculatorOperations = {
          'key-divide': (prevValue, nextValue) => prevValue / nextValue,
          'key-multiply': (prevValue, nextValue) => prevValue * nextValue,
          'key-add': (prevValue, nextValue) => prevValue + nextValue,
          'key-subtract': (prevValue, nextValue) => prevValue - nextValue,
          'key-equals': (prevValue, nextValue) => nextValue
        }
      }
    /* AC操作，一下回到解放前 */
    clearAll() {
        this.setData({
          value: null,
          displayValue: '0',
          operator: null,
          waitingForOperand: false
        })
    }
    /* 仅清空当前显示的输入值 */
    clearDisplay() {
        this.setData({
          displayValue: '0'
        })
    }
    onTapFunction =event=> {
        const key = event.target.dataset.key;
    
        switch(key) {
          case 'key-clear':
            if (this.data.displayValue !== '0') {
              this.clearDisplay();
            } else {
              this.clearAll();
            }
    
            break;
    
          case 'key-sign':
            var newValue = parseFloat(this.data.displayValue) * -1
            
            this.setData({
              displayValue: String(newValue)
            })
    
            break;
    
          case 'key-percent':
            const fixedDigits = this.data.displayValue.replace(/^-?\d*\.?/, '')
            var newValue = parseFloat(this.data.displayValue) / 100
            
            this.setData({
              displayValue: String(newValue.toFixed(fixedDigits.length + 2))
            });
    
            break;
            
          default:
            break;
        }
    }
    onTapOperator = (event) => {
        const nextOperator = event.target.dataset.key;
        const inputValue = parseFloat(this.data.displayValue);
        
        if (this.data.value == null) {
          this.setData({
            value: inputValue
          });
        } else if (this.data.operator) {
          const currentValue = this.data.value || 0;
          const newValue = this.calculatorOperations[this.data.operator](currentValue, inputValue);
    
          this.setData({
            value: newValue,
            displayValue: String(newValue)
          });
        }
        
        this.setData({
          waitingForOperand: true,
          operator: nextOperator
        });
      }
      onTapDigit=event=> {
        console.log("2413");
        const key = event.target.dataset.key; // 根据data-key标记按键
    
        if(key == 'key-dot') {
          // 按下点号
          if (!(/\./).test(this.data.displayValue)) {
            this.setData({
              displayValue: this.data.displayValue + '.',
              waitingForOperand: false
            })
          }
        } else {
          // 按下数字键
          const digit = key[key.length-1];
    
          if (this.data.waitingForOperand) {
            this.setData({
              displayValue: String(digit),
              waitingForOperand: false
            })
          } else {
            this.setData({
              displayValue: this.data.displayValue === '0' ? String(digit) : this.data.displayValue + digit
            })
          }
        }
      }
    componentDidShow() {
      console.log('hello show')
    }
  
    componentDidHide() {
      console.log('hello hide')
    }
  
    componentWillUnmount() {
      console.log('hello unmount')
    }
  
    render() {
  
      return (
          <view>
            <template name="calculator-key">
                <button hover-start-time="{{5}}" hover-stay-time="{{20}}" hover-class="calculator-key-hover" data-key="{{className}}" class="calculator-key {{className}}">{this.state.display}</button>
            </template>

            <view class="calculator">
                <view class="calculator-display">
                    <view class="calculator-display-text">{this.state.displayValue}</view>
                </view>
                <view class="calculator-keypad">
                    <view class="input-keys">   
                    <view class="function-keys" onClick={this.onTapOperator.bind(this)}>
                        <template is="calculator-key" data="{{className: 'key-clear', display: clearDisplay ? 'C' : 'AC'}}"/>
                        <template is="calculator-key" data="{{className: 'key-sign', display: '±'}}"/>
                        <template is="calculator-key" data="{{className: 'key-percent', display: '%'}}"/>
                    </view>
                    <view class="digit-keys" catchtap="onTapDigit">
                        <template is="calculator-key" data="{{className: 'key-0', display: '0'}}"/>
                        <template is="calculator-key" data="{{className: 'key-dot', display: '●'}}"/>
                        <template is="calculator-key" data="{{className: 'key-1', display: '1'}}"/>
                        <template is="calculator-key" data="{{className: 'key-2', display: '2'}}"/>
                        <template is="calculator-key" data="{{className: 'key-3', display: '3'}}"/>
                        <template is="calculator-key" data="{{className: 'key-4', display: '4'}}"/>
                        <template is="calculator-key" data="{{className: 'key-5', display: '5'}}"/>
                        <template is="calculator-key" data="{{className: 'key-6', display: '6'}}"/>
                        <template is="calculator-key" data="{{className: 'key-7', display: '7'}}"/>
                        <template is="calculator-key" data="{{className: 'key-8', display: '8'}}"/>
                        <template is="calculator-key" data="{{className: 'key-9', display: '9'}}"/>
                    </view>
                    </view>
                    <view class="operator-keys" onClick={this.onTapOperator.bind(this)}>
                        <template is="calculator-key" data="{{className: 'key-divide', display: '÷'}}"/>
                        <template is="calculator-key" data="{{className: 'key-multiply', display: '×'}}"/>
                        <template is="calculator-key" data="{{className: 'key-subtract', display: '−'}}"/>
                        <template is="calculator-key" data="{{className: 'key-add', display: '+'}}"/>
                        <template is="calculator-key" data="{{className: 'key-equals', display: '='}}"/>
                    </view>
                </view>
            </view>
        </view>
      )
    }
  }