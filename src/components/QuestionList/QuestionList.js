import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { questionsLoad } from '../../actions/questions'
import QuestionListComponent from './QuestionListComponent'

class QuestionList extends Component {

  componentWillMount() {
    this.props.actions.questionsLoad({})
  }

  render() {
    return (
      <QuestionListComponent questions={this.props.questions.list} />
    )
  }
}

QuestionList.propTypes = {
  actions: PropTypes.object,
  messages: PropTypes.object
}

function mapStateToProps(state) {
  return { questions: state.questions }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators({ questionsLoad }, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionList)
