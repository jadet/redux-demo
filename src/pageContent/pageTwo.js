import React from 'react'
import reactBasic from './img/react-basic.gif'
import reactSiblings from './img/react-siblings.gif'
import reactComplex from './img/react-complex.gif'
export const pageTwo = (
  <section>
    <h1>React uses unidirectional data flow</h1>
    <p>
      Out of the box, React has <em>unidirectional data flow</em>. This means
      that components each have their own state, which they send downward to
      child components as props.
    </p>
    <img src={reactBasic} alt="basic flow" />

    <h3>
      But what about components that don't share a parent-child relationship?
    </h3>
    <p>
      No problem. React lets you handle this by{' '}
      <a href="https://reactjs.org/docs/lifting-state-up.html">
        lifting state up
      </a>. This means that we take a single component's state, elevate it to
      the closest shared ancestor, and then pass the changed data downward as a
      prop to a sibling.
    </p>
    <p>
      In short, a child component can trigger a state change in their parent
      components, which will update all other components in the tree.
    </p>
    <img src={reactSiblings} alt="sibling flow" />
    <h3>This can get really complex, really quickly</h3>
    <p>
      As your application grows, you will likely end up with something that
      looks a bit like this:
    </p>
    <img src={reactComplex} alt="sibling flow" />
    <p>That's a lot to keep track of and presents a few problems:</p>
    <ul>
      <li>Repeated code for passing props around</li>
      <li>Business logic is spread out across components</li>
      <li>Changes to the UI require changes to business logic</li>
      <li>Can be tough to trace state changes when debugging</li>
    </ul>
  </section>
)
