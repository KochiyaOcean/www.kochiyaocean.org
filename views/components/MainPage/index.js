import React from 'react'
import { Card } from 'react-toolbox/lib/card'
import classnames from 'classnames'

import styles from './styles'

import Resume from '../Resume'
import MainCnt from '../MainCnt'

let flag = false

class MainPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      displayResume: false,
    }
  }
  getChildContext() {
    return {
      toggle: () => this.toggle(),
    }
  }
  toggle() {
    this.setState({
      displayResume: !this.state.displayResume,
    })
  }
  render() {
    const mainContentClassName = classnames({
      [styles.fade]: flag,
      [styles.in]: !this.state.displayResume,
      [styles.out]: this.state.displayResume,
    })
    const resumeContentClassName = classnames({
      [styles.fade]: flag,
      [styles.in]: this.state.displayResume,
      [styles.out]: !this.state.displayResume,
    })
    if (!flag) flag = true
    return (
      <div className={styles.container}>
        <Card ref='container' raised
          className={classnames(styles.maincard, {
            [styles.maincontainer]: !this.state.displayResume,
            [styles.resumecontainer]: this.state.displayResume,
          })} >
          <div className={mainContentClassName}
            ref='main'>
            <MainCnt />
          </div>
          <div className={classnames(resumeContentClassName, styles.resume)}
            ref='resume' >
            <Resume />
          </div>
        </Card>
      </div>
    )
  }
}

MainPage.childContextTypes = {
  toggle: React.PropTypes.func,
}

MainPage.contextTypes = {
  __: React.PropTypes.func,
}

export default MainPage
