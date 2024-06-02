module.exports={
  base:'/jdream-ui-ed/',
  title:'jdream-ui',
  discription:'jdream-ui组件库文档',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  themeConfig: {
    logo:'/study.png',
    outlineTitle:'目录',
    outline:[2,6],
    nav:[
      {text:'指南',link:'/guide.md'},
      {text:'组件',link:'/comps/collapse.md'},
    ],
    slidebar:{
      '/comps':[
        '/comps/collapse.md'
      ]
    }
  },
  plugins:['demo-container'],
}




