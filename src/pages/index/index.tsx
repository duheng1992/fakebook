import Taro, { Component, Config } from '@tarojs/taro'

import { Header } from '../../component/Header'
import { Footer } from '../../component/Footer'
import { View } from '@tarojs/components'

import { ShowLists } from '../../component/ShowList'

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

  render () {
    return (
      <View>
      <Header></Header>
      
      <ShowLists></ShowLists>
      <Footer current="0"></Footer>

      </View>
    )
  }

}
