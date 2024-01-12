import React from 'react'
import '@testing-library/jest-dom'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Blog from './Blog'

test('renders content', () => {
  const blog = {
    title: 'Component testing is done with react-testing-library',
    author: 'me',
    url: 'www.sheep.ue'

  }

  render(<Blog blog={blog} />)

  const element = screen.getByText('Component testing is done with react-testing-library')
  expect(element).toBeDefined()
})

test('displays blogs title and author, but not url or number of likes', () => {
  const blog = {
    title: 'Component testing is done with react-testing-library',
    author: 'me',
    url: 'www.sheep.ue'
  }

  render(<Blog blog={blog} />)

  const title = screen.getByText('Component testing is done with react-testing-library')
  expect(title).toBeDefined()
  const author = screen.getByText('me')
  expect(author).toBeDefined()
  const url = screen.queryByText('www.sheep.ue')
  expect(url).toBeNull()
  const likes = screen.queryByText('likes')
  expect(likes).toBeNull()
})


test('clicking the button calls event handler once', async () => {
  const blog = {
    title: 'Component testing is done with react-testing-library',
    author: 'me',
    url: 'www.sheep.ue',
    likes: 7,
  }

  const mockHandler = jest.fn()

  render(
    <Blog blog={blog} toggleDetails={mockHandler} />
  )

  const button = screen.getByText('Show Details')
  await userEvent.click(button)

  await waitFor(() => {
    const url = screen.getByText('www.sheep.ue')
    expect(url).toBeDefined()
    const likes = screen.getByText('likes: 7')
    expect(likes).toBeDefined()
  })
})
