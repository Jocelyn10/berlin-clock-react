import React from 'react'
import PropTypes from 'prop-types';

/**
 * 
 * @param {*} time : current time
 * @returns time
 */
const Clock = ({ time }) => (
  <p>
    {time.getHours()} : {time.getMinutes()} : {time.getSeconds()}
  </p>
)

Clock.protoTypes = {
  time: PropTypes.object
};

export default Clock