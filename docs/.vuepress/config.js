module.exports = {
    title: 'Tan\'s blog',
    description: '我的个人网站',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
      ['link', { rel: 'icon', href: '/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    // base: '/', // 这是部署到github相关的配置
    base: '/vue-press/',
    // dest:'.vuepress/public/dist',  //编译输出的目录 
    markdown: {
      lineNumbers: false // 代码块显示行号
    },
    themeConfig: {
      nav:[ // 导航栏配置
        {text: '前端基础', link: '/accumulate/' },
        {text: '算法题库', link: '/algorithm/'},
        {text: '微博', link: 'https://baidu.com'}      
      ],
      sidebar: [
        ['/', '首页'],
        ['/blog/first.md', '我的第一篇博客'],
      ]
    }
  };