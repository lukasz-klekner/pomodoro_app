import { cleanup, fireEvent, render, screen } from '@testing-library/react'

import EditableTimebox from '../../components/EditableTimebox'

describe('<EditableTimebox />', () => {
  afterEach(cleanup)

  it('shows edit button', () => {
    render(<EditableTimebox />)

    expect(() => {
      screen.getByText('Edytuj')
    }).not.toThrow()
  })

  it('allows editing the timebox', () => {
    render(<EditableTimebox />)

    fireEvent.click(screen.getByText('Edytuj'))

    const titleInput = screen.getByLabelText(/Co robisz?/)
    fireEvent.change(titleInput, { target: { value: 'Nic' } })

    fireEvent.click(screen.getByText(/zmiany/))

    expect(titleInput.value).toBe('Nic')

    expect(() => {
      screen.getByText('Edytuj')
    }).not.toThrow()
  })
})
