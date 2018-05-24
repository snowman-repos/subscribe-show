import React, { Component } from 'react';

import history from '../history';
import Icon from './Icon';

/**
 * The header component.
 */
export default class Header extends Component {
  /**
   * Set the initial state
   * @param {Object} props Properties passed down to this component
   */
  constructor(props) {
    super(props);
    this.state = { query: '' };
  }
  /**
   * Submit the search form
   * @param  {Object} event The event that fired the form submission
   * @return {[type]}       [description]
   */
  onSubmit(event) {
    event.preventDefault();
    history.push(`/search/${this.state.query}`, { query: this.state.query });
  }
  /**
   * Render the component
   * @return {Object} The rendered component
   */
  render() {
    return (
      <header className="o-container c-header">
        <form className="c-search-form" onSubmit={this.onSubmit.bind(this)}>
          <input
            className="c-search-form-input"
            type="text"
            placeholder="Search for things to watch"
            value={this.state.query}
            onChange={event => this.setState({ query: event.target.value })}
          />
          <button className="c-search-form-button">
            <Icon name='search' />
          </button>
        </form>
      </header>
    );
  }
}
