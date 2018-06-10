import React from 'react'

export const pageFour = (
  <section>
    <h1>Redux offers a tradeoff</h1>
    <p>In solving these problems, Redux presents a tradeoff. It asks you to:</p>
    <ul>
      <li>Describe application state as plain objects and arrays</li>
      <li>Describe changes in the application as plain objects</li>
      <li>Describe the logic for handling changes as pure functions</li>
    </ul>

    <p>
      These are pretty strong constraints, and you should have a good reason for
      adopting them. In fact, Redux's creator Dan Abramov has a very good
      article discussing this:{' '}
      <a href="https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367">
        You Might Not Need Redux
      </a>.
    </p>

    <p>
      Redux is not the only tool that solves this problem, nor is it
      particularly innovative conceptually - this pattern has existed for a long
      time. It's just one of the tools available to you as a developer, and as
      with all tools, it's important to understand when to use it.
    </p>
  </section>
)
