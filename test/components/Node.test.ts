// MyComponent.test.js
import { render } from '@testing-library/vue'
import { test } from 'vitest'
import Node from '../../src/components/Node.vue'

test('It should display the supplied data', () => {

  const data = {
    activity: "A",
    float: 5,
    es: 0,
    ls: 1,
    ef: 3,
    lf: 4
  }

  const { getByText, } = render(Node, {
    props: {
      data
    }
  })

  for (const key in data) {
    if (typeof data[key] === "number") {
      getByText(data[key] + "")
    } else {
      getByText(data[key])
    }
  }
})