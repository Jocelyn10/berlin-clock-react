import React from 'react'
import styled from 'styled-components'

import Row from '../Row'
import { LargeLed } from '../Leds'

const getLastDigit = number => Number.parseInt(number.toString().slice(-1), 10)

const between = max => number => min => number >= min && number <= max

const getLedsFromTime = time => {
  const Hour = getLastDigit(time.getHours())

  const betweenFourAnd = between(4)(Hour)

  return [
    betweenFourAnd(1),
    betweenFourAnd(2),
    betweenFourAnd(3),
    betweenFourAnd(4),
  ]
}

const Led = styled(LargeLed)`
  background-color: ${({ active }) => (active ? 'red' : 'black')};
`

const SingleHours = ({ time }) => (
  <Row>{getLedsFromTime(time).map((active, index) => <Led key={index} active={active} />)}</Row>
)

export default SingleHours
