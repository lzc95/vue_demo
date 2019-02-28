import Mock from 'mockjs'

const getList = Mock.mock('/api/getList','get',() => {
  
    return Mock.mock({
      'data|10': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1,
        title:'玩转Vue',
        create_time:'2018-08-23',
        kinds:'Node',
        content: '在前后端分离的开发中，通过 Restful API 进行数据交互时，如果没有对 API 进行保护，那么别人就可以很容易地获取并调用这些 API 进行操作。那么服务器端要如何进行鉴权呢？Json Web Token 简称为 JWT，它定义了一种用于简洁、自包含的用于通信双方之间以 JSON 对象的形式安全传递信息的方法。JWT 可以使用 HMAC 算法或者是 RSA 的公钥密钥对进行签名。说得好像跟真的一样，那么到底要怎么进行认证呢？'
      }]
    })
})

const getArticle = Mock.mock('/api/getArticle','get',(param) => {
    console.log(param)
    return Mock.mock({
        'data': [{
          // 属性 id 是一个自增数，起始值为 1，每次增 1
          'id': 1,
          title:'玩转Vue',
          create_time:'2018-08-23',
          kinds:'Node',
          content: '在前后端分离的开发中，通过 Restful API 进行数据交互时，如果没有对 API 进行保护，那么别人就可以很容易地获取并调用这些 API 进行操作。那么服务器端要如何进行鉴权呢？Json Web Token 简称为 JWT，它定义了一种用于简洁、自包含的用于通信双方之间以 JSON 对象的形式安全传递信息的方法。JWT 可以使用 HMAC 算法或者是 RSA 的公钥密钥对进行签名。说得好像跟真的一样，那么到底要怎么进行认证呢？'
        }]
      })
})
// 
export default {
    getList,
    getArticle
}
