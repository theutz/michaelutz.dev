import { render, screen } from '@testing-library/react'
import Portfolio from 'pages/portfolio'

describe('<Portfolio />', () => {
  it('renders', () => {
    // Arrange

    // Act
    const { asFragment } = render(<Portfolio />)

    // Assert
    expect(asFragment()).toMatchSnapshot()
  })
})
