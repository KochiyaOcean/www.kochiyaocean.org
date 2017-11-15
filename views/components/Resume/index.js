import React from 'react'
import { CardActions, CardText } from 'react-toolbox/lib/card'
import { Button } from 'react-toolbox/lib/button'
import classnames from 'classnames'
import faStyle from 'font-awesome/css/font-awesome.css'

import styles from './styles'
import resume_en from './resume_en'
import resume_cn from './resume_cn'
import resume_tw from './resume_tw'
import resume_jp from './resume_jp'

const ResumeCnt = (props) => {
  return (
    <div>
      <h2 className={styles.title}>
        { props.title }
      </h2>
      <div>
        {
          props.contents.map(cnt =>
            <div key={cnt.title}>
              <h3 className={styles.contentstitle}>
                { cnt.title }
              </h3>
                {
                  cnt.subtitle ?
                  <div className={styles.subtitle}>
                    { cnt.subtitle }
                  </div>
                  : null
                }
              <div className={styles.contentsofcontents}>
                {
                  cnt.contents ?
                  <div>
                    { cnt.contents }
                  </div>
                  : null
                }
                { cnt.lists ?
                  <div>
                    <ul>
                      {
                        cnt.lists.map((li, index) =>
                          <li key={index}>
                            { li }
                          </li>
                        )
                      }
                    </ul>
                  </div>
                  : null
                }
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}


const Resume = ({ children }, { __, toggle, locale }) => {
  let resume
  switch(locale) {
  case 'zh-CN':
    resume = resume_cn
    break
  case 'zh-TW':
    resume = resume_tw
    break
  case 'ja-JP':
    resume = resume_jp
    break
  default:
    resume = resume_en
  }
  return (
    <div style={{ height: '100%' }}>
      <CardText className={styles.resumecontent}>
        {
          resume.map(cnt =>
            <ResumeCnt key={cnt.title} {...cnt} />
          )
        }
      </CardText>
      <CardActions>
        <Button className={classnames(styles.squarebtn, styles.returnbtn)}
          onClick={toggle}>
          <i className={classnames(faStyle.fa, faStyle['fa-chevron-left'])}/>
        </Button>
        <Button className={classnames(styles.squarebtn, styles.secondbtn)}
          href="https://github.com/KochiyaOcean" target='_blank'>
          <i className={classnames(faStyle.fa, faStyle['fa-github'])}/>
        </Button>
        <Button className={styles.squarebtn}
          href="https://t.me/KochiyaOcean" target='_blank'>
          <i className={classnames(faStyle.fa, faStyle['fa-telegram'])}/>
        </Button>
        <Button className={styles.squarebtn}
          href="https://www.facebook.com/KochiyaOcean" target='_blank'>
          <i className={classnames(faStyle.fa, faStyle['fa-facebook-official'])}/>
        </Button>
        <Button className={styles.squarebtn}
          href="https://twitter.com/KochiyaOcean" target='_blank'>
          <i className={classnames(faStyle.fa, faStyle['fa-twitter'])}/>
        </Button>
        <Button className={styles.squarebtn}
          href="https://blog.kochiyaocean.org/" target='_blank'>
          <i className={classnames(faStyle.fa, faStyle['fa-book'])}/>
        </Button>
        <Button className={styles.squarebtn}
          href="mailto:root@kochiyaocean.org" target='_blank'>
          <i className={classnames(faStyle.fa, faStyle['fa-envelope-open'])}/>
        </Button>
      </CardActions>
      <div className={styles.divider} style={{ top: '-3.7em' }} />
    </div>
  )
}

Resume.contextTypes = {
  __: React.PropTypes.func,
  locale: React.PropTypes.string,
  toggle:  React.PropTypes.func,
}

export default Resume
