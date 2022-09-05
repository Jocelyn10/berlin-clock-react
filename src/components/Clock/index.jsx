import React from 'react'

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

export default Clock