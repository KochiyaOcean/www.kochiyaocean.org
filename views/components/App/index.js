import React from 'react'
import ReactDOM from 'react-dom'
import '../../3rd/fss'
import mesh from './mesh'

import Header from '../Header'
import Footer from '../Footer'

import en_US from '../../intl/en-US'
import zh_CN from '../../intl/zh-CN'
import zh_TW from '../../intl/zh-TW'
import ja_JP from '../../intl/ja-JP'

import styles from './styles'

const standardizeLocale = language => {
  switch (language) {
    case 'zh-CN':
      return 'zh-CN'
    case 'zh-TW':
      return 'zh-TW'
    case 'zh':
      return 'zh-CN'
    case 'ja':
      return 'ja-JP'
    case 'ja-JP':
      return 'ja-JP'
    default:
      return 'en-US'
  }
}

const intl = language => key => {
  switch (language) {
    case 'zh-CN':
      return zh_CN[key]
    case 'zh-TW':
      return zh_TW[key]
    case 'ja-JP':
      return ja_JP[key]
    default:
      return en_US[key]
  }
}

class App extends React.Component {
  switchLanguage(lang) {
    const { pathname, query } = this.props.location
    query.locale = lang
    this.context.router.replace({ pathname, query })
  }

  getChildContext() {
    const locale = standardizeLocale(this.props.location.query.locale || navigator.language)
    console.log(locale)
    return {
      __: intl(locale),
      switchLanguage: (lang) => this.switchLanguage(lang),
      locale
    }
  }

  componentDidMount() {
    mesh(ReactDOM.findDOMNode(this.refs.ground))
  }

  render() {
    return (
      <div className={styles.container}>
        <div ref="ground" className={styles.ground} />
        <div className={styles.wrapper}>
          <Header />
          { this.props.children }
          <Footer />
        </div>
      </div>
    )
  }
}

App.childContextTypes = {
  __: React.PropTypes.func,
  switchLanguage: React.PropTypes.func,
  locale: React.PropTypes.string
}

App.contextTypes = {
  router: React.PropTypes.object
}

export default App
