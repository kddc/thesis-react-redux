import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { authorLoad } from '../../actions/authors'

import AnswerComponent from './AnswerComponent'

class Answer extends Component {

  componentWillMount() {
    const { answer, author } = this.props
    answer && !author && this.props.actions.authorLoad(answer.author)
  }

  render() {
    const { answer, author } = this.props
    return (
      <AnswerComponent answer={answer} author={author} />
    )
  }
}

function mapStateToProps(state, ownProps) {
  const { answer } = ownProps
  return {
    author: (state && state.authors[answer.author]) || null,
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators({ authorLoad }, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Answer)
