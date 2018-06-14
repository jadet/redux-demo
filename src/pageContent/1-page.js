import React from 'react'
export const pageOne = (
  <section>
    <h1>State Management with Redux</h1>
    <p>
      I frequently encounter developers who are unsure about Redux and, more
      generally, state management. There are a number of state management tools
      out there, and it's important to note that while Redux is <em>an</em>{' '}
      option, it is not the <em>only</em> one. The goal of this demonstration is
      to show what Redux is, describe why it is used, and show how you might use
      it.
    </p>
    <h3>Before we dive in...what is application state?</h3>
    <p>
      To understand why Redux was created, we need to understand the problem it
      solves. Redux is a tool for managing <b>application state</b>.
    </p>
    <p>
      State is just data. Think of it as a collection of data points that
      describe what is happening on a web app, like a user's name or whether the
      page is still loading, and might change in response to user actions or API
      calls. An application will read the state to determine what sort of user
      interface it should show.
    </p>
  </section>
)
