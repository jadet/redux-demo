import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

// Additions for redux
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { content } from './pageContent/content.js'

const initialState = {
  pageNumber: 1,
  content: content[0]
}

function appStore(state = initialState, action) {
  switch (action.type) {
    // Increment the page number, but not higher than the total number of pages
    case 'INCREMENT_PAGE':
      const nextPage = Math.min(state.pageNumber + 1, content.length)
      return {
        pageNumber: nextPage,
        content: content[nextPage - 1]
      }

    // Decrement the page number, but not below the first page
    case 'DECREMENT_PAGE':
      const prevPage = Math.max(state.pageNumber - 1, 1)
      return {
        pageNumber: prevPage,
        content: content[prevPage - 1]
      }

    default:
      return state
  }
}

const store = createStore(appStore)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
