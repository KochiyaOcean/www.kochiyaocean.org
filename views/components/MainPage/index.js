import React from 'react'
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import { Button } from 'react-toolbox/lib/button'
import Dropdown from 'react-toolbox/lib/dropdown'
import faStyle from 'font-awesome/css/font-awesome.css'
import classnames from 'classnames'

import styles from './styles'
import avatar from './avatar.png'
import metadata from '../../intl/metadata'

const lang = Object.keys(metadata).map(key => ({
  value: key,
  label: metadata[key],
}))

class MainPage extends React.Component {
  render() {
    const { __ } = this.context
    return (
      <div className={styles.container}>
        <Card className={styles.maincard} >
          <CardMedia
            aspectRatio="square"
            image={avatar}
            contentOverlay={true}
          />
          <CardTitle
            title="東風谷オーシャン"
            subtitle={
              <div className={styles.flex}>
                <div>@KochiyaOcean</div>
                <div className={styles.right}>
                  <i className={classnames(faStyle.fa, faStyle['fa-map-marker'])}/> {__('Shanghai')}
                </div>
              </div>
            }
          />
          <CardText>
            Just a JavaScript developer.<br />
            #{__('frontend')} #JavaScript #React<br />
            #{__('kancolle')} #{__('touhou')} #{__('gup')}
          </CardText>
          <CardText>
            <div className={styles.fullwidth}>
              <Button className={styles.halfwidth}
                href="https://github.com/KochiyaOcean" target='_blank'>
                <i className={classnames(faStyle.fa, faStyle['fa-github'])}/> {__('github')}
              </Button>
              <Button className={styles.halfwidth}
                href="https://t.me/KochiyaOcean" target='_blank'>
                <i className={classnames(faStyle.fa, faStyle['fa-telegram'])}/> {__('telegram')}
              </Button>
            </div>
            <div className={styles.fullwidth}>
              <Button className={styles.halfwidth}
                href="https://twitter.com/KochiyaOcean" target='_blank'>
                <i className={classnames(faStyle.fa, faStyle['fa-twitter'])}/> {__('twitter')}
              </Button>
              <Button className={styles.halfwidth}
                href="http://weibo.com/androidian233" target='_blank'>
                <i className={classnames(faStyle.fa, faStyle['fa-weibo'])}/> {__('weibo')}
              </Button>
            </div>
            <div className={styles.fullwidth}>
              <Button className={styles.halfwidth}
                href="https://blog.kochiyaocean.org/" target='_blank'>
                <i className={classnames(faStyle.fa, faStyle['fa-book'])}/> {__('blog')}
              </Button>
              <Button className={styles.halfwidth} disabled>
                <i className={classnames(faStyle.fa, faStyle['fa-id-card-o'])}/> {__('resume')}
              </Button>
            </div>
          </CardText>
        </Card>
      </div>
    )
  }
}

MainPage.contextTypes = {
  __: React.PropTypes.func,
}

export default MainPage
