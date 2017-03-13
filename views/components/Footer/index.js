import React from 'react'
import FaWeibo from 'react-icons/fa/weibo'
import FaPaperPlane from 'react-icons/fa/paper-plane'
import FaGitHub from 'react-icons/fa/github'

import styles from './styles'

class Footer extends React.Component {
  getChildContext() {
    return {
      reactIconBase: { size: 30 }
    }
  }

  render() {
    const { __ } = this.context
    return (
      <div className={styles.footer}>
      </div>
    )
  }
}

Footer.childContextTypes = {
  reactIconBase: React.PropTypes.object
}

Footer.contextTypes = {
  __: React.PropTypes.func
}

export default Footer
