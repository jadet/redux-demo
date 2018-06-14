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
      <li>The UI can vary based on application state</li>
      <li>State does not always flow in a linear, unidirectional way</li>
      <li>Common user tasks require multiple state updates</li>
      <li>Many unrelated components rely on the same piece of information</li>
      <li>The state tree is not simple</li>
      <li>State is updated in many different ways</li>
      <li>You need to be able to undo previous user actions</li>
    </ul>

    <h3>Not every component needs to interact with Redux!</h3>
    <p>
      A common misconception with Redux is that <b>every</b> component in your
      application needs to connect to and utilize Redux. It bears repeating that{' '}
      <b>local state is fine</b>! As a general rule:
      <blockquote>
        Only use Redux's store if more than one component utilizes a piece of
        data.
      </blockquote>
      Blending the different forms of state management is not only totally fine,
      in some cases its a great solution. With interactive forms, for example,
      we can treat the parent form component as the arbiter of the state of the
      form and only have it communicate with Redux. Component state updated with{' '}
      <code>setState()</code> will again suffice
    </p>
  </section>
)
