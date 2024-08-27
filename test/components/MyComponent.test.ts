// MyComponent.test.js
import { render } from '@testing-library/vue'
import { test } from 'vitest'
import HelloWorld from '../../src/components/HelloWorld.vue'

test('It should display the supplied message', () => {
  const { getByText, } = render(HelloWorld, {
    props: {
      msg: "Hello"
    }
  })

  getByText("Hello")
})