import React, { Component } from 'react'
import Answer from '../Answer/Answer'
import '../../styles/Question.css'

class QuestionComponent extends Component {
  render() {
    // <Link to={`/question/${question.id}`}>{question.text}</Link>
    const { question, author, answers } = this.props
    return (
      <div>
        <div className="question">
          <div className="upvotes">
            {question.upvotes}
          </div>
          <div className="content">
            {question.text}
            <div className="info">
              Author: {(author && author.username) || 'Anonymous'} | {(question.answers && question.answers.total) || 0} Answers
            </div>
          </div>
        </div>
        <div style={{marginLeft: '64px'}}>
          {answers.map((answer) => (
            <Answer key={answer.id} answer={answer} />
          ))}
        </div>
      </div>
    )
  }

}

export default QuestionComponent;
