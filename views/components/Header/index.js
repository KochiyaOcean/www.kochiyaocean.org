import React from 'react'
import classNames from 'classnames'
import { Button } from 'react-toolbox/lib/button'

import metadata from '../../intl/metadata'
import styles from './styles'

class Header extends React.Component {
  switchLanguage(lang) {
    return this.context.switchLanguage(lang)
  }

  render() {
    return (
      <div className={styles.header}>
        { Object.keys(metadata).map(lang => (
          <Button key={lang}
             onClick={this.switchLanguage.bind(this, lang)}
             raised={this.context.locale === lang}>
            <div className={classNames({
              [styles.langinactive]: this.context.locale !== lang
            })}>
              { metadata[lang] }
            </div>
          </Button>
        )) }
      </div>
    )
  }
}

Header.contextTypes = {
  router: React.PropTypes.object,
  switchLanguage: React.PropTypes.func,
  locale: React.PropTypes.string
}

export default Header
