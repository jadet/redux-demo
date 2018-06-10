import React from 'react'

export const pageOne = (
  <section>
    <h1>State Management with Redux</h1>
    <p>
      I frequently encounter developers who are unsure about Redux. Folks are
      intimidated by what is often believed to be a complex, confusing, behemoth
      of a framework. And, to be frank, people often utilize Redux before they
      need it. The goal of this demonstration is to show what Redux is, describe
      why it is used, and show how you might use it.
    </p>
    <h3>Before we dive in...</h3>
    <p>
      Before diving into Redux, we need to understand the problem it solves.
      Redux is a tool for managing <b>application state</b>.
    </p>
    <p>
      State is just data. Think of it as a collection of data points that
      describe what is happening on a web app, like a user's name or whether the
      page is still loading. The state for an application might change in
      response to user actions or API calls, for example. An application will
      read the state to determine what sort of user interface it should show.
    </p>
  </section>
)
