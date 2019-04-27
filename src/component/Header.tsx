import Taro, { Component } from '@tarojs/taro'
import { AtSearchBar } from 'taro-ui'

import { View } from '@tarojs/components'

class Header extends Component {
  constructor () {
    super(...arguments)
	  this.state = {
	    value: ''
	  }
  }

  onChange (value) {
	  this.setState({
	    value: value
	  })
  }

  onActionClick () {
    console.log('开始搜索')
  }

  componentWillMount () { }

  componentDidMount () {
    //alert(this.props.name)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='search'>
      <AtSearchBar
        fixed
        showActionButton
        value={this.state.value}
        onChange={this.onChange.bind(this)}
        onActionClick={this.onActionClick.bind(this)}
      />
      </View>
    )
  }
}

export { Header }