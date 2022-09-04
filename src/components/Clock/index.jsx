import React from 'react'

const Clock = ({ time }) => (
  <p>
    {time.getHours()} : {time.getMinutes()} : {time.getSeconds()}
  </p>
)

export default Clock