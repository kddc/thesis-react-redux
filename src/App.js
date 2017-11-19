import React, { Component } from 'react'
import './styles/App.css'

import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import createStore from './store/store'

import AppLayout from './layouts/AppLayout';
import QuestionList from './components/QuestionList/QuestionList'
// import QuestionCreate from './components/QuestionCreate/QuestionCreate'
// import QuestionDetails from './components/QuestionDetails/QuestionDetails'
// <Route path="/ask" component={QuestionCreate} />
// <Route path="/question/:id" component={QuestionDetails} />

const store = createStore()

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="app">
            <AppLayout>
              <Route exact path="/" component={QuestionList} />
            </AppLayout>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }

}

export default App;
