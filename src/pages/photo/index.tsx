import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'

import { Footer } from '../../component/Footer'

import 'taro-ui/dist/style/index.scss'
import "taro-ui/dist/style/components/button.scss";
import "taro-ui/dist/style/components/loading.scss";

export default class Photo extends Component {

  /**
   * 
   */

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View>
        <Footer current="1"></Footer>
      </View>
    )
  }

}


export { Photo }