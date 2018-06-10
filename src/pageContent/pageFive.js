import React from 'react'
export const pageFive = (
  <section>
    <h1>Common concerns about Redux</h1>
    <h3>It's a huge dependency that's going to bloat my application!</h3>
    <p>
      Redux is about <b>100 lines of code</b>. No, seriously, it's{' '}
      <a href="https://gist.github.com/gaearon/ffd88b0e4f00b22c3159">tiny</a>.
      Even with sanity checks and developer warnings, it's less than 2 kB. By
      comparison, here are the sizes of some common libraries:
    </p>
    <ul>
      <li>React + ReactDOM: 109 kB</li>
      <li>Angular: 174 kB</li>
      <li>Moment: 227 kB</li>
      <li>Lodash: 69 kB</li>
      <li>Bootstrap: 48 kB</li>
    </ul>
    <h3>It only works with React</h3>
    <p>
      Redux has nothing to do with React. You can use it virtually anywhere
      you'd like. There are helper libraries for working with a number of
      frameworks, though - React included.
    </p>

    <h3>State is held in a "giant object".</h3>
    <p>
      State is actually an object referencing a few other objects. JavaScript
      objects are always passed and stored by reference. That reference is
      always stored as a number (pointer) internally. There is nothing "giant"
      about state at all.
    </p>

    <h3>It requires a ton of boilerplate to make work!</h3>
    <p>
      It's true, Redux requires some additional code - but perhaps not as much
      as you'd think. There are quite a few shorthand ways of working with Redux
      (see{' '}
      <a href="https://redux.js.org/recipes/reducing-boilerplate">
        Reducing Boilerplate
      </a>). The extra code also helps enforce clear, maintainable code.
    </p>
    <p>
      Consider the situation where we are using local component state and
      passing values around. For very small, simple applications that works
      great. At some point, however, an application becomes large enough that
      you'd actually end up writing <b>more</b> code to pass around local
      component props than you would have writing the "boilerplate" for Redux.
    </p>

    <h3>Redux doesn't scale! It hurts my application's performance!</h3>
    <p>
      The{' '}
      <a href="https://redux.js.org/faq/performance#performance">
        official documentation
      </a>{' '}
      has a great discussion on this topic. In short: Redux is heavily optimized
      to cut down on unnecessary re-renders. It is used by thousands of
      companies and developers, with millions of monthly installations from NPM.
    </p>
  </section>
)
