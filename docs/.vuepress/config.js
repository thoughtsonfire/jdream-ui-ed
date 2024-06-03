module.exports={
  base:'/jdream-ui-ed/',
  title:'jdream-ui',
  description:'jdream-ui组件库文档',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  themeConfig: {
    logo:'/study.png',
    outlineTitle:'目录',
    outline:[2,6],
    nav:[
      {text:'指南',link:'/guide.md'},
      {text:'组件',link:'/comps/collapse.md'},
      {text:'JDream',link:'https://thoughtsonfire.github.io/JDream/'}
    ],
    slidebar:{
      '/comps':[
        '/comps/collapse.md'
      ]
    }
  },
  plugins:['demo-container'],
  markdown: {
    lineNumbers: true,
    sanitize:false
  },
  search:true,
  searchMaxSuggestions: 10 
}




