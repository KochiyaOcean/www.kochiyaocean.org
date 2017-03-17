import React from 'react'

export default [
  {
    title: 'Experience',
    contents: [
      {
        title: 'Bachelor @ Fudan University',
        subtitle: 'Sep 2013 - Present',
        contents: 'Communication Science & Engineering, School of Information',
      },
      {
        title: 'Software Engineer (intern) @ Microsoft',
        subtitle: 'Jul 2016 - Sep 2016',
        contents: 'Developed a Spark application to analysis log data and export result to Power BI',
      },
    ],
  },
  {
    title: 'Skills',
    contents: [
      {
        title: 'Front-end',
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
    ],
  },
  {
    title: 'Projects',
    contents: [
      {
        title: 'poi',
        subtitle: '\#Electron \#Node.js \#React \#Redux \#Bootstrap',
        contents: <span>
          <a href="https://poi.io" target="_blank">poi.io</a><br />
          A Browser for web-based game <a href="http://www.dmm.com/netgame_s/kancolle/" target="_blank">Kantai-Collection</a>
        </span>,
      },
    ],
  },
]
