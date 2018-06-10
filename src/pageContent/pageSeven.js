import React from 'react'
export const pageSeven = (
  <section>
    <h1>This overview was built using Redux</h1>
    <p>
      To make some of these points more concrete, I built this demonstration
      using Redux. I didn't use all of its features and the code probably isn't
      structured how you would want it to be in a real, production-level
      application. Here are the libraries we're using:
    </p>
    <ul>
      <li>
        Bootstrap with{' '}
        <a href="https://github.com/facebook/create-react-app">
          create-react-app
        </a>
      </li>
      <li>
        <a href="https://redux.js.org/">redux</a>
      </li>
      <li>
        <a href="https://redux.js.org/basics/usage-with-react">react-redux</a>
      </li>
    </ul>
    <p>
      It bears repeating that Redux can be used on its own separate from - or
      alongside - pretty much any framework in any application. You can use it
      with plain vanilla javascript, Angular, React, Vue, etc. In this example
      we are using the official <em>react-redux</em> bindings to optimize
      working with React, but again, that is totally optional.
    </p>
  </section>
)
