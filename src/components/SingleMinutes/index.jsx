import React from 'react'
import styled from 'styled-components'

import Row from './Row'
import { LargeLed } from './Leds'

const getLastDigit = number => Number.parseInt(number.toString().slice(-1), 10)

const between = max => number => min => number >= min && number <= max

const getLedsFromTime = time => {
  const minute = getLastDigit(time.getMinutes())

  const betweenFourAnd = between(4)(minute)

  return [
    betweenFourAnd(1),
    betweenFourAnd(2),
    betweenFourAnd(3),
    betweenFourAnd(4),
  ]
}

const Led = LargeLed.extend`
  background-color: ${({ active }) => (active ? 'red' : 'black')};
`

const SingleMinute = ({ time }) => (
  <Row>{getLedsFromTime(time).map(active => <Led active={active} />)}</Row>
)

export default SingleMinute
