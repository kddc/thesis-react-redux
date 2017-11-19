import React, { Component } from 'react'

import AnswerComponent from './AnswerComponent'

class Answer extends Component {
  render() {
    const { answer } = this.props
    return (
      <AnswerComponent answer={answer} />
    )
  }
}

export default Answer
