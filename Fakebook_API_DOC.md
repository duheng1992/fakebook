# Fakebook API 文档
本文档描述了Fakebook的API。
本文档为测试alpha版本。

## 用户信息
###  校验用户是否合法

请求URL
-  /user/checkUser

请求方式
- **POST**

请求参数
```
{
  data: {
user_name:”XXX”,
password:”XXX” 
},
msg:”XXX” 
}
```

返回参数
```
{
       title: 'checkUserRes',
       res_time: 时间戳,
       classify: 'CHECK',
       res_code: int类型,
//返回的备注信息
       msg: “XXXX”,
}
// res_code： 
// 0 用户校验通过
// 1 用户不存在
// 2 用户密码错误
// 3 系统故障

```


### 用户登录

请求URL
- /user/login

请求方式
- **POST**

请求参数
```
{
  data: {
user_name:”XXX”,
password:”XXX”,
is_remember: int
},
msg:”XXX” 
}

其中is_remember：
1：记住密码
0：不记住密码
```

返回参数
```
{
       title: 'loginUserRes',
       res_time: 时间戳,
       classify: 'LOGIN',
       res_code: int类型,
       msg: “XXXX”
}

// res_code： 
// 0 登录成功
// 1 用户不存在
// 2 用户密码错误
// 3 系统故障

```

 

### 用户注册

请求URL
- /user/register

请求方式
- **POST**

请求参数
```
{
  data: {
user_name:”XXX”,
password:”XXX”,
age: int类型,
region: “XXX”,
sex: 0, //0男 1女
user_class: “XXX”
…
},
msg:”XXX” 
}
```

返回参数
```
{
  data: {
user_name:”XXX”,
password:”XXX”,
age: int类型,
region: “XXX”,
sex: 0, //0男 1女
user_class: “XXX”
…
},
msg:”XXX” 
}
```

 

### 查询用户列表

请求URL
- /user/queryUsers/{userClass}

请求方式
- **GET**

参数
```
userClass: “XXX”

userClass:
0 超级管理员
1 VIP会员
2 普通用户
3 黑名单
99 查询全部用户
```
返回参数
```
{
       title: 'queryUsersRes',
       res_time: 时间戳,
       classify: 'QUERYUSERS',
       res_code: int类型,
       msg: “XXXX”
       data: [
          {
            user_id: uuid,
            user_name: “XXXX”,
            sex: XX,
            region: ‘XXXXX’,
            age: int,
            user_class: int,
            img_src: “XXXXXXXXXXXX”
            ……
},
          ……
]
}

// res_code： 
// 0 查询成功
// 1 查询失败
```

 

### 查询用户

请求URL
- /user/queryUser/{userId}

请求方式
- **GET**

请求参数
```
userId: uuid,
```

返回参数
```
{
       title: 'queryUserRes',
       res_time: 时间戳,
       classify: 'QUERYUSER',
       res_code: int类型,
       msg: “XXXX”
       data: 
          {
            user_id: uuid,
            user_name: “XXXX”,
            sex: XX,
            region: ‘XXXXX’,
            age: int,
            user_class: int,
            img_src: “XXXXXXXXXXXX”
            ……
}
}

// res_code： 
// 0 查询成功
// 1 查询失败
```

## 动态信息

### 首页中查询动态，默认10条

请求URL
- /post?limit=XXX

请求方式
- **GET**

请求参数
```
limit: int类型
```

返回参数
```
{
       title: 'queryPostRes',
       res_time: 时间戳,
       classify: 'QUERYPOST',
       res_code: int类型,
       msg: “XXXX”
       data: [
{
            post_id: uuid,
            post_title: “XXXX”,
            summary: “XXXXXXXXXXX…”,
            img_src: “XXXXXXXXXXXX”
            ……
},
……
]
}
```

 

### 查询动态详细信息

请求URL
- /post/{postId}

请求方式
- **GET**

参数
```
postId: uuid
```

返回参数
```
{
       title: 'queryPostDetailRes',
       res_time: 时间戳,
       classify: 'QUERYPOSTDETAIL',
       res_code: int类型,
       msg: “XXXX”
       data: [
{
            post_id: uuid,
            post_title: “XXXX”,
            summary: “XXXXXXXXXXX…”,
            img_src: “XXXXXXXXXXXX”
            ……
            // 这详细页面要展示什么，再补充。。
}
]
}
```

 

### 用户插入动态

请求URL
- /post/insertPost/{userId}

请求方式
- **POST**

参数
```
// userId: 用户id

{
  post_title: “XXXX”,
  summary: “XXXX”,
  img_src: “XXX”,
  ……
  //这详细页面要展示什么，再补充。。

}
```

返回参数
```
{
       title: 'insertPostRes',
       res_time: 时间戳,
       classify: 'INSERTPOST',
       res_code: int类型,
       msg: “XXXX”
}

// res_code： 
// 0 插入成功
// 1 用户登录超时
// 2 插入失败
```

 

### 用户删除动态

请求URL
- /post/deletePost/{userId}

请求方式
- **POST**

参数
```
// userId: 用户id

{
  post_id: uuid,
}
```

返回参数
```
{
       title: 'deletePostRes',
       res_time: 时间戳,
       classify: 'DELETEPOST',
       res_code: int类型,
       msg: “XXXX”
}

// res_code： 
// 0 删除成功
// 1 用户登录超时
// 2 删除失败
```
