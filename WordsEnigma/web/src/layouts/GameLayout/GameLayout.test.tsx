import { render } from '@redwoodjs/testing/web'

import GameLayout from './GameLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('GameLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GameLayout />)
    }).not.toThrow()
  })
})
