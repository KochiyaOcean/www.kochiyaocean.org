import React from 'react'
import { CardActions, CardText, CardTitle } from 'react-toolbox/lib/card'
import { Button } from 'react-toolbox/lib/button'
import classnames from 'classnames'
import faStyle from 'font-awesome/css/font-awesome.css'
// import 'ubuntu-fontface/fonts/ubuntu-regular-webfont.woff'
// import 'ubuntu-fontface/fonts/ubuntu-regular-webfont.woff2'
// import 'ubuntu-fontface/fonts/ubuntu-regular-webfont.svg'

import styles from './styles'
import resume from './resume'

const ResumeCnt = (props) => {
  return (
    <div>
      <h2 dangerouslySetInnerHTML={{ __html: props.title }} className={styles.title} />
      <div>
        {
          props.contents.map(cnt =>
            <div key={cnt.title}>
              <h3 dangerouslySetInnerHTML={{ __html: cnt.title }} className={styles.contentstitle} />
                {
                  cnt.subtitle ?
                  <div className={styles.subtitle} dangerouslySetInnerHTML={{ __html: cnt.subtitle }} />
                  : null
                }
              <div className={styles.contentsofcontents}>
                {
                  typeof cnt.contents === 'string' ?
                  <div dangerouslySetInnerHTML={{ __html: cnt.contents }} />
                  : <div>
                    <ul>
                      {
                        cnt.contents.map(li =>
                          <li dangerouslySetInnerHTML={{ __html: li }} key={li} />
                        )
                      }
                    </ul>
                  </div>
                }
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}


class Resume extends React.Component {
  render() {
    // const { __ } = this.context
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
          <Button className={styles.squarebtn}
            onClick={this.context.toggle.bind(this)}>
            <i className={classnames(faStyle.fa, faStyle['fa-chevron-left'])}/>
          </Button>
          <Button className={styles.squarebtn}
            href="https://github.com/KochiyaOcean" target='_blank'>
            <i className={classnames(faStyle.fa, faStyle['fa-github'])}/>
          </Button>
          <Button className={styles.squarebtn}
            href="https://t.me/KochiyaOcean" target='_blank'>
            <i className={classnames(faStyle.fa, faStyle['fa-telegram'])}/>
          </Button>
          <Button className={styles.squarebtn}
            href="http://weibo.com/androidian233" target='_blank'>
            <i className={classnames(faStyle.fa, faStyle['fa-weibo'])}/>
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
}

Resume.contextTypes = {
  __: React.PropTypes.func,
  toggle:  React.PropTypes.func,
}

export default Resume
