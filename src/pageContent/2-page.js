import React from 'react'
import stateComparison from './img/state-comparisons.png'
export const pageTwo = (
  <section>
    <h1>State management options</h1>
    <p>
      When using a component-based framework like React, we have four major
      options for state management, each with their own advantages and
      disadvantages.
    </p>
    <img src={stateComparison} alt="state comparisons" />
    <h3>1. Component State</h3>
    <p>
      State exists inside of a single component. In React, think of state
      updated with <code>setState</code>.
    </p>
    <h3>2. Relative State</h3>
    <p>
      State passed from a parent to a child. In React, usually this is usually
      done with <code>props</code>.
    </p>
    <h3>3. Provided State</h3>
    <p>
      State held in a root <b>provider</b>, and accessed by a <b>consumer</b>{' '}
      somewhere in the application, regardless of location. In React, think of
      the <code>context</code> API.
    </p>
    <h3>4. External State</h3>
    <p>
      State can be moved outside of your UI entirely. The library can then
      “connect” using the provider/consumer pattern to keep in sync.
    </p>
  </section>
)
