import React from 'react'

export default [
  {
    title: '履歷',
    contents: [
      {
        title: '學士 @ 復旦大學',
        subtitle: 'Sep 2013 - Jul 2017',
        contents: '資訊科學與工程學院 通訊工程',
      },
      {
        title: '軟體工程師 (實習) @ 微軟上海',
        subtitle: 'Jul 2016 - Sep 2016',
        contents: '用於分析日誌並通過 PowerBI 匯出報告的 Spark 應用開發',
      },
      {
        title: '軟體工程師 @ teamLab',
        subtitle: 'Jul 2017 - Present',
        contents: '自主 CMS 的開發和運用',
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
    title: '開源專案',
    contents: [
      {
        title: 'poi',
        subtitle: '\#Electron \#Node.js \#React \#Redux \#Bootstrap',
        contents: <span>
          <a href="https://poi.io" target="_blank">poi.io</a><br />
          網頁遊戲 <a href="http://www.dmm.com/netgame_s/kancolle/" target="_blank">艦隊收藏</a> 的專用瀏覽器
        </span>,
      },
    ],
  },
]
