import React, { Component } from 'react'
import Question from '../Question/Question'

class QuestionListComponent extends Component {
  render() {
    const { questions } = this.props
    return (
      <div>
        {questions.map((question) => (
          <Question key={question.id} question={question} />
        ))}
      </div>
    )
  }

}

export default QuestionListComponent
