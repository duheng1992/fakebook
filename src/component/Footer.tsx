import Taro, { Component } from '@tarojs/taro'
import { AtTabBar } from 'taro-ui'
import { View } from '@tarojs/components'

class Footer extends Component {

  constructor () {
    super(...arguments)
  }

  handleClick(value){

    this.setState({
      current: value
    })

    switch (value) {
      case 0:
          Taro.redirectTo({
              url: `/pages/index/index`
          })
          break;
      case 1:
          Taro.navigateTo({
              url: `/pages/photo/index`
          })
          break;
      case 2:
          Taro.redirectTo({
              url: `/pages/mine/index`
          })
          break;    
      default:
          break;
    }    
  }

  /**
   * 底部导航组件
   *
   */

  componentWillMount () { }

  componentDidMount () {
    //alert(this.props.name)
    //console.log(this.props.current)
    let currentIndex = parseInt(this.props.current);
    if(currentIndex){
      this.setState({
        current: currentIndex
      })
    }else{
      this.setState({
        current: 0
      })
    }

  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='navigator'>
       <AtTabBar
          fixed
          iconSize='20'
          fontSize='7'
          tabList={[
            { title: '首页', pagePath: "/pages/home/index", iconType: 'bullet-list', text: 'new'},
            { title: '记录', pagePath: "/pages/photo/index", iconType: 'camera' },
            { title: '设置', pagePath: "/pages/mine/index", iconType: 'folder', text: '100', max: '99'}
          ]}
          onClick={this.handleClick.bind(this)}
          current={this.state.current}
        />
      </View>
    )
  }


}

export { Footer }