import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtCard } from "taro-ui"
import  UserCards from "./UserCard";

class ShowLists extends Component {

  constructor () {
    super(...arguments)
    this.state = {
      userInfo: [{"message": "hello"}],
        users:[{"id":1,"name":"Hairs","email":"dhairs0@jalbum.net","location":"Taohuajiang","message":"urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius"},
        {"id":2,"name":"Caton","email":"gcaton1@ycombinator.com","location":"Kakamas","message":"turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis"},
        {"id":3,"name":"D'Antoni","email":"jdantoni2@opensource.org","location":"Bulacnin","message":"suscipit nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit"},
        {"id":4,"name":"Domoni","email":"hdomoni3@about.me","location":"Zhishan","message":"id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia"},
        {"id":5,"name":"Gledhall","email":"bgledhall4@toplist.cz","location":"Chagang","message":"massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras"},
        {"id":6,"name":"Osban","email":"kosban5@google.com.br","location":"Sliema","message":"nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi"},
        {"id":7,"name":"Brookfield","email":"bbrookfield6@tuttocitta.it","location":"Paris 17","message":"proin at turpis a pede posuere nonummy integer non velit"},
        {"id":8,"name":"Oggers","email":"aoggers7@addtoany.com","location":"Lárdos","message":"aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor"},
        {"id":9,"name":"Dickinson","email":"udickinson8@csmonitor.com","location":"Cilegi","message":"quis tortor id nulla ultrices aliquet maecenas leo odio condimentum"},
        {"id":10,"name":"Hesbrook","email":"dhesbrook9@sphinn.com","location":"Werang","message":"fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id"},
        {"id":11,"name":"Hucke","email":"jhuckea@smh.com.au","location":"Tiout","message":"quam a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt"},
        {"id":12,"name":"Liggens","email":"cliggensb@gov.uk","location":"Ishurdi","message":"libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas"},
        {"id":13,"name":"Holdin","email":"fholdinc@gnu.org","location":"Zhlobin","message":"suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum"},
        {"id":14,"name":"Borgnet","email":"sborgnetd@ask.com","location":"Nangalisan","message":"quis augue luctus tincidunt nulla mollis molestie lorem quisque ut"},
        {"id":15,"name":"Whimp","email":"gwhimpe@xrea.com","location":"Fagatogo","message":"phasellus in felis donec semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla"},
        {"id":16,"name":"Mival","email":"pmivalf@deviantart.com","location":"Santa Teresita","message":"nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras"},
        {"id":17,"name":"Dolphin","email":"adolphing@nsw.gov.au","location":"Orzu","message":"volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie"},
        {"id":18,"name":"Westphalen","email":"awestphalenh@cnn.com","location":"Polańczyk","message":"mauris eget massa tempor convallis nulla neque libero convallis eget"},
        {"id":19,"name":"Tarbin","email":"btarbini@joomla.org","location":"Konice","message":"est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus"},
        {"id":20,"name":"Chaffen","email":"schaffenj@stumbleupon.com","location":"Zhitan","message":"sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo"}]
     
    }
    this.setState({
        "list": [],
        
      })
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

    // let list = [{"id":1,"name":"Hairs","email":"dhairs0@jalbum.net","location":"Taohuajiang","message":"urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius"},
    // {"id":2,"name":"Caton","email":"gcaton1@ycombinator.com","location":"Kakamas","message":"turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis"},
    // {"id":3,"name":"D'Antoni","email":"jdantoni2@opensource.org","location":"Bulacnin","message":"suscipit nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit"},
    // {"id":4,"name":"Domoni","email":"hdomoni3@about.me","location":"Zhishan","message":"id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia"},
    // {"id":5,"name":"Gledhall","email":"bgledhall4@toplist.cz","location":"Chagang","message":"massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras"},
    // {"id":6,"name":"Osban","email":"kosban5@google.com.br","location":"Sliema","message":"nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit mi"},
    // {"id":7,"name":"Brookfield","email":"bbrookfield6@tuttocitta.it","location":"Paris 17","message":"proin at turpis a pede posuere nonummy integer non velit"},
    // {"id":8,"name":"Oggers","email":"aoggers7@addtoany.com","location":"Lárdos","message":"aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor"},
    // {"id":9,"name":"Dickinson","email":"udickinson8@csmonitor.com","location":"Cilegi","message":"quis tortor id nulla ultrices aliquet maecenas leo odio condimentum"},
    // {"id":10,"name":"Hesbrook","email":"dhesbrook9@sphinn.com","location":"Werang","message":"fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id"},
    // {"id":11,"name":"Hucke","email":"jhuckea@smh.com.au","location":"Tiout","message":"quam a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt"},
    // {"id":12,"name":"Liggens","email":"cliggensb@gov.uk","location":"Ishurdi","message":"libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas"},
    // {"id":13,"name":"Holdin","email":"fholdinc@gnu.org","location":"Zhlobin","message":"suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum"},
    // {"id":14,"name":"Borgnet","email":"sborgnetd@ask.com","location":"Nangalisan","message":"quis augue luctus tincidunt nulla mollis molestie lorem quisque ut"},
    // {"id":15,"name":"Whimp","email":"gwhimpe@xrea.com","location":"Fagatogo","message":"phasellus in felis donec semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla"},
    // {"id":16,"name":"Mival","email":"pmivalf@deviantart.com","location":"Santa Teresita","message":"nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras"},
    // {"id":17,"name":"Dolphin","email":"adolphing@nsw.gov.au","location":"Orzu","message":"volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie"},
    // {"id":18,"name":"Westphalen","email":"awestphalenh@cnn.com","location":"Polańczyk","message":"mauris eget massa tempor convallis nulla neque libero convallis eget"},
    // {"id":19,"name":"Tarbin","email":"btarbini@joomla.org","location":"Konice","message":"est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus"},
    // {"id":20,"name":"Chaffen","email":"schaffenj@stumbleupon.com","location":"Zhitan","message":"sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo"}];

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
    //     tempList.push(<View className='at-col at-col-12 showLists' key={i}>{this.props.list[i].name}</View>);
    //   }

    //   return tempList;
    // }
    
    //return(<View>{myList(this.props.list.length)}</View>)
    return (
        <View>
          <UserCards courseInfo={this.state.users}/>
        </View>
    )
  }
}

export { ShowLists }