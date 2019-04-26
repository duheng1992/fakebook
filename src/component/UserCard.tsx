import Taro, { Component, Config } from '@tarojs/taro';
import { AtCard } from "taro-ui"

function UserCard(props) {
    const userInfo = props.userInfo;
    console.log(userInfo);

    return (
        <AtCard
          note={`${userInfo.id}`}
          extra={`${userInfo.name}`}
          title={`${userInfo.email}`}>
          {`${userInfo.message}`}
        </AtCard>
    )
}


export default function UserCards(props) {
    return props.userInfo.map(
        (courseInfo, i) => <UserCard userInfo = {userInfo} />
    )
}