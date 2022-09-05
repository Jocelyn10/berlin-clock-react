import React from 'react'
import styled from 'styled-components'

import Row from '../Row'
import { LargeLed } from '../Leds'

const getLedsFromTime = time => {
  const leds = parseInt(time.getHours() / 5)
  return Array(4)
    .fill(false)
    .map((_, index) => index < leds)
}

const isThird = index => index !== 0 && ((index + 1 ) % 3) === 0

const Led = styled(LargeLed)`
  background-color: ${({ active }) => (active ? 'red' : 'black')};
`

/**
 * 
 * @param {*} time : current time
 * @returns Five Hour Blocks
 */
const FiveHour = ({ time }) => (
  <Row>
    {getLedsFromTime(time).map((active, index) => (
      <Led key={index} active={active} isThird={isThird(index)} />
    ))}
  </Row>
)

export default FiveHour
