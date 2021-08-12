import { render, screen } from '@testing-library/react'
import { UnderConstruction } from 'components/UnderConstruction'

describe('<UnderConstruction />', () => {
  it('renders', () => {
    // Arrange

    // Act
    const { asFragment } = render(<UnderConstruction />)

    // Assert
    expect(asFragment()).toMatchSnapshot()
  })
})
