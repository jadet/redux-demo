import React from 'react'
import EmbeddedGist from './EmbeddedGist'
export const pageTen = (
  <section>
    <h1>Usage with React</h1>
    <EmbeddedGist gist="taherbert/83ce972b2dc1186b98312b81f0b7500a" />
    <p>
      In the last section we talked about reducers that receive actions, but we
      haven't looked at an action yet. Below is our simple React application -
      the React piece (lines 1 - 24) is pretty straightforward.
    </p>
    <p>
      Below the App are two simple functions, <b>incrementPage</b> and{' '}
      <b>decrementPage</b>. These are called <em>action generators</em>, and
      they do exactly that - generate actions. They are simple functions that
      return a plain object with a type property and, optionally, some
      associated data. In our simple case we don't need any extra data passed
      along, so the returned objects only have a type. Typically, these
      functions would be in their own files. For purposes of this demonstration
      we put them inline alongside our App component.
    </p>
    <p>
      There are two special functions here, <b>mapStateToProps</b> and{' '}
      <b>mapDispatchToProps</b>. They make using Redux within React quite
      simple.
    </p>
    <h3>mapStateToProps</h3>
    <p>
      This function allows the component to 'subscribe' to the parts of the
      global application state it cares about. It binds the 'pageNumber' prop
      inside of our App component to Redux's 'state.pageNumber'.
    </p>
    <h3>mapDispatchToProps</h3>
    <p>
      This function maps our action generators - incrementPage() and
      decrementPage() - to props inside of our App component. This way, App's
      props.incrementPage calls our incrementPage function.
    </p>
    <h3>connect()</h3>
    <p>
      The connect() function is exposed by the react-redux library. It wires up
      mapStateToProps, mapDispatchToProps, and our component so that everything
      'just works'.
    </p>
  </section>
)
