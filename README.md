踩坑：
1、npm i时报错：code CERT_NOT_YET_VALID
解决：npm config set strict-ssl false

2、npm run dev:h5时报错：taro: command not found
解决：需要安装 npm i -g @tarojs/cli

3、组件路由不能用：
解决：要在app.tsx中配置pages