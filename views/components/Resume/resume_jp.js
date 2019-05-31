import React from 'react'

export default [
  {
    title: '履歴',
    contents: [
      {
        title: '学士 @ 復旦大学',
        subtitle: 'Sep 2013 - Jul 2017',
        contents: '情報学部 コミュニケーション科学',
      },
      {
        title: 'ソフトウェアエンジニア (インターン) @ マイクロソフト上海',
        subtitle: 'Jul 2016 - Sep 2016',
        contents: 'ログを分析し、PowerBI でレポートを作成する Spark アプリの開発',
      },
      {
        title: 'ソフトウェアエンジニア @ チームラボ',
        subtitle: 'Jul 2017 - Present',
        contents: '自社 PHP-based CMS の開発と運用',
      },
      {
        title: 'ソフトウェアエンジニア @ indeed',
        subtitle: 'Apr 2018 - Present',
        contents: 'ソフトウェアの開発',
      },
    ],
  },
  {
    title: '技術',
    contents: [
      {
        title: 'フロントエンド',
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
    title: 'オーペンソースプロジェクト',
    contents: [
      {
        title: 'poi',
        subtitle: '\#Electron \#Node.js \#React \#Redux \#Bootstrap',
        contents: <span>
          <a href="https://poi.io" target="_blank">poi.io</a><br />
          ブラウザゲーム <a href="http://www.dmm.com/netgame_s/kancolle/" target="_blank">艦隊これくしょん</a> 専用ブラウザ
        </span>,
      },
    ],
  },
]
