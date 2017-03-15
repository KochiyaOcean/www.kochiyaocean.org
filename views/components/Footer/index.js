import React from 'react'

import styles from './styles'

class Footer extends React.Component {
  render() {
    // const { __ } = this.context
    return (
      <div className={styles.footer}>
      </div>
    )
  }
}

Footer.childContextTypes = {
  reactIconBase: React.PropTypes.object,
}

Footer.contextTypes = {
  __: React.PropTypes.func,
}

export default Footer
