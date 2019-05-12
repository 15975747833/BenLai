# BENLAI

## 项目名称：本来生活（benlailife）

## 项目类型：电商购物类app

> 此应用致力于从国内优质食品供应基地、国外优质食品供应商中精挑细选，剔除中间环节，提供冷链配送、食材食品直送到家服务。我们提供的产品包括：健康安全的蔬菜水果、肉禽蛋奶、米面粮油、母婴童、熟食面点等；具有深厚积淀和历史传承的优质原产地食品；拥有品质保障的进口食品等。 

## 

* 原app网址：<https://m.benlai.com/#pageIndex=0> 
* 此项目app网址：http://197.112.60.97:8080

## 开发团队

* 组长：曾胜达

* 成员：陈国洲，江嘉裕

  

## 分工说明

| #    | 曾胜达（组长）                                               | 陈国洲                                                       | 江嘉裕                                                       |
| ---- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 前端 | 1.后台管理系统CMS,<br />2.app的bug修复<br />3.app页面美化    | 1.app首页<br />2.app详情页<br />3.app单个商品列表页<br />4.app购物车 | 1.app注册登录页<br />2.app商品分类页<br />3.app个人信息页<br /><br />4.登录注册功能 |
| 后端 | 1.爬取数据<br />2.创建后端mongodb数据库<br />3.编写数据接口，管理数据 | ——                                                           | ——                                                           |
| 其他 | 1.编写项目文档<br />2.项目上线                               | ——                                                           | ——                                                           |

## 项目文件夹结构树

C:.
│  .gitignore
│  babel.config.js
│  jiang.txt
│  package-lock.json
│  package.json
│  README.md
│
├─assets
│      logo.png
│
├─components
│      HelloWorld.vue
│
├─public
│  │  index.html
│  │
│  ├─css
│  │      base.css
│  │
│  └─imgs
│          jingjing.jpg
│          laoxie.jpg
│          laoyao.jpg
│          lemon.jpg
│
├─src
│  │  App.vue
│  │  main.js
│  │  router.js
│  │  store.js
│  │
│  ├─assets
│  │      jingjing.jpg
│  │      laoxie.jpg
│  │      laoyao.jpg
│  │      lemon.jpg
│  │      logo.png
│  │
│  ├─components
│  │      Footer.vue
│  │
│  ├─img
│  │      alipay.svg
│  │      cart-tu.png
│  │      cart_icon.png
│  │      hui.png
│  │      sina.svg
│  │      taobao.svg
│  │      user.svg
│  │      userbg.jpg
│  │      wechat.svg
│  │
│  └─views
│          About.vue
│          Address.vue
│          Cart.vue
│          Category.vue
│          Goods.vue
│          Home.vue
│          List.vue
│          Login.vue
│          My.vue
│          Pay.vue
│          Recharge.vue
│          Search.vue
│
└─views
        About.vue
        Home.vue

## 技术栈

### 前端

- Vue
- Vue-Router
- Vuex
- Vue-Cli
- axios
- elementUI/MintUI/iView/
- git
- webpack

### 后端

- Nodejs
- Express
- MongoDB
