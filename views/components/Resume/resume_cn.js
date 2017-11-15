import React from 'react'

export default [
  {
    title: '履历',
    contents: [
      {
        title: '学士 @ 复旦大学',
        subtitle: 'Sep 2013 - Jul 2017',
        contents: '信息科学与工程学院 通信工程',
      },
      {
        title: '软件工程师 (实习) @ 微软上海',
        subtitle: 'Jul 2016 - Sep 2016',
        contents: '用于分析日志并通过 PowerBI 导出报告的 Spark 应用开发',
      },
      {
        title: '软件工程师 @ teamLab',
        subtitle: 'Jul 2017 - Present',
        contents: '自主 CMS 的开发和运用',
      },
    ],
  },
  {
    title: '技能',
    contents: [
      {
        title: '前端',
        lists: [
          'HTML · CSS · JavaScript · CoffeeScript',
          'Gulp · Webpack',
          'Bootstrap · React-Toolbox · Material-UI',
          'React/Redux · jQuery',
        ],
      },
      {
        title: 'Node.js',
        lists: [
          'Koa · Electron',
        ],
      },
      {
        title: 'PHP',
        lists: [
          'Phalcon',
        ],
      },
    ],
  },
  {
    title: '开源项目',
    contents: [
      {
        title: 'poi',
        subtitle: '\#Electron \#Node.js \#React \#Redux \#Bootstrap',
        contents: <span>
          <a href="https://poi.io" target="_blank">poi.io</a><br />
          网页游戏 <a href="http://www.dmm.com/netgame_s/kancolle/" target="_blank">舰队收藏</a> 的专用浏览器
        </span>,
      },
    ],
  },
]
