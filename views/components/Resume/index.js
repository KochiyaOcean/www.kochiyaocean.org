import React from 'react'
import { CardActions, CardText } from 'react-toolbox/lib/card'
import { Button } from 'react-toolbox/lib/button'
import classnames from 'classnames'
import faStyle from 'font-awesome/css/font-awesome.css'

import styles from './styles'
import resume from './resume'

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
          <Button className={classnames(styles.squarebtn, styles.returnbtn)}
            onClick={this.context.toggle.bind(this)}>
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
