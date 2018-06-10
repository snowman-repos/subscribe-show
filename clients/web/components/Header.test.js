import React from 'react'
import { shallow } from 'enzyme'
import Header from './Header'

const historyMock = { push: jest.fn() }

describe('Header Component', () => {
  it('should render', () => {
    expect(shallow(<Header />).find('.c-header').exists()).toBe(true)
  })
  it('should have a search form', () => {
    expect(shallow(<Header />).find('.c-search-form').exists()).toBe(true)
  })
  it('should have a search form input', () => {
    expect(shallow(<Header />).find('.c-search-form-input').exists()).toBe(true)
  })
  it('should have a search form button', () => {
    expect(shallow(<Header />).find('.c-search-form-button').exists()).toBe(true)
  })
  it('should update the component state when the input value is changed', () => {
    const testValue = 'test'
    const wrapper = shallow(<Header />)
    wrapper.find('.c-search-form-input').simulate('change', { target: { value: testValue } })
    expect(wrapper.state('query')).toBe(testValue)
  })
  it('should navigate to search results when the search form is submitted', () => {
    const mockQuery = 'test'
    const mockedEvent = { target: {}, preventDefault: () => {} }
    const wrapper = shallow(<Header history={historyMock} query={mockQuery} />)
    wrapper.find('.c-search-form').simulate('submit', mockedEvent)
    expect(historyMock.push.mock.calls[0]).toEqual([`/search/${mockQuery}`, { query: mockQuery }])
  })
})