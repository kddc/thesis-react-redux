import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { answersLoad } from '../../actions/answers'
import QuestionComponent from './QuestionComponent'

class Question extends Component {

  componentWillMount() {
    const { question } = this.props
    question && this.props.actions.answersLoad(question.id, question.answers)
  }

  render() {
    const { question, answers } = this.props
    return (
      <QuestionComponent question={question} answers={answers} onUpvote={this.onUpvote} />
    )
  }
}

Question.propTypes = {
  actions: PropTypes.object,
  messages: PropTypes.object
}

function mapStateToProps(state, ownProps) {
  const { question } = ownProps
  return { answers: (state && state.answers[question.id]) || []}
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators({ answersLoad }, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Question)
