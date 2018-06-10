import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

// Additions for redux
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { content } from './pageContent/content.js'

// Our initial state describes the starting point for our application.
// We want the user to start on the first page and view the content
// that corresponds to the first entry in our content array.
const initialState = {
  pageNumber: 1,
  content: content[0],
}

// This function is called a 'reducer'. It takes an 'action', which describes what changed,
// and updates the store accordingly. In our case, there are two actions that control
// which page we are currently viewing and fetching the content for that page.
function appStore(state = initialState, action) {
  switch (action.type) {
    // Increment the page number, but not higher than the total number of pages
    case 'INCREMENT_PAGE':
      const nextPage = Math.min(state.pageNumber + 1, content.length)
      return {
        pageNumber: nextPage,
        content: content[nextPage - 1],
      }

    // Decrement the page number, but not below the first page
    case 'DECREMENT_PAGE':
      const prevPage = Math.max(state.pageNumber - 1, 1)
      return {
        pageNumber: prevPage,
        content: content[prevPage - 1],
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
