import React from 'react'
import EmbeddedGist from './EmbeddedGist'
export const pageNine = (
  <section>
    <h1>Basic React/Redux application structure</h1>
    <h3>Generating the store</h3>
    <p>Our application has two tasks:</p>
    <ol>
      <li>Store page content</li>
      <li>Navigate between pages</li>
    </ol>
    <p>
      To accomplish this, we will generate a Redux store that contains a{' '}
      <code>pageNumber</code> and an array containing all of our{' '}
      <code>content</code>. The entirety of our Redux code (25 lines, without
      comments) looks like this:
    </p>
    <EmbeddedGist gist="taherbert/769db16e3d0b73c2343f6bb690affaa7" />
    <p>
      There are a few things going on here, but it's actually pretty
      straightforward. In this snippet we create a function called a{' '}
      <b>reducer</b>. The reducer is just a function that specifies how the
      application's state changes in response to an <b>action</b>. In short, an
      action describes <em>what</em> changed, and a reducer describes{' '}
      <em>how</em> that change modifies the application's state.
    </p>
    <p>In our case, the reducer does two things:</p>
    <ul>
      <li>
        When an action occurs (more on this later), Redux sends that action to
        our reducer function.
      </li>
      <li>
        If that action (which is just a plain object!) has a type of{' '}
        <code>INCREMENT_PAGE</code>, for example, our reducer will use the logic
        inside of the corresponding case statement to update our application's
        state.
      </li>
      <li>
        If the action doesn't correspond to any case statement, the default case
        will be used.
      </li>
    </ul>
  </section>
)
