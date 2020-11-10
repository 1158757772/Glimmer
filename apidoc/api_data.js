define({
  api: [
    {
      type: 'get',
      url: '/firstPage/getFirstPageHead',
      title: '获得首页头部导航',
      group: 'firstPage',
      success: {
        examples: [
          {
            title: '返回数据示例:',
            content: "{\n   err: 0,\n   msg: '查询成功'\n   datList:[]\n}",
            type: 'json'
          }
        ]
      },
      version: '0.0.0',
      filename: 'dbRouter/firstPageHeadRouter.js',
      groupTitle: 'firstPage',
      name: 'GetFirstpageGetfirstpagehead'
    },
    {
      type: 'post',
      url: '/user/login',
      title: '用户登录',
      group: 'user',
      parameter: {
        fields: {
          Parameter: [
            {
              group: 'Parameter',
              type: 'String',
              optional: false,
              field: 'user',
              description: '<p>用户账号</p>'
            },
            {
              group: 'Parameter',
              type: 'String',
              optional: false,
              field: 'pass',
              description: '<p>账号密码</p>'
            }
          ]
        }
      },
      success: {
        examples: [
          {
            title: '返回数据示例:',
            content: "{\n   err: 2,\n   msg: '账户密码正确，请登录'\n}",
            type: 'json'
          }
        ]
      },
      version: '0.0.0',
      filename: 'dbRouter/userRouter.js',
      groupTitle: 'user',
      name: 'PostUserLogin'
    },
    {
      type: 'post',
      url: '/user/register',
      title: '用户注册',
      group: 'user',
      parameter: {
        fields: {
          Parameter: [
            {
              group: 'Parameter',
              type: 'String',
              optional: false,
              field: 'user',
              description: '<p>用户账号</p>'
            },
            {
              group: 'Parameter',
              type: 'String',
              optional: false,
              field: 'pass',
              description: '<p>账号密码</p>'
            },
            {
              group: 'Parameter',
              type: 'String',
              optional: false,
              field: 'email',
              description: '<p>用户邮箱</p>'
            },
            {
              group: 'Parameter',
              type: 'String',
              optional: false,
              field: 'code',
              description: '<p>邮箱验证码</p>'
            }
          ]
        }
      },
      success: {
        examples: [
          {
            title: '返回数据示例:',
            content: "{\n   err: 1,\n   msg: '注册成功'\n}",
            type: 'json'
          }
        ]
      },
      version: '0.0.0',
      filename: 'dbRouter/userRouter.js',
      groupTitle: 'user',
      name: 'PostUserRegister'
    },
    {
      type: 'post',
      url: '/user/verify',
      title: '邮箱验证码',
      group: 'user',
      parameter: {
        fields: {
          Parameter: [
            {
              group: 'Parameter',
              type: 'String',
              optional: false,
              field: 'email',
              description: '<p>用户邮箱</p>'
            }
          ]
        }
      },
      success: {
        examples: [
          {
            title: '返回数据示例:',
            content: "{\n   err: 3,\n   msg: '验证码发送成功'\n}",
            type: 'json'
          }
        ]
      },
      version: '0.0.0',
      filename: 'dbRouter/userRouter.js',
      groupTitle: 'user',
      name: 'PostUserVerify'
    }
  ]
})
