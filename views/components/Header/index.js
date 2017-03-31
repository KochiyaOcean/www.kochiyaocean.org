import React from 'react'
import classNames from 'classnames'
import { Button } from 'react-toolbox/lib/button'

import metadata from '../../intl/metadata'
import styles from './styles'

const Header = ({ children }, { switchLanguage, locale}) => {
  return (
    <div className={styles.header}>
      { Object.keys(metadata).map(lang => (
        <Button key={lang}
           onClick={() => switchLanguage(lang)}
           raised={locale === lang}>
          <div className={classNames({
            [styles.langinactive]: locale !== lang,
          })}>
            { metadata[lang] }
          </div>
        </Button>
      )) }
    </div>
  )
}

Header.contextTypes = {
  router: React.PropTypes.object,
  switchLanguage: React.PropTypes.func,
  locale: React.PropTypes.string,
}

export default Header
