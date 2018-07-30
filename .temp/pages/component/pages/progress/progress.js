import './progress.scss';

import { Component } from "@tarojs/taro-h5";
import Nerv from "nervjs";
import { View, Progress, Button } from '@tarojs/components';

import Header from '../../../../components/head/head';

export default class PageView extends Component {

  config = {
    navigationBarTitleText: 'Progress组件'
  };

  constructor() {
    super(...arguments);
    this._timmer = null;
  }

  state = {
    progress: 0
  };

  handleStart = () => {
    if (this._timmer || this.state.progress > 100) return;
    this._timmer = setInterval(() => {
      const value = this.state.progress + 2;
      if (value > 100) {
        return this.handleStop();
      }
      this.setState({
        progress: value
      });
    }, 100);
  };

  handleStop = () => {
    if (this._timmer) {
      clearInterval(this._timmer);
      this._timmer = null;
    }
  };

  handleReset = () => {
    this.handleStop();
    this.setState({
      progress: 0
    });
  };

  render() {
    const { progress } = this.state;
    return <View className="components-page">
        <View className="components-page__header">
          <Header title="Progress"></Header>
        </View>
        <View className="components-page__body">
          <View className="components-page__body-example example">
            <View className="example-progress">
              <Progress percent={20} showInfo strokeWidth={2}></Progress>
            </View>
            <View className="example-progress">
              <Progress percent={40} strokeWidth={2} active></Progress>
            </View>
            <View className="example-progress">
              <Progress percent={60} strokeWidth={2} active></Progress>
            </View>
            <View className="example-progress">
              <Progress percent={80} strokeWidth={2} active activeColor="blue"></Progress>
            </View>
          </View>
          <View className="components-page__body-example example">
            <View className="example-progress">
              <Progress active showInfo strokeWidth={2} percent={progress} activeColor="#3C7FE8"></Progress>
            </View>
            <View>
              <Button onClick={this.handleStart}>加载</Button>
              <Button onClick={this.handleStop}>暂停</Button>
              <Button onClick={this.handleReset}>重置</Button>
            </View>
          </View>
        </View>

      </View>;
  }
}