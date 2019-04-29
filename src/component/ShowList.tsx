import Taro, { Component } from '@tarojs/taro'
import { ScrollView } from "@tarojs/components";
import { View, Text } from '@tarojs/components'
import { AtCard } from "taro-ui"

class ShowLists extends Component {

  constructor (props) {
    super(props)
    this.state = {
      userInfo: [{"message": "hello"}],
      users:[{}],
      list:[],
    }
  }

  componentWillMount () { 
    if(!this.state.list){
      this.setState({
        "list": []
      })
    }
  }




  componentDidMount () {
    this.setState({
      users:
      [
        {"id":1,"name":"Selinda Bront","email":"sbront0@ning.com","location":"Birmingham","message":"maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum"},
        {"id":2,"name":"Jay Sirl","email":"jsirl1@lulu.com","location":"Byumba","message":"dapibus dolor vel est donec odio justo sollicitudin ut suscipit"},
        {"id":3,"name":"Dalis Townson","email":"dtownson2@edublogs.org","location":"Purwosari","message":"natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum"},
        {"id":4,"name":"Brandise Beeke","email":"bbeeke3@chron.com","location":"Pushkino","message":"consequat nulla nisl nunc nisl duis bibendum felis sed interdum"},
        {"id":5,"name":"Barbabas Paramore","email":"bparamore4@cafepress.com","location":"Shouyan","message":"porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in"},
        {"id":6,"name":"Roxanna Chaffyn","email":"rchaffyn5@google.com","location":"Novokuz’minki","message":"aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo"},
        {"id":7,"name":"Colan Ferreo","email":"cferreo6@nba.com","location":"Xinba","message":"suscipit nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in"},
        {"id":8,"name":"Illa Emanueli","email":"iemanueli7@bluehost.com","location":"Marne-la-Vallée","message":"enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum"},
        {"id":9,"name":"Frederica Durand","email":"fdurand8@nature.com","location":"Wisznice","message":"odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio consequat varius integer ac"},
        {"id":10,"name":"Belvia McKennan","email":"bmckennan9@slate.com","location":"As Samawah","message":"duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus"},
        {"id":11,"name":"Ezmeralda Lowmass","email":"elowmassa@utexas.edu","location":"Ketara","message":"pede ullamcorper augue a suscipit nulla elit ac nulla sed vel enim sit amet nunc"},
        {"id":12,"name":"Jaquenette Pettinger","email":"jpettingerb@icio.us","location":"Wailang","message":"non pretium quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut"},
        {"id":13,"name":"Woodie Gohn","email":"wgohnc@microsoft.com","location":"Łubniany","message":"nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo"},
        {"id":14,"name":"Zaria Oldershaw","email":"zoldershawd@e-recht24.de","location":"Vyshneve","message":"pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue"},
        {"id":15,"name":"Clarance Bartozzi","email":"cbartozzie@livejournal.com","location":"Changqiao","message":"eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing"},
        {"id":16,"name":"Gwenni Escreet","email":"gescreetf@example.com","location":"Myanaung","message":"ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices"},
        {"id":17,"name":"Myrwyn Lidstone","email":"mlidstoneg@hostgator.com","location":"Tubarão","message":"ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel"},
        {"id":18,"name":"Dalis Crickmer","email":"dcrickmerh@so-net.ne.jp","location":"Armação de Pêra","message":"purus phasellus in felis donec semper sapien a libero nam dui proin leo odio porttitor id"},
        {"id":19,"name":"Joete Hayto","email":"jhaytoi@ning.com","location":"Raškovice","message":"in eleifend quam a odio in hac habitasse platea dictumst maecenas ut"},
        {"id":20,"name":"Upton Selliman","email":"usellimanj@fastcompany.com","location":"Liulin","message":"dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat"}]
    })
  }

  render () {
    const scrollStyle = {
      height: '150px'
    }
    const scrollTop = 0
    const Threshold = 20

    return (
          // <ScrollView 
          //     className='scrollview'
          //     scrollY
          //     scrollWithAnimation
          //     scrollTop='0'
          //     lowerThreshold='10'
          //     upperThreshold='10'
          //     onScrolltoupper={this.touchedTop}
          //     onScrollToLower={this.touchedBottom}
          //     >
          //     <UserCards users={this.state.users} ></UserCards>
          // </ScrollView>
      <View className='at-row'>
        <UserCards users={this.state.users} ></UserCards>
      </View>
    )
  }


}

class UserCards extends Component {
  
  //参考了Taro官方列表渲染文档
  render() {
    const sidebar = (
      <View>
        {this.props.users.map((user) =>
          <Text key={user.id}>
            <AtCard
              note={user.location}
              extra={user.email}
              title={user.name}
            >
             {user.message}
            </AtCard>
          </Text>
        )}
      </View>
    )

    return (
        <View>
          {sidebar}
        </View>
    )
  }
}

export { ShowLists }