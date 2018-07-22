// Dependencies
import React from 'react'
import PropTypes from 'prop-types'

// App components
import Icon from '../../Icon/Icon'

/**
 * If the item is not in the search results then it's in the watchlist so it
 * can be removed. This component renders a button for calling the removeItem
 * function.
 */
const RemoveFromWatchlist = ({ isInWatchList, removeItem, type }) => {
  // Only search results have the isInWatchList property. If the item has
  // that property then we can assume that it's not in the watchlist and so
  // we don't need to render the button.
  if (isInWatchList === 'undefined' || isInWatchList === false) {
    return ''
  }

  // Individual TV Show episodes can't be removed from the watch list.
  if (type === 'Episode') {
    return ''
  }

  return (
    <button className="o-button c-remove-from-watchlist-button u-margin-right--small" onClick={removeItem}>
      <Icon name="trash" className="u-margin-right--small" />
      Remove from Watchlist
    </button>
  )
}

export default RemoveFromWatchlist

/**
 * Define the types for each property.
 * @type {Object}
 */
RemoveFromWatchlist.propTypes = {
  isInWatchList: PropTypes.bool,
  removeItem: PropTypes.func,
  type: PropTypes.string,
}

/**
 * Define the default values for each property.
 * @type {Object}
 */
RemoveFromWatchlist.defaultProps = {
  isInWatchList: false,
  removeItem: () => {},
  type: '',
}