import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { answersLoad } from '../../actions/answers'
import { authorLoad } from '../../actions/authors'
import QuestionComponent from './QuestionComponent'

class Question extends Component {

  componentWillMount() {
    const { question, author } = this.props
    question && this.props.actions.answersLoad(question.id, question.answers)
    question && !author && this.props.actions.authorLoad(question.author)
  }

  render() {
    const { question, answers, author } = this.props
    return (
      <QuestionComponent question={question} author={author} answers={answers} onUpvote={this.onUpvote} />
    )
  }
}

Question.propTypes = {
  actions: PropTypes.object,
  messages: PropTypes.object
}

function mapStateToProps(state, ownProps) {
  const { question } = ownProps
  return {
    answers: (state && state.answers[question.id]) || [],
    author: (state && state.authors[question.author]) || null,
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators({ answersLoad, authorLoad }, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Question)
