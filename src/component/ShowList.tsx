import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

class ShowList extends Component {

  constructor () {
    super(...arguments)
    // this.setState({
    //     "list": []
    //   })
  }


  /**
   * 显示列表组件
   *
   */

  componentWillMount () { 
    if(!this.state.list){
      this.setState({
        "list": []
      })
    }
    
  }

  componentDidMount () {

    //1.通过ajax获取最新的消息列表

    let list = [
      { name:'aa', mas:"asdsfsdfsd" },
      { name:'aa', mas:"asdsfsdfsd" },
      { name:'aa', mas:"asdsfsdfsd" },
      { name:'aa', mas:"asdsfsdfsd" },
      { name:'aa', mas:"asdsfsdfsd" },
      { name:'aa', mas:"asdsfsdfsd" },
      { name:'aa', mas:"asdsfsdfsd" },
      { name:'aa', mas:"asdsfsdfsd" },
      { name:'aa', mas:"asdsfsdfsd" }
    ];

    this.setState({
      "list": list
    }, ()=>{
    console.log("didmount: ")
    console.log(this.state.list)
    });
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    console.log('render: ')
    console.log(this.state)
    return (
      <View className='at-row'>
        <TempList name={this.state.list}></TempList>
      </View>
    )
  }


}

class TempList extends Component {
  render(){
    console.log('children: ')
     console.log(this.props.name)
    // let myList = (length) => {
    //   let tempList = []; 
    //   for(let i = 0; i < length; i ++) {
    //     tempList.push(<View className='at-col at-col-12 showList' key={i}>{this.props.list[i].name}</View>);
    //   }

    //   return tempList;
    // }
    
    //return(<View>{myList(this.props.list.length)}</View>)
    return (<View>11</View>)
  }
}

export { ShowList }