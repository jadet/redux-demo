import React from 'react'
import reduxSimple from './img/redux-simple.gif'
export const pageFour = (
  <section>
    <h1>How can Redux help?</h1>
    <p>
      Redux decouples describing "what happened" from "how things changed". It
      enforces a separation of concerns within your your application:
    </p>
    <ul>
      <li>User Interface</li>
      <li>Logic</li>
      <li>Application State</li>
    </ul>

    <p>
      Without diving into the nitty-gritty just yet, it might make your
      application function something like this:
    </p>

    <img src={reduxSimple} alt="redux flow" />

    <p>
      In the above example, a component initiates a change. That change is sent
      off to a central logic layer that performs any modifications to the data,
      then updates our application state. Other sibling components can
      "subscribe" to changes to data points they are interested in and update
      when changes occur.
    </p>
  </section>
)
