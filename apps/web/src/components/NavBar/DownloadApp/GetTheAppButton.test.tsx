import { render, screen } from 'test-utils/render'

beforeEach(() => {
  window.matchMedia = jest.fn().mockImplementation(() => ({
    addListener: jest.fn(),
    removeListener: jest.fn(),
  }))
})

import { GetTheAppButton } from 'components/NavBar/DownloadApp/GetTheAppButton'

describe('GetTheAppButton', () => {
  it('displays a button with call to action text and icons', () => {
    const { container } = render(<GetTheAppButton />)

    expect(container).toMatchSnapshot()
    expect(screen.getByText('Get the app')).toBeVisible()
  })
})
