import React from 'react'
export const pageSix = (
  <section>
    <h1>When should you consider using Redux?</h1>
    <p>
      In my experience, the point where using local component state becomes
      painful usually happens pretty quickly. Here are some criteria that
      probably indicate you should at least consider using Redux:
    </p>
    <ul>
      <li>The UI can vary significantly based on application state</li>
      <li>State does not always flow in a linear, unidirectional way</li>
      <li>Common user tasks require multiple state updates</li>
      <li>Many unrelated components update state in the same way</li>
      <li>The state tree is not simple</li>
      <li>State is updated in many different ways</li>
      <li>You need to be able to undo previous user actions</li>
    </ul>
  </section>
)
