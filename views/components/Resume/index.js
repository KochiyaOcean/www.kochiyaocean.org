import React from 'react'
import { CardActions, CardText } from 'react-toolbox/lib/card'
import { Button } from 'react-toolbox/lib/button'
import classnames from 'classnames'
import faStyle from 'font-awesome/css/font-awesome.css'

import styles from './styles'
import resume from './resume.md'

class Resume extends React.Component {
  render() {
    // const { __ } = this.context
    return (
      <div style={{ height: '100%' }}>
        <CardText className={styles.resumecontent}>
          <div dangerouslySetInnerHTML={{ __html: resume }} />
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
        <div className={styles.divider} />
      </div>
    )
  }
}

Resume.contextTypes = {
  __: React.PropTypes.func,
  toggle:  React.PropTypes.func,
}

export default Resume
