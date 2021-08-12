import { render, screen } from '@testing-library/react'
import Blog from 'pages/blog'

describe('<Blog />', () => {
  it('renders', () => {
    // Arrange

    // Act
    const { asFragment } = render(<Blog />)

    // Assert
    expect(asFragment()).toMatchSnapshot()
  })
})
