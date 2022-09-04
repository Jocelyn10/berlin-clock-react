import React from 'react'
import styled from 'styled-components'

import Row from './Row'
import { SmallLed } from './Leds'

const getLedsFromTime = time => {
  const leds = Math.min(time.getMinutes() / 5)
  return Array(11)
    .fill(false)
    .map((_, index) => index < leds)
}

const isThird = index => index !== 0 && index % 3 === 0

const Led = SmallLed.extend`
  background-color: ${({ active, isThird }) =>
    active ? (isThird ? 'red' : 'yellow') : 'black'};
`

const FiveMinute = ({ time }) => (
  <Row>
    {getLedsFromTime(time).map((active, index) => (
      <Led active={active} isThird={isThird(index)} />
    ))}
  </Row>
)

export default FiveMinute
