import Taro, { Component, Config } from '@tarojs/taro'

import { Header } from '../../component/Header'
import { Footer } from '../../component/Footer'
import { View } from '@tarojs/components'

import { ShowLists } from '../../component/ShowList'
import { ScrollView } from "@tarojs/components"

import './index.scss'
import 'taro-ui/dist/style/index.scss'
import "taro-ui/dist/style/components/button.scss";
import "taro-ui/dist/style/components/loading.scss";

export default class Index extends Component {

  /**

   */
  config: Config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  touchedTop() {
    Taro.showLoading({title: '更新中'})
    console.log("Touched Top!");
  }

  touchedBottom() {
    Taro.showLoading({title: '加载中'})
    console.log("Touched Bottom!");
  }

  render () {
    return (
      <ScrollView 
      className='scrollview'
      scrollY
      scrollWithAnimation
      scrollTop='0'
      lowerThreshold='10'
      upperThreshold='10'
      onScrolltoupper={this.touchedTop}
      onScrollToLower={this.touchedBottom}
      >
        <Header></Header>
        <div className="stayer"></div>
        <ShowLists></ShowLists>
        <div className="stayer"></div>
        <Footer current="0"></Footer>
      </ScrollView>
    )
  }

}
