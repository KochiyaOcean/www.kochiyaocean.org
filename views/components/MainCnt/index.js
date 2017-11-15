import React from 'react'
import { CardMedia, CardTitle, CardText } from 'react-toolbox/lib/card'
import { Button } from 'react-toolbox/lib/button'
import classnames from 'classnames'
import faStyle from 'font-awesome/css/font-awesome.css'

import avatar from './avatar.svg'
import styles from './styles'


const MainCnt = ({ children }, { __, toggle }) => {
  return (
    <div className={styles.maincnt}>
      <CardMedia
        aspectRatio="square"
        image={avatar}
      />
      <CardTitle
        subtitle={
          <div className={classnames(styles.flex, styles.center)}>
            <span>@KochiyaOcean</span>
            <div className={styles.right}>
              <i className={classnames(faStyle.fa, faStyle['fa-map-marker'])}/> {__('Tokyo')}
            </div>
          </div>
        }>
        東風谷オーシャン
      </CardTitle>
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
            href="https://www.facebook.com/KochiyaOcean" target='_blank'>
            <i className={classnames(faStyle.fa, faStyle['fa-facebook-official'])}/> {__('facebook')}
          </Button>
          <Button className={styles.halfwidth}
            href="https://twitter.com/KochiyaOcean" target='_blank'>
            <i className={classnames(faStyle.fa, faStyle['fa-twitter'])}/> {__('twitter')}
          </Button>
        </div>
        <div className={styles.fullwidth}>
          <Button className={styles.halfwidth}
            href="https://blog.kochiyaocean.org/" target='_blank'>
            <i className={classnames(faStyle.fa, faStyle['fa-book'])}/> {__('blog')}
          </Button>
          <Button className={styles.halfwidth}
            onClick={toggle}>
            <i className={classnames(faStyle.fa, faStyle['fa-id-card-o'])}/> {__('resume')}
          </Button>
        </div>
      </CardText>
    </div>
  )
}

MainCnt.contextTypes = {
  __: React.PropTypes.func,
  toggle:  React.PropTypes.func,
}

export default MainCnt
