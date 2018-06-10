import React, { Component } from 'react'
import { connect } from 'react-redux'

class App extends Component {
  render() {
    const { pageNumber, content, incrementPage, decrementPage } = this.props
    return (
      <div className="App">
        <nav>
          <button onClick={decrementPage} className="Back">
            Back
          </button>

          <div className="Page">pg. {pageNumber}</div>
          <button onClick={incrementPage} className="Next">
            Next
          </button>
        </nav>

        <div className="Content">{content}</div>
      </div>
    )
  }
}

function incrementPage() {
  return { type: 'INCREMENT_PAGE' }
}

function decrementPage() {
  return { type: 'DECREMENT_PAGE' }
}

// Translate the Redux's store into a component's propss.
const mapStateToProps = state => {
  return {
    pageNumber: state.pageNumber,
    content: state.content
  }
}

const mapDispatchToProps = {
  incrementPage: incrementPage,
  decrementPage: decrementPage
}

// We don't need this for simple cases
// const mapDispatchToProps = (dispatch) => {
//   return {
//     incrementPage: () => {
//       dispatch(incrementPage())
//     }
//   }
// }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
